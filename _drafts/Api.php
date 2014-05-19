<?php

namespace Transfluent {

    /**
     * Transfluent Backend API client
     * Version 1.12
     * @see https://github.com/Transfluent/Transfluent-Backend-API-client
     */
    class BackendClient {

        const HTTP_GET = 'GET';
        const HTTP_POST = 'POST';

        /**
         *
         * @var string 
         */
        static $API_URL;
        
        /**
         *
         * @var string 
         */
        private $email;
        
        /**
         *
         * @var string 
         */
        private $password;
        
        /**
         *
         * @var string 
         */
        private $token = null;

        /**
         * 
         * @param type $email
         * @param type $password
         * @param type $in_sandbox_mode
         * @throws \Exception
         */
        public function __construct($email, $password, $in_sandbox_mode = false) {
            $this->SystemCheck();
            $this->email = $email;
            $this->password = $password;
            if ($in_sandbox_mode) {
                self::$API_URL = 'https://sandbox.transfluent.com/v2/';
                throw new \Exception('Unfortunately sandbox for API is not public, yet. Sorry!'); // @todo: Implement when sandbox is public
            }
            else {
                self::$API_URL = 'https://transfluent.com/v2/';
            }
        }

        /**
         * 
         * @param string $method_name
         * @return string
         */
        private function UriFromMethod($method_name) {
            return strtolower(preg_replace("/(?!^)([A-Z]{1}[a-z0-9]{1,})/", '/$1', $method_name)) . '/';
        }

        /**
         * 
         * @return mixed|bool
         * @throws \Exception
         */
        private function SystemCheck() {
            if (function_exists('curl_init')) {
                return;
            }
            error_log('Transfluent\'s ' . __CLASS__ . ' is missing cURL extension for PHP.');
            throw new \Exception('cURL extension for PHP is not available!');
        }

        /**
         * 
         * @param string $method_name
         * @param string $method
         * @param array $payload
         * @return mixed
         */
        private function CallApi($method_name, $method = self::HTTP_GET, $payload = array()) {
            if (is_null($this->token)) {
                $this->Authenticate();
            }
            $payload['token'] = $this->token;
            return $this->Request($method_name, $method, $payload);
        }

        /**
         * 
         * @param string $token
         */
        public function SetToken($token) {
            $this->token = $token;
        }

        /**
         * 
         * @return null
         * @throws \Exception
         */
        private function Authenticate() {
            $response = $this->Request(__FUNCTION__, 'POST', array('email' => $this->email, 'password' => $this->password));
            if (!$response->token) {
                throw new \Exception('Could not authenticate with API!');
            }
            $this->token = $response->token;
        }

        /**
         * 
         * @param string $method_name
         * @param string $method
         * @param array $payload
         * @return mixed
         * @throws \Exception
         */
        private function Request($method_name, $method = self::HTTP_GET, $payload = array()) {
            $uri = $this->UriFromMethod($method_name);

            $curl_handle = curl_init(self::$API_URL . $uri);
            if (!$curl_handle) {
                throw new \Exception('Could not initialize cURL!');
            }
            switch (strtoupper($method)) {
                case self::HTTP_GET:
                    $url = self::$API_URL . $uri . '?';
                    $url_parameters = array();
                    foreach ($payload AS $key => $value) {
                        $url_parameters[] = $key . '=' . urlencode($value);
                    }
                    $url .= implode("&", $url_parameters);
                    curl_setopt($curl_handle, CURLOPT_URL, $url);
                    break;
                case self::HTTP_POST:
                    curl_setopt($curl_handle, CURLOPT_POST, TRUE);
                    if (!empty($payload)) {
                        curl_setopt($curl_handle, CURLOPT_POSTFIELDS, $payload);
                    }
                    break;
                default:
                    throw new \Exception('Unsupported request method.');
            }
            curl_setopt($curl_handle, CURLOPT_FOLLOWLOCATION, 1);
            curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, 1);
            $response = curl_exec($curl_handle);
            if (!$response) {
                throw new \Exception('Failed to connect with Transfluent\'s API. cURL error: ' . curl_error($curl_handle));
            }
            if ($method == 'FileRead') {
                // Note! /file/read/ returns file data
                return $response;
            }
            $response_obj = json_decode($response, true);
            if (!$response_obj) {
                throw new \Exception('Could not parse API\'s response: ' . $response);
            }
            if ($response_obj['status'] == 'ERROR') {
                throw new \Exception('API returned an error #' . $response_obj['error']['type'] . ': ' . $response_obj['error']['message'] . '. Error description: ' . $response_obj['response']);
            }
            if ($response_obj['status'] != 'OK') {
                throw new \Exception('API returned unexpected response: ' . $response);
            }
            return $response_obj['response'];
        }

