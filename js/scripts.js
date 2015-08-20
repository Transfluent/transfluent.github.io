!function(e,t){"function"==typeof define&&define.amd?define([],function(){return t()}):"object"==typeof exports?module.exports=t():t()}(this,function(){function e(e){"use strict";var t=e.storageKey(),n=e.storage(),a=function(){var a=e.preferredLanguage();angular.isString(a)?e.use(a):n.put(t,e.use())};a.displayName="fallbackFromIncorrectStorageValue",n?n.get(t)?e.use(n.get(t))["catch"](a):a():angular.isString(e.preferredLanguage())&&e.use(e.preferredLanguage())}function t(){"use strict";var e,t,n=null,a=!1,r=!1;t={sanitize:function(e,t){return"text"===t&&(e=o(e)),e},escape:function(e,t){return"text"===t&&(e=s(e)),e},sanitizeParameters:function(e,t){return"params"===t&&(e=i(e,o)),e},escapeParameters:function(e,t){return"params"===t&&(e=i(e,s)),e}},t.escaped=t.escapeParameters,this.addStrategy=function(e,n){return t[e]=n,this},this.removeStrategy=function(e){return delete t[e],this},this.useStrategy=function(e){return a=!0,n=e,this},this.$get=["$injector","$log",function(s,o){var i=function(e,n,a){return angular.forEach(a,function(a){if(angular.isFunction(a))e=a(e,n);else{if(!angular.isFunction(t[a]))throw new Error("pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: '"+a+"'");e=t[a](e,n)}}),e},l=function(){a||r||(o.warn("pascalprecht.translate.$translateSanitization: No sanitization strategy has been configured. This can have serious security implications. See http://angular-translate.github.io/docs/#/guide/19_security for details."),r=!0)};return s.has("$sanitize")&&(e=s.get("$sanitize")),{useStrategy:function(e){return function(t){e.useStrategy(t)}}(this),sanitize:function(e,t,a){if(n||l(),arguments.length<3&&(a=n),!a)return e;var r=angular.isArray(a)?a:[a];return i(e,t,r)}}}];var s=function(e){var t=angular.element("<div></div>");return t.text(e),t.html()},o=function(t){if(!e)throw new Error("pascalprecht.translate.$translateSanitization: Error cannot find $sanitize service. Either include the ngSanitize module (https://docs.angularjs.org/api/ngSanitize) or use a sanitization strategy which does not depend on $sanitize, such as 'escape'.");return e(t)},i=function(e,t){if(angular.isObject(e)){var n=angular.isArray(e)?[]:{};return angular.forEach(e,function(e,a){n[a]=i(e,t)}),n}return angular.isNumber(e)?e:t(e)}}function n(e,t,n,a){"use strict";var r,s,o,i,l,u,c,g,p,h,f,d,m,v,y,b={},$=[],w=e,T=[],x="translate-cloak",P=!1,S=!1,k=".",L=0,j=!0,A="default",C={"default":function(e){return(e||"").split("-").join("_")},java:function(e){var t=(e||"").split("-").join("_"),n=t.split("_");return n.length>1?n[0].toLowerCase()+"_"+n[1].toUpperCase():t},bcp47:function(e){var t=(e||"").split("_").join("-"),n=t.split("-");return n.length>1?n[0].toLowerCase()+"-"+n[1].toUpperCase():t}},I="2.7.2",E=function(){if(angular.isFunction(a.getLocale))return a.getLocale();var e,n,r=t.$get().navigator,s=["language","browserLanguage","systemLanguage","userLanguage"];if(angular.isArray(r.languages))for(e=0;e<r.languages.length;e++)if(n=r.languages[e],n&&n.length)return n;for(e=0;e<s.length;e++)if(n=r[s[e]],n&&n.length)return n;return null};E.displayName="angular-translate/service: getFirstBrowserLanguage";var N=function(){var e=E()||"";return C[A]&&(e=C[A](e)),e};N.displayName="angular-translate/service: getLocale";var O=function(e,t){for(var n=0,a=e.length;a>n;n++)if(e[n]===t)return n;return-1},F=function(){return this.toString().replace(/^\s+|\s+$/g,"")},R=function(e){for(var t=[],n=angular.lowercase(e),a=0,r=$.length;r>a;a++)t.push(angular.lowercase($[a]));if(O(t,n)>-1)return e;if(s){var o;for(var i in s){var l=!1,u=Object.prototype.hasOwnProperty.call(s,i)&&angular.lowercase(i)===angular.lowercase(e);if("*"===i.slice(-1)&&(l=i.slice(0,-1)===e.slice(0,i.length-1)),(u||l)&&(o=s[i],O(t,angular.lowercase(o))>-1))return o}}if(e){var c=e.split("_");if(c.length>1&&O(t,angular.lowercase(c[0]))>-1)return c[0]}return e},_=function(e,t){if(!e&&!t)return b;if(e&&!t){if(angular.isString(e))return b[e]}else angular.isObject(b[e])||(b[e]={}),angular.extend(b[e],H(t));return this};this.translations=_,this.cloakClassName=function(e){return e?(x=e,this):x};var H=function(e,t,n,a){var r,s,o,i;t||(t=[]),n||(n={});for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i=e[r],angular.isObject(i)?H(i,t.concat(r),n,r):(s=t.length?""+t.join(k)+k+r:r,t.length&&r===a&&(o=""+t.join(k),n[o]="@:"+s),n[s]=i));return n};H.displayName="flatObject",this.addInterpolation=function(e){return T.push(e),this},this.useMessageFormatInterpolation=function(){return this.useInterpolation("$translateMessageFormatInterpolation")},this.useInterpolation=function(e){return h=e,this},this.useSanitizeValueStrategy=function(e){return n.useStrategy(e),this},this.preferredLanguage=function(e){return z(e),this};var z=function(e){return e&&(r=e),r};this.translationNotFoundIndicator=function(e){return this.translationNotFoundIndicatorLeft(e),this.translationNotFoundIndicatorRight(e),this},this.translationNotFoundIndicatorLeft=function(e){return e?(m=e,this):m},this.translationNotFoundIndicatorRight=function(e){return e?(v=e,this):v},this.fallbackLanguage=function(e){return q(e),this};var q=function(e){return e?(angular.isString(e)?(i=!0,o=[e]):angular.isArray(e)&&(i=!1,o=e),angular.isString(r)&&O(o,r)<0&&o.push(r),this):i?o[0]:o};this.use=function(e){if(e){if(!b[e]&&!f)throw new Error("$translateProvider couldn't find translationTable for langKey: '"+e+"'");return l=e,this}return l};var U=function(e){return e?(w=e,this):g?g+w:w};this.storageKey=U,this.useUrlLoader=function(e,t){return this.useLoader("$translateUrlLoader",angular.extend({url:e},t))},this.useStaticFilesLoader=function(e){return this.useLoader("$translateStaticFilesLoader",e)},this.useLoader=function(e,t){return f=e,d=t||{},this},this.useLocalStorage=function(){return this.useStorage("$translateLocalStorage")},this.useCookieStorage=function(){return this.useStorage("$translateCookieStorage")},this.useStorage=function(e){return c=e,this},this.storagePrefix=function(e){return e?(g=e,this):e},this.useMissingTranslationHandlerLog=function(){return this.useMissingTranslationHandler("$translateMissingTranslationHandlerLog")},this.useMissingTranslationHandler=function(e){return p=e,this},this.usePostCompiling=function(e){return P=!!e,this},this.forceAsyncReload=function(e){return S=!!e,this},this.uniformLanguageTag=function(e){return e?angular.isString(e)&&(e={standard:e}):e={},A=e.standard,this},this.determinePreferredLanguage=function(e){var t=e&&angular.isFunction(e)?e():N();return r=$.length?R(t):t,this},this.registerAvailableLanguageKeys=function(e,t){return e?($=e,t&&(s=t),this):$},this.useLoaderCache=function(e){return e===!1?y=void 0:e===!0?y=!0:"undefined"==typeof e?y="$translationCache":e&&(y=e),this},this.directivePriority=function(e){return void 0===e?L:(L=e,this)},this.statefulFilter=function(e){return void 0===e?j:(j=e,this)},this.$get=["$log","$injector","$rootScope","$q",function(e,t,n,a){var s,g,$,k=t.get(h||"$translateDefaultInterpolation"),A=!1,C={},E={},N=function(e,t,n,i){if(angular.isArray(e)){var u=function(e){for(var r={},s=[],o=function(e){var s=a.defer(),o=function(t){r[e]=t,s.resolve([e,t])};return N(e,t,n,i).then(o,o),s.promise},l=0,u=e.length;u>l;l++)s.push(o(e[l]));return a.all(s).then(function(){return r})};return u(e)}var p=a.defer();e&&(e=F.apply(e));var h=function(){var e=r?E[r]:E[l];if(g=0,c&&!e){var t=s.get(w);if(e=E[t],o&&o.length){var n=O(o,t);g=0===n?1:0,O(o,r)<0&&o.push(r)}}return e}();if(h){var f=function(){ee(e,t,n,i).then(p.resolve,p.reject)};f.displayName="promiseResolved",h["finally"](f,p.reject)}else ee(e,t,n,i).then(p.resolve,p.reject);return p.promise},M=function(e){return m&&(e=[m,e].join(" ")),v&&(e=[e,v].join(" ")),e},D=function(e){l=e,n.$emit("$translateChangeSuccess",{language:e}),c&&s.put(N.storageKey(),l),k.setLocale(l);var t=function(e,t){C[t].setLocale(l)};t.displayName="eachInterpolatorLocaleSetter",angular.forEach(C,t),n.$emit("$translateChangeEnd",{language:e})},V=function(e){if(!e)throw"No language key specified for loading.";var r=a.defer();n.$emit("$translateLoadingStart",{language:e}),A=!0;var s=y;"string"==typeof s&&(s=t.get(s));var o=angular.extend({},d,{key:e,$http:angular.extend({},{cache:s},d.$http)}),i=function(t){var a={};n.$emit("$translateLoadingSuccess",{language:e}),angular.isArray(t)?angular.forEach(t,function(e){angular.extend(a,H(e))}):angular.extend(a,H(t)),A=!1,r.resolve({key:e,table:a}),n.$emit("$translateLoadingEnd",{language:e})};i.displayName="onLoaderSuccess";var l=function(e){n.$emit("$translateLoadingError",{language:e}),r.reject(e),n.$emit("$translateLoadingEnd",{language:e})};return l.displayName="onLoaderError",t.get(f)(o).then(i,l),r.promise};if(c&&(s=t.get(c),!s.get||!s.put))throw new Error("Couldn't use storage '"+c+"', missing get() or put() method!");if(T.length){var G=function(e){var n=t.get(e);n.setLocale(r||l),C[n.getInterpolationIdentifier()]=n};G.displayName="interpolationFactoryAdder",angular.forEach(T,G)}var J=function(e){var t=a.defer();if(Object.prototype.hasOwnProperty.call(b,e))t.resolve(b[e]);else if(E[e]){var n=function(e){_(e.key,e.table),t.resolve(e.table)};n.displayName="translationTableResolver",E[e].then(n,t.reject)}else t.reject();return t.promise},K=function(e,t,n,r){var s=a.defer(),o=function(a){if(Object.prototype.hasOwnProperty.call(a,t)){r.setLocale(e);var o=a[t];"@:"===o.substr(0,2)?K(e,o.substr(2),n,r).then(s.resolve,s.reject):s.resolve(r.interpolate(a[t],n)),r.setLocale(l)}else s.reject()};return o.displayName="fallbackTranslationResolver",J(e).then(o,s.reject),s.promise},W=function(e,t,n,a){var r,s=b[e];if(s&&Object.prototype.hasOwnProperty.call(s,t)){if(a.setLocale(e),r=a.interpolate(s[t],n),"@:"===r.substr(0,2))return W(e,r.substr(2),n,a);a.setLocale(l)}return r},Y=function(e,n){if(p){var a=t.get(p)(e,l,n);return void 0!==a?a:e}return e},B=function(e,t,n,r,s){var i=a.defer();if(e<o.length){var l=o[e];K(l,t,n,r).then(i.resolve,function(){B(e+1,t,n,r,s).then(i.resolve)})}else i.resolve(s?s:Y(t,n));return i.promise},Q=function(e,t,n,a){var r;if(e<o.length){var s=o[e];r=W(s,t,n,a),r||(r=Q(e+1,t,n,a))}return r},X=function(e,t,n,a){return B($>0?$:g,e,t,n,a)},Z=function(e,t,n){return Q($>0?$:g,e,t,n)},ee=function(e,t,n,r){var s=a.defer(),i=l?b[l]:b,u=n?C[n]:k;if(i&&Object.prototype.hasOwnProperty.call(i,e)){var c=i[e];"@:"===c.substr(0,2)?N(c.substr(2),t,n,r).then(s.resolve,s.reject):s.resolve(u.interpolate(c,t))}else{var g;p&&!A&&(g=Y(e,t)),l&&o&&o.length?X(e,t,u,r).then(function(e){s.resolve(e)},function(e){s.reject(M(e))}):p&&!A&&g?s.resolve(r?r:g):r?s.resolve(r):s.reject(M(e))}return s.promise},te=function(e,t,n){var a,r=l?b[l]:b,s=k;if(C&&Object.prototype.hasOwnProperty.call(C,n)&&(s=C[n]),r&&Object.prototype.hasOwnProperty.call(r,e)){var i=r[e];a="@:"===i.substr(0,2)?te(i.substr(2),t,n):s.interpolate(i,t)}else{var u;p&&!A&&(u=Y(e,t)),l&&o&&o.length?(g=0,a=Z(e,t,s)):a=p&&!A&&u?u:M(e)}return a},ne=function(e){u===e&&(u=void 0),E[e]=void 0};if(N.preferredLanguage=function(e){return e&&z(e),r},N.cloakClassName=function(){return x},N.fallbackLanguage=function(e){if(void 0!==e&&null!==e){if(q(e),f&&o&&o.length)for(var t=0,n=o.length;n>t;t++)E[o[t]]||(E[o[t]]=V(o[t]));N.use(N.use())}return i?o[0]:o},N.useFallbackLanguage=function(e){if(void 0!==e&&null!==e)if(e){var t=O(o,e);t>-1&&($=t)}else $=0},N.proposedLanguage=function(){return u},N.storage=function(){return s},N.use=function(e){if(!e)return l;var t=a.defer();n.$emit("$translateChangeStart",{language:e});var r=R(e);return r&&(e=r),!S&&b[e]||!f||E[e]?u===e&&E[e]?E[e].then(function(e){return t.resolve(e.key),e},function(e){return t.reject(e),a.reject(e)}):(t.resolve(e),D(e)):(u=e,E[e]=V(e).then(function(e){return _(e.key,e.table),t.resolve(e.key),D(e.key),e},function(e){return n.$emit("$translateChangeError",{language:e}),t.reject(e),n.$emit("$translateChangeEnd",{language:e}),a.reject(e)}),E[e]["finally"](function(){ne(e)})),t.promise},N.storageKey=function(){return U()},N.isPostCompilingEnabled=function(){return P},N.isForceAsyncReloadEnabled=function(){return S},N.refresh=function(e){function t(){s.resolve(),n.$emit("$translateRefreshEnd",{language:e})}function r(){s.reject(),n.$emit("$translateRefreshEnd",{language:e})}if(!f)throw new Error("Couldn't refresh translation table, no loader registered!");var s=a.defer();if(n.$emit("$translateRefreshStart",{language:e}),e)if(b[e]){var i=function(n){_(n.key,n.table),e===l&&D(l),t()};i.displayName="refreshPostProcessor",V(e).then(i,r)}else r();else{var u=[],c={};if(o&&o.length)for(var g=0,p=o.length;p>g;g++)u.push(V(o[g])),c[o[g]]=!0;l&&!c[l]&&u.push(V(l));var h=function(e){b={},angular.forEach(e,function(e){_(e.key,e.table)}),l&&D(l),t()};h.displayName="refreshPostProcessor",a.all(u).then(h,r)}return s.promise},N.instant=function(e,t,n){if(null===e||angular.isUndefined(e))return e;if(angular.isArray(e)){for(var a={},s=0,i=e.length;i>s;s++)a[e[s]]=N.instant(e[s],t,n);return a}if(angular.isString(e)&&e.length<1)return e;e&&(e=F.apply(e));var u,c=[];r&&c.push(r),l&&c.push(l),o&&o.length&&(c=c.concat(o));for(var g=0,h=c.length;h>g;g++){var f=c[g];if(b[f]&&("undefined"!=typeof b[f][e]?u=te(e,t,n):(m||v)&&(u=M(e))),"undefined"!=typeof u)break}return u||""===u||(u=k.interpolate(e,t),p&&!A&&(u=Y(e,t))),u},N.versionInfo=function(){return I},N.loaderCache=function(){return y},N.directivePriority=function(){return L},N.statefulFilter=function(){return j},f&&(angular.equals(b,{})&&N.use(N.use()),o&&o.length))for(var ae=function(e){return _(e.key,e.table),n.$emit("$translateChangeEnd",{language:e.key}),e},re=0,se=o.length;se>re;re++){var oe=o[re];(S||!b[oe])&&(E[oe]=V(oe).then(ae))}return N}]}function a(e,t){"use strict";var n,a={},r="default";return a.setLocale=function(e){n=e},a.getInterpolationIdentifier=function(){return r},a.useSanitizeValueStrategy=function(e){return t.useStrategy(e),this},a.interpolate=function(n,a){a=a||{},a=t.sanitize(a,"params");var r=e(n)(a);return r=t.sanitize(r,"text")},a}function r(e,t,n,a,r,s){"use strict";var o=function(){return this.toString().replace(/^\s+|\s+$/g,"")};return{restrict:"AE",scope:!0,priority:e.directivePriority(),compile:function(t,i){var l=i.translateValues?i.translateValues:void 0,u=i.translateInterpolation?i.translateInterpolation:void 0,c=t[0].outerHTML.match(/translate-value-+/i),g="^(.*)("+n.startSymbol()+".*"+n.endSymbol()+")(.*)",p="^(.*)"+n.startSymbol()+"(.*)"+n.endSymbol()+"(.*)";return function(t,h,f){t.interpolateParams={},t.preText="",t.postText="";var d={},m=function(e,n,a){if(n.translateValues&&angular.extend(e,r(n.translateValues)(t.$parent)),c)for(var s in a)if(Object.prototype.hasOwnProperty.call(n,s)&&"translateValue"===s.substr(0,14)&&"translateValues"!==s){var o=angular.lowercase(s.substr(14,1))+s.substr(15);e[o]=a[s]}},v=function(e){if(angular.isFunction(v._unwatchOld)&&(v._unwatchOld(),v._unwatchOld=void 0),angular.equals(e,"")||!angular.isDefined(e)){var a=o.apply(h.text()).match(g);if(angular.isArray(a)){t.preText=a[1],t.postText=a[3],d.translate=n(a[2])(t.$parent);var r=h.text().match(p);angular.isArray(r)&&r[2]&&r[2].length&&(v._unwatchOld=t.$watch(r[2],function(e){d.translate=e,x()}))}else d.translate=h.text().replace(/^\s+|\s+$/g,"")}else d.translate=e;x()},y=function(e){f.$observe(e,function(t){d[e]=t,x()})};m(t.interpolateParams,f,i);var b=!0;f.$observe("translate",function(e){"undefined"==typeof e?v(""):""===e&&b||(d.translate=e,x()),b=!1});for(var $ in f)f.hasOwnProperty($)&&"translateAttr"===$.substr(0,13)&&y($);if(f.$observe("translateDefault",function(e){t.defaultText=e}),l&&f.$observe("translateValues",function(e){e&&t.$parent.$watch(function(){angular.extend(t.interpolateParams,r(e)(t.$parent))})}),c){var w=function(e){f.$observe(e,function(n){var a=angular.lowercase(e.substr(14,1))+e.substr(15);t.interpolateParams[a]=n})};for(var T in f)Object.prototype.hasOwnProperty.call(f,T)&&"translateValue"===T.substr(0,14)&&"translateValues"!==T&&w(T)}var x=function(){for(var e in d)d.hasOwnProperty(e)&&void 0!==d[e]&&P(e,d[e],t,t.interpolateParams,t.defaultText)},P=function(t,n,a,r,s){n?e(n,r,u,s).then(function(e){S(e,a,!0,t)},function(e){S(e,a,!1,t)}):S(n,a,!1,t)},S=function(t,n,r,s){if("translate"===s){r||"undefined"==typeof n.defaultText||(t=n.defaultText),h.html(n.preText+t+n.postText);var o=e.isPostCompilingEnabled(),l="undefined"!=typeof i.translateCompile,u=l&&"false"!==i.translateCompile;(o&&!l||u)&&a(h.contents())(n)}else{r||"undefined"==typeof n.defaultText||(t=n.defaultText);var c=f.$attr[s];"data-"===c.substr(0,5)&&(c=c.substr(5)),c=c.substr(15),h.attr(c,t)}};(l||c||f.translateDefault)&&t.$watch("interpolateParams",x,!0);var k=s.$on("$translateChangeSuccess",x);h.text().length?v(f.translate?f.translate:""):f.translate&&v(f.translate),x(),t.$on("$destroy",k)}}}}function s(e,t){"use strict";return{compile:function(n){var a=function(){n.addClass(t.cloakClassName())},r=function(){n.removeClass(t.cloakClassName())},s=e.$on("$translateChangeEnd",function(){r(),s(),s=null});return a(),function(e,n,s){s.translateCloak&&s.translateCloak.length&&s.$observe("translateCloak",function(e){t(e).then(r,a)})}}}}function o(e,t){"use strict";var n=function(n,a,r){return angular.isObject(a)||(a=e(a)(this)),t.instant(n,a,r)};return t.statefulFilter()&&(n.$stateful=!0),n}function i(e){"use strict";return e("translations")}return angular.module("pascalprecht.translate",["ng"]).run(e),e.$inject=["$translate"],e.displayName="runTranslate",angular.module("pascalprecht.translate").provider("$translateSanitization",t),angular.module("pascalprecht.translate").constant("pascalprechtTranslateOverrider",{}).provider("$translate",n),n.$inject=["$STORAGE_KEY","$windowProvider","$translateSanitizationProvider","pascalprechtTranslateOverrider"],n.displayName="displayName",angular.module("pascalprecht.translate").factory("$translateDefaultInterpolation",a),a.$inject=["$interpolate","$translateSanitization"],a.displayName="$translateDefaultInterpolation",angular.module("pascalprecht.translate").constant("$STORAGE_KEY","NG_TRANSLATE_LANG_KEY"),angular.module("pascalprecht.translate").directive("translate",r),r.$inject=["$translate","$q","$interpolate","$compile","$parse","$rootScope"],r.displayName="translateDirective",angular.module("pascalprecht.translate").directive("translateCloak",s),s.$inject=["$rootScope","$translate"],s.displayName="translateCloakDirective",angular.module("pascalprecht.translate").filter("translate",o),o.$inject=["$parse","$translate"],o.displayName="translateFilterFactory",angular.module("pascalprecht.translate").factory("$translationCache",i),i.$inject=["$cacheFactory"],i.displayName="$translationCache","pascalprecht.translate"}),!function(e,t){"function"==typeof define&&define.amd?define([],function(){return t()}):"object"==typeof exports?module.exports=t():t()}(this,function(){function e(e){"use strict";var t={get:function(t){return e.get(t)},set:function(t,n){e.put(t,n)},put:function(t,n){e.put(t,n)}};return t}return angular.module("pascalprecht.translate").factory("$translateCookieStorage",e),e.$inject=["$cookieStore"],e.displayName="$translateCookieStorage","pascalprecht.translate"}),angular.module("transfluentAPI",["transfluentAPI.controllers","transfluentAPI.filters","pascalprecht.translate","ngCookies"]).config(["$interpolateProvider","$translateProvider",function(e,t){e.startSymbol("{[").endSymbol("]}"),t.translations("en",{Japanese:"Japanese",English:"English","Search the documentation":"Search the documentation","Get started":"Get started",Authentication:"Authentication","Retrieve a token":"Retrieve a token",Languages:"Languages","List languages&pairs":"List languages&pairs","Text&HTML":"Text&HTML",Text:"Text",TextStatus:"TextStatus",Texts:"Texts",TextsTranslate:"TextsTranslate","Resource files":"Resource files",FileRead:"FileRead",FileSave:"FileSave",FileStatus:"FileStatus",FileTranslate:"FileTranslate",Development:"Development",Testing:"Testing",Callbacks:"Callbacks","home-main-copy":"Transfluent is the only translation provider to scale from 1 word into millions of words, yet providing excellent quality and having ability to translate into numerous of languages with very little effort from the customer.","home-main-beef":"The key to fulfill this promise is our innovative use of technology in the translation process. Our API is in the core enabling all this. In this documentation you will find detailed information of our API and description how to the translation process works.","home-main-get-started":"All of our implementations are built on our API. The translation process over our API is straight forward and simple: authenticate, submit content, place the order and receive the translation (via an API call or by receiving a callback).","home-main-user-accounts-title":"User accounts","home-main-user-accounts-body":'To get going, you will need a Transfluent user account. Either <a href="https://www.transfluent.com/en/sign-up/" target="_blank">create a new user account</a> by yourself or ask your company\'s account owner to create one for you.',"home-main-development-title":"Development and testing","home-main-development-body":"For development and testing your integration, we provide a <strong>Pseudo language</strong> translation. The language code for Pseudo language is <strong>xx-xx</strong>. Use English (<code>en</code>) as source language and Pseudo language as target language and the order will be processed for free. Instead of actual translation, you will get your source text reversed (e.g. &quot;Hello&quot; -&gt; &quot;olleH&quot;). Placing Pseudo language orders is useful for testing the whole process from end to end and, depending on your use case, possibly also for pinpointing any non-translated parts on your end.","home-main-supported-languages-title":"Supported languages","home-main-supported-languages-body":'<a href="https://www.transfluent.com/en/pricing/#supported-language-pairs">Check supported language pairs</a> from our website or call our API\'s <strong>languages</strong> method to list languages names and language pairs. The API methods can be called using ready-made clients or command line tools, for example call using <strong>curl</strong>: <code>curl https://transfluent.com/languages/</code> or you can even do it with your browser: <a href="https://transfluent.com/languages/" rel="nofollow" target="_blank">HTTP GET https://transfluent.com/languages/</a>. The output is always <a href="https://en.wikipedia.org/wiki/JSON" target="_blank" rel="nofollow">JSON</a>. As you can see, it is easy to get started with the API.',"home-main-payments-title":"Payments","home-main-payments-body":'The easiest way to pay is by credit card. You or your company\'s account owner can setup a credit card in the <a href="https://www.transfluent.com/my-account/#/creditcard" target="_blank">My Account</a> page. It is recommended to add a backup card so there will not be any interruption in the service if the primary card fails.',"home-main-use-cases-title":"Use cases","home-main-use-cases-first":"Plain text and HTML content. Content is stored by key (and group). Our backend keeps track of versions, so unchanged texts will not be re-translated.","home-main-use-cases-second":"Resource files. Usually integrated to the application build process. Our backend keeps track of file versions, so unchanged parts will not be re-translated.","home-main-use-cases-third":'<strong>Translation <a href="https://www.transfluent.com/translate/" target="_blank">Widget</a>:</strong> ad-hoc translation needs, delivery by email. Text or files. <a href="https://transfluent.partners/integrate/" target="_blank">Embedded version</a> available for intranet.',"home-main-process-title":"Translation process example","home-main-process-phase-1-title":"Setting up phase","home-main-process-phase-2-title":"Continuous translation phase","home-main-process-phase-1-step-1":"<strong>Authenticate:</strong> Retrieve a token from the API and store it locally","home-main-process-phase-1-step-2":"<strong>Retrieve list of languages:</strong> Retrieve list of language names&codes and supported pairs from the API. It is recommended to refresh the listing every now and then as our list of languages and supported pairs increases often.","home-main-process-phase-2-step-1":"<strong>Save</strong> new content to the API by calling /v2/text/ or /v2/file/save/","home-main-process-phase-2-step-2":"<strong>Order</strong> translations by calling /v2/texts/translate/ or /v2/file/translate/","home-main-process-phase-2-step-3":"<strong>Receive a callback</strong> and handle completed translations on your end. Alternatively you can poll /v2/text/status/ or /v2/file/status/ to see if the translations have been completed.","home-main-process-phase-2-step-4":"If you did not process the callback, you can <strong>retrieve the translations</strong> by calling /v2/text/ or /v2/file/read/.","home-main-process-phase-2-step-5":"<strong>Now you are done.</strong> To translate more, go to first step of this phase.","home-main-tips-title":"Please note","home-main-tips-body":"We would like to remind you of few important points that might cause issues later on if not addressed early on.","home-main-tips-1":"<strong>Charset encoding.</strong> We always provide UTF-8 or UTF-16 encoded content. We highly recommend to use UTF-8.","home-main-tips-2":"<strong>Writing direction.</strong> Some languages are written from right to left, e.g. Arabic.","home-main-tips-3":"<strong>Plurals.</strong> Some languages have more plural forms than two.","home-main-tips-4":'<strong>Space.</strong> Some languages need more space in length on a screen and also in bytes on a storage device. This is utmost important if your translation has either limited storage length or if the text must fit on screen. We provide <a href="https://www.transfluent.com/en/appstore-description-estimator/" target="_blank">a tool</a> to estimate translation size for AppStore descriptions, it can be used for other estimation purposes as well.',"home-main-tips-5":"<strong>Tags/placeholders.</strong> Instead of combining strings (e.g. &quot;Hello &quot; + name), prefer using tags and placeholders (e.g. &quot; Hello [name]&quot;). That is because some language have different order of words and therefore combining strings might be problematic. Our translation system supports and our translators are familiar with the most common tags for each resource type but if you are translating plain text, it might be worthwhile to mention about your tags/placeholders in the translator instructions.","home-main-tips-6":"<strong>Tone&amp;context.</strong> Please provide as accurate instructions and supporting context as you can, it will help the translators to do a better job.","home-main-tips-7":"<strong>Hardcoded content.</strong> To fully localize a website or a game, you might encounter issues with some content being &quot;hardcoded&quot; in the source language. This is usually the case with images and strings that are not passed through the localization system. To identify these, you can use our Pseudo language as target language and then see if all content gets reversed or not.","authentication-json-note":"Please note that you need to pass parameters as a JSON object to the API. Check the cURL example below for clarification.","curl-example-title":"cURL Example","php-example-title":"PHP Example","api-Authenticate-desc":"To call any methods requiring authentication, you need to retrieve an authentication token first. The token is valid until your password changes. <strong>If you store the token between sessions, please store it securely and keep it secret!</strong>","api-method":"Method","api-url":"URL","api-parameters":"Parameters","authentication-curl-ok-example":"Example of a successful authentication response (HTTP200, <code>Content-Type: application/json</code>):","authentication-curl-fail-example":"Example of a failed authentication response (HTTP500, <code>Content-Type: application/json</code>):"}),t.translations("ja",{Japanese:"Japanese",English:"English","Search the documentation":"ドキュメンテーションを検索","Get started":"はじめに",Authentication:"認証","Retrieve a token":"トークンの取得",Languages:"言語","List languages&pairs":"言語＆組み合わせのリスト","Text&HTML":"テキスト＆HTML",Text:"テキスト",TextStatus:"テキストステータス",Texts:"テキスト",TextsTranslate:"テキスト翻訳","Resource files":"リソースファイル",FileRead:"ファイル読み込み",FileSave:"ファイル保存",FileStatus:"ファイルステータス",FileTranslate:"ファイル翻訳",Development:"開発",Testing:"テスト",Callbacks:"コールバック","home-main-copy":"Transfluentは、1単語から数百万単語まで、お客様にほとんど負担をかけずに優れた品質と数多くの言語への翻訳を可能にする唯一の翻訳業者です。","home-main-beef":"これを実現するキーポイントは、翻訳過程における当社の革新的な技術の利用方法です。これはAPIを核とすることで実現しています。この資料は、当社のAPIおよび翻訳過程がどう行われるかに関する詳細な情報 をお届けします。","home-main-get-started":"当社の実装は全て当社API上に構築されています。当社APIにおける翻訳過程は分かりやすくシンプルです―認証、翻訳内容を送信、発注、翻訳結果の受け取り（APIコールあるいはコールバックの受け取りによる）、これだけです。","home-main-user-accounts-title":"ユーザーアカウント","home-main-user-accounts-body":"利用には、Transfluentのユーザーアカウントが必要になります。新しいユーザーアカウントをご自身で作成するか、御社のアカウント所有者に作成を依頼してください。","home-main-development-title":"開発およびテスト","home-main-development-body":'お客様側の統合を開発およびテストするために、当社では擬似言語翻訳を提供しております。擬似言語の言語コードは<strong>xx-xx</strong>です。ソース言語を英語（<code>en</code>）、ターゲット言語を擬似言語に設定すると、その注文は無料で処理されます。実際の翻訳の代わりに、元の文章は前後逆に変換されます。（例："Hello" → "olleH"）　擬似言語翻訳は、利用方法によっては過程の全体を初めから終わりまでテストしたり、また場合によりお客様側の非翻訳部分を特定したりするために役立てることができます。',"home-main-supported-languages-title":"対応言語","home-main-supported-languages-body":'対応言語については当社ウェブサイトから確認するか、当社APIの言語メソッドを呼び出して、言語名と言語の組み合わせをリストアップしてください。APIメソッドは、既存のクライアントあるいはコマンドラインツールを使って呼び出せます。例えばcURLを用いるか（<code>curl https://transfluent.com/languages/</code>）、あるいはお客様のブラウザを使うこともできます。（<a href="https://transfluent.com/languages/" rel="nofollow" target="_blank">HTTP GET https://transfluent.com/languages/</a>） 出力は常にJSONとなります。この通り、APIの使用は簡単に始めることができます。',"home-main-payments-title":"お支払い","home-main-payments-body":"最も簡単なお支払い方法はクレジットカードです。クレジットカードの登録は、お客様個人あるいは会社のアカウント所有者のマイアカウントページにて行うことができます。もし初めに登録したカードが使えなかった場合にもサービスが中断されないように、予備のカードを追加することをおすすめします。","home-main-use-cases-title":"使用事例","home-main-use-cases-first":"プレーンテキストとHTMLコンテンツ。コンテンツはキー（およびグループ）により保存されます。バージョンの記録は当社バックエンドにより保持されているため、変更のないテキストは再翻訳されません。","home-main-use-cases-second":"リソースファイル。通常はアプリケーションビルドプロセスに統合されています。バージョンの記録は当社バックエンドにより保持されているため、変更のないテキストは再翻訳されません。","home-main-use-cases-third":'<strong><a href="https://www.transfluent.com/translate/" target="_blank">翻訳ウィジェット：</a></strong>その時々の翻訳ニーズに合わせ、Eメールにて納品いたします。テキストあるいはファイルを選べます。イントラネット用に埋め込みバージョンも利用可能です。',"home-main-process-title":"翻訳過程の例","home-main-process-phase-1-title":"フェーズの設定","home-main-process-phase-2-title":"翻訳の流れ","home-main-process-phase-1-step-1":"<strong>認証する：</strong>APIからトークンを取得し、ローカル保存します。","home-main-process-phase-1-step-2":"<strong>言語のリストを取得する：</strong>APIから言語名とコード、対応している組み合わせのリストを取得します。当社で対応している言語のリストは頻繁に増えますので、時々リストを更新することをおすすめします。","home-main-process-phase-2-step-1":"▪ /v2/text/あるいは/v2/file/save/を呼び出してAPIに新しいコンテンツを保存します。","home-main-process-phase-2-step-2":"▪ /v2/texts/translate/あるいは/v2/file/translate/を呼び出して翻訳を発注します。","home-main-process-phase-2-step-3":"▪ コールバックを受け取った後、完成した翻訳をお客様側で処理できます。もう一つの方法としては、/v2/text/status/ あるいは/v2/file/status/を呼び出して、翻訳が完了されたかどうかを確認することもできます。","home-main-process-phase-2-step-4":"▪ コールバックの処理を行わなかった場合は、/v2/text/あるいは/v2/file/read/を呼び出して翻訳を受け取ることができます。","home-main-process-phase-2-step-5":"▪ これで完了です。さらに翻訳を行う場合は、この流れの一番初めの段階に戻ってください。","home-main-tips-title":"注意","home-main-tips-body":"早い段階で処理しておかなければ後になって問題となるかも知れない、いくつかの重要なポイントについて触れておきたいと思います。","home-main-tips-1":"<strong>Charsetエンコーディング：</strong>当社では常にUTF-8あるいはUTF-16にエンコードされたコンテンツを提供しています。UTF-8を使用することを強く推奨します。","home-main-tips-2":"<strong>記述方向：</strong>アラブ語など、一部の言語は右から左に記述されます。","home-main-tips-3":"<strong>複数形：</strong>一部の言語は、2つ以上の複数形を有しています。","home-main-tips-4":"<strong>スペース：</strong>言語によっては、スクリーン上でのスペースや保存デバイス上でのバイト数を、他の言語よりも要するものがあります。これは翻訳の保存容量が限られている場合、あるいは文章をスクリーン上に収めなければならない場合などに非常に重要になります。当社ではAppStoreの説明用に翻訳サイズを推定するツールを提供しており、他のサイズ推定にも利用することができます。","home-main-tips-5":"<strong>タグ/プレースホルダー：</strong>&quot;Hello &quot; + 名前のように文字列を繋げるのではなく、&quot; Hello [名前]&quot;のようにタグとプレースホルダーを使用することが推奨されます。一部の言語は語順が違うため、文字列を繋げることは問題になりかねません。当社の翻訳システムは各リソースタイプの一般的なタグのほとんどに対応しており、翻訳者もそういったタグについては熟知していますが、プレーンテキストを翻訳する場合は、翻訳者への指示内でタグ/プレースホルダーに関して触れておいた方がいいでしょう",
"home-main-tips-6":"<strong>トーンとコンテキスト：</strong>翻訳者がよりよい結果を出せるよう、可能な限り細かな指示と参考となるコンテキストを提供してください。","home-main-tips-7":"<strong>ハードコードされたコンテンツ：</strong>ウェブサイトやゲームを完全にローカライズする際に、一部のコンテンツがソース言語においてハードコードされているという問題に直面することがあります。これは多くの場合ローカライゼーションのシステムを通していない画像や文字列が原因です。こういった問題を特定するためには、当社の擬似言語をターゲット言語に設定し、全てのコンテンツが前後逆になっているかどうか確認します。","authentication-json-note":"APIに対しパラメータをJSONオブジェクトとして渡す必要があることにご留意ください。詳しくは下記のcURL例をご参照ください。","curl-example-title":"cURL例","php-example-title":"PHP例","api-Authenticate-desc":"認証が必要になるメソッドを呼び出すにはまず認証トークンを取得する必要があります。トークンはパスワードを変更するまで有効です。<strong>セッションの間にトークンを保存する場合は　安全な場所に保存し、誰にも言わないでください。</strong>","api-method":"メソッド","api-url":"URL","api-parameters":"パラメータ","authentication-curl-ok-example":"認証応答の成功例（ HTTP200, <code>Content-Type: application/json</code>）：","authentication-curl-fail-example":"認証応答の失敗例（HTTP500, <code>Content-Type: application/json</code>）："}),t.preferredLanguage("en"),t.useCookieStorage()}]).controller("LanguageSelector",["$scope","$translate",function(e,t){e.ChangeLanguage=function(e){t.use(e)}}]),angular.module("transfluentAPI.controllers",[]).controller("servicesCtrl",["$scope","$sce","$http",function(e,t,n){n.get("/json/services-methods.json").success(function(t){e.navs=t})}]).controller("securityCtrl",["$scope","$sce","$http",function(e,t,n){n.get("/json/security-methods.json").success(function(t){e.navs=t})}]).controller("fileCtrl",["$scope","$sce","$http",function(e,t,n){n.get("/json/file-methods.json").success(function(t){e.navs=t})}]).controller("languagesCtrl",["$scope","$sce","$http",function(e,t,n){n.get("/json/languages-methods.json").success(function(t){e.navs=t})}]).controller("textCtrl",["$scope","$sce","$http",function(e,t,n){n.get("/json/text-methods.json").success(function(t){e.navs=t})}]),angular.module("transfluentAPI.filters",[]).filter("linebreak",function(){return function(e){return e.replace(/\n/g,"<br>")}}).filter("to_trusted",["$sce",function(e){return function(t){return e.trustAsHtml(t)}}]);var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-2040852-7"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();