        /**
         * /languages/ can be called without token & any authentication, we can call Request directly
         *
         * @throws \Exception
         * @return mixed
         */
        public function Languages() {
            return $this->Request(__FUNCTION__);
        }

        /**
         * /file/status/ requires token, use CallApi-method which automatically handles token&authentication issues
         *
         * @throws \Exception
         * @param $identifier
         * @param $language
         * @return mixed
         */
        public function FileStatus($identifier, $language) {
            return $this->CallApi(__FUNCTION__, self::HTTP_GET, array('identifier' => $identifier, 'language' => $language));
        }

        /**
         * 
         * @param string $identifier
         * @param string $language
         * @return mixed
         */
        public function FileRead($identifier, $language) {
            return $this->CallApi(__FUNCTION__, self::HTTP_GET, array('identifier' => $identifier, 'language' => $language));
        }

        /**
         * Return true if file is completely translated, otherwise returns translation completion percentage
         *
         * @param string $identifier
         * @param string $language
         * @return bool|string
         */
        public function IsFileComplete($identifier, $language) {
            $response = $this->FileStatus($identifier, $language);
            if ($response['progress'] == '100%') {
                return true;
            }
            return $response['progress'];
        }

        /**
         * 
         * @param string $identifier
         * @param string $language
         * @param string $format
         * @param string $file_name
         * @param string $type
         * @return array
         * @throws \Exception
         */
        private function FileSave($identifier, $language, $format, $file_name, $type) {
            if (!is_file($file_name)) {
                throw new \Exception('File not found!');
            }
            $file_content = base64_encode(file_get_contents($file_name));

            $response = $this->CallApi(__FUNCTION__, 'POST', array('identifier' => $identifier, 'language' => $language, 'format' => $format, 'content' => $file_content, 'type' => $type));
            if (!$response->word_count) {
                throw new \Exception('Response does not comply expected form!');
            }
            return $response;
        }

        /**
         * 
         * @param string $identifier
         * @param string $language
         * @param string $file
         * @return mixed
         */
        public function SaveMooToolsLocaleFile($identifier, $language, $file) {
            return $this->FileSave($identifier, $language, 'UTF-8', $file, 'MooTools-locale');
        }

        /**
         * 
         * @param string $identifier
         * @param string $language
         * @param string $file
         * @return mixed
         */
        public function SaveIosStringsFile($identifier, $language, $file) {
            return $this->FileSave($identifier, $language, 'UTF-16', $file, 'iOS-strings');
        }

        /**
         * 
         * @param string $identifier
         * @param string $language
         * @param string $file
         * @return mixed
         */
        public function SaveAndroidStringsFile($identifier, $language, $file) {
            return $this->FileSave($identifier, $language, 'UTF-8', $file, 'Android-strings');
        }

        /**
         * 
         * @param string $identifier
         * @param string $language
         * @param string $file
         * @return mixed
         */
        public function SaveAndroidArraysFile($identifier, $language, $file) {
            return $this->FileSave($identifier, $language, 'UTF-8', $file, 'Android-arrays');
        }

        /**
         * @param $identifier - File identifier (e.g. /foobar/foo.xml)
         * @param $language - Language id, numeric, e.g. "Finnish = 11"
         * @param array $target_languages - Array of language ids to translate file into
         * @param string $comment - Context comment or further information to the translator
         * @param string $callback_url - A callback URL which will receive a GET request when translation is completed
         * @return array
         * @throws \Exception
         */
        public function FileTranslate($identifier, $language, array $target_languages, $comment = '', $callback_url = '') {
            if (!is_array($target_languages)) {
                throw new \Exception('Target languages MUST be provided as an array!');
            }
            if (!is_numeric($language)) {
                throw new \Exception('Language id MUST be numeric');
            }
            $response = $this->CallApi(__FUNCTION__, 'POST', array('identifier' => $identifier, 'language' => $language, 'target_languages' => json_encode($target_languages), 'comment' => $comment, 'callback_url' => $callback_url));
            if (!$response->word_count) {
                throw new \Exception('Response does not comply expected form!');
            }
            return $response;
        }

    }

}