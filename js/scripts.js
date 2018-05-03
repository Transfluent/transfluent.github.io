window.Modernizr = function (e, t, n) {
  function r(e) {
    b.cssText = e;
  }
  function o(e, t) {
    return r(S.join(e + ';') + (t || ''));
  }
  function a(e, t) {
    return typeof e === t;
  }
  function i(e, t) {
    return !!~('' + e).indexOf(t);
  }
  function c(e, t) {
    for (var r in e) {
      var o = e[r];
      if (!i(o, '-') && b[o] !== n)
        return 'pfx' == t ? o : !0;
    }
    return !1;
  }
  function s(e, t, r) {
    for (var o in e) {
      var i = t[e[o]];
      if (i !== n)
        return r === !1 ? e[o] : a(i, 'function') ? i.bind(r || t) : i;
    }
    return !1;
  }
  function u(e, t, n) {
    var r = e.charAt(0).toUpperCase() + e.slice(1), o = (e + ' ' + k.join(r + ' ') + r).split(' ');
    return a(t, 'string') || a(t, 'undefined') ? c(o, t) : (o = (e + ' ' + T.join(r + ' ') + r).split(' '), s(o, t, n));
  }
  function l() {
    p.input = function (n) {
      for (var r = 0, o = n.length; o > r; r++)
        j[n[r]] = !!(n[r] in E);
      return j.list && (j.list = !(!t.createElement('datalist') || !e.HTMLDataListElement)), j;
    }('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' ')), p.inputtypes = function (e) {
      for (var r, o, a, i = 0, c = e.length; c > i; i++)
        E.setAttribute('type', o = e[i]), r = 'text' !== E.type, r && (E.value = x, E.style.cssText = 'position:absolute;visibility:hidden;', /^range$/.test(o) && E.style.WebkitAppearance !== n ? (g.appendChild(E), a = t.defaultView, r = a.getComputedStyle && 'textfield' !== a.getComputedStyle(E, null).WebkitAppearance && 0 !== E.offsetHeight, g.removeChild(E)) : /^(search|tel)$/.test(o) || (r = /^(url|email)$/.test(o) ? E.checkValidity && E.checkValidity() === !1 : E.value != x)), P[e[i]] = !!r;
      return P;
    }('search tel url email datetime date month week time datetime-local number range color'.split(' '));
  }
  var d, f, m = '2.8.1', p = {}, h = !0, g = t.documentElement, v = 'modernizr', y = t.createElement(v), b = y.style, E = t.createElement('input'), x = ':)', w = {}.toString, S = ' -webkit- -moz- -o- -ms- '.split(' '), C = 'Webkit Moz O ms', k = C.split(' '), T = C.toLowerCase().split(' '), N = { svg: 'http://www.w3.org/2000/svg' }, M = {}, P = {}, j = {}, $ = [], D = $.slice, F = function (e, n, r, o) {
      var a, i, c, s, u = t.createElement('div'), l = t.body, d = l || t.createElement('body');
      if (parseInt(r, 10))
        for (; r--;)
          c = t.createElement('div'), c.id = o ? o[r] : v + (r + 1), u.appendChild(c);
      return a = [
        '&#173;',
        '<style id="s',
        v,
        '">',
        e,
        '</style>'
      ].join(''), u.id = v, (l ? u : d).innerHTML += a, d.appendChild(u), l || (d.style.background = '', d.style.overflow = 'hidden', s = g.style.overflow, g.style.overflow = 'hidden', g.appendChild(d)), i = n(u, e), l ? u.parentNode.removeChild(u) : (d.parentNode.removeChild(d), g.style.overflow = s), !!i;
    }, z = function (t) {
      var n = e.matchMedia || e.msMatchMedia;
      if (n)
        return n(t) && n(t).matches || !1;
      var r;
      return F('@media ' + t + ' { #' + v + ' { position: absolute; } }', function (t) {
        r = 'absolute' == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position;
      }), r;
    }, A = function () {
      function e(e, o) {
        o = o || t.createElement(r[e] || 'div'), e = 'on' + e;
        var i = e in o;
        return i || (o.setAttribute || (o = t.createElement('div')), o.setAttribute && o.removeAttribute && (o.setAttribute(e, ''), i = a(o[e], 'function'), a(o[e], 'undefined') || (o[e] = n), o.removeAttribute(e))), o = null, i;
      }
      var r = {
          select: 'input',
          change: 'input',
          submit: 'form',
          reset: 'form',
          error: 'img',
          load: 'img',
          abort: 'img'
        };
      return e;
    }(), L = {}.hasOwnProperty;
  f = a(L, 'undefined') || a(L.call, 'undefined') ? function (e, t) {
    return t in e && a(e.constructor.prototype[t], 'undefined');
  } : function (e, t) {
    return L.call(e, t);
  }, Function.prototype.bind || (Function.prototype.bind = function (e) {
    var t = this;
    if ('function' != typeof t)
      throw new TypeError();
    var n = D.call(arguments, 1), r = function () {
        if (this instanceof r) {
          var o = function () {
          };
          o.prototype = t.prototype;
          var a = new o(), i = t.apply(a, n.concat(D.call(arguments)));
          return Object(i) === i ? i : a;
        }
        return t.apply(e, n.concat(D.call(arguments)));
      };
    return r;
  }), M.flexbox = function () {
    return u('flexWrap');
  }, M.flexboxlegacy = function () {
    return u('boxDirection');
  }, M.canvas = function () {
    var e = t.createElement('canvas');
    return !(!e.getContext || !e.getContext('2d'));
  }, M.canvastext = function () {
    return !(!p.canvas || !a(t.createElement('canvas').getContext('2d').fillText, 'function'));
  }, M.webgl = function () {
    return !!e.WebGLRenderingContext;
  }, M.touch = function () {
    var n;
    return 'ontouchstart' in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : F([
      '@media (',
      S.join('touch-enabled),('),
      v,
      ')',
      '{#modernizr{top:9px;position:absolute}}'
    ].join(''), function (e) {
      n = 9 === e.offsetTop;
    }), n;
  }, M.geolocation = function () {
    return 'geolocation' in navigator;
  }, M.postmessage = function () {
    return !!e.postMessage;
  }, M.websqldatabase = function () {
    return !!e.openDatabase;
  }, M.indexedDB = function () {
    return !!u('indexedDB', e);
  }, M.hashchange = function () {
    return A('hashchange', e) && (t.documentMode === n || t.documentMode > 7);
  }, M.history = function () {
    return !(!e.history || !history.pushState);
  }, M.draganddrop = function () {
    var e = t.createElement('div');
    return 'draggable' in e || 'ondragstart' in e && 'ondrop' in e;
  }, M.websockets = function () {
    return 'WebSocket' in e || 'MozWebSocket' in e;
  }, M.rgba = function () {
    return r('background-color:rgba(150,255,150,.5)'), i(b.backgroundColor, 'rgba');
  }, M.hsla = function () {
    return r('background-color:hsla(120,40%,100%,.5)'), i(b.backgroundColor, 'rgba') || i(b.backgroundColor, 'hsla');
  }, M.multiplebgs = function () {
    return r('background:url(https://),url(https://),red url(https://)'), /(url\s*\(.*?){3}/.test(b.background);
  }, M.backgroundsize = function () {
    return u('backgroundSize');
  }, M.borderimage = function () {
    return u('borderImage');
  }, M.borderradius = function () {
    return u('borderRadius');
  }, M.boxshadow = function () {
    return u('boxShadow');
  }, M.textshadow = function () {
    return '' === t.createElement('div').style.textShadow;
  }, M.opacity = function () {
    return o('opacity:.55'), /^0.55$/.test(b.opacity);
  }, M.cssanimations = function () {
    return u('animationName');
  }, M.csscolumns = function () {
    return u('columnCount');
  }, M.cssgradients = function () {
    var e = 'background-image:', t = 'gradient(linear,left top,right bottom,from(#9f9),to(white));', n = 'linear-gradient(left top,#9f9, white);';
    return r((e + '-webkit- '.split(' ').join(t + e) + S.join(n + e)).slice(0, -e.length)), i(b.backgroundImage, 'gradient');
  }, M.cssreflections = function () {
    return u('boxReflect');
  }, M.csstransforms = function () {
    return !!u('transform');
  }, M.csstransforms3d = function () {
    var e = !!u('perspective');
    return e && 'webkitPerspective' in g.style && F('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function (t) {
      e = 9 === t.offsetLeft && 3 === t.offsetHeight;
    }), e;
  }, M.csstransitions = function () {
    return u('transition');
  }, M.fontface = function () {
    var e;
    return F('@font-face {font-family:"font";src:url("https://")}', function (n, r) {
      var o = t.getElementById('smodernizr'), a = o.sheet || o.styleSheet, i = a ? a.cssRules && a.cssRules[0] ? a.cssRules[0].cssText : a.cssText || '' : '';
      e = /src/i.test(i) && 0 === i.indexOf(r.split(' ')[0]);
    }), e;
  }, M.generatedcontent = function () {
    var e;
    return F([
      '#',
      v,
      '{font:0/0 a}#',
      v,
      ':after{content:"',
      x,
      '";visibility:hidden;font:3px/1 a}'
    ].join(''), function (t) {
      e = t.offsetHeight >= 3;
    }), e;
  }, M.video = function () {
    var e = t.createElement('video'), n = !1;
    try {
      (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ''), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ''), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ''));
    } catch (r) {
    }
    return n;
  }, M.audio = function () {
    var e = t.createElement('audio'), n = !1;
    try {
      (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''), n.mp3 = e.canPlayType('audio/mpeg;').replace(/^no$/, ''), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''), n.m4a = (e.canPlayType('audio/x-m4a;') || e.canPlayType('audio/aac;')).replace(/^no$/, ''));
    } catch (r) {
    }
    return n;
  }, M.localstorage = function () {
    try {
      return localStorage.setItem(v, v), localStorage.removeItem(v), !0;
    } catch (e) {
      return !1;
    }
  }, M.sessionstorage = function () {
    try {
      return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0;
    } catch (e) {
      return !1;
    }
  }, M.webworkers = function () {
    return !!e.Worker;
  }, M.applicationcache = function () {
    return !!e.applicationCache;
  }, M.svg = function () {
    return !!t.createElementNS && !!t.createElementNS(N.svg, 'svg').createSVGRect;
  }, M.inlinesvg = function () {
    var e = t.createElement('div');
    return e.innerHTML = '<svg/>', (e.firstChild && e.firstChild.namespaceURI) == N.svg;
  }, M.smil = function () {
    return !!t.createElementNS && /SVGAnimate/.test(w.call(t.createElementNS(N.svg, 'animate')));
  }, M.svgclippaths = function () {
    return !!t.createElementNS && /SVGClipPath/.test(w.call(t.createElementNS(N.svg, 'clipPath')));
  };
  for (var H in M)
    f(M, H) && (d = H.toLowerCase(), p[d] = M[H](), $.push((p[d] ? '' : 'no-') + d));
  return p.input || l(), p.addTest = function (e, t) {
    if ('object' == typeof e)
      for (var r in e)
        f(e, r) && p.addTest(r, e[r]);
    else {
      if (e = e.toLowerCase(), p[e] !== n)
        return p;
      t = 'function' == typeof t ? t() : t, 'undefined' != typeof h && h && (g.className += ' ' + (t ? '' : 'no-') + e), p[e] = t;
    }
    return p;
  }, r(''), y = E = null, function (e, t) {
    function n(e, t) {
      var n = e.createElement('p'), r = e.getElementsByTagName('head')[0] || e.documentElement;
      return n.innerHTML = 'x<style>' + t + '</style>', r.insertBefore(n.lastChild, r.firstChild);
    }
    function r() {
      var e = y.elements;
      return 'string' == typeof e ? e.split(' ') : e;
    }
    function o(e) {
      var t = v[e[h]];
      return t || (t = {}, g++, e[h] = g, v[g] = t), t;
    }
    function a(e, n, r) {
      if (n || (n = t), l)
        return n.createElement(e);
      r || (r = o(n));
      var a;
      return a = r.cache[e] ? r.cache[e].cloneNode() : p.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !a.canHaveChildren || m.test(e) || a.tagUrn ? a : r.frag.appendChild(a);
    }
    function i(e, n) {
      if (e || (e = t), l)
        return e.createDocumentFragment();
      n = n || o(e);
      for (var a = n.frag.cloneNode(), i = 0, c = r(), s = c.length; s > i; i++)
        a.createElement(c[i]);
      return a;
    }
    function c(e, t) {
      t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
        return y.shivMethods ? a(n, e, t) : t.createElem(n);
      }, e.createDocumentFragment = Function('h,f', 'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' + r().join().replace(/[\w\-]+/g, function (e) {
        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")';
      }) + ');return n}')(y, t.frag);
    }
    function s(e) {
      e || (e = t);
      var r = o(e);
      return !y.shivCSS || u || r.hasCSS || (r.hasCSS = !!n(e, 'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}')), l || c(e, r), e;
    }
    var u, l, d = '3.7.0', f = e.html5 || {}, m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, h = '_html5shiv', g = 0, v = {};
    !function () {
      try {
        var e = t.createElement('a');
        e.innerHTML = '<xyz></xyz>', u = 'hidden' in e, l = 1 == e.childNodes.length || function () {
          t.createElement('a');
          var e = t.createDocumentFragment();
          return 'undefined' == typeof e.cloneNode || 'undefined' == typeof e.createDocumentFragment || 'undefined' == typeof e.createElement;
        }();
      } catch (n) {
        u = !0, l = !0;
      }
    }();
    var y = {
        elements: f.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',
        version: d,
        shivCSS: f.shivCSS !== !1,
        supportsUnknownElements: l,
        shivMethods: f.shivMethods !== !1,
        type: 'default',
        shivDocument: s,
        createElement: a,
        createDocumentFragment: i
      };
    e.html5 = y, s(t);
  }(this, t), p._version = m, p._prefixes = S, p._domPrefixes = T, p._cssomPrefixes = k, p.mq = z, p.hasEvent = A, p.testProp = function (e) {
    return c([e]);
  }, p.testAllProps = u, p.testStyles = F, p.prefixed = function (e, t, n) {
    return t ? u(e, t, n) : u(e, 'pfx');
  }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + (h ? ' js ' + $.join(' ') : ''), p;
}(this, this.document);
/*
 AngularJS v1.2.16
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (O, U, s) {
  'use strict';
  function t(b) {
    return function () {
      var a = arguments[0], c, a = '[' + (b ? b + ':' : '') + a + '] http://errors.angularjs.org/1.2.16/' + (b ? b + '/' : '') + a;
      for (c = 1; c < arguments.length; c++)
        a = a + (1 == c ? '?' : '&') + 'p' + (c - 1) + '=' + encodeURIComponent('function' == typeof arguments[c] ? arguments[c].toString().replace(/ \{[\s\S]*$/, '') : 'undefined' == typeof arguments[c] ? 'undefined' : 'string' != typeof arguments[c] ? JSON.stringify(arguments[c]) : arguments[c]);
      return Error(a);
    };
  }
  function ab(b) {
    if (null == b || Ca(b))
      return !1;
    var a = b.length;
    return 1 === b.nodeType && a ? !0 : w(b) || M(b) || 0 === a || 'number' === typeof a && 0 < a && a - 1 in b;
  }
  function q(b, a, c) {
    var d;
    if (b)
      if (P(b))
        for (d in b)
          'prototype' == d || ('length' == d || 'name' == d || b.hasOwnProperty && !b.hasOwnProperty(d)) || a.call(c, b[d], d);
      else if (b.forEach && b.forEach !== q)
        b.forEach(a, c);
      else if (ab(b))
        for (d = 0; d < b.length; d++)
          a.call(c, b[d], d);
      else
        for (d in b)
          b.hasOwnProperty(d) && a.call(c, b[d], d);
    return b;
  }
  function Qb(b) {
    var a = [], c;
    for (c in b)
      b.hasOwnProperty(c) && a.push(c);
    return a.sort();
  }
  function Sc(b, a, c) {
    for (var d = Qb(b), e = 0; e < d.length; e++)
      a.call(c, b[d[e]], d[e]);
    return d;
  }
  function Rb(b) {
    return function (a, c) {
      b(c, a);
    };
  }
  function bb() {
    for (var b = ka.length, a; b;) {
      b--;
      a = ka[b].charCodeAt(0);
      if (57 == a)
        return ka[b] = 'A', ka.join('');
      if (90 == a)
        ka[b] = '0';
      else
        return ka[b] = String.fromCharCode(a + 1), ka.join('');
    }
    ka.unshift('0');
    return ka.join('');
  }
  function Sb(b, a) {
    a ? b.$$hashKey = a : delete b.$$hashKey;
  }
  function D(b) {
    var a = b.$$hashKey;
    q(arguments, function (a) {
      a !== b && q(a, function (a, c) {
        b[c] = a;
      });
    });
    Sb(b, a);
    return b;
  }
  function Y(b) {
    return parseInt(b, 10);
  }
  function Tb(b, a) {
    return D(new (D(function () {
    }, { prototype: b }))(), a);
  }
  function C() {
  }
  function Da(b) {
    return b;
  }
  function aa(b) {
    return function () {
      return b;
    };
  }
  function E(b) {
    return 'undefined' === typeof b;
  }
  function B(b) {
    return 'undefined' !== typeof b;
  }
  function X(b) {
    return null != b && 'object' === typeof b;
  }
  function w(b) {
    return 'string' === typeof b;
  }
  function vb(b) {
    return 'number' === typeof b;
  }
  function Na(b) {
    return '[object Date]' === wa.call(b);
  }
  function M(b) {
    return '[object Array]' === wa.call(b);
  }
  function P(b) {
    return 'function' === typeof b;
  }
  function cb(b) {
    return '[object RegExp]' === wa.call(b);
  }
  function Ca(b) {
    return b && b.document && b.location && b.alert && b.setInterval;
  }
  function Tc(b) {
    return !(!b || !(b.nodeName || b.prop && b.attr && b.find));
  }
  function Uc(b, a, c) {
    var d = [];
    q(b, function (b, g, f) {
      d.push(a.call(c, b, g, f));
    });
    return d;
  }
  function db(b, a) {
    if (b.indexOf)
      return b.indexOf(a);
    for (var c = 0; c < b.length; c++)
      if (a === b[c])
        return c;
    return -1;
  }
  function Oa(b, a) {
    var c = db(b, a);
    0 <= c && b.splice(c, 1);
    return a;
  }
  function ba(b, a) {
    if (Ca(b) || b && b.$evalAsync && b.$watch)
      throw Pa('cpws');
    if (a) {
      if (b === a)
        throw Pa('cpi');
      if (M(b))
        for (var c = a.length = 0; c < b.length; c++)
          a.push(ba(b[c]));
      else {
        c = a.$$hashKey;
        q(a, function (b, c) {
          delete a[c];
        });
        for (var d in b)
          a[d] = ba(b[d]);
        Sb(a, c);
      }
    } else
      (a = b) && (M(b) ? a = ba(b, []) : Na(b) ? a = new Date(b.getTime()) : cb(b) ? a = RegExp(b.source) : X(b) && (a = ba(b, {})));
    return a;
  }
  function Ub(b, a) {
    a = a || {};
    for (var c in b)
      !b.hasOwnProperty(c) || '$' === c.charAt(0) && '$' === c.charAt(1) || (a[c] = b[c]);
    return a;
  }
  function xa(b, a) {
    if (b === a)
      return !0;
    if (null === b || null === a)
      return !1;
    if (b !== b && a !== a)
      return !0;
    var c = typeof b, d;
    if (c == typeof a && 'object' == c)
      if (M(b)) {
        if (!M(a))
          return !1;
        if ((c = b.length) == a.length) {
          for (d = 0; d < c; d++)
            if (!xa(b[d], a[d]))
              return !1;
          return !0;
        }
      } else {
        if (Na(b))
          return Na(a) && b.getTime() == a.getTime();
        if (cb(b) && cb(a))
          return b.toString() == a.toString();
        if (b && b.$evalAsync && b.$watch || a && a.$evalAsync && a.$watch || Ca(b) || Ca(a) || M(a))
          return !1;
        c = {};
        for (d in b)
          if ('$' !== d.charAt(0) && !P(b[d])) {
            if (!xa(b[d], a[d]))
              return !1;
            c[d] = !0;
          }
        for (d in a)
          if (!c.hasOwnProperty(d) && '$' !== d.charAt(0) && a[d] !== s && !P(a[d]))
            return !1;
        return !0;
      }
    return !1;
  }
  function Vb() {
    return U.securityPolicy && U.securityPolicy.isActive || U.querySelector && !(!U.querySelector('[ng-csp]') && !U.querySelector('[data-ng-csp]'));
  }
  function eb(b, a) {
    var c = 2 < arguments.length ? ya.call(arguments, 2) : [];
    return !P(a) || a instanceof RegExp ? a : c.length ? function () {
      return arguments.length ? a.apply(b, c.concat(ya.call(arguments, 0))) : a.apply(b, c);
    } : function () {
      return arguments.length ? a.apply(b, arguments) : a.call(b);
    };
  }
  function Vc(b, a) {
    var c = a;
    'string' === typeof b && '$' === b.charAt(0) ? c = s : Ca(a) ? c = '$WINDOW' : a && U === a ? c = '$DOCUMENT' : a && (a.$evalAsync && a.$watch) && (c = '$SCOPE');
    return c;
  }
  function qa(b, a) {
    return 'undefined' === typeof b ? s : JSON.stringify(b, Vc, a ? '  ' : null);
  }
  function Wb(b) {
    return w(b) ? JSON.parse(b) : b;
  }
  function Qa(b) {
    'function' === typeof b ? b = !0 : b && 0 !== b.length ? (b = K('' + b), b = !('f' == b || '0' == b || 'false' == b || 'no' == b || 'n' == b || '[]' == b)) : b = !1;
    return b;
  }
  function ha(b) {
    b = y(b).clone();
    try {
      b.empty();
    } catch (a) {
    }
    var c = y('<div>').append(b).html();
    try {
      return 3 === b[0].nodeType ? K(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
        return '<' + K(b);
      });
    } catch (d) {
      return K(c);
    }
  }
  function Xb(b) {
    try {
      return decodeURIComponent(b);
    } catch (a) {
    }
  }
  function Yb(b) {
    var a = {}, c, d;
    q((b || '').split('&'), function (b) {
      b && (c = b.split('='), d = Xb(c[0]), B(d) && (b = B(c[1]) ? Xb(c[1]) : !0, a[d] ? M(a[d]) ? a[d].push(b) : a[d] = [
        a[d],
        b
      ] : a[d] = b));
    });
    return a;
  }
  function Zb(b) {
    var a = [];
    q(b, function (b, d) {
      M(b) ? q(b, function (b) {
        a.push(za(d, !0) + (!0 === b ? '' : '=' + za(b, !0)));
      }) : a.push(za(d, !0) + (!0 === b ? '' : '=' + za(b, !0)));
    });
    return a.length ? a.join('&') : '';
  }
  function wb(b) {
    return za(b, !0).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
  }
  function za(b, a) {
    return encodeURIComponent(b).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, a ? '%20' : '+');
  }
  function Wc(b, a) {
    function c(a) {
      a && d.push(a);
    }
    var d = [b], e, g, f = [
        'ng:app',
        'ng-app',
        'x-ng-app',
        'data-ng-app'
      ], h = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
    q(f, function (a) {
      f[a] = !0;
      c(U.getElementById(a));
      a = a.replace(':', '\\:');
      b.querySelectorAll && (q(b.querySelectorAll('.' + a), c), q(b.querySelectorAll('.' + a + '\\:'), c), q(b.querySelectorAll('[' + a + ']'), c));
    });
    q(d, function (a) {
      if (!e) {
        var b = h.exec(' ' + a.className + ' ');
        b ? (e = a, g = (b[2] || '').replace(/\s+/g, ',')) : q(a.attributes, function (b) {
          !e && f[b.name] && (e = a, g = b.value);
        });
      }
    });
    e && a(e, g ? [g] : []);
  }
  function $b(b, a) {
    var c = function () {
        b = y(b);
        if (b.injector()) {
          var c = b[0] === U ? 'document' : ha(b);
          throw Pa('btstrpd', c);
        }
        a = a || [];
        a.unshift([
          '$provide',
          function (a) {
            a.value('$rootElement', b);
          }
        ]);
        a.unshift('ng');
        c = ac(a);
        c.invoke([
          '$rootScope',
          '$rootElement',
          '$compile',
          '$injector',
          '$animate',
          function (a, b, c, d, e) {
            a.$apply(function () {
              b.data('$injector', d);
              c(b)(a);
            });
          }
        ]);
        return c;
      }, d = /^NG_DEFER_BOOTSTRAP!/;
    if (O && !d.test(O.name))
      return c();
    O.name = O.name.replace(d, '');
    Ea.resumeBootstrap = function (b) {
      q(b, function (b) {
        a.push(b);
      });
      c();
    };
  }
  function fb(b, a) {
    a = a || '_';
    return b.replace(Xc, function (b, d) {
      return (d ? a : '') + b.toLowerCase();
    });
  }
  function xb(b, a, c) {
    if (!b)
      throw Pa('areq', a || '?', c || 'required');
    return b;
  }
  function Ra(b, a, c) {
    c && M(b) && (b = b[b.length - 1]);
    xb(P(b), a, 'not a function, got ' + (b && 'object' == typeof b ? b.constructor.name || 'Object' : typeof b));
    return b;
  }
  function Aa(b, a) {
    if ('hasOwnProperty' === b)
      throw Pa('badname', a);
  }
  function bc(b, a, c) {
    if (!a)
      return b;
    a = a.split('.');
    for (var d, e = b, g = a.length, f = 0; f < g; f++)
      d = a[f], b && (b = (e = b)[d]);
    return !c && P(b) ? eb(e, b) : b;
  }
  function yb(b) {
    var a = b[0];
    b = b[b.length - 1];
    if (a === b)
      return y(a);
    var c = [a];
    do {
      a = a.nextSibling;
      if (!a)
        break;
      c.push(a);
    } while (a !== b);
    return y(c);
  }
  function Yc(b) {
    var a = t('$injector'), c = t('ng');
    b = b.angular || (b.angular = {});
    b.$$minErr = b.$$minErr || t;
    return b.module || (b.module = function () {
      var b = {};
      return function (e, g, f) {
        if ('hasOwnProperty' === e)
          throw c('badname', 'module');
        g && b.hasOwnProperty(e) && (b[e] = null);
        return b[e] || (b[e] = function () {
          function b(a, d, e) {
            return function () {
              c[e || 'push']([
                a,
                d,
                arguments
              ]);
              return n;
            };
          }
          if (!g)
            throw a('nomod', e);
          var c = [], d = [], m = b('$injector', 'invoke'), n = {
              _invokeQueue: c,
              _runBlocks: d,
              requires: g,
              name: e,
              provider: b('$provide', 'provider'),
              factory: b('$provide', 'factory'),
              service: b('$provide', 'service'),
              value: b('$provide', 'value'),
              constant: b('$provide', 'constant', 'unshift'),
              animation: b('$animateProvider', 'register'),
              filter: b('$filterProvider', 'register'),
              controller: b('$controllerProvider', 'register'),
              directive: b('$compileProvider', 'directive'),
              config: m,
              run: function (a) {
                d.push(a);
                return this;
              }
            };
          f && m(f);
          return n;
        }());
      };
    }());
  }
  function Zc(b) {
    D(b, {
      bootstrap: $b,
      copy: ba,
      extend: D,
      equals: xa,
      element: y,
      forEach: q,
      injector: ac,
      noop: C,
      bind: eb,
      toJson: qa,
      fromJson: Wb,
      identity: Da,
      isUndefined: E,
      isDefined: B,
      isString: w,
      isFunction: P,
      isObject: X,
      isNumber: vb,
      isElement: Tc,
      isArray: M,
      version: $c,
      isDate: Na,
      lowercase: K,
      uppercase: Fa,
      callbacks: { counter: 0 },
      $$minErr: t,
      $$csp: Vb
    });
    Sa = Yc(O);
    try {
      Sa('ngLocale');
    } catch (a) {
      Sa('ngLocale', []).provider('$locale', ad);
    }
    Sa('ng', ['ngLocale'], [
      '$provide',
      function (a) {
        a.provider({ $$sanitizeUri: bd });
        a.provider('$compile', cc).directive({
          a: cd,
          input: dc,
          textarea: dc,
          form: dd,
          script: ed,
          select: fd,
          style: gd,
          option: hd,
          ngBind: id,
          ngBindHtml: jd,
          ngBindTemplate: kd,
          ngClass: ld,
          ngClassEven: md,
          ngClassOdd: nd,
          ngCloak: od,
          ngController: pd,
          ngForm: qd,
          ngHide: rd,
          ngIf: sd,
          ngInclude: td,
          ngInit: ud,
          ngNonBindable: vd,
          ngPluralize: wd,
          ngRepeat: xd,
          ngShow: yd,
          ngStyle: zd,
          ngSwitch: Ad,
          ngSwitchWhen: Bd,
          ngSwitchDefault: Cd,
          ngOptions: Dd,
          ngTransclude: Ed,
          ngModel: Fd,
          ngList: Gd,
          ngChange: Hd,
          required: ec,
          ngRequired: ec,
          ngValue: Id
        }).directive({ ngInclude: Jd }).directive(zb).directive(fc);
        a.provider({
          $anchorScroll: Kd,
          $animate: Ld,
          $browser: Md,
          $cacheFactory: Nd,
          $controller: Od,
          $document: Pd,
          $exceptionHandler: Qd,
          $filter: gc,
          $interpolate: Rd,
          $interval: Sd,
          $http: Td,
          $httpBackend: Ud,
          $location: Vd,
          $log: Wd,
          $parse: Xd,
          $rootScope: Yd,
          $q: Zd,
          $sce: $d,
          $sceDelegate: ae,
          $sniffer: be,
          $templateCache: ce,
          $timeout: de,
          $window: ee,
          $$rAF: fe,
          $$asyncCallback: ge
        });
      }
    ]);
  }
  function Ta(b) {
    return b.replace(he, function (a, b, d, e) {
      return e ? d.toUpperCase() : d;
    }).replace(ie, 'Moz$1');
  }
  function Ab(b, a, c, d) {
    function e(b) {
      var e = c && b ? [this.filter(b)] : [this], l = a, k, m, n, p, r, z;
      if (!d || null != b)
        for (; e.length;)
          for (k = e.shift(), m = 0, n = k.length; m < n; m++)
            for (p = y(k[m]), l ? p.triggerHandler('$destroy') : l = !l, r = 0, p = (z = p.children()).length; r < p; r++)
              e.push(Ga(z[r]));
      return g.apply(this, arguments);
    }
    var g = Ga.fn[b], g = g.$original || g;
    e.$original = g;
    Ga.fn[b] = e;
  }
  function N(b) {
    if (b instanceof N)
      return b;
    w(b) && (b = ca(b));
    if (!(this instanceof N)) {
      if (w(b) && '<' != b.charAt(0))
        throw Bb('nosel');
      return new N(b);
    }
    if (w(b)) {
      var a = b;
      b = U;
      var c;
      if (c = je.exec(a))
        b = [b.createElement(c[1])];
      else {
        var d = b, e;
        b = d.createDocumentFragment();
        c = [];
        if (Cb.test(a)) {
          d = b.appendChild(d.createElement('div'));
          e = (ke.exec(a) || [
            '',
            ''
          ])[1].toLowerCase();
          e = ea[e] || ea._default;
          d.innerHTML = '<div>&#160;</div>' + e[1] + a.replace(le, '<$1></$2>') + e[2];
          d.removeChild(d.firstChild);
          for (a = e[0]; a--;)
            d = d.lastChild;
          a = 0;
          for (e = d.childNodes.length; a < e; ++a)
            c.push(d.childNodes[a]);
          d = b.firstChild;
          d.textContent = '';
        } else
          c.push(d.createTextNode(a));
        b.textContent = '';
        b.innerHTML = '';
        b = c;
      }
      Db(this, b);
      y(U.createDocumentFragment()).append(this);
    } else
      Db(this, b);
  }
  function Eb(b) {
    return b.cloneNode(!0);
  }
  function Ha(b) {
    hc(b);
    var a = 0;
    for (b = b.childNodes || []; a < b.length; a++)
      Ha(b[a]);
  }
  function ic(b, a, c, d) {
    if (B(d))
      throw Bb('offargs');
    var e = la(b, 'events');
    la(b, 'handle') && (E(a) ? q(e, function (a, c) {
      Fb(b, c, a);
      delete e[c];
    }) : q(a.split(' '), function (a) {
      E(c) ? (Fb(b, a, e[a]), delete e[a]) : Oa(e[a] || [], c);
    }));
  }
  function hc(b, a) {
    var c = b[gb], d = Ua[c];
    d && (a ? delete Ua[c].data[a] : (d.handle && (d.events.$destroy && d.handle({}, '$destroy'), ic(b)), delete Ua[c], b[gb] = s));
  }
  function la(b, a, c) {
    var d = b[gb], d = Ua[d || -1];
    if (B(c))
      d || (b[gb] = d = ++me, d = Ua[d] = {}), d[a] = c;
    else
      return d && d[a];
  }
  function jc(b, a, c) {
    var d = la(b, 'data'), e = B(c), g = !e && B(a), f = g && !X(a);
    d || f || la(b, 'data', d = {});
    if (e)
      d[a] = c;
    else if (g) {
      if (f)
        return d && d[a];
      D(d, a);
    } else
      return d;
  }
  function Gb(b, a) {
    return b.getAttribute ? -1 < (' ' + (b.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').indexOf(' ' + a + ' ') : !1;
  }
  function hb(b, a) {
    a && b.setAttribute && q(a.split(' '), function (a) {
      b.setAttribute('class', ca((' ' + (b.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').replace(' ' + ca(a) + ' ', ' ')));
    });
  }
  function ib(b, a) {
    if (a && b.setAttribute) {
      var c = (' ' + (b.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ');
      q(a.split(' '), function (a) {
        a = ca(a);
        -1 === c.indexOf(' ' + a + ' ') && (c += a + ' ');
      });
      b.setAttribute('class', ca(c));
    }
  }
  function Db(b, a) {
    if (a) {
      a = a.nodeName || !B(a.length) || Ca(a) ? [a] : a;
      for (var c = 0; c < a.length; c++)
        b.push(a[c]);
    }
  }
  function kc(b, a) {
    return jb(b, '$' + (a || 'ngController') + 'Controller');
  }
  function jb(b, a, c) {
    b = y(b);
    9 == b[0].nodeType && (b = b.find('html'));
    for (a = M(a) ? a : [a]; b.length;) {
      for (var d = b[0], e = 0, g = a.length; e < g; e++)
        if ((c = b.data(a[e])) !== s)
          return c;
      b = y(d.parentNode || 11 === d.nodeType && d.host);
    }
  }
  function lc(b) {
    for (var a = 0, c = b.childNodes; a < c.length; a++)
      Ha(c[a]);
    for (; b.firstChild;)
      b.removeChild(b.firstChild);
  }
  function mc(b, a) {
    var c = kb[a.toLowerCase()];
    return c && nc[b.nodeName] && c;
  }
  function ne(b, a) {
    var c = function (c, e) {
      c.preventDefault || (c.preventDefault = function () {
        c.returnValue = !1;
      });
      c.stopPropagation || (c.stopPropagation = function () {
        c.cancelBubble = !0;
      });
      c.target || (c.target = c.srcElement || U);
      if (E(c.defaultPrevented)) {
        var g = c.preventDefault;
        c.preventDefault = function () {
          c.defaultPrevented = !0;
          g.call(c);
        };
        c.defaultPrevented = !1;
      }
      c.isDefaultPrevented = function () {
        return c.defaultPrevented || !1 === c.returnValue;
      };
      var f = Ub(a[e || c.type] || []);
      q(f, function (a) {
        a.call(b, c);
      });
      8 >= S ? (c.preventDefault = null, c.stopPropagation = null, c.isDefaultPrevented = null) : (delete c.preventDefault, delete c.stopPropagation, delete c.isDefaultPrevented);
    };
    c.elem = b;
    return c;
  }
  function Ia(b) {
    var a = typeof b, c;
    'object' == a && null !== b ? 'function' == typeof (c = b.$$hashKey) ? c = b.$$hashKey() : c === s && (c = b.$$hashKey = bb()) : c = b;
    return a + ':' + c;
  }
  function Va(b) {
    q(b, this.put, this);
  }
  function oc(b) {
    var a, c;
    'function' == typeof b ? (a = b.$inject) || (a = [], b.length && (c = b.toString().replace(oe, ''), c = c.match(pe), q(c[1].split(qe), function (b) {
      b.replace(re, function (b, c, d) {
        a.push(d);
      });
    })), b.$inject = a) : M(b) ? (c = b.length - 1, Ra(b[c], 'fn'), a = b.slice(0, c)) : Ra(b, 'fn', !0);
    return a;
  }
  function ac(b) {
    function a(a) {
      return function (b, c) {
        if (X(b))
          q(b, Rb(a));
        else
          return a(b, c);
      };
    }
    function c(a, b) {
      Aa(a, 'service');
      if (P(b) || M(b))
        b = n.instantiate(b);
      if (!b.$get)
        throw Wa('pget', a);
      return m[a + h] = b;
    }
    function d(a, b) {
      return c(a, { $get: b });
    }
    function e(a) {
      var b = [], c, d, g, h;
      q(a, function (a) {
        if (!k.get(a)) {
          k.put(a, !0);
          try {
            if (w(a))
              for (c = Sa(a), b = b.concat(e(c.requires)).concat(c._runBlocks), d = c._invokeQueue, g = 0, h = d.length; g < h; g++) {
                var f = d[g], l = n.get(f[0]);
                l[f[1]].apply(l, f[2]);
              }
            else
              P(a) ? b.push(n.invoke(a)) : M(a) ? b.push(n.invoke(a)) : Ra(a, 'module');
          } catch (m) {
            throw M(a) && (a = a[a.length - 1]), m.message && (m.stack && -1 == m.stack.indexOf(m.message)) && (m = m.message + '\n' + m.stack), Wa('modulerr', a, m.stack || m.message || m);
          }
        }
      });
      return b;
    }
    function g(a, b) {
      function c(d) {
        if (a.hasOwnProperty(d)) {
          if (a[d] === f)
            throw Wa('cdep', l.join(' <- '));
          return a[d];
        }
        try {
          return l.unshift(d), a[d] = f, a[d] = b(d);
        } catch (e) {
          throw a[d] === f && delete a[d], e;
        } finally {
          l.shift();
        }
      }
      function d(a, b, e) {
        var g = [], h = oc(a), f, l, k;
        l = 0;
        for (f = h.length; l < f; l++) {
          k = h[l];
          if ('string' !== typeof k)
            throw Wa('itkn', k);
          g.push(e && e.hasOwnProperty(k) ? e[k] : c(k));
        }
        a.$inject || (a = a[f]);
        return a.apply(b, g);
      }
      return {
        invoke: d,
        instantiate: function (a, b) {
          var c = function () {
            }, e;
          c.prototype = (M(a) ? a[a.length - 1] : a).prototype;
          c = new c();
          e = d(a, c, b);
          return X(e) || P(e) ? e : c;
        },
        get: c,
        annotate: oc,
        has: function (b) {
          return m.hasOwnProperty(b + h) || a.hasOwnProperty(b);
        }
      };
    }
    var f = {}, h = 'Provider', l = [], k = new Va(), m = {
        $provide: {
          provider: a(c),
          factory: a(d),
          service: a(function (a, b) {
            return d(a, [
              '$injector',
              function (a) {
                return a.instantiate(b);
              }
            ]);
          }),
          value: a(function (a, b) {
            return d(a, aa(b));
          }),
          constant: a(function (a, b) {
            Aa(a, 'constant');
            m[a] = b;
            p[a] = b;
          }),
          decorator: function (a, b) {
            var c = n.get(a + h), d = c.$get;
            c.$get = function () {
              var a = r.invoke(d, c);
              return r.invoke(b, null, { $delegate: a });
            };
          }
        }
      }, n = m.$injector = g(m, function () {
        throw Wa('unpr', l.join(' <- '));
      }), p = {}, r = p.$injector = g(p, function (a) {
        a = n.get(a + h);
        return r.invoke(a.$get, a);
      });
    q(e(b), function (a) {
      r.invoke(a || C);
    });
    return r;
  }
  function Kd() {
    var b = !0;
    this.disableAutoScrolling = function () {
      b = !1;
    };
    this.$get = [
      '$window',
      '$location',
      '$rootScope',
      function (a, c, d) {
        function e(a) {
          var b = null;
          q(a, function (a) {
            b || 'a' !== K(a.nodeName) || (b = a);
          });
          return b;
        }
        function g() {
          var b = c.hash(), d;
          b ? (d = f.getElementById(b)) ? d.scrollIntoView() : (d = e(f.getElementsByName(b))) ? d.scrollIntoView() : 'top' === b && a.scrollTo(0, 0) : a.scrollTo(0, 0);
        }
        var f = a.document;
        b && d.$watch(function () {
          return c.hash();
        }, function () {
          d.$evalAsync(g);
        });
        return g;
      }
    ];
  }
  function ge() {
    this.$get = [
      '$$rAF',
      '$timeout',
      function (b, a) {
        return b.supported ? function (a) {
          return b(a);
        } : function (b) {
          return a(b, 0, !1);
        };
      }
    ];
  }
  function se(b, a, c, d) {
    function e(a) {
      try {
        a.apply(null, ya.call(arguments, 1));
      } finally {
        if (z--, 0 === z)
          for (; u.length;)
            try {
              u.pop()();
            } catch (b) {
              c.error(b);
            }
      }
    }
    function g(a, b) {
      (function T() {
        q(F, function (a) {
          a();
        });
        v = b(T, a);
      }());
    }
    function f() {
      x = null;
      J != h.url() && (J = h.url(), q(ma, function (a) {
        a(h.url());
      }));
    }
    var h = this, l = a[0], k = b.location, m = b.history, n = b.setTimeout, p = b.clearTimeout, r = {};
    h.isMock = !1;
    var z = 0, u = [];
    h.$$completeOutstandingRequest = e;
    h.$$incOutstandingRequestCount = function () {
      z++;
    };
    h.notifyWhenNoOutstandingRequests = function (a) {
      q(F, function (a) {
        a();
      });
      0 === z ? a() : u.push(a);
    };
    var F = [], v;
    h.addPollFn = function (a) {
      E(v) && g(100, n);
      F.push(a);
      return a;
    };
    var J = k.href, A = a.find('base'), x = null;
    h.url = function (a, c) {
      k !== b.location && (k = b.location);
      m !== b.history && (m = b.history);
      if (a) {
        if (J != a)
          return J = a, d.history ? c ? m.replaceState(null, '', a) : (m.pushState(null, '', a), A.attr('href', A.attr('href'))) : (x = a, c ? k.replace(a) : k.href = a), h;
      } else
        return x || k.href.replace(/%27/g, '\'');
    };
    var ma = [], L = !1;
    h.onUrlChange = function (a) {
      if (!L) {
        if (d.history)
          y(b).on('popstate', f);
        if (d.hashchange)
          y(b).on('hashchange', f);
        else
          h.addPollFn(f);
        L = !0;
      }
      ma.push(a);
      return a;
    };
    h.baseHref = function () {
      var a = A.attr('href');
      return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, '') : '';
    };
    var Q = {}, da = '', H = h.baseHref();
    h.cookies = function (a, b) {
      var d, e, g, h;
      if (a)
        b === s ? l.cookie = escape(a) + '=;path=' + H + ';expires=Thu, 01 Jan 1970 00:00:00 GMT' : w(b) && (d = (l.cookie = escape(a) + '=' + escape(b) + ';path=' + H).length + 1, 4096 < d && c.warn('Cookie \'' + a + '\' possibly not set or overflowed because it was too large (' + d + ' > 4096 bytes)!'));
      else {
        if (l.cookie !== da)
          for (da = l.cookie, d = da.split('; '), Q = {}, g = 0; g < d.length; g++)
            e = d[g], h = e.indexOf('='), 0 < h && (a = unescape(e.substring(0, h)), Q[a] === s && (Q[a] = unescape(e.substring(h + 1))));
        return Q;
      }
    };
    h.defer = function (a, b) {
      var c;
      z++;
      c = n(function () {
        delete r[c];
        e(a);
      }, b || 0);
      r[c] = !0;
      return c;
    };
    h.defer.cancel = function (a) {
      return r[a] ? (delete r[a], p(a), e(C), !0) : !1;
    };
  }
  function Md() {
    this.$get = [
      '$window',
      '$log',
      '$sniffer',
      '$document',
      function (b, a, c, d) {
        return new se(b, d, a, c);
      }
    ];
  }
  function Nd() {
    this.$get = function () {
      function b(b, d) {
        function e(a) {
          a != n && (p ? p == a && (p = a.n) : p = a, g(a.n, a.p), g(a, n), n = a, n.n = null);
        }
        function g(a, b) {
          a != b && (a && (a.p = b), b && (b.n = a));
        }
        if (b in a)
          throw t('$cacheFactory')('iid', b);
        var f = 0, h = D({}, d, { id: b }), l = {}, k = d && d.capacity || Number.MAX_VALUE, m = {}, n = null, p = null;
        return a[b] = {
          put: function (a, b) {
            if (k < Number.MAX_VALUE) {
              var c = m[a] || (m[a] = { key: a });
              e(c);
            }
            if (!E(b))
              return a in l || f++, l[a] = b, f > k && this.remove(p.key), b;
          },
          get: function (a) {
            if (k < Number.MAX_VALUE) {
              var b = m[a];
              if (!b)
                return;
              e(b);
            }
            return l[a];
          },
          remove: function (a) {
            if (k < Number.MAX_VALUE) {
              var b = m[a];
              if (!b)
                return;
              b == n && (n = b.p);
              b == p && (p = b.n);
              g(b.n, b.p);
              delete m[a];
            }
            delete l[a];
            f--;
          },
          removeAll: function () {
            l = {};
            f = 0;
            m = {};
            n = p = null;
          },
          destroy: function () {
            m = h = l = null;
            delete a[b];
          },
          info: function () {
            return D({}, h, { size: f });
          }
        };
      }
      var a = {};
      b.info = function () {
        var b = {};
        q(a, function (a, e) {
          b[e] = a.info();
        });
        return b;
      };
      b.get = function (b) {
        return a[b];
      };
      return b;
    };
  }
  function ce() {
    this.$get = [
      '$cacheFactory',
      function (b) {
        return b('templates');
      }
    ];
  }
  function cc(b, a) {
    var c = {}, d = 'Directive', e = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/, g = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/, f = /^(on[a-z]+|formaction)$/;
    this.directive = function l(a, e) {
      Aa(a, 'directive');
      w(a) ? (xb(e, 'directiveFactory'), c.hasOwnProperty(a) || (c[a] = [], b.factory(a + d, [
        '$injector',
        '$exceptionHandler',
        function (b, d) {
          var e = [];
          q(c[a], function (c, g) {
            try {
              var f = b.invoke(c);
              P(f) ? f = { compile: aa(f) } : !f.compile && f.link && (f.compile = aa(f.link));
              f.priority = f.priority || 0;
              f.index = g;
              f.name = f.name || a;
              f.require = f.require || f.controller && f.name;
              f.restrict = f.restrict || 'A';
              e.push(f);
            } catch (l) {
              d(l);
            }
          });
          return e;
        }
      ])), c[a].push(e)) : q(a, Rb(l));
      return this;
    };
    this.aHrefSanitizationWhitelist = function (b) {
      return B(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist();
    };
    this.imgSrcSanitizationWhitelist = function (b) {
      return B(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist();
    };
    this.$get = [
      '$injector',
      '$interpolate',
      '$exceptionHandler',
      '$http',
      '$templateCache',
      '$parse',
      '$controller',
      '$rootScope',
      '$document',
      '$sce',
      '$animate',
      '$$sanitizeUri',
      function (a, b, m, n, p, r, z, u, F, v, J, A) {
        function x(a, b, c, d, e) {
          a instanceof y || (a = y(a));
          q(a, function (b, c) {
            3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = y(b).wrap('<span></span>').parent()[0]);
          });
          var g = L(a, b, a, c, d, e);
          ma(a, 'ng-scope');
          return function (b, c, d) {
            xb(b, 'scope');
            var e = c ? Ja.clone.call(a) : a;
            q(d, function (a, b) {
              e.data('$' + b + 'Controller', a);
            });
            d = 0;
            for (var f = e.length; d < f; d++) {
              var l = e[d].nodeType;
              1 !== l && 9 !== l || e.eq(d).data('$scope', b);
            }
            c && c(e, b);
            g && g(b, e, e);
            return e;
          };
        }
        function ma(a, b) {
          try {
            a.addClass(b);
          } catch (c) {
          }
        }
        function L(a, b, c, d, e, g) {
          function f(a, c, d, e) {
            var g, k, m, r, n, p, z;
            g = c.length;
            var I = Array(g);
            for (n = 0; n < g; n++)
              I[n] = c[n];
            z = n = 0;
            for (p = l.length; n < p; z++)
              k = I[z], c = l[n++], g = l[n++], m = y(k), c ? (c.scope ? (r = a.$new(), m.data('$scope', r)) : r = a, (m = c.transclude) || !e && b ? c(g, r, k, d, Q(a, m || b)) : c(g, r, k, d, e)) : g && g(a, k.childNodes, s, e);
          }
          for (var l = [], k, m, r, n, p = 0; p < a.length; p++)
            k = new Hb(), m = da(a[p], [], k, 0 === p ? d : s, e), (g = m.length ? ia(m, a[p], k, b, c, null, [], [], g) : null) && g.scope && ma(y(a[p]), 'ng-scope'), k = g && g.terminal || !(r = a[p].childNodes) || !r.length ? null : L(r, g ? g.transclude : b), l.push(g, k), n = n || g || k, g = null;
          return n ? f : null;
        }
        function Q(a, b) {
          return function (c, d, e) {
            var g = !1;
            c || (c = a.$new(), g = c.$$transcluded = !0);
            d = b(c, d, e);
            if (g)
              d.on('$destroy', eb(c, c.$destroy));
            return d;
          };
        }
        function da(a, b, c, d, f) {
          var k = c.$attr, l;
          switch (a.nodeType) {
          case 1:
            T(b, na(Ka(a).toLowerCase()), 'E', d, f);
            var m, r, n;
            l = a.attributes;
            for (var p = 0, z = l && l.length; p < z; p++) {
              var u = !1, F = !1;
              m = l[p];
              if (!S || 8 <= S || m.specified) {
                r = m.name;
                n = na(r);
                W.test(n) && (r = fb(n.substr(6), '-'));
                var J = n.replace(/(Start|End)$/, '');
                n === J + 'Start' && (u = r, F = r.substr(0, r.length - 5) + 'end', r = r.substr(0, r.length - 6));
                n = na(r.toLowerCase());
                k[n] = r;
                c[n] = m = ca(m.value);
                mc(a, n) && (c[n] = !0);
                N(a, b, m, n);
                T(b, n, 'A', d, f, u, F);
              }
            }
            a = a.className;
            if (w(a) && '' !== a)
              for (; l = g.exec(a);)
                n = na(l[2]), T(b, n, 'C', d, f) && (c[n] = ca(l[3])), a = a.substr(l.index + l[0].length);
            break;
          case 3:
            t(b, a.nodeValue);
            break;
          case 8:
            try {
              if (l = e.exec(a.nodeValue))
                n = na(l[1]), T(b, n, 'M', d, f) && (c[n] = ca(l[2]));
            } catch (x) {
            }
          }
          b.sort(E);
          return b;
        }
        function H(a, b, c) {
          var d = [], e = 0;
          if (b && a.hasAttribute && a.hasAttribute(b)) {
            do {
              if (!a)
                throw ja('uterdir', b, c);
              1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
              d.push(a);
              a = a.nextSibling;
            } while (0 < e);
          } else
            d.push(a);
          return y(d);
        }
        function R(a, b, c) {
          return function (d, e, g, f, l) {
            e = H(e[0], b, c);
            return a(d, e, g, f, l);
          };
        }
        function ia(a, c, d, e, g, f, l, n, p) {
          function u(a, b, c, d) {
            if (a) {
              c && (a = R(a, c, d));
              a.require = G.require;
              if (Q === G || G.$$isolateScope)
                a = qc(a, { isolateScope: !0 });
              l.push(a);
            }
            if (b) {
              c && (b = R(b, c, d));
              b.require = G.require;
              if (Q === G || G.$$isolateScope)
                b = qc(b, { isolateScope: !0 });
              n.push(b);
            }
          }
          function F(a, b, c) {
            var d, e = 'data', g = !1;
            if (w(a)) {
              for (; '^' == (d = a.charAt(0)) || '?' == d;)
                a = a.substr(1), '^' == d && (e = 'inheritedData'), g = g || '?' == d;
              d = null;
              c && 'data' === e && (d = c[a]);
              d = d || b[e]('$' + a + 'Controller');
              if (!d && !g)
                throw ja('ctreq', a, t);
            } else
              M(a) && (d = [], q(a, function (a) {
                d.push(F(a, b, c));
              }));
            return d;
          }
          function J(a, e, g, f, p) {
            function u(a, b) {
              var c;
              2 > arguments.length && (b = a, a = s);
              D && (c = lb);
              return p(a, b, c);
            }
            var I, x, v, A, R, H, lb = {}, da;
            I = c === g ? d : Ub(d, new Hb(y(g), d.$attr));
            x = I.$$element;
            if (Q) {
              var T = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
              f = y(g);
              H = e.$new(!0);
              ia && ia === Q.$$originalDirective ? f.data('$isolateScope', H) : f.data('$isolateScopeNoTemplate', H);
              ma(f, 'ng-isolate-scope');
              q(Q.scope, function (a, c) {
                var d = a.match(T) || [], g = d[3] || c, f = '?' == d[2], d = d[1], l, m, n, p;
                H.$$isolateBindings[c] = d + g;
                switch (d) {
                case '@':
                  I.$observe(g, function (a) {
                    H[c] = a;
                  });
                  I.$$observers[g].$$scope = e;
                  I[g] && (H[c] = b(I[g])(e));
                  break;
                case '=':
                  if (f && !I[g])
                    break;
                  m = r(I[g]);
                  p = m.literal ? xa : function (a, b) {
                    return a === b;
                  };
                  n = m.assign || function () {
                    l = H[c] = m(e);
                    throw ja('nonassign', I[g], Q.name);
                  };
                  l = H[c] = m(e);
                  H.$watch(function () {
                    var a = m(e);
                    p(a, H[c]) || (p(a, l) ? n(e, a = H[c]) : H[c] = a);
                    return l = a;
                  }, null, m.literal);
                  break;
                case '&':
                  m = r(I[g]);
                  H[c] = function (a) {
                    return m(e, a);
                  };
                  break;
                default:
                  throw ja('iscp', Q.name, c, a);
                }
              });
            }
            da = p && u;
            L && q(L, function (a) {
              var b = {
                  $scope: a === Q || a.$$isolateScope ? H : e,
                  $element: x,
                  $attrs: I,
                  $transclude: da
                }, c;
              R = a.controller;
              '@' == R && (R = I[a.name]);
              c = z(R, b);
              lb[a.name] = c;
              D || x.data('$' + a.name + 'Controller', c);
              a.controllerAs && (b.$scope[a.controllerAs] = c);
            });
            f = 0;
            for (v = l.length; f < v; f++)
              try {
                A = l[f], A(A.isolateScope ? H : e, x, I, A.require && F(A.require, x, lb), da);
              } catch (G) {
                m(G, ha(x));
              }
            f = e;
            Q && (Q.template || null === Q.templateUrl) && (f = H);
            a && a(f, g.childNodes, s, p);
            for (f = n.length - 1; 0 <= f; f--)
              try {
                A = n[f], A(A.isolateScope ? H : e, x, I, A.require && F(A.require, x, lb), da);
              } catch (B) {
                m(B, ha(x));
              }
          }
          p = p || {};
          for (var v = -Number.MAX_VALUE, A, L = p.controllerDirectives, Q = p.newIsolateScopeDirective, ia = p.templateDirective, T = p.nonTlbTranscludeDirective, E = !1, D = p.hasElementTranscludeDirective, Z = d.$$element = y(c), G, t, V, Xa = e, O, N = 0, S = a.length; N < S; N++) {
            G = a[N];
            var ra = G.$$start, W = G.$$end;
            ra && (Z = H(c, ra, W));
            V = s;
            if (v > G.priority)
              break;
            if (V = G.scope)
              A = A || G, G.templateUrl || (K('new/isolated scope', Q, G, Z), X(V) && (Q = G));
            t = G.name;
            !G.templateUrl && G.controller && (V = G.controller, L = L || {}, K('\'' + t + '\' controller', L[t], G, Z), L[t] = G);
            if (V = G.transclude)
              E = !0, G.$$tlb || (K('transclusion', T, G, Z), T = G), 'element' == V ? (D = !0, v = G.priority, V = H(c, ra, W), Z = d.$$element = y(U.createComment(' ' + t + ': ' + d[t] + ' ')), c = Z[0], mb(g, y(ya.call(V, 0)), c), Xa = x(V, e, v, f && f.name, { nonTlbTranscludeDirective: T })) : (V = y(Eb(c)).contents(), Z.empty(), Xa = x(V, e));
            if (G.template)
              if (K('template', ia, G, Z), ia = G, V = P(G.template) ? G.template(Z, d) : G.template, V = Y(V), G.replace) {
                f = G;
                V = Cb.test(V) ? y(V) : [];
                c = V[0];
                if (1 != V.length || 1 !== c.nodeType)
                  throw ja('tplrt', t, '');
                mb(g, Z, c);
                S = { $attr: {} };
                V = da(c, [], S);
                var $ = a.splice(N + 1, a.length - (N + 1));
                Q && pc(V);
                a = a.concat(V).concat($);
                B(d, S);
                S = a.length;
              } else
                Z.html(V);
            if (G.templateUrl)
              K('template', ia, G, Z), ia = G, G.replace && (f = G), J = C(a.splice(N, a.length - N), Z, d, g, Xa, l, n, {
                controllerDirectives: L,
                newIsolateScopeDirective: Q,
                templateDirective: ia,
                nonTlbTranscludeDirective: T
              }), S = a.length;
            else if (G.compile)
              try {
                O = G.compile(Z, d, Xa), P(O) ? u(null, O, ra, W) : O && u(O.pre, O.post, ra, W);
              } catch (aa) {
                m(aa, ha(Z));
              }
            G.terminal && (J.terminal = !0, v = Math.max(v, G.priority));
          }
          J.scope = A && !0 === A.scope;
          J.transclude = E && Xa;
          p.hasElementTranscludeDirective = D;
          return J;
        }
        function pc(a) {
          for (var b = 0, c = a.length; b < c; b++)
            a[b] = Tb(a[b], { $$isolateScope: !0 });
        }
        function T(b, e, g, f, k, n, r) {
          if (e === k)
            return null;
          k = null;
          if (c.hasOwnProperty(e)) {
            var p;
            e = a.get(e + d);
            for (var z = 0, u = e.length; z < u; z++)
              try {
                p = e[z], (f === s || f > p.priority) && -1 != p.restrict.indexOf(g) && (n && (p = Tb(p, {
                  $$start: n,
                  $$end: r
                })), b.push(p), k = p);
              } catch (F) {
                m(F);
              }
          }
          return k;
        }
        function B(a, b) {
          var c = b.$attr, d = a.$attr, e = a.$$element;
          q(a, function (d, e) {
            '$' != e.charAt(0) && (b[e] && (d += ('style' === e ? ';' : ' ') + b[e]), a.$set(e, d, !0, c[e]));
          });
          q(b, function (b, g) {
            'class' == g ? (ma(e, b), a['class'] = (a['class'] ? a['class'] + ' ' : '') + b) : 'style' == g ? (e.attr('style', e.attr('style') + ';' + b), a.style = (a.style ? a.style + ';' : '') + b) : '$' == g.charAt(0) || a.hasOwnProperty(g) || (a[g] = b, d[g] = c[g]);
          });
        }
        function C(a, b, c, d, e, g, f, l) {
          var k = [], m, r, z = b[0], u = a.shift(), F = D({}, u, {
              templateUrl: null,
              transclude: null,
              replace: null,
              $$originalDirective: u
            }), x = P(u.templateUrl) ? u.templateUrl(b, c) : u.templateUrl;
          b.empty();
          n.get(v.getTrustedResourceUrl(x), { cache: p }).success(function (n) {
            var p, J;
            n = Y(n);
            if (u.replace) {
              n = Cb.test(n) ? y(n) : [];
              p = n[0];
              if (1 != n.length || 1 !== p.nodeType)
                throw ja('tplrt', u.name, x);
              n = { $attr: {} };
              mb(d, b, p);
              var v = da(p, [], n);
              X(u.scope) && pc(v);
              a = v.concat(a);
              B(c, n);
            } else
              p = z, b.html(n);
            a.unshift(F);
            m = ia(a, p, c, e, b, u, g, f, l);
            q(d, function (a, c) {
              a == p && (d[c] = b[0]);
            });
            for (r = L(b[0].childNodes, e); k.length;) {
              n = k.shift();
              J = k.shift();
              var A = k.shift(), R = k.shift(), v = b[0];
              if (J !== z) {
                var H = J.className;
                l.hasElementTranscludeDirective && u.replace || (v = Eb(p));
                mb(A, y(J), v);
                ma(y(v), H);
              }
              J = m.transclude ? Q(n, m.transclude) : R;
              m(r, n, v, d, J);
            }
            k = null;
          }).error(function (a, b, c, d) {
            throw ja('tpload', d.url);
          });
          return function (a, b, c, d, e) {
            k ? (k.push(b), k.push(c), k.push(d), k.push(e)) : m(r, b, c, d, e);
          };
        }
        function E(a, b) {
          var c = b.priority - a.priority;
          return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
        }
        function K(a, b, c, d) {
          if (b)
            throw ja('multidir', b.name, c.name, a, ha(d));
        }
        function t(a, c) {
          var d = b(c, !0);
          d && a.push({
            priority: 0,
            compile: aa(function (a, b) {
              var c = b.parent(), e = c.data('$binding') || [];
              e.push(d);
              ma(c.data('$binding', e), 'ng-binding');
              a.$watch(d, function (a) {
                b[0].nodeValue = a;
              });
            })
          });
        }
        function O(a, b) {
          if ('srcdoc' == b)
            return v.HTML;
          var c = Ka(a);
          if ('xlinkHref' == b || 'FORM' == c && 'action' == b || 'IMG' != c && ('src' == b || 'ngSrc' == b))
            return v.RESOURCE_URL;
        }
        function N(a, c, d, e) {
          var g = b(d, !0);
          if (g) {
            if ('multiple' === e && 'SELECT' === Ka(a))
              throw ja('selmulti', ha(a));
            c.push({
              priority: 100,
              compile: function () {
                return {
                  pre: function (c, d, l) {
                    d = l.$$observers || (l.$$observers = {});
                    if (f.test(e))
                      throw ja('nodomevents');
                    if (g = b(l[e], !0, O(a, e)))
                      l[e] = g(c), (d[e] || (d[e] = [])).$$inter = !0, (l.$$observers && l.$$observers[e].$$scope || c).$watch(g, function (a, b) {
                        'class' === e && a != b ? l.$updateClass(a, b) : l.$set(e, a);
                      });
                  }
                };
              }
            });
          }
        }
        function mb(a, b, c) {
          var d = b[0], e = b.length, g = d.parentNode, f, l;
          if (a)
            for (f = 0, l = a.length; f < l; f++)
              if (a[f] == d) {
                a[f++] = c;
                l = f + e - 1;
                for (var k = a.length; f < k; f++, l++)
                  l < k ? a[f] = a[l] : delete a[f];
                a.length -= e - 1;
                break;
              }
          g && g.replaceChild(c, d);
          a = U.createDocumentFragment();
          a.appendChild(d);
          c[y.expando] = d[y.expando];
          d = 1;
          for (e = b.length; d < e; d++)
            g = b[d], y(g).remove(), a.appendChild(g), delete b[d];
          b[0] = c;
          b.length = 1;
        }
        function qc(a, b) {
          return D(function () {
            return a.apply(null, arguments);
          }, a, b);
        }
        var Hb = function (a, b) {
          this.$$element = a;
          this.$attr = b || {};
        };
        Hb.prototype = {
          $normalize: na,
          $addClass: function (a) {
            a && 0 < a.length && J.addClass(this.$$element, a);
          },
          $removeClass: function (a) {
            a && 0 < a.length && J.removeClass(this.$$element, a);
          },
          $updateClass: function (a, b) {
            var c = rc(a, b), d = rc(b, a);
            0 === c.length ? J.removeClass(this.$$element, d) : 0 === d.length ? J.addClass(this.$$element, c) : J.setClass(this.$$element, c, d);
          },
          $set: function (a, b, c, d) {
            var e = mc(this.$$element[0], a);
            e && (this.$$element.prop(a, b), d = e);
            this[a] = b;
            d ? this.$attr[a] = d : (d = this.$attr[a]) || (this.$attr[a] = d = fb(a, '-'));
            e = Ka(this.$$element);
            if ('A' === e && 'href' === a || 'IMG' === e && 'src' === a)
              this[a] = b = A(b, 'src' === a);
            !1 !== c && (null === b || b === s ? this.$$element.removeAttr(d) : this.$$element.attr(d, b));
            (c = this.$$observers) && q(c[a], function (a) {
              try {
                a(b);
              } catch (c) {
                m(c);
              }
            });
          },
          $observe: function (a, b) {
            var c = this, d = c.$$observers || (c.$$observers = {}), e = d[a] || (d[a] = []);
            e.push(b);
            u.$evalAsync(function () {
              e.$$inter || b(c[a]);
            });
            return b;
          }
        };
        var Z = b.startSymbol(), ra = b.endSymbol(), Y = '{{' == Z || '}}' == ra ? Da : function (a) {
            return a.replace(/\{\{/g, Z).replace(/}}/g, ra);
          }, W = /^ngAttr[A-Z]/;
        return x;
      }
    ];
  }
  function na(b) {
    return Ta(b.replace(te, ''));
  }
  function rc(b, a) {
    var c = '', d = b.split(/\s+/), e = a.split(/\s+/), g = 0;
    a:
      for (; g < d.length; g++) {
        for (var f = d[g], h = 0; h < e.length; h++)
          if (f == e[h])
            continue a;
        c += (0 < c.length ? ' ' : '') + f;
      }
    return c;
  }
  function Od() {
    var b = {}, a = /^(\S+)(\s+as\s+(\w+))?$/;
    this.register = function (a, d) {
      Aa(a, 'controller');
      X(a) ? D(b, a) : b[a] = d;
    };
    this.$get = [
      '$injector',
      '$window',
      function (c, d) {
        return function (e, g) {
          var f, h, l;
          w(e) && (f = e.match(a), h = f[1], l = f[3], e = b.hasOwnProperty(h) ? b[h] : bc(g.$scope, h, !0) || bc(d, h, !0), Ra(e, h, !0));
          f = c.instantiate(e, g);
          if (l) {
            if (!g || 'object' != typeof g.$scope)
              throw t('$controller')('noscp', h || e.name, l);
            g.$scope[l] = f;
          }
          return f;
        };
      }
    ];
  }
  function Pd() {
    this.$get = [
      '$window',
      function (b) {
        return y(b.document);
      }
    ];
  }
  function Qd() {
    this.$get = [
      '$log',
      function (b) {
        return function (a, c) {
          b.error.apply(b, arguments);
        };
      }
    ];
  }
  function sc(b) {
    var a = {}, c, d, e;
    if (!b)
      return a;
    q(b.split('\n'), function (b) {
      e = b.indexOf(':');
      c = K(ca(b.substr(0, e)));
      d = ca(b.substr(e + 1));
      c && (a[c] = a[c] ? a[c] + (', ' + d) : d);
    });
    return a;
  }
  function tc(b) {
    var a = X(b) ? b : s;
    return function (c) {
      a || (a = sc(b));
      return c ? a[K(c)] || null : a;
    };
  }
  function uc(b, a, c) {
    if (P(c))
      return c(b, a);
    q(c, function (c) {
      b = c(b, a);
    });
    return b;
  }
  function Td() {
    var b = /^\s*(\[|\{[^\{])/, a = /[\}\]]\s*$/, c = /^\)\]\}',?\n/, d = { 'Content-Type': 'application/json;charset=utf-8' }, e = this.defaults = {
        transformResponse: [function (d) {
            w(d) && (d = d.replace(c, ''), b.test(d) && a.test(d) && (d = Wb(d)));
            return d;
          }],
        transformRequest: [function (a) {
            return X(a) && '[object File]' !== wa.call(a) && '[object Blob]' !== wa.call(a) ? qa(a) : a;
          }],
        headers: {
          common: { Accept: 'application/json, text/plain, */*' },
          post: ba(d),
          put: ba(d),
          patch: ba(d)
        },
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN'
      }, g = this.interceptors = [], f = this.responseInterceptors = [];
    this.$get = [
      '$httpBackend',
      '$browser',
      '$cacheFactory',
      '$rootScope',
      '$q',
      '$injector',
      function (a, b, c, d, n, p) {
        function r(a) {
          function c(a) {
            var b = D({}, a, { data: uc(a.data, a.headers, d.transformResponse) });
            return 200 <= a.status && 300 > a.status ? b : n.reject(b);
          }
          var d = {
              method: 'get',
              transformRequest: e.transformRequest,
              transformResponse: e.transformResponse
            }, g = function (a) {
              function b(a) {
                var c;
                q(a, function (b, d) {
                  P(b) && (c = b(), null != c ? a[d] = c : delete a[d]);
                });
              }
              var c = e.headers, d = D({}, a.headers), g, f, c = D({}, c.common, c[K(a.method)]);
              b(c);
              b(d);
              a:
                for (g in c) {
                  a = K(g);
                  for (f in d)
                    if (K(f) === a)
                      continue a;
                  d[g] = c[g];
                }
              return d;
            }(a);
          D(d, a);
          d.headers = g;
          d.method = Fa(d.method);
          (a = Ib(d.url) ? b.cookies()[d.xsrfCookieName || e.xsrfCookieName] : s) && (g[d.xsrfHeaderName || e.xsrfHeaderName] = a);
          var f = [
              function (a) {
                g = a.headers;
                var b = uc(a.data, tc(g), a.transformRequest);
                E(a.data) && q(g, function (a, b) {
                  'content-type' === K(b) && delete g[b];
                });
                E(a.withCredentials) && !E(e.withCredentials) && (a.withCredentials = e.withCredentials);
                return z(a, b, g).then(c, c);
              },
              s
            ], h = n.when(d);
          for (q(v, function (a) {
              (a.request || a.requestError) && f.unshift(a.request, a.requestError);
              (a.response || a.responseError) && f.push(a.response, a.responseError);
            }); f.length;) {
            a = f.shift();
            var k = f.shift(), h = h.then(a, k);
          }
          h.success = function (a) {
            h.then(function (b) {
              a(b.data, b.status, b.headers, d);
            });
            return h;
          };
          h.error = function (a) {
            h.then(null, function (b) {
              a(b.data, b.status, b.headers, d);
            });
            return h;
          };
          return h;
        }
        function z(b, c, g) {
          function f(a, b, c, e) {
            v && (200 <= a && 300 > a ? v.put(s, [
              a,
              b,
              sc(c),
              e
            ]) : v.remove(s));
            l(b, a, c, e);
            d.$$phase || d.$apply();
          }
          function l(a, c, d, e) {
            c = Math.max(c, 0);
            (200 <= c && 300 > c ? p.resolve : p.reject)({
              data: a,
              status: c,
              headers: tc(d),
              config: b,
              statusText: e
            });
          }
          function k() {
            var a = db(r.pendingRequests, b);
            -1 !== a && r.pendingRequests.splice(a, 1);
          }
          var p = n.defer(), z = p.promise, v, q, s = u(b.url, b.params);
          r.pendingRequests.push(b);
          z.then(k, k);
          (b.cache || e.cache) && (!1 !== b.cache && 'GET' == b.method) && (v = X(b.cache) ? b.cache : X(e.cache) ? e.cache : F);
          if (v)
            if (q = v.get(s), B(q)) {
              if (q.then)
                return q.then(k, k), q;
              M(q) ? l(q[1], q[0], ba(q[2]), q[3]) : l(q, 200, {}, 'OK');
            } else
              v.put(s, z);
          E(q) && a(b.method, s, c, f, g, b.timeout, b.withCredentials, b.responseType);
          return z;
        }
        function u(a, b) {
          if (!b)
            return a;
          var c = [];
          Sc(b, function (a, b) {
            null === a || E(a) || (M(a) || (a = [a]), q(a, function (a) {
              X(a) && (a = qa(a));
              c.push(za(b) + '=' + za(a));
            }));
          });
          0 < c.length && (a += (-1 == a.indexOf('?') ? '?' : '&') + c.join('&'));
          return a;
        }
        var F = c('$http'), v = [];
        q(g, function (a) {
          v.unshift(w(a) ? p.get(a) : p.invoke(a));
        });
        q(f, function (a, b) {
          var c = w(a) ? p.get(a) : p.invoke(a);
          v.splice(b, 0, {
            response: function (a) {
              return c(n.when(a));
            },
            responseError: function (a) {
              return c(n.reject(a));
            }
          });
        });
        r.pendingRequests = [];
        (function (a) {
          q(arguments, function (a) {
            r[a] = function (b, c) {
              return r(D(c || {}, {
                method: a,
                url: b
              }));
            };
          });
        }('get', 'delete', 'head', 'jsonp'));
        (function (a) {
          q(arguments, function (a) {
            r[a] = function (b, c, d) {
              return r(D(d || {}, {
                method: a,
                url: b,
                data: c
              }));
            };
          });
        }('post', 'put'));
        r.defaults = e;
        return r;
      }
    ];
  }
  function ue(b) {
    if (8 >= S && (!b.match(/^(get|post|head|put|delete|options)$/i) || !O.XMLHttpRequest))
      return new O.ActiveXObject('Microsoft.XMLHTTP');
    if (O.XMLHttpRequest)
      return new O.XMLHttpRequest();
    throw t('$httpBackend')('noxhr');
  }
  function Ud() {
    this.$get = [
      '$browser',
      '$window',
      '$document',
      function (b, a, c) {
        return ve(b, ue, b.defer, a.angular.callbacks, c[0]);
      }
    ];
  }
  function ve(b, a, c, d, e) {
    function g(a, b) {
      var c = e.createElement('script'), d = function () {
          c.onreadystatechange = c.onload = c.onerror = null;
          e.body.removeChild(c);
          b && b();
        };
      c.type = 'text/javascript';
      c.src = a;
      S && 8 >= S ? c.onreadystatechange = function () {
        /loaded|complete/.test(c.readyState) && d();
      } : c.onload = c.onerror = function () {
        d();
      };
      e.body.appendChild(c);
      return d;
    }
    var f = -1;
    return function (e, l, k, m, n, p, r, z) {
      function u() {
        v = f;
        A && A();
        x && x.abort();
      }
      function F(a, d, e, g, f) {
        L && c.cancel(L);
        A = x = null;
        0 === d && (d = e ? 200 : 'file' == sa(l).protocol ? 404 : 0);
        a(1223 === d ? 204 : d, e, g, f || '');
        b.$$completeOutstandingRequest(C);
      }
      var v;
      b.$$incOutstandingRequestCount();
      l = l || b.url();
      if ('jsonp' == K(e)) {
        var J = '_' + (d.counter++).toString(36);
        d[J] = function (a) {
          d[J].data = a;
        };
        var A = g(l.replace('JSON_CALLBACK', 'angular.callbacks.' + J), function () {
            d[J].data ? F(m, 200, d[J].data) : F(m, v || -2);
            d[J] = Ea.noop;
          });
      } else {
        var x = a(e);
        x.open(e, l, !0);
        q(n, function (a, b) {
          B(a) && x.setRequestHeader(b, a);
        });
        x.onreadystatechange = function () {
          if (x && 4 == x.readyState) {
            var a = null, b = null;
            v !== f && (a = x.getAllResponseHeaders(), b = 'response' in x ? x.response : x.responseText);
            F(m, v || x.status, b, a, x.statusText || '');
          }
        };
        r && (x.withCredentials = !0);
        if (z)
          try {
            x.responseType = z;
          } catch (s) {
            if ('json' !== z)
              throw s;
          }
        x.send(k || null);
      }
      if (0 < p)
        var L = c(u, p);
      else
        p && p.then && p.then(u);
    };
  }
  function Rd() {
    var b = '{{', a = '}}';
    this.startSymbol = function (a) {
      return a ? (b = a, this) : b;
    };
    this.endSymbol = function (b) {
      return b ? (a = b, this) : a;
    };
    this.$get = [
      '$parse',
      '$exceptionHandler',
      '$sce',
      function (c, d, e) {
        function g(g, k, m) {
          for (var n, p, r = 0, z = [], u = g.length, F = !1, v = []; r < u;)
            -1 != (n = g.indexOf(b, r)) && -1 != (p = g.indexOf(a, n + f)) ? (r != n && z.push(g.substring(r, n)), z.push(r = c(F = g.substring(n + f, p))), r.exp = F, r = p + h, F = !0) : (r != u && z.push(g.substring(r)), r = u);
          (u = z.length) || (z.push(''), u = 1);
          if (m && 1 < z.length)
            throw vc('noconcat', g);
          if (!k || F)
            return v.length = u, r = function (a) {
              try {
                for (var b = 0, c = u, f; b < c; b++)
                  'function' == typeof (f = z[b]) && (f = f(a), f = m ? e.getTrusted(m, f) : e.valueOf(f), null === f || E(f) ? f = '' : 'string' != typeof f && (f = qa(f))), v[b] = f;
                return v.join('');
              } catch (h) {
                a = vc('interr', g, h.toString()), d(a);
              }
            }, r.exp = g, r.parts = z, r;
        }
        var f = b.length, h = a.length;
        g.startSymbol = function () {
          return b;
        };
        g.endSymbol = function () {
          return a;
        };
        return g;
      }
    ];
  }
  function Sd() {
    this.$get = [
      '$rootScope',
      '$window',
      '$q',
      function (b, a, c) {
        function d(d, f, h, l) {
          var k = a.setInterval, m = a.clearInterval, n = c.defer(), p = n.promise, r = 0, z = B(l) && !l;
          h = B(h) ? h : 0;
          p.then(null, null, d);
          p.$$intervalId = k(function () {
            n.notify(r++);
            0 < h && r >= h && (n.resolve(r), m(p.$$intervalId), delete e[p.$$intervalId]);
            z || b.$apply();
          }, f);
          e[p.$$intervalId] = n;
          return p;
        }
        var e = {};
        d.cancel = function (a) {
          return a && a.$$intervalId in e ? (e[a.$$intervalId].reject('canceled'), clearInterval(a.$$intervalId), delete e[a.$$intervalId], !0) : !1;
        };
        return d;
      }
    ];
  }
  function ad() {
    this.$get = function () {
      return {
        id: 'en-us',
        NUMBER_FORMATS: {
          DECIMAL_SEP: '.',
          GROUP_SEP: ',',
          PATTERNS: [
            {
              minInt: 1,
              minFrac: 0,
              maxFrac: 3,
              posPre: '',
              posSuf: '',
              negPre: '-',
              negSuf: '',
              gSize: 3,
              lgSize: 3
            },
            {
              minInt: 1,
              minFrac: 2,
              maxFrac: 2,
              posPre: '\xa4',
              posSuf: '',
              negPre: '(\xa4',
              negSuf: ')',
              gSize: 3,
              lgSize: 3
            }
          ],
          CURRENCY_SYM: '$'
        },
        DATETIME_FORMATS: {
          MONTH: 'January February March April May June July August September October November December'.split(' '),
          SHORTMONTH: 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' '),
          DAY: 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' '),
          SHORTDAY: 'Sun Mon Tue Wed Thu Fri Sat'.split(' '),
          AMPMS: [
            'AM',
            'PM'
          ],
          medium: 'MMM d, y h:mm:ss a',
          'short': 'M/d/yy h:mm a',
          fullDate: 'EEEE, MMMM d, y',
          longDate: 'MMMM d, y',
          mediumDate: 'MMM d, y',
          shortDate: 'M/d/yy',
          mediumTime: 'h:mm:ss a',
          shortTime: 'h:mm a'
        },
        pluralCat: function (b) {
          return 1 === b ? 'one' : 'other';
        }
      };
    };
  }
  function wc(b) {
    b = b.split('/');
    for (var a = b.length; a--;)
      b[a] = wb(b[a]);
    return b.join('/');
  }
  function xc(b, a, c) {
    b = sa(b, c);
    a.$$protocol = b.protocol;
    a.$$host = b.hostname;
    a.$$port = Y(b.port) || we[b.protocol] || null;
  }
  function yc(b, a, c) {
    var d = '/' !== b.charAt(0);
    d && (b = '/' + b);
    b = sa(b, c);
    a.$$path = decodeURIComponent(d && '/' === b.pathname.charAt(0) ? b.pathname.substring(1) : b.pathname);
    a.$$search = Yb(b.search);
    a.$$hash = decodeURIComponent(b.hash);
    a.$$path && '/' != a.$$path.charAt(0) && (a.$$path = '/' + a.$$path);
  }
  function oa(b, a) {
    if (0 === a.indexOf(b))
      return a.substr(b.length);
  }
  function Ya(b) {
    var a = b.indexOf('#');
    return -1 == a ? b : b.substr(0, a);
  }
  function Jb(b) {
    return b.substr(0, Ya(b).lastIndexOf('/') + 1);
  }
  function zc(b, a) {
    this.$$html5 = !0;
    a = a || '';
    var c = Jb(b);
    xc(b, this, b);
    this.$$parse = function (a) {
      var e = oa(c, a);
      if (!w(e))
        throw Kb('ipthprfx', a, c);
      yc(e, this, b);
      this.$$path || (this.$$path = '/');
      this.$$compose();
    };
    this.$$compose = function () {
      var a = Zb(this.$$search), b = this.$$hash ? '#' + wb(this.$$hash) : '';
      this.$$url = wc(this.$$path) + (a ? '?' + a : '') + b;
      this.$$absUrl = c + this.$$url.substr(1);
    };
    this.$$rewrite = function (d) {
      var e;
      if ((e = oa(b, d)) !== s)
        return d = e, (e = oa(a, e)) !== s ? c + (oa('/', e) || e) : b + d;
      if ((e = oa(c, d)) !== s)
        return c + e;
      if (c == d + '/')
        return c;
    };
  }
  function Lb(b, a) {
    var c = Jb(b);
    xc(b, this, b);
    this.$$parse = function (d) {
      var e = oa(b, d) || oa(c, d), e = '#' == e.charAt(0) ? oa(a, e) : this.$$html5 ? e : '';
      if (!w(e))
        throw Kb('ihshprfx', d, a);
      yc(e, this, b);
      d = this.$$path;
      var g = /^\/?.*?:(\/.*)/;
      0 === e.indexOf(b) && (e = e.replace(b, ''));
      g.exec(e) || (d = (e = g.exec(d)) ? e[1] : d);
      this.$$path = d;
      this.$$compose();
    };
    this.$$compose = function () {
      var c = Zb(this.$$search), e = this.$$hash ? '#' + wb(this.$$hash) : '';
      this.$$url = wc(this.$$path) + (c ? '?' + c : '') + e;
      this.$$absUrl = b + (this.$$url ? a + this.$$url : '');
    };
    this.$$rewrite = function (a) {
      if (Ya(b) == Ya(a))
        return a;
    };
  }
  function Ac(b, a) {
    this.$$html5 = !0;
    Lb.apply(this, arguments);
    var c = Jb(b);
    this.$$rewrite = function (d) {
      var e;
      if (b == Ya(d))
        return d;
      if (e = oa(c, d))
        return b + a + e;
      if (c === d + '/')
        return c;
    };
  }
  function nb(b) {
    return function () {
      return this[b];
    };
  }
  function Bc(b, a) {
    return function (c) {
      if (E(c))
        return this[b];
      this[b] = a(c);
      this.$$compose();
      return this;
    };
  }
  function Vd() {
    var b = '', a = !1;
    this.hashPrefix = function (a) {
      return B(a) ? (b = a, this) : b;
    };
    this.html5Mode = function (b) {
      return B(b) ? (a = b, this) : a;
    };
    this.$get = [
      '$rootScope',
      '$browser',
      '$sniffer',
      '$rootElement',
      function (c, d, e, g) {
        function f(a) {
          c.$broadcast('$locationChangeSuccess', h.absUrl(), a);
        }
        var h, l = d.baseHref(), k = d.url();
        a ? (l = k.substring(0, k.indexOf('/', k.indexOf('//') + 2)) + (l || '/'), e = e.history ? zc : Ac) : (l = Ya(k), e = Lb);
        h = new e(l, '#' + b);
        h.$$parse(h.$$rewrite(k));
        g.on('click', function (a) {
          if (!a.ctrlKey && !a.metaKey && 2 != a.which) {
            for (var b = y(a.target); 'a' !== K(b[0].nodeName);)
              if (b[0] === g[0] || !(b = b.parent())[0])
                return;
            var e = b.prop('href');
            X(e) && '[object SVGAnimatedString]' === e.toString() && (e = sa(e.animVal).href);
            var f = h.$$rewrite(e);
            e && (!b.attr('target') && f && !a.isDefaultPrevented()) && (a.preventDefault(), f != d.url() && (h.$$parse(f), c.$apply(), O.angular['ff-684208-preventDefault'] = !0));
          }
        });
        h.absUrl() != k && d.url(h.absUrl(), !0);
        d.onUrlChange(function (a) {
          h.absUrl() != a && (c.$evalAsync(function () {
            var b = h.absUrl();
            h.$$parse(a);
            c.$broadcast('$locationChangeStart', a, b).defaultPrevented ? (h.$$parse(b), d.url(b)) : f(b);
          }), c.$$phase || c.$digest());
        });
        var m = 0;
        c.$watch(function () {
          var a = d.url(), b = h.$$replace;
          m && a == h.absUrl() || (m++, c.$evalAsync(function () {
            c.$broadcast('$locationChangeStart', h.absUrl(), a).defaultPrevented ? h.$$parse(a) : (d.url(h.absUrl(), b), f(a));
          }));
          h.$$replace = !1;
          return m;
        });
        return h;
      }
    ];
  }
  function Wd() {
    var b = !0, a = this;
    this.debugEnabled = function (a) {
      return B(a) ? (b = a, this) : b;
    };
    this.$get = [
      '$window',
      function (c) {
        function d(a) {
          a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? 'Error: ' + a.message + '\n' + a.stack : a.stack : a.sourceURL && (a = a.message + '\n' + a.sourceURL + ':' + a.line));
          return a;
        }
        function e(a) {
          var b = c.console || {}, e = b[a] || b.log || C;
          a = !1;
          try {
            a = !!e.apply;
          } catch (l) {
          }
          return a ? function () {
            var a = [];
            q(arguments, function (b) {
              a.push(d(b));
            });
            return e.apply(b, a);
          } : function (a, b) {
            e(a, null == b ? '' : b);
          };
        }
        return {
          log: e('log'),
          info: e('info'),
          warn: e('warn'),
          error: e('error'),
          debug: function () {
            var c = e('debug');
            return function () {
              b && c.apply(a, arguments);
            };
          }()
        };
      }
    ];
  }
  function fa(b, a) {
    if ('constructor' === b)
      throw Ba('isecfld', a);
    return b;
  }
  function Za(b, a) {
    if (b) {
      if (b.constructor === b)
        throw Ba('isecfn', a);
      if (b.document && b.location && b.alert && b.setInterval)
        throw Ba('isecwindow', a);
      if (b.children && (b.nodeName || b.prop && b.attr && b.find))
        throw Ba('isecdom', a);
    }
    return b;
  }
  function ob(b, a, c, d, e) {
    e = e || {};
    a = a.split('.');
    for (var g, f = 0; 1 < a.length; f++) {
      g = fa(a.shift(), d);
      var h = b[g];
      h || (h = {}, b[g] = h);
      b = h;
      b.then && e.unwrapPromises && (ta(d), '$$v' in b || function (a) {
        a.then(function (b) {
          a.$$v = b;
        });
      }(b), b.$$v === s && (b.$$v = {}), b = b.$$v);
    }
    g = fa(a.shift(), d);
    return b[g] = c;
  }
  function Cc(b, a, c, d, e, g, f) {
    fa(b, g);
    fa(a, g);
    fa(c, g);
    fa(d, g);
    fa(e, g);
    return f.unwrapPromises ? function (f, l) {
      var k = l && l.hasOwnProperty(b) ? l : f, m;
      if (null == k)
        return k;
      (k = k[b]) && k.then && (ta(g), '$$v' in k || (m = k, m.$$v = s, m.then(function (a) {
        m.$$v = a;
      })), k = k.$$v);
      if (!a)
        return k;
      if (null == k)
        return s;
      (k = k[a]) && k.then && (ta(g), '$$v' in k || (m = k, m.$$v = s, m.then(function (a) {
        m.$$v = a;
      })), k = k.$$v);
      if (!c)
        return k;
      if (null == k)
        return s;
      (k = k[c]) && k.then && (ta(g), '$$v' in k || (m = k, m.$$v = s, m.then(function (a) {
        m.$$v = a;
      })), k = k.$$v);
      if (!d)
        return k;
      if (null == k)
        return s;
      (k = k[d]) && k.then && (ta(g), '$$v' in k || (m = k, m.$$v = s, m.then(function (a) {
        m.$$v = a;
      })), k = k.$$v);
      if (!e)
        return k;
      if (null == k)
        return s;
      (k = k[e]) && k.then && (ta(g), '$$v' in k || (m = k, m.$$v = s, m.then(function (a) {
        m.$$v = a;
      })), k = k.$$v);
      return k;
    } : function (g, f) {
      var k = f && f.hasOwnProperty(b) ? f : g;
      if (null == k)
        return k;
      k = k[b];
      if (!a)
        return k;
      if (null == k)
        return s;
      k = k[a];
      if (!c)
        return k;
      if (null == k)
        return s;
      k = k[c];
      if (!d)
        return k;
      if (null == k)
        return s;
      k = k[d];
      return e ? null == k ? s : k = k[e] : k;
    };
  }
  function xe(b, a) {
    fa(b, a);
    return function (a, d) {
      return null == a ? s : (d && d.hasOwnProperty(b) ? d : a)[b];
    };
  }
  function ye(b, a, c) {
    fa(b, c);
    fa(a, c);
    return function (c, e) {
      if (null == c)
        return s;
      c = (e && e.hasOwnProperty(b) ? e : c)[b];
      return null == c ? s : c[a];
    };
  }
  function Dc(b, a, c) {
    if (Mb.hasOwnProperty(b))
      return Mb[b];
    var d = b.split('.'), e = d.length, g;
    if (a.unwrapPromises || 1 !== e)
      if (a.unwrapPromises || 2 !== e)
        if (a.csp)
          g = 6 > e ? Cc(d[0], d[1], d[2], d[3], d[4], c, a) : function (b, g) {
            var f = 0, h;
            do
              h = Cc(d[f++], d[f++], d[f++], d[f++], d[f++], c, a)(b, g), g = s, b = h;
            while (f < e);
            return h;
          };
        else {
          var f = 'var p;\n';
          q(d, function (b, d) {
            fa(b, c);
            f += 'if(s == null) return undefined;\ns=' + (d ? 's' : '((k&&k.hasOwnProperty("' + b + '"))?k:s)') + '["' + b + '"];\n' + (a.unwrapPromises ? 'if (s && s.then) {\n pw("' + c.replace(/(["\r\n])/g, '\\$1') + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : '');
          });
          var f = f + 'return s;', h = new Function('s', 'k', 'pw', f);
          h.toString = aa(f);
          g = a.unwrapPromises ? function (a, b) {
            return h(a, b, ta);
          } : h;
        }
      else
        g = ye(d[0], d[1], c);
    else
      g = xe(d[0], c);
    'hasOwnProperty' !== b && (Mb[b] = g);
    return g;
  }
  function Xd() {
    var b = {}, a = {
        csp: !1,
        unwrapPromises: !1,
        logPromiseWarnings: !0
      };
    this.unwrapPromises = function (b) {
      return B(b) ? (a.unwrapPromises = !!b, this) : a.unwrapPromises;
    };
    this.logPromiseWarnings = function (b) {
      return B(b) ? (a.logPromiseWarnings = b, this) : a.logPromiseWarnings;
    };
    this.$get = [
      '$filter',
      '$sniffer',
      '$log',
      function (c, d, e) {
        a.csp = d.csp;
        ta = function (b) {
          a.logPromiseWarnings && !Ec.hasOwnProperty(b) && (Ec[b] = !0, e.warn('[$parse] Promise found in the expression `' + b + '`. Automatic unwrapping of promises in Angular expressions is deprecated.'));
        };
        return function (d) {
          var e;
          switch (typeof d) {
          case 'string':
            if (b.hasOwnProperty(d))
              return b[d];
            e = new Nb(a);
            e = new $a(e, c, a).parse(d, !1);
            'hasOwnProperty' !== d && (b[d] = e);
            return e;
          case 'function':
            return d;
          default:
            return C;
          }
        };
      }
    ];
  }
  function Zd() {
    this.$get = [
      '$rootScope',
      '$exceptionHandler',
      function (b, a) {
        return ze(function (a) {
          b.$evalAsync(a);
        }, a);
      }
    ];
  }
  function ze(b, a) {
    function c(a) {
      return a;
    }
    function d(a) {
      return f(a);
    }
    var e = function () {
        var f = [], k, m;
        return m = {
          resolve: function (a) {
            if (f) {
              var c = f;
              f = s;
              k = g(a);
              c.length && b(function () {
                for (var a, b = 0, d = c.length; b < d; b++)
                  a = c[b], k.then(a[0], a[1], a[2]);
              });
            }
          },
          reject: function (a) {
            m.resolve(h(a));
          },
          notify: function (a) {
            if (f) {
              var c = f;
              f.length && b(function () {
                for (var b, d = 0, e = c.length; d < e; d++)
                  b = c[d], b[2](a);
              });
            }
          },
          promise: {
            then: function (b, g, h) {
              var m = e(), u = function (d) {
                  try {
                    m.resolve((P(b) ? b : c)(d));
                  } catch (e) {
                    m.reject(e), a(e);
                  }
                }, F = function (b) {
                  try {
                    m.resolve((P(g) ? g : d)(b));
                  } catch (c) {
                    m.reject(c), a(c);
                  }
                }, v = function (b) {
                  try {
                    m.notify((P(h) ? h : c)(b));
                  } catch (d) {
                    a(d);
                  }
                };
              f ? f.push([
                u,
                F,
                v
              ]) : k.then(u, F, v);
              return m.promise;
            },
            'catch': function (a) {
              return this.then(null, a);
            },
            'finally': function (a) {
              function b(a, c) {
                var d = e();
                c ? d.resolve(a) : d.reject(a);
                return d.promise;
              }
              function d(e, g) {
                var f = null;
                try {
                  f = (a || c)();
                } catch (h) {
                  return b(h, !1);
                }
                return f && P(f.then) ? f.then(function () {
                  return b(e, g);
                }, function (a) {
                  return b(a, !1);
                }) : b(e, g);
              }
              return this.then(function (a) {
                return d(a, !0);
              }, function (a) {
                return d(a, !1);
              });
            }
          }
        };
      }, g = function (a) {
        return a && P(a.then) ? a : {
          then: function (c) {
            var d = e();
            b(function () {
              d.resolve(c(a));
            });
            return d.promise;
          }
        };
      }, f = function (a) {
        var b = e();
        b.reject(a);
        return b.promise;
      }, h = function (c) {
        return {
          then: function (g, f) {
            var h = e();
            b(function () {
              try {
                h.resolve((P(f) ? f : d)(c));
              } catch (b) {
                h.reject(b), a(b);
              }
            });
            return h.promise;
          }
        };
      };
    return {
      defer: e,
      reject: f,
      when: function (h, k, m, n) {
        var p = e(), r, z = function (b) {
            try {
              return (P(k) ? k : c)(b);
            } catch (d) {
              return a(d), f(d);
            }
          }, u = function (b) {
            try {
              return (P(m) ? m : d)(b);
            } catch (c) {
              return a(c), f(c);
            }
          }, F = function (b) {
            try {
              return (P(n) ? n : c)(b);
            } catch (d) {
              a(d);
            }
          };
        b(function () {
          g(h).then(function (a) {
            r || (r = !0, p.resolve(g(a).then(z, u, F)));
          }, function (a) {
            r || (r = !0, p.resolve(u(a)));
          }, function (a) {
            r || p.notify(F(a));
          });
        });
        return p.promise;
      },
      all: function (a) {
        var b = e(), c = 0, d = M(a) ? [] : {};
        q(a, function (a, e) {
          c++;
          g(a).then(function (a) {
            d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
          }, function (a) {
            d.hasOwnProperty(e) || b.reject(a);
          });
        });
        0 === c && b.resolve(d);
        return b.promise;
      }
    };
  }
  function fe() {
    this.$get = [
      '$window',
      '$timeout',
      function (b, a) {
        var c = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame, d = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.mozCancelAnimationFrame || b.webkitCancelRequestAnimationFrame, e = !!c, g = e ? function (a) {
            var b = c(a);
            return function () {
              d(b);
            };
          } : function (b) {
            var c = a(b, 16.66, !1);
            return function () {
              a.cancel(c);
            };
          };
        g.supported = e;
        return g;
      }
    ];
  }
  function Yd() {
    var b = 10, a = t('$rootScope'), c = null;
    this.digestTtl = function (a) {
      arguments.length && (b = a);
      return b;
    };
    this.$get = [
      '$injector',
      '$exceptionHandler',
      '$parse',
      '$browser',
      function (d, e, g, f) {
        function h() {
          this.$id = bb();
          this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
          this['this'] = this.$root = this;
          this.$$destroyed = !1;
          this.$$asyncQueue = [];
          this.$$postDigestQueue = [];
          this.$$listeners = {};
          this.$$listenerCount = {};
          this.$$isolateBindings = {};
        }
        function l(b) {
          if (p.$$phase)
            throw a('inprog', p.$$phase);
          p.$$phase = b;
        }
        function k(a, b) {
          var c = g(a);
          Ra(c, b);
          return c;
        }
        function m(a, b, c) {
          do
            a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
          while (a = a.$parent);
        }
        function n() {
        }
        h.prototype = {
          constructor: h,
          $new: function (a) {
            a ? (a = new h(), a.$root = this.$root, a.$$asyncQueue = this.$$asyncQueue, a.$$postDigestQueue = this.$$postDigestQueue) : (a = function () {
            }, a.prototype = this, a = new a(), a.$id = bb());
            a['this'] = a;
            a.$$listeners = {};
            a.$$listenerCount = {};
            a.$parent = this;
            a.$$watchers = a.$$nextSibling = a.$$childHead = a.$$childTail = null;
            a.$$prevSibling = this.$$childTail;
            this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a;
            return a;
          },
          $watch: function (a, b, d) {
            var e = k(a, 'watch'), g = this.$$watchers, f = {
                fn: b,
                last: n,
                get: e,
                exp: a,
                eq: !!d
              };
            c = null;
            if (!P(b)) {
              var h = k(b || C, 'listener');
              f.fn = function (a, b, c) {
                h(c);
              };
            }
            if ('string' == typeof a && e.constant) {
              var l = f.fn;
              f.fn = function (a, b, c) {
                l.call(this, a, b, c);
                Oa(g, f);
              };
            }
            g || (g = this.$$watchers = []);
            g.unshift(f);
            return function () {
              Oa(g, f);
              c = null;
            };
          },
          $watchCollection: function (a, b) {
            var c = this, d, e, f, h = 1 < b.length, l = 0, k = g(a), m = [], n = {}, p = !0, q = 0;
            return this.$watch(function () {
              d = k(c);
              var a, b;
              if (X(d))
                if (ab(d))
                  for (e !== m && (e = m, q = e.length = 0, l++), a = d.length, q !== a && (l++, e.length = q = a), b = 0; b < a; b++)
                    e[b] !== e[b] && d[b] !== d[b] || e[b] === d[b] || (l++, e[b] = d[b]);
                else {
                  e !== n && (e = n = {}, q = 0, l++);
                  a = 0;
                  for (b in d)
                    d.hasOwnProperty(b) && (a++, e.hasOwnProperty(b) ? e[b] !== d[b] && (l++, e[b] = d[b]) : (q++, e[b] = d[b], l++));
                  if (q > a)
                    for (b in l++, e)
                      e.hasOwnProperty(b) && !d.hasOwnProperty(b) && (q--, delete e[b]);
                }
              else
                e !== d && (e = d, l++);
              return l;
            }, function () {
              p ? (p = !1, b(d, d, c)) : b(d, f, c);
              if (h)
                if (X(d))
                  if (ab(d)) {
                    f = Array(d.length);
                    for (var a = 0; a < d.length; a++)
                      f[a] = d[a];
                  } else
                    for (a in f = {}, d)
                      Fc.call(d, a) && (f[a] = d[a]);
                else
                  f = d;
            });
          },
          $digest: function () {
            var d, g, f, h, k = this.$$asyncQueue, m = this.$$postDigestQueue, q, x, s = b, L, Q = [], y, H, R;
            l('$digest');
            c = null;
            do {
              x = !1;
              for (L = this; k.length;) {
                try {
                  R = k.shift(), R.scope.$eval(R.expression);
                } catch (B) {
                  p.$$phase = null, e(B);
                }
                c = null;
              }
              a:
                do {
                  if (h = L.$$watchers)
                    for (q = h.length; q--;)
                      try {
                        if (d = h[q])
                          if ((g = d.get(L)) !== (f = d.last) && !(d.eq ? xa(g, f) : 'number' == typeof g && 'number' == typeof f && isNaN(g) && isNaN(f)))
                            x = !0, c = d, d.last = d.eq ? ba(g) : g, d.fn(g, f === n ? g : f, L), 5 > s && (y = 4 - s, Q[y] || (Q[y] = []), H = P(d.exp) ? 'fn: ' + (d.exp.name || d.exp.toString()) : d.exp, H += '; newVal: ' + qa(g) + '; oldVal: ' + qa(f), Q[y].push(H));
                          else if (d === c) {
                            x = !1;
                            break a;
                          }
                      } catch (w) {
                        p.$$phase = null, e(w);
                      }
                  if (!(h = L.$$childHead || L !== this && L.$$nextSibling))
                    for (; L !== this && !(h = L.$$nextSibling);)
                      L = L.$parent;
                } while (L = h);
              if ((x || k.length) && !s--)
                throw p.$$phase = null, a('infdig', b, qa(Q));
            } while (x || k.length);
            for (p.$$phase = null; m.length;)
              try {
                m.shift()();
              } catch (T) {
                e(T);
              }
          },
          $destroy: function () {
            if (!this.$$destroyed) {
              var a = this.$parent;
              this.$broadcast('$destroy');
              this.$$destroyed = !0;
              this !== p && (q(this.$$listenerCount, eb(null, m, this)), a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = C, this.$on = this.$watch = function () {
                return C;
              });
            }
          },
          $eval: function (a, b) {
            return g(a)(this, b);
          },
          $evalAsync: function (a) {
            p.$$phase || p.$$asyncQueue.length || f.defer(function () {
              p.$$asyncQueue.length && p.$digest();
            });
            this.$$asyncQueue.push({
              scope: this,
              expression: a
            });
          },
          $$postDigest: function (a) {
            this.$$postDigestQueue.push(a);
          },
          $apply: function (a) {
            try {
              return l('$apply'), this.$eval(a);
            } catch (b) {
              e(b);
            } finally {
              p.$$phase = null;
              try {
                p.$digest();
              } catch (c) {
                throw e(c), c;
              }
            }
          },
          $on: function (a, b) {
            var c = this.$$listeners[a];
            c || (this.$$listeners[a] = c = []);
            c.push(b);
            var d = this;
            do
              d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++;
            while (d = d.$parent);
            var e = this;
            return function () {
              c[db(c, b)] = null;
              m(e, 1, a);
            };
          },
          $emit: function (a, b) {
            var c = [], d, g = this, f = !1, h = {
                name: a,
                targetScope: g,
                stopPropagation: function () {
                  f = !0;
                },
                preventDefault: function () {
                  h.defaultPrevented = !0;
                },
                defaultPrevented: !1
              }, l = [h].concat(ya.call(arguments, 1)), k, m;
            do {
              d = g.$$listeners[a] || c;
              h.currentScope = g;
              k = 0;
              for (m = d.length; k < m; k++)
                if (d[k])
                  try {
                    d[k].apply(null, l);
                  } catch (n) {
                    e(n);
                  }
                else
                  d.splice(k, 1), k--, m--;
              if (f)
                break;
              g = g.$parent;
            } while (g);
            return h;
          },
          $broadcast: function (a, b) {
            for (var c = this, d = this, g = {
                  name: a,
                  targetScope: this,
                  preventDefault: function () {
                    g.defaultPrevented = !0;
                  },
                  defaultPrevented: !1
                }, f = [g].concat(ya.call(arguments, 1)), h, k; c = d;) {
              g.currentScope = c;
              d = c.$$listeners[a] || [];
              h = 0;
              for (k = d.length; h < k; h++)
                if (d[h])
                  try {
                    d[h].apply(null, f);
                  } catch (l) {
                    e(l);
                  }
                else
                  d.splice(h, 1), h--, k--;
              if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))
                for (; c !== this && !(d = c.$$nextSibling);)
                  c = c.$parent;
            }
            return g;
          }
        };
        var p = new h();
        return p;
      }
    ];
  }
  function bd() {
    var b = /^\s*(https?|ftp|mailto|tel|file):/, a = /^\s*(https?|ftp|file):|data:image\//;
    this.aHrefSanitizationWhitelist = function (a) {
      return B(a) ? (b = a, this) : b;
    };
    this.imgSrcSanitizationWhitelist = function (b) {
      return B(b) ? (a = b, this) : a;
    };
    this.$get = function () {
      return function (c, d) {
        var e = d ? a : b, g;
        if (!S || 8 <= S)
          if (g = sa(c).href, '' !== g && !g.match(e))
            return 'unsafe:' + g;
        return c;
      };
    };
  }
  function Ae(b) {
    if ('self' === b)
      return b;
    if (w(b)) {
      if (-1 < b.indexOf('***'))
        throw ua('iwcard', b);
      b = b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08').replace('\\*\\*', '.*').replace('\\*', '[^:/.?&;]*');
      return RegExp('^' + b + '$');
    }
    if (cb(b))
      return RegExp('^' + b.source + '$');
    throw ua('imatcher');
  }
  function Gc(b) {
    var a = [];
    B(b) && q(b, function (b) {
      a.push(Ae(b));
    });
    return a;
  }
  function ae() {
    this.SCE_CONTEXTS = ga;
    var b = ['self'], a = [];
    this.resourceUrlWhitelist = function (a) {
      arguments.length && (b = Gc(a));
      return b;
    };
    this.resourceUrlBlacklist = function (b) {
      arguments.length && (a = Gc(b));
      return a;
    };
    this.$get = [
      '$injector',
      function (c) {
        function d(a) {
          var b = function (a) {
            this.$$unwrapTrustedValue = function () {
              return a;
            };
          };
          a && (b.prototype = new a());
          b.prototype.valueOf = function () {
            return this.$$unwrapTrustedValue();
          };
          b.prototype.toString = function () {
            return this.$$unwrapTrustedValue().toString();
          };
          return b;
        }
        var e = function (a) {
          throw ua('unsafe');
        };
        c.has('$sanitize') && (e = c.get('$sanitize'));
        var g = d(), f = {};
        f[ga.HTML] = d(g);
        f[ga.CSS] = d(g);
        f[ga.URL] = d(g);
        f[ga.JS] = d(g);
        f[ga.RESOURCE_URL] = d(f[ga.URL]);
        return {
          trustAs: function (a, b) {
            var c = f.hasOwnProperty(a) ? f[a] : null;
            if (!c)
              throw ua('icontext', a, b);
            if (null === b || b === s || '' === b)
              return b;
            if ('string' !== typeof b)
              throw ua('itype', a);
            return new c(b);
          },
          getTrusted: function (c, d) {
            if (null === d || d === s || '' === d)
              return d;
            var g = f.hasOwnProperty(c) ? f[c] : null;
            if (g && d instanceof g)
              return d.$$unwrapTrustedValue();
            if (c === ga.RESOURCE_URL) {
              var g = sa(d.toString()), m, n, p = !1;
              m = 0;
              for (n = b.length; m < n; m++)
                if ('self' === b[m] ? Ib(g) : b[m].exec(g.href)) {
                  p = !0;
                  break;
                }
              if (p)
                for (m = 0, n = a.length; m < n; m++)
                  if ('self' === a[m] ? Ib(g) : a[m].exec(g.href)) {
                    p = !1;
                    break;
                  }
              if (p)
                return d;
              throw ua('insecurl', d.toString());
            }
            if (c === ga.HTML)
              return e(d);
            throw ua('unsafe');
          },
          valueOf: function (a) {
            return a instanceof g ? a.$$unwrapTrustedValue() : a;
          }
        };
      }
    ];
  }
  function $d() {
    var b = !0;
    this.enabled = function (a) {
      arguments.length && (b = !!a);
      return b;
    };
    this.$get = [
      '$parse',
      '$sniffer',
      '$sceDelegate',
      function (a, c, d) {
        if (b && c.msie && 8 > c.msieDocumentMode)
          throw ua('iequirks');
        var e = ba(ga);
        e.isEnabled = function () {
          return b;
        };
        e.trustAs = d.trustAs;
        e.getTrusted = d.getTrusted;
        e.valueOf = d.valueOf;
        b || (e.trustAs = e.getTrusted = function (a, b) {
          return b;
        }, e.valueOf = Da);
        e.parseAs = function (b, c) {
          var d = a(c);
          return d.literal && d.constant ? d : function (a, c) {
            return e.getTrusted(b, d(a, c));
          };
        };
        var g = e.parseAs, f = e.getTrusted, h = e.trustAs;
        q(ga, function (a, b) {
          var c = K(b);
          e[Ta('parse_as_' + c)] = function (b) {
            return g(a, b);
          };
          e[Ta('get_trusted_' + c)] = function (b) {
            return f(a, b);
          };
          e[Ta('trust_as_' + c)] = function (b) {
            return h(a, b);
          };
        });
        return e;
      }
    ];
  }
  function be() {
    this.$get = [
      '$window',
      '$document',
      function (b, a) {
        var c = {}, d = Y((/android (\d+)/.exec(K((b.navigator || {}).userAgent)) || [])[1]), e = /Boxee/i.test((b.navigator || {}).userAgent), g = a[0] || {}, f = g.documentMode, h, l = /^(Moz|webkit|O|ms)(?=[A-Z])/, k = g.body && g.body.style, m = !1, n = !1;
        if (k) {
          for (var p in k)
            if (m = l.exec(p)) {
              h = m[0];
              h = h.substr(0, 1).toUpperCase() + h.substr(1);
              break;
            }
          h || (h = 'WebkitOpacity' in k && 'webkit');
          m = !!('transition' in k || h + 'Transition' in k);
          n = !!('animation' in k || h + 'Animation' in k);
          !d || m && n || (m = w(g.body.style.webkitTransition), n = w(g.body.style.webkitAnimation));
        }
        return {
          history: !(!b.history || !b.history.pushState || 4 > d || e),
          hashchange: 'onhashchange' in b && (!f || 7 < f),
          hasEvent: function (a) {
            if ('input' == a && 9 == S)
              return !1;
            if (E(c[a])) {
              var b = g.createElement('div');
              c[a] = 'on' + a in b;
            }
            return c[a];
          },
          csp: Vb(),
          vendorPrefix: h,
          transitions: m,
          animations: n,
          android: d,
          msie: S,
          msieDocumentMode: f
        };
      }
    ];
  }
  function de() {
    this.$get = [
      '$rootScope',
      '$browser',
      '$q',
      '$exceptionHandler',
      function (b, a, c, d) {
        function e(e, h, l) {
          var k = c.defer(), m = k.promise, n = B(l) && !l;
          h = a.defer(function () {
            try {
              k.resolve(e());
            } catch (a) {
              k.reject(a), d(a);
            } finally {
              delete g[m.$$timeoutId];
            }
            n || b.$apply();
          }, h);
          m.$$timeoutId = h;
          g[h] = k;
          return m;
        }
        var g = {};
        e.cancel = function (b) {
          return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject('canceled'), delete g[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1;
        };
        return e;
      }
    ];
  }
  function sa(b, a) {
    var c = b;
    S && (W.setAttribute('href', c), c = W.href);
    W.setAttribute('href', c);
    return {
      href: W.href,
      protocol: W.protocol ? W.protocol.replace(/:$/, '') : '',
      host: W.host,
      search: W.search ? W.search.replace(/^\?/, '') : '',
      hash: W.hash ? W.hash.replace(/^#/, '') : '',
      hostname: W.hostname,
      port: W.port,
      pathname: '/' === W.pathname.charAt(0) ? W.pathname : '/' + W.pathname
    };
  }
  function Ib(b) {
    b = w(b) ? sa(b) : b;
    return b.protocol === Hc.protocol && b.host === Hc.host;
  }
  function ee() {
    this.$get = aa(O);
  }
  function gc(b) {
    function a(d, e) {
      if (X(d)) {
        var g = {};
        q(d, function (b, c) {
          g[c] = a(c, b);
        });
        return g;
      }
      return b.factory(d + c, e);
    }
    var c = 'Filter';
    this.register = a;
    this.$get = [
      '$injector',
      function (a) {
        return function (b) {
          return a.get(b + c);
        };
      }
    ];
    a('currency', Ic);
    a('date', Jc);
    a('filter', Be);
    a('json', Ce);
    a('limitTo', De);
    a('lowercase', Ee);
    a('number', Kc);
    a('orderBy', Lc);
    a('uppercase', Fe);
  }
  function Be() {
    return function (b, a, c) {
      if (!M(b))
        return b;
      var d = typeof c, e = [];
      e.check = function (a) {
        for (var b = 0; b < e.length; b++)
          if (!e[b](a))
            return !1;
        return !0;
      };
      'function' !== d && (c = 'boolean' === d && c ? function (a, b) {
        return Ea.equals(a, b);
      } : function (a, b) {
        if (a && b && 'object' === typeof a && 'object' === typeof b) {
          for (var d in a)
            if ('$' !== d.charAt(0) && Fc.call(a, d) && c(a[d], b[d]))
              return !0;
          return !1;
        }
        b = ('' + b).toLowerCase();
        return -1 < ('' + a).toLowerCase().indexOf(b);
      });
      var g = function (a, b) {
        if ('string' == typeof b && '!' === b.charAt(0))
          return !g(a, b.substr(1));
        switch (typeof a) {
        case 'boolean':
        case 'number':
        case 'string':
          return c(a, b);
        case 'object':
          switch (typeof b) {
          case 'object':
            return c(a, b);
          default:
            for (var d in a)
              if ('$' !== d.charAt(0) && g(a[d], b))
                return !0;
          }
          return !1;
        case 'array':
          for (d = 0; d < a.length; d++)
            if (g(a[d], b))
              return !0;
          return !1;
        default:
          return !1;
        }
      };
      switch (typeof a) {
      case 'boolean':
      case 'number':
      case 'string':
        a = { $: a };
      case 'object':
        for (var f in a)
          (function (b) {
            'undefined' != typeof a[b] && e.push(function (c) {
              return g('$' == b ? c : c && c[b], a[b]);
            });
          }(f));
        break;
      case 'function':
        e.push(a);
        break;
      default:
        return b;
      }
      d = [];
      for (f = 0; f < b.length; f++) {
        var h = b[f];
        e.check(h) && d.push(h);
      }
      return d;
    };
  }
  function Ic(b) {
    var a = b.NUMBER_FORMATS;
    return function (b, d) {
      E(d) && (d = a.CURRENCY_SYM);
      return Mc(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, 2).replace(/\u00A4/g, d);
    };
  }
  function Kc(b) {
    var a = b.NUMBER_FORMATS;
    return function (b, d) {
      return Mc(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d);
    };
  }
  function Mc(b, a, c, d, e) {
    if (null == b || !isFinite(b) || X(b))
      return '';
    var g = 0 > b;
    b = Math.abs(b);
    var f = b + '', h = '', l = [], k = !1;
    if (-1 !== f.indexOf('e')) {
      var m = f.match(/([\d\.]+)e(-?)(\d+)/);
      m && '-' == m[2] && m[3] > e + 1 ? f = '0' : (h = f, k = !0);
    }
    if (k)
      0 < e && (-1 < b && 1 > b) && (h = b.toFixed(e));
    else {
      f = (f.split(Nc)[1] || '').length;
      E(e) && (e = Math.min(Math.max(a.minFrac, f), a.maxFrac));
      f = Math.pow(10, e);
      b = Math.round(b * f) / f;
      b = ('' + b).split(Nc);
      f = b[0];
      b = b[1] || '';
      var m = 0, n = a.lgSize, p = a.gSize;
      if (f.length >= n + p)
        for (m = f.length - n, k = 0; k < m; k++)
          0 === (m - k) % p && 0 !== k && (h += c), h += f.charAt(k);
      for (k = m; k < f.length; k++)
        0 === (f.length - k) % n && 0 !== k && (h += c), h += f.charAt(k);
      for (; b.length < e;)
        b += '0';
      e && '0' !== e && (h += d + b.substr(0, e));
    }
    l.push(g ? a.negPre : a.posPre);
    l.push(h);
    l.push(g ? a.negSuf : a.posSuf);
    return l.join('');
  }
  function Ob(b, a, c) {
    var d = '';
    0 > b && (d = '-', b = -b);
    for (b = '' + b; b.length < a;)
      b = '0' + b;
    c && (b = b.substr(b.length - a));
    return d + b;
  }
  function $(b, a, c, d) {
    c = c || 0;
    return function (e) {
      e = e['get' + b]();
      if (0 < c || e > -c)
        e += c;
      0 === e && -12 == c && (e = 12);
      return Ob(e, a, d);
    };
  }
  function pb(b, a) {
    return function (c, d) {
      var e = c['get' + b](), g = Fa(a ? 'SHORT' + b : b);
      return d[g][e];
    };
  }
  function Jc(b) {
    function a(a) {
      var b;
      if (b = a.match(c)) {
        a = new Date(0);
        var g = 0, f = 0, h = b[8] ? a.setUTCFullYear : a.setFullYear, l = b[8] ? a.setUTCHours : a.setHours;
        b[9] && (g = Y(b[9] + b[10]), f = Y(b[9] + b[11]));
        h.call(a, Y(b[1]), Y(b[2]) - 1, Y(b[3]));
        g = Y(b[4] || 0) - g;
        f = Y(b[5] || 0) - f;
        h = Y(b[6] || 0);
        b = Math.round(1000 * parseFloat('0.' + (b[7] || 0)));
        l.call(a, g, f, h, b);
      }
      return a;
    }
    var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    return function (c, e) {
      var g = '', f = [], h, l;
      e = e || 'mediumDate';
      e = b.DATETIME_FORMATS[e] || e;
      w(c) && (c = Ge.test(c) ? Y(c) : a(c));
      vb(c) && (c = new Date(c));
      if (!Na(c))
        return c;
      for (; e;)
        (l = He.exec(e)) ? (f = f.concat(ya.call(l, 1)), e = f.pop()) : (f.push(e), e = null);
      q(f, function (a) {
        h = Ie[a];
        g += h ? h(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
      });
      return g;
    };
  }
  function Ce() {
    return function (b) {
      return qa(b, !0);
    };
  }
  function De() {
    return function (b, a) {
      if (!M(b) && !w(b))
        return b;
      a = Y(a);
      if (w(b))
        return a ? 0 <= a ? b.slice(0, a) : b.slice(a, b.length) : '';
      var c = [], d, e;
      a > b.length ? a = b.length : a < -b.length && (a = -b.length);
      0 < a ? (d = 0, e = a) : (d = b.length + a, e = b.length);
      for (; d < e; d++)
        c.push(b[d]);
      return c;
    };
  }
  function Lc(b) {
    return function (a, c, d) {
      function e(a, b) {
        return Qa(b) ? function (b, c) {
          return a(c, b);
        } : a;
      }
      function g(a, b) {
        var c = typeof a, d = typeof b;
        return c == d ? ('string' == c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1;
      }
      if (!M(a) || !c)
        return a;
      c = M(c) ? c : [c];
      c = Uc(c, function (a) {
        var c = !1, d = a || Da;
        if (w(a)) {
          if ('+' == a.charAt(0) || '-' == a.charAt(0))
            c = '-' == a.charAt(0), a = a.substring(1);
          d = b(a);
          if (d.constant) {
            var f = d();
            return e(function (a, b) {
              return g(a[f], b[f]);
            }, c);
          }
        }
        return e(function (a, b) {
          return g(d(a), d(b));
        }, c);
      });
      for (var f = [], h = 0; h < a.length; h++)
        f.push(a[h]);
      return f.sort(e(function (a, b) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d](a, b);
          if (0 !== e)
            return e;
        }
        return 0;
      }, d));
    };
  }
  function va(b) {
    P(b) && (b = { link: b });
    b.restrict = b.restrict || 'AC';
    return aa(b);
  }
  function Oc(b, a, c, d) {
    function e(a, c) {
      c = c ? '-' + fb(c, '-') : '';
      d.removeClass(b, (a ? qb : rb) + c);
      d.addClass(b, (a ? rb : qb) + c);
    }
    var g = this, f = b.parent().controller('form') || sb, h = 0, l = g.$error = {}, k = [];
    g.$name = a.name || a.ngForm;
    g.$dirty = !1;
    g.$pristine = !0;
    g.$valid = !0;
    g.$invalid = !1;
    f.$addControl(g);
    b.addClass(La);
    e(!0);
    g.$addControl = function (a) {
      Aa(a.$name, 'input');
      k.push(a);
      a.$name && (g[a.$name] = a);
    };
    g.$removeControl = function (a) {
      a.$name && g[a.$name] === a && delete g[a.$name];
      q(l, function (b, c) {
        g.$setValidity(c, !0, a);
      });
      Oa(k, a);
    };
    g.$setValidity = function (a, b, c) {
      var d = l[a];
      if (b)
        d && (Oa(d, c), d.length || (h--, h || (e(b), g.$valid = !0, g.$invalid = !1), l[a] = !1, e(!0, a), f.$setValidity(a, !0, g)));
      else {
        h || e(b);
        if (d) {
          if (-1 != db(d, c))
            return;
        } else
          l[a] = d = [], h++, e(!1, a), f.$setValidity(a, !1, g);
        d.push(c);
        g.$valid = !1;
        g.$invalid = !0;
      }
    };
    g.$setDirty = function () {
      d.removeClass(b, La);
      d.addClass(b, tb);
      g.$dirty = !0;
      g.$pristine = !1;
      f.$setDirty();
    };
    g.$setPristine = function () {
      d.removeClass(b, tb);
      d.addClass(b, La);
      g.$dirty = !1;
      g.$pristine = !0;
      q(k, function (a) {
        a.$setPristine();
      });
    };
  }
  function pa(b, a, c, d) {
    b.$setValidity(a, c);
    return c ? d : s;
  }
  function Je(b, a, c) {
    var d = c.prop('validity');
    X(d) && b.$parsers.push(function (c) {
      if (b.$error[a] || !(d.badInput || d.customError || d.typeMismatch) || d.valueMissing)
        return c;
      b.$setValidity(a, !1);
    });
  }
  function ub(b, a, c, d, e, g) {
    var f = a.prop('validity');
    if (!e.android) {
      var h = !1;
      a.on('compositionstart', function (a) {
        h = !0;
      });
      a.on('compositionend', function () {
        h = !1;
        l();
      });
    }
    var l = function () {
      if (!h) {
        var e = a.val();
        Qa(c.ngTrim || 'T') && (e = ca(e));
        if (d.$viewValue !== e || f && '' === e && !f.valueMissing)
          b.$$phase ? d.$setViewValue(e) : b.$apply(function () {
            d.$setViewValue(e);
          });
      }
    };
    if (e.hasEvent('input'))
      a.on('input', l);
    else {
      var k, m = function () {
          k || (k = g.defer(function () {
            l();
            k = null;
          }));
        };
      a.on('keydown', function (a) {
        a = a.keyCode;
        91 === a || (15 < a && 19 > a || 37 <= a && 40 >= a) || m();
      });
      if (e.hasEvent('paste'))
        a.on('paste cut', m);
    }
    a.on('change', l);
    d.$render = function () {
      a.val(d.$isEmpty(d.$viewValue) ? '' : d.$viewValue);
    };
    var n = c.ngPattern;
    n && ((e = n.match(/^\/(.*)\/([gim]*)$/)) ? (n = RegExp(e[1], e[2]), e = function (a) {
      return pa(d, 'pattern', d.$isEmpty(a) || n.test(a), a);
    }) : e = function (c) {
      var e = b.$eval(n);
      if (!e || !e.test)
        throw t('ngPattern')('noregexp', n, e, ha(a));
      return pa(d, 'pattern', d.$isEmpty(c) || e.test(c), c);
    }, d.$formatters.push(e), d.$parsers.push(e));
    if (c.ngMinlength) {
      var p = Y(c.ngMinlength);
      e = function (a) {
        return pa(d, 'minlength', d.$isEmpty(a) || a.length >= p, a);
      };
      d.$parsers.push(e);
      d.$formatters.push(e);
    }
    if (c.ngMaxlength) {
      var r = Y(c.ngMaxlength);
      e = function (a) {
        return pa(d, 'maxlength', d.$isEmpty(a) || a.length <= r, a);
      };
      d.$parsers.push(e);
      d.$formatters.push(e);
    }
  }
  function Pb(b, a) {
    b = 'ngClass' + b;
    return [
      '$animate',
      function (c) {
        function d(a, b) {
          var c = [], d = 0;
          a:
            for (; d < a.length; d++) {
              for (var e = a[d], m = 0; m < b.length; m++)
                if (e == b[m])
                  continue a;
              c.push(e);
            }
          return c;
        }
        function e(a) {
          if (!M(a)) {
            if (w(a))
              return a.split(' ');
            if (X(a)) {
              var b = [];
              q(a, function (a, c) {
                a && b.push(c);
              });
              return b;
            }
          }
          return a;
        }
        return {
          restrict: 'AC',
          link: function (g, f, h) {
            function l(a, b) {
              var c = f.data('$classCounts') || {}, d = [];
              q(a, function (a) {
                if (0 < b || c[a])
                  c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a);
              });
              f.data('$classCounts', c);
              return d.join(' ');
            }
            function k(b) {
              if (!0 === a || g.$index % 2 === a) {
                var k = e(b || []);
                if (!m) {
                  var r = l(k, 1);
                  h.$addClass(r);
                } else if (!xa(b, m)) {
                  var q = e(m), r = d(k, q), k = d(q, k), k = l(k, -1), r = l(r, 1);
                  0 === r.length ? c.removeClass(f, k) : 0 === k.length ? c.addClass(f, r) : c.setClass(f, r, k);
                }
              }
              m = ba(b);
            }
            var m;
            g.$watch(h[b], k, !0);
            h.$observe('class', function (a) {
              k(g.$eval(h[b]));
            });
            'ngClass' !== b && g.$watch('$index', function (c, d) {
              var f = c & 1;
              if (f !== d & 1) {
                var k = e(g.$eval(h[b]));
                f === a ? (f = l(k, 1), h.$addClass(f)) : (f = l(k, -1), h.$removeClass(f));
              }
            });
          }
        };
      }
    ];
  }
  var K = function (b) {
      return w(b) ? b.toLowerCase() : b;
    }, Fc = Object.prototype.hasOwnProperty, Fa = function (b) {
      return w(b) ? b.toUpperCase() : b;
    }, S, y, Ga, ya = [].slice, Ke = [].push, wa = Object.prototype.toString, Pa = t('ng'), Ea = O.angular || (O.angular = {}), Sa, Ka, ka = [
      '0',
      '0',
      '0'
    ];
  S = Y((/msie (\d+)/.exec(K(navigator.userAgent)) || [])[1]);
  isNaN(S) && (S = Y((/trident\/.*; rv:(\d+)/.exec(K(navigator.userAgent)) || [])[1]));
  C.$inject = [];
  Da.$inject = [];
  var ca = function () {
      return String.prototype.trim ? function (b) {
        return w(b) ? b.trim() : b;
      } : function (b) {
        return w(b) ? b.replace(/^\s\s*/, '').replace(/\s\s*$/, '') : b;
      };
    }();
  Ka = 9 > S ? function (b) {
    b = b.nodeName ? b : b[0];
    return b.scopeName && 'HTML' != b.scopeName ? Fa(b.scopeName + ':' + b.nodeName) : b.nodeName;
  } : function (b) {
    return b.nodeName ? b.nodeName : b[0].nodeName;
  };
  var Xc = /[A-Z]/g, $c = {
      full: '1.2.16',
      major: 1,
      minor: 2,
      dot: 16,
      codeName: 'badger-enumeration'
    }, Ua = N.cache = {}, gb = N.expando = 'ng-' + new Date().getTime(), me = 1, Pc = O.document.addEventListener ? function (b, a, c) {
      b.addEventListener(a, c, !1);
    } : function (b, a, c) {
      b.attachEvent('on' + a, c);
    }, Fb = O.document.removeEventListener ? function (b, a, c) {
      b.removeEventListener(a, c, !1);
    } : function (b, a, c) {
      b.detachEvent('on' + a, c);
    };
  N._data = function (b) {
    return this.cache[b[this.expando]] || {};
  };
  var he = /([\:\-\_]+(.))/g, ie = /^moz([A-Z])/, Bb = t('jqLite'), je = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Cb = /<|&#?\w+;/, ke = /<([\w:]+)/, le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ea = {
      option: [
        1,
        '<select multiple="multiple">',
        '</select>'
      ],
      thead: [
        1,
        '<table>',
        '</table>'
      ],
      col: [
        2,
        '<table><colgroup>',
        '</colgroup></table>'
      ],
      tr: [
        2,
        '<table><tbody>',
        '</tbody></table>'
      ],
      td: [
        3,
        '<table><tbody><tr>',
        '</tr></tbody></table>'
      ],
      _default: [
        0,
        '',
        ''
      ]
    };
  ea.optgroup = ea.option;
  ea.tbody = ea.tfoot = ea.colgroup = ea.caption = ea.thead;
  ea.th = ea.td;
  var Ja = N.prototype = {
      ready: function (b) {
        function a() {
          c || (c = !0, b());
        }
        var c = !1;
        'complete' === U.readyState ? setTimeout(a) : (this.on('DOMContentLoaded', a), N(O).on('load', a));
      },
      toString: function () {
        var b = [];
        q(this, function (a) {
          b.push('' + a);
        });
        return '[' + b.join(', ') + ']';
      },
      eq: function (b) {
        return 0 <= b ? y(this[b]) : y(this[this.length + b]);
      },
      length: 0,
      push: Ke,
      sort: [].sort,
      splice: [].splice
    }, kb = {};
  q('multiple selected checked disabled readOnly required open'.split(' '), function (b) {
    kb[K(b)] = b;
  });
  var nc = {};
  q('input select option textarea button form details'.split(' '), function (b) {
    nc[Fa(b)] = !0;
  });
  q({
    data: jc,
    inheritedData: jb,
    scope: function (b) {
      return y(b).data('$scope') || jb(b.parentNode || b, [
        '$isolateScope',
        '$scope'
      ]);
    },
    isolateScope: function (b) {
      return y(b).data('$isolateScope') || y(b).data('$isolateScopeNoTemplate');
    },
    controller: kc,
    injector: function (b) {
      return jb(b, '$injector');
    },
    removeAttr: function (b, a) {
      b.removeAttribute(a);
    },
    hasClass: Gb,
    css: function (b, a, c) {
      a = Ta(a);
      if (B(c))
        b.style[a] = c;
      else {
        var d;
        8 >= S && (d = b.currentStyle && b.currentStyle[a], '' === d && (d = 'auto'));
        d = d || b.style[a];
        8 >= S && (d = '' === d ? s : d);
        return d;
      }
    },
    attr: function (b, a, c) {
      var d = K(a);
      if (kb[d])
        if (B(c))
          c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d));
        else
          return b[a] || (b.attributes.getNamedItem(a) || C).specified ? d : s;
      else if (B(c))
        b.setAttribute(a, c);
      else if (b.getAttribute)
        return b = b.getAttribute(a, 2), null === b ? s : b;
    },
    prop: function (b, a, c) {
      if (B(c))
        b[a] = c;
      else
        return b[a];
    },
    text: function () {
      function b(b, d) {
        var e = a[b.nodeType];
        if (E(d))
          return e ? b[e] : '';
        b[e] = d;
      }
      var a = [];
      9 > S ? (a[1] = 'innerText', a[3] = 'nodeValue') : a[1] = a[3] = 'textContent';
      b.$dv = '';
      return b;
    }(),
    val: function (b, a) {
      if (E(a)) {
        if ('SELECT' === Ka(b) && b.multiple) {
          var c = [];
          q(b.options, function (a) {
            a.selected && c.push(a.value || a.text);
          });
          return 0 === c.length ? null : c;
        }
        return b.value;
      }
      b.value = a;
    },
    html: function (b, a) {
      if (E(a))
        return b.innerHTML;
      for (var c = 0, d = b.childNodes; c < d.length; c++)
        Ha(d[c]);
      b.innerHTML = a;
    },
    empty: lc
  }, function (b, a) {
    N.prototype[a] = function (a, d) {
      var e, g;
      if (b !== lc && (2 == b.length && b !== Gb && b !== kc ? a : d) === s) {
        if (X(a)) {
          for (e = 0; e < this.length; e++)
            if (b === jc)
              b(this[e], a);
            else
              for (g in a)
                b(this[e], g, a[g]);
          return this;
        }
        e = b.$dv;
        g = e === s ? Math.min(this.length, 1) : this.length;
        for (var f = 0; f < g; f++) {
          var h = b(this[f], a, d);
          e = e ? e + h : h;
        }
        return e;
      }
      for (e = 0; e < this.length; e++)
        b(this[e], a, d);
      return this;
    };
  });
  q({
    removeData: hc,
    dealoc: Ha,
    on: function a(c, d, e, g) {
      if (B(g))
        throw Bb('onargs');
      var f = la(c, 'events'), h = la(c, 'handle');
      f || la(c, 'events', f = {});
      h || la(c, 'handle', h = ne(c, f));
      q(d.split(' '), function (d) {
        var g = f[d];
        if (!g) {
          if ('mouseenter' == d || 'mouseleave' == d) {
            var m = U.body.contains || U.body.compareDocumentPosition ? function (a, c) {
                var d = 9 === a.nodeType ? a.documentElement : a, e = c && c.parentNode;
                return a === e || !!(e && 1 === e.nodeType && (d.contains ? d.contains(e) : a.compareDocumentPosition && a.compareDocumentPosition(e) & 16));
              } : function (a, c) {
                if (c)
                  for (; c = c.parentNode;)
                    if (c === a)
                      return !0;
                return !1;
              };
            f[d] = [];
            a(c, {
              mouseleave: 'mouseout',
              mouseenter: 'mouseover'
            }[d], function (a) {
              var c = a.relatedTarget;
              c && (c === this || m(this, c)) || h(a, d);
            });
          } else
            Pc(c, d, h), f[d] = [];
          g = f[d];
        }
        g.push(e);
      });
    },
    off: ic,
    one: function (a, c, d) {
      a = y(a);
      a.on(c, function g() {
        a.off(c, d);
        a.off(c, g);
      });
      a.on(c, d);
    },
    replaceWith: function (a, c) {
      var d, e = a.parentNode;
      Ha(a);
      q(new N(c), function (c) {
        d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
        d = c;
      });
    },
    children: function (a) {
      var c = [];
      q(a.childNodes, function (a) {
        1 === a.nodeType && c.push(a);
      });
      return c;
    },
    contents: function (a) {
      return a.contentDocument || a.childNodes || [];
    },
    append: function (a, c) {
      q(new N(c), function (c) {
        1 !== a.nodeType && 11 !== a.nodeType || a.appendChild(c);
      });
    },
    prepend: function (a, c) {
      if (1 === a.nodeType) {
        var d = a.firstChild;
        q(new N(c), function (c) {
          a.insertBefore(c, d);
        });
      }
    },
    wrap: function (a, c) {
      c = y(c)[0];
      var d = a.parentNode;
      d && d.replaceChild(c, a);
      c.appendChild(a);
    },
    remove: function (a) {
      Ha(a);
      var c = a.parentNode;
      c && c.removeChild(a);
    },
    after: function (a, c) {
      var d = a, e = a.parentNode;
      q(new N(c), function (a) {
        e.insertBefore(a, d.nextSibling);
        d = a;
      });
    },
    addClass: ib,
    removeClass: hb,
    toggleClass: function (a, c, d) {
      c && q(c.split(' '), function (c) {
        var g = d;
        E(g) && (g = !Gb(a, c));
        (g ? ib : hb)(a, c);
      });
    },
    parent: function (a) {
      return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
    },
    next: function (a) {
      if (a.nextElementSibling)
        return a.nextElementSibling;
      for (a = a.nextSibling; null != a && 1 !== a.nodeType;)
        a = a.nextSibling;
      return a;
    },
    find: function (a, c) {
      return a.getElementsByTagName ? a.getElementsByTagName(c) : [];
    },
    clone: Eb,
    triggerHandler: function (a, c, d) {
      c = (la(a, 'events') || {})[c];
      d = d || [];
      var e = [{
            preventDefault: C,
            stopPropagation: C
          }];
      q(c, function (c) {
        c.apply(a, e.concat(d));
      });
    }
  }, function (a, c) {
    N.prototype[c] = function (c, e, g) {
      for (var f, h = 0; h < this.length; h++)
        E(f) ? (f = a(this[h], c, e, g), B(f) && (f = y(f))) : Db(f, a(this[h], c, e, g));
      return B(f) ? f : this;
    };
    N.prototype.bind = N.prototype.on;
    N.prototype.unbind = N.prototype.off;
  });
  Va.prototype = {
    put: function (a, c) {
      this[Ia(a)] = c;
    },
    get: function (a) {
      return this[Ia(a)];
    },
    remove: function (a) {
      var c = this[a = Ia(a)];
      delete this[a];
      return c;
    }
  };
  var pe = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, qe = /,/, re = /^\s*(_?)(\S+?)\1\s*$/, oe = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Wa = t('$injector'), Le = t('$animate'), Ld = [
      '$provide',
      function (a) {
        this.$$selectors = {};
        this.register = function (c, d) {
          var e = c + '-animation';
          if (c && '.' != c.charAt(0))
            throw Le('notcsel', c);
          this.$$selectors[c.substr(1)] = e;
          a.factory(e, d);
        };
        this.classNameFilter = function (a) {
          1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null);
          return this.$$classNameFilter;
        };
        this.$get = [
          '$timeout',
          '$$asyncCallback',
          function (a, d) {
            return {
              enter: function (a, c, f, h) {
                f ? f.after(a) : (c && c[0] || (c = f.parent()), c.append(a));
                h && d(h);
              },
              leave: function (a, c) {
                a.remove();
                c && d(c);
              },
              move: function (a, c, d, h) {
                this.enter(a, c, d, h);
              },
              addClass: function (a, c, f) {
                c = w(c) ? c : M(c) ? c.join(' ') : '';
                q(a, function (a) {
                  ib(a, c);
                });
                f && d(f);
              },
              removeClass: function (a, c, f) {
                c = w(c) ? c : M(c) ? c.join(' ') : '';
                q(a, function (a) {
                  hb(a, c);
                });
                f && d(f);
              },
              setClass: function (a, c, f, h) {
                q(a, function (a) {
                  ib(a, c);
                  hb(a, f);
                });
                h && d(h);
              },
              enabled: C
            };
          }
        ];
      }
    ], ja = t('$compile');
  cc.$inject = [
    '$provide',
    '$$sanitizeUriProvider'
  ];
  var te = /^(x[\:\-_]|data[\:\-_])/i, vc = t('$interpolate'), Me = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, we = {
      http: 80,
      https: 443,
      ftp: 21
    }, Kb = t('$location');
  Ac.prototype = Lb.prototype = zc.prototype = {
    $$html5: !1,
    $$replace: !1,
    absUrl: nb('$$absUrl'),
    url: function (a, c) {
      if (E(a))
        return this.$$url;
      var d = Me.exec(a);
      d[1] && this.path(decodeURIComponent(d[1]));
      (d[2] || d[1]) && this.search(d[3] || '');
      this.hash(d[5] || '', c);
      return this;
    },
    protocol: nb('$$protocol'),
    host: nb('$$host'),
    port: nb('$$port'),
    path: Bc('$$path', function (a) {
      return '/' == a.charAt(0) ? a : '/' + a;
    }),
    search: function (a, c) {
      switch (arguments.length) {
      case 0:
        return this.$$search;
      case 1:
        if (w(a))
          this.$$search = Yb(a);
        else if (X(a))
          this.$$search = a;
        else
          throw Kb('isrcharg');
        break;
      default:
        E(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c;
      }
      this.$$compose();
      return this;
    },
    hash: Bc('$$hash', Da),
    replace: function () {
      this.$$replace = !0;
      return this;
    }
  };
  var Ba = t('$parse'), Ec = {}, ta, Ma = {
      'null': function () {
        return null;
      },
      'true': function () {
        return !0;
      },
      'false': function () {
        return !1;
      },
      undefined: C,
      '+': function (a, c, d, e) {
        d = d(a, c);
        e = e(a, c);
        return B(d) ? B(e) ? d + e : d : B(e) ? e : s;
      },
      '-': function (a, c, d, e) {
        d = d(a, c);
        e = e(a, c);
        return (B(d) ? d : 0) - (B(e) ? e : 0);
      },
      '*': function (a, c, d, e) {
        return d(a, c) * e(a, c);
      },
      '/': function (a, c, d, e) {
        return d(a, c) / e(a, c);
      },
      '%': function (a, c, d, e) {
        return d(a, c) % e(a, c);
      },
      '^': function (a, c, d, e) {
        return d(a, c) ^ e(a, c);
      },
      '=': C,
      '===': function (a, c, d, e) {
        return d(a, c) === e(a, c);
      },
      '!==': function (a, c, d, e) {
        return d(a, c) !== e(a, c);
      },
      '==': function (a, c, d, e) {
        return d(a, c) == e(a, c);
      },
      '!=': function (a, c, d, e) {
        return d(a, c) != e(a, c);
      },
      '<': function (a, c, d, e) {
        return d(a, c) < e(a, c);
      },
      '>': function (a, c, d, e) {
        return d(a, c) > e(a, c);
      },
      '<=': function (a, c, d, e) {
        return d(a, c) <= e(a, c);
      },
      '>=': function (a, c, d, e) {
        return d(a, c) >= e(a, c);
      },
      '&&': function (a, c, d, e) {
        return d(a, c) && e(a, c);
      },
      '||': function (a, c, d, e) {
        return d(a, c) || e(a, c);
      },
      '&': function (a, c, d, e) {
        return d(a, c) & e(a, c);
      },
      '|': function (a, c, d, e) {
        return e(a, c)(a, c, d(a, c));
      },
      '!': function (a, c, d) {
        return !d(a, c);
      }
    }, Ne = {
      n: '\n',
      f: '\f',
      r: '\r',
      t: '\t',
      v: '\x0B',
      '\'': '\'',
      '"': '"'
    }, Nb = function (a) {
      this.options = a;
    };
  Nb.prototype = {
    constructor: Nb,
    lex: function (a) {
      this.text = a;
      this.index = 0;
      this.ch = s;
      this.lastCh = ':';
      this.tokens = [];
      var c;
      for (a = []; this.index < this.text.length;) {
        this.ch = this.text.charAt(this.index);
        if (this.is('"\''))
          this.readString(this.ch);
        else if (this.isNumber(this.ch) || this.is('.') && this.isNumber(this.peek()))
          this.readNumber();
        else if (this.isIdent(this.ch))
          this.readIdent(), this.was('{,') && ('{' === a[0] && (c = this.tokens[this.tokens.length - 1])) && (c.json = -1 === c.text.indexOf('.'));
        else if (this.is('(){}[].,;:?'))
          this.tokens.push({
            index: this.index,
            text: this.ch,
            json: this.was(':[,') && this.is('{[') || this.is('}]:,')
          }), this.is('{[') && a.unshift(this.ch), this.is('}]') && a.shift(), this.index++;
        else if (this.isWhitespace(this.ch)) {
          this.index++;
          continue;
        } else {
          var d = this.ch + this.peek(), e = d + this.peek(2), g = Ma[this.ch], f = Ma[d], h = Ma[e];
          h ? (this.tokens.push({
            index: this.index,
            text: e,
            fn: h
          }), this.index += 3) : f ? (this.tokens.push({
            index: this.index,
            text: d,
            fn: f
          }), this.index += 2) : g ? (this.tokens.push({
            index: this.index,
            text: this.ch,
            fn: g,
            json: this.was('[,:') && this.is('+-')
          }), this.index += 1) : this.throwError('Unexpected next character ', this.index, this.index + 1);
        }
        this.lastCh = this.ch;
      }
      return this.tokens;
    },
    is: function (a) {
      return -1 !== a.indexOf(this.ch);
    },
    was: function (a) {
      return -1 !== a.indexOf(this.lastCh);
    },
    peek: function (a) {
      a = a || 1;
      return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
    },
    isNumber: function (a) {
      return '0' <= a && '9' >= a;
    },
    isWhitespace: function (a) {
      return ' ' === a || '\r' === a || '\t' === a || '\n' === a || '\x0B' === a || '\xa0' === a;
    },
    isIdent: function (a) {
      return 'a' <= a && 'z' >= a || 'A' <= a && 'Z' >= a || '_' === a || '$' === a;
    },
    isExpOperator: function (a) {
      return '-' === a || '+' === a || this.isNumber(a);
    },
    throwError: function (a, c, d) {
      d = d || this.index;
      c = B(c) ? 's ' + c + '-' + this.index + ' [' + this.text.substring(c, d) + ']' : ' ' + d;
      throw Ba('lexerr', a, c, this.text);
    },
    readNumber: function () {
      for (var a = '', c = this.index; this.index < this.text.length;) {
        var d = K(this.text.charAt(this.index));
        if ('.' == d || this.isNumber(d))
          a += d;
        else {
          var e = this.peek();
          if ('e' == d && this.isExpOperator(e))
            a += d;
          else if (this.isExpOperator(d) && e && this.isNumber(e) && 'e' == a.charAt(a.length - 1))
            a += d;
          else if (!this.isExpOperator(d) || e && this.isNumber(e) || 'e' != a.charAt(a.length - 1))
            break;
          else
            this.throwError('Invalid exponent');
        }
        this.index++;
      }
      a *= 1;
      this.tokens.push({
        index: c,
        text: a,
        json: !0,
        fn: function () {
          return a;
        }
      });
    },
    readIdent: function () {
      for (var a = this, c = '', d = this.index, e, g, f, h; this.index < this.text.length;) {
        h = this.text.charAt(this.index);
        if ('.' === h || this.isIdent(h) || this.isNumber(h))
          '.' === h && (e = this.index), c += h;
        else
          break;
        this.index++;
      }
      if (e)
        for (g = this.index; g < this.text.length;) {
          h = this.text.charAt(g);
          if ('(' === h) {
            f = c.substr(e - d + 1);
            c = c.substr(0, e - d);
            this.index = g;
            break;
          }
          if (this.isWhitespace(h))
            g++;
          else
            break;
        }
      d = {
        index: d,
        text: c
      };
      if (Ma.hasOwnProperty(c))
        d.fn = Ma[c], d.json = Ma[c];
      else {
        var l = Dc(c, this.options, this.text);
        d.fn = D(function (a, c) {
          return l(a, c);
        }, {
          assign: function (d, e) {
            return ob(d, c, e, a.text, a.options);
          }
        });
      }
      this.tokens.push(d);
      f && (this.tokens.push({
        index: e,
        text: '.',
        json: !1
      }), this.tokens.push({
        index: e + 1,
        text: f,
        json: !1
      }));
    },
    readString: function (a) {
      var c = this.index;
      this.index++;
      for (var d = '', e = a, g = !1; this.index < this.text.length;) {
        var f = this.text.charAt(this.index), e = e + f;
        if (g)
          'u' === f ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError('Invalid unicode escape [\\u' + f + ']'), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d = (g = Ne[f]) ? d + g : d + f, g = !1;
        else if ('\\' === f)
          g = !0;
        else {
          if (f === a) {
            this.index++;
            this.tokens.push({
              index: c,
              text: e,
              string: d,
              json: !0,
              fn: function () {
                return d;
              }
            });
            return;
          }
          d += f;
        }
        this.index++;
      }
      this.throwError('Unterminated quote', c);
    }
  };
  var $a = function (a, c, d) {
    this.lexer = a;
    this.$filter = c;
    this.options = d;
  };
  $a.ZERO = D(function () {
    return 0;
  }, { constant: !0 });
  $a.prototype = {
    constructor: $a,
    parse: function (a, c) {
      this.text = a;
      this.json = c;
      this.tokens = this.lexer.lex(a);
      c && (this.assignment = this.logicalOR, this.functionCall = this.fieldAccess = this.objectIndex = this.filterChain = function () {
        this.throwError('is not valid json', {
          text: a,
          index: 0
        });
      });
      var d = c ? this.primary() : this.statements();
      0 !== this.tokens.length && this.throwError('is an unexpected token', this.tokens[0]);
      d.literal = !!d.literal;
      d.constant = !!d.constant;
      return d;
    },
    primary: function () {
      var a;
      if (this.expect('('))
        a = this.filterChain(), this.consume(')');
      else if (this.expect('['))
        a = this.arrayDeclaration();
      else if (this.expect('{'))
        a = this.object();
      else {
        var c = this.expect();
        (a = c.fn) || this.throwError('not a primary expression', c);
        c.json && (a.constant = !0, a.literal = !0);
      }
      for (var d; c = this.expect('(', '[', '.');)
        '(' === c.text ? (a = this.functionCall(a, d), d = null) : '[' === c.text ? (d = a, a = this.objectIndex(a)) : '.' === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError('IMPOSSIBLE');
      return a;
    },
    throwError: function (a, c) {
      throw Ba('syntax', c.text, a, c.index + 1, this.text, this.text.substring(c.index));
    },
    peekToken: function () {
      if (0 === this.tokens.length)
        throw Ba('ueoe', this.text);
      return this.tokens[0];
    },
    peek: function (a, c, d, e) {
      if (0 < this.tokens.length) {
        var g = this.tokens[0], f = g.text;
        if (f === a || f === c || f === d || f === e || !(a || c || d || e))
          return g;
      }
      return !1;
    },
    expect: function (a, c, d, e) {
      return (a = this.peek(a, c, d, e)) ? (this.json && !a.json && this.throwError('is not valid json', a), this.tokens.shift(), a) : !1;
    },
    consume: function (a) {
      this.expect(a) || this.throwError('is unexpected, expecting [' + a + ']', this.peek());
    },
    unaryFn: function (a, c) {
      return D(function (d, e) {
        return a(d, e, c);
      }, { constant: c.constant });
    },
    ternaryFn: function (a, c, d) {
      return D(function (e, g) {
        return a(e, g) ? c(e, g) : d(e, g);
      }, { constant: a.constant && c.constant && d.constant });
    },
    binaryFn: function (a, c, d) {
      return D(function (e, g) {
        return c(e, g, a, d);
      }, { constant: a.constant && d.constant });
    },
    statements: function () {
      for (var a = [];;)
        if (0 < this.tokens.length && !this.peek('}', ')', ';', ']') && a.push(this.filterChain()), !this.expect(';'))
          return 1 === a.length ? a[0] : function (c, d) {
            for (var e, g = 0; g < a.length; g++) {
              var f = a[g];
              f && (e = f(c, d));
            }
            return e;
          };
    },
    filterChain: function () {
      for (var a = this.expression(), c;;)
        if (c = this.expect('|'))
          a = this.binaryFn(a, c.fn, this.filter());
        else
          return a;
    },
    filter: function () {
      for (var a = this.expect(), c = this.$filter(a.text), d = [];;)
        if (a = this.expect(':'))
          d.push(this.expression());
        else {
          var e = function (a, e, h) {
            h = [h];
            for (var l = 0; l < d.length; l++)
              h.push(d[l](a, e));
            return c.apply(a, h);
          };
          return function () {
            return e;
          };
        }
    },
    expression: function () {
      return this.assignment();
    },
    assignment: function () {
      var a = this.ternary(), c, d;
      return (d = this.expect('=')) ? (a.assign || this.throwError('implies assignment but [' + this.text.substring(0, d.index) + '] can not be assigned to', d), c = this.ternary(), function (d, g) {
        return a.assign(d, c(d, g), g);
      }) : a;
    },
    ternary: function () {
      var a = this.logicalOR(), c, d;
      if (this.expect('?')) {
        c = this.ternary();
        if (d = this.expect(':'))
          return this.ternaryFn(a, c, this.ternary());
        this.throwError('expected :', d);
      } else
        return a;
    },
    logicalOR: function () {
      for (var a = this.logicalAND(), c;;)
        if (c = this.expect('||'))
          a = this.binaryFn(a, c.fn, this.logicalAND());
        else
          return a;
    },
    logicalAND: function () {
      var a = this.equality(), c;
      if (c = this.expect('&&'))
        a = this.binaryFn(a, c.fn, this.logicalAND());
      return a;
    },
    equality: function () {
      var a = this.relational(), c;
      if (c = this.expect('==', '!=', '===', '!=='))
        a = this.binaryFn(a, c.fn, this.equality());
      return a;
    },
    relational: function () {
      var a = this.additive(), c;
      if (c = this.expect('<', '>', '<=', '>='))
        a = this.binaryFn(a, c.fn, this.relational());
      return a;
    },
    additive: function () {
      for (var a = this.multiplicative(), c; c = this.expect('+', '-');)
        a = this.binaryFn(a, c.fn, this.multiplicative());
      return a;
    },
    multiplicative: function () {
      for (var a = this.unary(), c; c = this.expect('*', '/', '%');)
        a = this.binaryFn(a, c.fn, this.unary());
      return a;
    },
    unary: function () {
      var a;
      return this.expect('+') ? this.primary() : (a = this.expect('-')) ? this.binaryFn($a.ZERO, a.fn, this.unary()) : (a = this.expect('!')) ? this.unaryFn(a.fn, this.unary()) : this.primary();
    },
    fieldAccess: function (a) {
      var c = this, d = this.expect().text, e = Dc(d, this.options, this.text);
      return D(function (c, d, h) {
        return e(h || a(c, d));
      }, {
        assign: function (e, f, h) {
          return ob(a(e, h), d, f, c.text, c.options);
        }
      });
    },
    objectIndex: function (a) {
      var c = this, d = this.expression();
      this.consume(']');
      return D(function (e, g) {
        var f = a(e, g), h = d(e, g), l;
        if (!f)
          return s;
        (f = Za(f[h], c.text)) && (f.then && c.options.unwrapPromises) && (l = f, '$$v' in f || (l.$$v = s, l.then(function (a) {
          l.$$v = a;
        })), f = f.$$v);
        return f;
      }, {
        assign: function (e, g, f) {
          var h = d(e, f);
          return Za(a(e, f), c.text)[h] = g;
        }
      });
    },
    functionCall: function (a, c) {
      var d = [];
      if (')' !== this.peekToken().text) {
        do
          d.push(this.expression());
        while (this.expect(','));
      }
      this.consume(')');
      var e = this;
      return function (g, f) {
        for (var h = [], l = c ? c(g, f) : g, k = 0; k < d.length; k++)
          h.push(d[k](g, f));
        k = a(g, f, l) || C;
        Za(l, e.text);
        Za(k, e.text);
        h = k.apply ? k.apply(l, h) : k(h[0], h[1], h[2], h[3], h[4]);
        return Za(h, e.text);
      };
    },
    arrayDeclaration: function () {
      var a = [], c = !0;
      if (']' !== this.peekToken().text) {
        do {
          if (this.peek(']'))
            break;
          var d = this.expression();
          a.push(d);
          d.constant || (c = !1);
        } while (this.expect(','));
      }
      this.consume(']');
      return D(function (c, d) {
        for (var f = [], h = 0; h < a.length; h++)
          f.push(a[h](c, d));
        return f;
      }, {
        literal: !0,
        constant: c
      });
    },
    object: function () {
      var a = [], c = !0;
      if ('}' !== this.peekToken().text) {
        do {
          if (this.peek('}'))
            break;
          var d = this.expect(), d = d.string || d.text;
          this.consume(':');
          var e = this.expression();
          a.push({
            key: d,
            value: e
          });
          e.constant || (c = !1);
        } while (this.expect(','));
      }
      this.consume('}');
      return D(function (c, d) {
        for (var e = {}, l = 0; l < a.length; l++) {
          var k = a[l];
          e[k.key] = k.value(c, d);
        }
        return e;
      }, {
        literal: !0,
        constant: c
      });
    }
  };
  var Mb = {}, ua = t('$sce'), ga = {
      HTML: 'html',
      CSS: 'css',
      URL: 'url',
      RESOURCE_URL: 'resourceUrl',
      JS: 'js'
    }, W = U.createElement('a'), Hc = sa(O.location.href, !0);
  gc.$inject = ['$provide'];
  Ic.$inject = ['$locale'];
  Kc.$inject = ['$locale'];
  var Nc = '.', Ie = {
      yyyy: $('FullYear', 4),
      yy: $('FullYear', 2, 0, !0),
      y: $('FullYear', 1),
      MMMM: pb('Month'),
      MMM: pb('Month', !0),
      MM: $('Month', 2, 1),
      M: $('Month', 1, 1),
      dd: $('Date', 2),
      d: $('Date', 1),
      HH: $('Hours', 2),
      H: $('Hours', 1),
      hh: $('Hours', 2, -12),
      h: $('Hours', 1, -12),
      mm: $('Minutes', 2),
      m: $('Minutes', 1),
      ss: $('Seconds', 2),
      s: $('Seconds', 1),
      sss: $('Milliseconds', 3),
      EEEE: pb('Day'),
      EEE: pb('Day', !0),
      a: function (a, c) {
        return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1];
      },
      Z: function (a) {
        a = -1 * a.getTimezoneOffset();
        return a = (0 <= a ? '+' : '') + (Ob(Math[0 < a ? 'floor' : 'ceil'](a / 60), 2) + Ob(Math.abs(a % 60), 2));
      }
    }, He = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, Ge = /^\-?\d+$/;
  Jc.$inject = ['$locale'];
  var Ee = aa(K), Fe = aa(Fa);
  Lc.$inject = ['$parse'];
  var cd = aa({
      restrict: 'E',
      compile: function (a, c) {
        8 >= S && (c.href || c.name || c.$set('href', ''), a.append(U.createComment('IE fix')));
        if (!c.href && !c.xlinkHref && !c.name)
          return function (a, c) {
            var g = '[object SVGAnimatedString]' === wa.call(c.prop('href')) ? 'xlink:href' : 'href';
            c.on('click', function (a) {
              c.attr(g) || a.preventDefault();
            });
          };
      }
    }), zb = {};
  q(kb, function (a, c) {
    if ('multiple' != a) {
      var d = na('ng-' + c);
      zb[d] = function () {
        return {
          priority: 100,
          link: function (a, g, f) {
            a.$watch(f[d], function (a) {
              f.$set(c, !!a);
            });
          }
        };
      };
    }
  });
  q([
    'src',
    'srcset',
    'href'
  ], function (a) {
    var c = na('ng-' + a);
    zb[c] = function () {
      return {
        priority: 99,
        link: function (d, e, g) {
          var f = a, h = a;
          'href' === a && '[object SVGAnimatedString]' === wa.call(e.prop('href')) && (h = 'xlinkHref', g.$attr[h] = 'xlink:href', f = null);
          g.$observe(c, function (a) {
            a && (g.$set(h, a), S && f && e.prop(f, g[h]));
          });
        }
      };
    };
  });
  var sb = {
      $addControl: C,
      $removeControl: C,
      $setValidity: C,
      $setDirty: C,
      $setPristine: C
    };
  Oc.$inject = [
    '$element',
    '$attrs',
    '$scope',
    '$animate'
  ];
  var Qc = function (a) {
      return [
        '$timeout',
        function (c) {
          return {
            name: 'form',
            restrict: a ? 'EAC' : 'E',
            controller: Oc,
            compile: function () {
              return {
                pre: function (a, e, g, f) {
                  if (!g.action) {
                    var h = function (a) {
                      a.preventDefault ? a.preventDefault() : a.returnValue = !1;
                    };
                    Pc(e[0], 'submit', h);
                    e.on('$destroy', function () {
                      c(function () {
                        Fb(e[0], 'submit', h);
                      }, 0, !1);
                    });
                  }
                  var l = e.parent().controller('form'), k = g.name || g.ngForm;
                  k && ob(a, k, f, k);
                  if (l)
                    e.on('$destroy', function () {
                      l.$removeControl(f);
                      k && ob(a, k, s, k);
                      D(f, sb);
                    });
                }
              };
            }
          };
        }
      ];
    }, dd = Qc(), qd = Qc(!0), Oe = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, Pe = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i, Qe = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Rc = {
      text: ub,
      number: function (a, c, d, e, g, f) {
        ub(a, c, d, e, g, f);
        e.$parsers.push(function (a) {
          var c = e.$isEmpty(a);
          if (c || Qe.test(a))
            return e.$setValidity('number', !0), '' === a ? null : c ? a : parseFloat(a);
          e.$setValidity('number', !1);
          return s;
        });
        Je(e, 'number', c);
        e.$formatters.push(function (a) {
          return e.$isEmpty(a) ? '' : '' + a;
        });
        d.min && (a = function (a) {
          var c = parseFloat(d.min);
          return pa(e, 'min', e.$isEmpty(a) || a >= c, a);
        }, e.$parsers.push(a), e.$formatters.push(a));
        d.max && (a = function (a) {
          var c = parseFloat(d.max);
          return pa(e, 'max', e.$isEmpty(a) || a <= c, a);
        }, e.$parsers.push(a), e.$formatters.push(a));
        e.$formatters.push(function (a) {
          return pa(e, 'number', e.$isEmpty(a) || vb(a), a);
        });
      },
      url: function (a, c, d, e, g, f) {
        ub(a, c, d, e, g, f);
        a = function (a) {
          return pa(e, 'url', e.$isEmpty(a) || Oe.test(a), a);
        };
        e.$formatters.push(a);
        e.$parsers.push(a);
      },
      email: function (a, c, d, e, g, f) {
        ub(a, c, d, e, g, f);
        a = function (a) {
          return pa(e, 'email', e.$isEmpty(a) || Pe.test(a), a);
        };
        e.$formatters.push(a);
        e.$parsers.push(a);
      },
      radio: function (a, c, d, e) {
        E(d.name) && c.attr('name', bb());
        c.on('click', function () {
          c[0].checked && a.$apply(function () {
            e.$setViewValue(d.value);
          });
        });
        e.$render = function () {
          c[0].checked = d.value == e.$viewValue;
        };
        d.$observe('value', e.$render);
      },
      checkbox: function (a, c, d, e) {
        var g = d.ngTrueValue, f = d.ngFalseValue;
        w(g) || (g = !0);
        w(f) || (f = !1);
        c.on('click', function () {
          a.$apply(function () {
            e.$setViewValue(c[0].checked);
          });
        });
        e.$render = function () {
          c[0].checked = e.$viewValue;
        };
        e.$isEmpty = function (a) {
          return a !== g;
        };
        e.$formatters.push(function (a) {
          return a === g;
        });
        e.$parsers.push(function (a) {
          return a ? g : f;
        });
      },
      hidden: C,
      button: C,
      submit: C,
      reset: C,
      file: C
    }, dc = [
      '$browser',
      '$sniffer',
      function (a, c) {
        return {
          restrict: 'E',
          require: '?ngModel',
          link: function (d, e, g, f) {
            f && (Rc[K(g.type)] || Rc.text)(d, e, g, f, c, a);
          }
        };
      }
    ], rb = 'ng-valid', qb = 'ng-invalid', La = 'ng-pristine', tb = 'ng-dirty', Re = [
      '$scope',
      '$exceptionHandler',
      '$attrs',
      '$element',
      '$parse',
      '$animate',
      function (a, c, d, e, g, f) {
        function h(a, c) {
          c = c ? '-' + fb(c, '-') : '';
          f.removeClass(e, (a ? qb : rb) + c);
          f.addClass(e, (a ? rb : qb) + c);
        }
        this.$modelValue = this.$viewValue = Number.NaN;
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$pristine = !0;
        this.$dirty = !1;
        this.$valid = !0;
        this.$invalid = !1;
        this.$name = d.name;
        var l = g(d.ngModel), k = l.assign;
        if (!k)
          throw t('ngModel')('nonassign', d.ngModel, ha(e));
        this.$render = C;
        this.$isEmpty = function (a) {
          return E(a) || '' === a || null === a || a !== a;
        };
        var m = e.inheritedData('$formController') || sb, n = 0, p = this.$error = {};
        e.addClass(La);
        h(!0);
        this.$setValidity = function (a, c) {
          p[a] !== !c && (c ? (p[a] && n--, n || (h(!0), this.$valid = !0, this.$invalid = !1)) : (h(!1), this.$invalid = !0, this.$valid = !1, n++), p[a] = !c, h(c, a), m.$setValidity(a, c, this));
        };
        this.$setPristine = function () {
          this.$dirty = !1;
          this.$pristine = !0;
          f.removeClass(e, tb);
          f.addClass(e, La);
        };
        this.$setViewValue = function (d) {
          this.$viewValue = d;
          this.$pristine && (this.$dirty = !0, this.$pristine = !1, f.removeClass(e, La), f.addClass(e, tb), m.$setDirty());
          q(this.$parsers, function (a) {
            d = a(d);
          });
          this.$modelValue !== d && (this.$modelValue = d, k(a, d), q(this.$viewChangeListeners, function (a) {
            try {
              a();
            } catch (d) {
              c(d);
            }
          }));
        };
        var r = this;
        a.$watch(function () {
          var c = l(a);
          if (r.$modelValue !== c) {
            var d = r.$formatters, e = d.length;
            for (r.$modelValue = c; e--;)
              c = d[e](c);
            r.$viewValue !== c && (r.$viewValue = c, r.$render());
          }
          return c;
        });
      }
    ], Fd = function () {
      return {
        require: [
          'ngModel',
          '^?form'
        ],
        controller: Re,
        link: function (a, c, d, e) {
          var g = e[0], f = e[1] || sb;
          f.$addControl(g);
          a.$on('$destroy', function () {
            f.$removeControl(g);
          });
        }
      };
    }, Hd = aa({
      require: 'ngModel',
      link: function (a, c, d, e) {
        e.$viewChangeListeners.push(function () {
          a.$eval(d.ngChange);
        });
      }
    }), ec = function () {
      return {
        require: '?ngModel',
        link: function (a, c, d, e) {
          if (e) {
            d.required = !0;
            var g = function (a) {
              if (d.required && e.$isEmpty(a))
                e.$setValidity('required', !1);
              else
                return e.$setValidity('required', !0), a;
            };
            e.$formatters.push(g);
            e.$parsers.unshift(g);
            d.$observe('required', function () {
              g(e.$viewValue);
            });
          }
        }
      };
    }, Gd = function () {
      return {
        require: 'ngModel',
        link: function (a, c, d, e) {
          var g = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ',';
          e.$parsers.push(function (a) {
            if (!E(a)) {
              var c = [];
              a && q(a.split(g), function (a) {
                a && c.push(ca(a));
              });
              return c;
            }
          });
          e.$formatters.push(function (a) {
            return M(a) ? a.join(', ') : s;
          });
          e.$isEmpty = function (a) {
            return !a || !a.length;
          };
        }
      };
    }, Se = /^(true|false|\d+)$/, Id = function () {
      return {
        priority: 100,
        compile: function (a, c) {
          return Se.test(c.ngValue) ? function (a, c, g) {
            g.$set('value', a.$eval(g.ngValue));
          } : function (a, c, g) {
            a.$watch(g.ngValue, function (a) {
              g.$set('value', a);
            });
          };
        }
      };
    }, id = va(function (a, c, d) {
      c.addClass('ng-binding').data('$binding', d.ngBind);
      a.$watch(d.ngBind, function (a) {
        c.text(a == s ? '' : a);
      });
    }), kd = [
      '$interpolate',
      function (a) {
        return function (c, d, e) {
          c = a(d.attr(e.$attr.ngBindTemplate));
          d.addClass('ng-binding').data('$binding', c);
          e.$observe('ngBindTemplate', function (a) {
            d.text(a);
          });
        };
      }
    ], jd = [
      '$sce',
      '$parse',
      function (a, c) {
        return function (d, e, g) {
          e.addClass('ng-binding').data('$binding', g.ngBindHtml);
          var f = c(g.ngBindHtml);
          d.$watch(function () {
            return (f(d) || '').toString();
          }, function (c) {
            e.html(a.getTrustedHtml(f(d)) || '');
          });
        };
      }
    ], ld = Pb('', !0), nd = Pb('Odd', 0), md = Pb('Even', 1), od = va({
      compile: function (a, c) {
        c.$set('ngCloak', s);
        a.removeClass('ng-cloak');
      }
    }), pd = [function () {
        return {
          scope: !0,
          controller: '@',
          priority: 500
        };
      }], fc = {};
  q('click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'.split(' '), function (a) {
    var c = na('ng-' + a);
    fc[c] = [
      '$parse',
      function (d) {
        return {
          compile: function (e, g) {
            var f = d(g[c]);
            return function (c, d, e) {
              d.on(K(a), function (a) {
                c.$apply(function () {
                  f(c, { $event: a });
                });
              });
            };
          }
        };
      }
    ];
  });
  var sd = [
      '$animate',
      function (a) {
        return {
          transclude: 'element',
          priority: 600,
          terminal: !0,
          restrict: 'A',
          $$tlb: !0,
          link: function (c, d, e, g, f) {
            var h, l, k;
            c.$watch(e.ngIf, function (g) {
              Qa(g) ? l || (l = c.$new(), f(l, function (c) {
                c[c.length++] = U.createComment(' end ngIf: ' + e.ngIf + ' ');
                h = { clone: c };
                a.enter(c, d.parent(), d);
              })) : (k && (k.remove(), k = null), l && (l.$destroy(), l = null), h && (k = yb(h.clone), a.leave(k, function () {
                k = null;
              }), h = null));
            });
          }
        };
      }
    ], td = [
      '$http',
      '$templateCache',
      '$anchorScroll',
      '$animate',
      '$sce',
      function (a, c, d, e, g) {
        return {
          restrict: 'ECA',
          priority: 400,
          terminal: !0,
          transclude: 'element',
          controller: Ea.noop,
          compile: function (f, h) {
            var l = h.ngInclude || h.src, k = h.onload || '', m = h.autoscroll;
            return function (f, h, q, s, u) {
              var F = 0, v, y, A, x = function () {
                  y && (y.remove(), y = null);
                  v && (v.$destroy(), v = null);
                  A && (e.leave(A, function () {
                    y = null;
                  }), y = A, A = null);
                };
              f.$watch(g.parseAsResourceUrl(l), function (g) {
                var l = function () {
                    !B(m) || m && !f.$eval(m) || d();
                  }, q = ++F;
                g ? (a.get(g, { cache: c }).success(function (a) {
                  if (q === F) {
                    var c = f.$new();
                    s.template = a;
                    a = u(c, function (a) {
                      x();
                      e.enter(a, null, h, l);
                    });
                    v = c;
                    A = a;
                    v.$emit('$includeContentLoaded');
                    f.$eval(k);
                  }
                }).error(function () {
                  q === F && x();
                }), f.$emit('$includeContentRequested')) : (x(), s.template = null);
              });
            };
          }
        };
      }
    ], Jd = [
      '$compile',
      function (a) {
        return {
          restrict: 'ECA',
          priority: -400,
          require: 'ngInclude',
          link: function (c, d, e, g) {
            d.html(g.template);
            a(d.contents())(c);
          }
        };
      }
    ], ud = va({
      priority: 450,
      compile: function () {
        return {
          pre: function (a, c, d) {
            a.$eval(d.ngInit);
          }
        };
      }
    }), vd = va({
      terminal: !0,
      priority: 1000
    }), wd = [
      '$locale',
      '$interpolate',
      function (a, c) {
        var d = /{}/g;
        return {
          restrict: 'EA',
          link: function (e, g, f) {
            var h = f.count, l = f.$attr.when && g.attr(f.$attr.when), k = f.offset || 0, m = e.$eval(l) || {}, n = {}, p = c.startSymbol(), r = c.endSymbol(), s = /^when(Minus)?(.+)$/;
            q(f, function (a, c) {
              s.test(c) && (m[K(c.replace('when', '').replace('Minus', '-'))] = g.attr(f.$attr[c]));
            });
            q(m, function (a, e) {
              n[e] = c(a.replace(d, p + h + '-' + k + r));
            });
            e.$watch(function () {
              var c = parseFloat(e.$eval(h));
              if (isNaN(c))
                return '';
              c in m || (c = a.pluralCat(c - k));
              return n[c](e, g, !0);
            }, function (a) {
              g.text(a);
            });
          }
        };
      }
    ], xd = [
      '$parse',
      '$animate',
      function (a, c) {
        var d = t('ngRepeat');
        return {
          transclude: 'element',
          priority: 1000,
          terminal: !0,
          $$tlb: !0,
          link: function (e, g, f, h, l) {
            var k = f.ngRepeat, m = k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/), n, p, r, s, u, F, v = { $id: Ia };
            if (!m)
              throw d('iexp', k);
            f = m[1];
            h = m[2];
            (m = m[3]) ? (n = a(m), p = function (a, c, d) {
              F && (v[F] = a);
              v[u] = c;
              v.$index = d;
              return n(e, v);
            }) : (r = function (a, c) {
              return Ia(c);
            }, s = function (a) {
              return a;
            });
            m = f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
            if (!m)
              throw d('iidexp', f);
            u = m[3] || m[1];
            F = m[2];
            var B = {};
            e.$watchCollection(h, function (a) {
              var f, h, m = g[0], n, v = {}, H, R, w, C, T, t, E = [];
              if (ab(a))
                T = a, n = p || r;
              else {
                n = p || s;
                T = [];
                for (w in a)
                  a.hasOwnProperty(w) && '$' != w.charAt(0) && T.push(w);
                T.sort();
              }
              H = T.length;
              h = E.length = T.length;
              for (f = 0; f < h; f++)
                if (w = a === T ? f : T[f], C = a[w], C = n(w, C, f), Aa(C, '`track by` id'), B.hasOwnProperty(C))
                  t = B[C], delete B[C], v[C] = t, E[f] = t;
                else {
                  if (v.hasOwnProperty(C))
                    throw q(E, function (a) {
                      a && a.scope && (B[a.id] = a);
                    }), d('dupes', k, C);
                  E[f] = { id: C };
                  v[C] = !1;
                }
              for (w in B)
                B.hasOwnProperty(w) && (t = B[w], f = yb(t.clone), c.leave(f), q(f, function (a) {
                  a.$$NG_REMOVED = !0;
                }), t.scope.$destroy());
              f = 0;
              for (h = T.length; f < h; f++) {
                w = a === T ? f : T[f];
                C = a[w];
                t = E[f];
                E[f - 1] && (m = E[f - 1].clone[E[f - 1].clone.length - 1]);
                if (t.scope) {
                  R = t.scope;
                  n = m;
                  do
                    n = n.nextSibling;
                  while (n && n.$$NG_REMOVED);
                  t.clone[0] != n && c.move(yb(t.clone), null, y(m));
                  m = t.clone[t.clone.length - 1];
                } else
                  R = e.$new();
                R[u] = C;
                F && (R[F] = w);
                R.$index = f;
                R.$first = 0 === f;
                R.$last = f === H - 1;
                R.$middle = !(R.$first || R.$last);
                R.$odd = !(R.$even = 0 === (f & 1));
                t.scope || l(R, function (a) {
                  a[a.length++] = U.createComment(' end ngRepeat: ' + k + ' ');
                  c.enter(a, null, y(m));
                  m = a;
                  t.scope = R;
                  t.clone = a;
                  v[t.id] = t;
                });
              }
              B = v;
            });
          }
        };
      }
    ], yd = [
      '$animate',
      function (a) {
        return function (c, d, e) {
          c.$watch(e.ngShow, function (c) {
            a[Qa(c) ? 'removeClass' : 'addClass'](d, 'ng-hide');
          });
        };
      }
    ], rd = [
      '$animate',
      function (a) {
        return function (c, d, e) {
          c.$watch(e.ngHide, function (c) {
            a[Qa(c) ? 'addClass' : 'removeClass'](d, 'ng-hide');
          });
        };
      }
    ], zd = va(function (a, c, d) {
      a.$watch(d.ngStyle, function (a, d) {
        d && a !== d && q(d, function (a, d) {
          c.css(d, '');
        });
        a && c.css(a);
      }, !0);
    }), Ad = [
      '$animate',
      function (a) {
        return {
          restrict: 'EA',
          require: 'ngSwitch',
          controller: [
            '$scope',
            function () {
              this.cases = {};
            }
          ],
          link: function (c, d, e, g) {
            var f, h, l, k = [];
            c.$watch(e.ngSwitch || e.on, function (d) {
              var n, p = k.length;
              if (0 < p) {
                if (l) {
                  for (n = 0; n < p; n++)
                    l[n].remove();
                  l = null;
                }
                l = [];
                for (n = 0; n < p; n++) {
                  var r = h[n];
                  k[n].$destroy();
                  l[n] = r;
                  a.leave(r, function () {
                    l.splice(n, 1);
                    0 === l.length && (l = null);
                  });
                }
              }
              h = [];
              k = [];
              if (f = g.cases['!' + d] || g.cases['?'])
                c.$eval(e.change), q(f, function (d) {
                  var e = c.$new();
                  k.push(e);
                  d.transclude(e, function (c) {
                    var e = d.element;
                    h.push(c);
                    a.enter(c, e.parent(), e);
                  });
                });
            });
          }
        };
      }
    ], Bd = va({
      transclude: 'element',
      priority: 800,
      require: '^ngSwitch',
      link: function (a, c, d, e, g) {
        e.cases['!' + d.ngSwitchWhen] = e.cases['!' + d.ngSwitchWhen] || [];
        e.cases['!' + d.ngSwitchWhen].push({
          transclude: g,
          element: c
        });
      }
    }), Cd = va({
      transclude: 'element',
      priority: 800,
      require: '^ngSwitch',
      link: function (a, c, d, e, g) {
        e.cases['?'] = e.cases['?'] || [];
        e.cases['?'].push({
          transclude: g,
          element: c
        });
      }
    }), Ed = va({
      link: function (a, c, d, e, g) {
        if (!g)
          throw t('ngTransclude')('orphan', ha(c));
        g(function (a) {
          c.empty();
          c.append(a);
        });
      }
    }), ed = [
      '$templateCache',
      function (a) {
        return {
          restrict: 'E',
          terminal: !0,
          compile: function (c, d) {
            'text/ng-template' == d.type && a.put(d.id, c[0].text);
          }
        };
      }
    ], Te = t('ngOptions'), Dd = aa({ terminal: !0 }), fd = [
      '$compile',
      '$parse',
      function (a, c) {
        var d = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, e = { $setViewValue: C };
        return {
          restrict: 'E',
          require: [
            'select',
            '?ngModel'
          ],
          controller: [
            '$element',
            '$scope',
            '$attrs',
            function (a, c, d) {
              var l = this, k = {}, m = e, n;
              l.databound = d.ngModel;
              l.init = function (a, c, d) {
                m = a;
                n = d;
              };
              l.addOption = function (c) {
                Aa(c, '"option value"');
                k[c] = !0;
                m.$viewValue == c && (a.val(c), n.parent() && n.remove());
              };
              l.removeOption = function (a) {
                this.hasOption(a) && (delete k[a], m.$viewValue == a && this.renderUnknownOption(a));
              };
              l.renderUnknownOption = function (c) {
                c = '? ' + Ia(c) + ' ?';
                n.val(c);
                a.prepend(n);
                a.val(c);
                n.prop('selected', !0);
              };
              l.hasOption = function (a) {
                return k.hasOwnProperty(a);
              };
              c.$on('$destroy', function () {
                l.renderUnknownOption = C;
              });
            }
          ],
          link: function (e, f, h, l) {
            function k(a, c, d, e) {
              d.$render = function () {
                var a = d.$viewValue;
                e.hasOption(a) ? (A.parent() && A.remove(), c.val(a), '' === a && w.prop('selected', !0)) : E(a) && w ? c.val('') : e.renderUnknownOption(a);
              };
              c.on('change', function () {
                a.$apply(function () {
                  A.parent() && A.remove();
                  d.$setViewValue(c.val());
                });
              });
            }
            function m(a, c, d) {
              var e;
              d.$render = function () {
                var a = new Va(d.$viewValue);
                q(c.find('option'), function (c) {
                  c.selected = B(a.get(c.value));
                });
              };
              a.$watch(function () {
                xa(e, d.$viewValue) || (e = ba(d.$viewValue), d.$render());
              });
              c.on('change', function () {
                a.$apply(function () {
                  var a = [];
                  q(c.find('option'), function (c) {
                    c.selected && a.push(c.value);
                  });
                  d.$setViewValue(a);
                });
              });
            }
            function n(e, f, g) {
              function h() {
                var a = { '': [] }, c = [''], d, k, s, t, z;
                t = g.$modelValue;
                z = y(e) || [];
                var E = n ? Qb(z) : z, F, I, A;
                I = {};
                s = !1;
                var D, H;
                if (r)
                  if (w && M(t))
                    for (s = new Va([]), A = 0; A < t.length; A++)
                      I[m] = t[A], s.put(w(e, I), t[A]);
                  else
                    s = new Va(t);
                for (A = 0; F = E.length, A < F; A++) {
                  k = A;
                  if (n) {
                    k = E[A];
                    if ('$' === k.charAt(0))
                      continue;
                    I[n] = k;
                  }
                  I[m] = z[k];
                  d = p(e, I) || '';
                  (k = a[d]) || (k = a[d] = [], c.push(d));
                  r ? d = B(s.remove(w ? w(e, I) : q(e, I))) : (w ? (d = {}, d[m] = t, d = w(e, d) === w(e, I)) : d = t === q(e, I), s = s || d);
                  D = l(e, I);
                  D = B(D) ? D : '';
                  k.push({
                    id: w ? w(e, I) : n ? E[A] : A,
                    label: D,
                    selected: d
                  });
                }
                r || (u || null === t ? a[''].unshift({
                  id: '',
                  label: '',
                  selected: !s
                }) : s || a[''].unshift({
                  id: '?',
                  label: '',
                  selected: !0
                }));
                I = 0;
                for (E = c.length; I < E; I++) {
                  d = c[I];
                  k = a[d];
                  x.length <= I ? (t = {
                    element: C.clone().attr('label', d),
                    label: k.label
                  }, z = [t], x.push(z), f.append(t.element)) : (z = x[I], t = z[0], t.label != d && t.element.attr('label', t.label = d));
                  D = null;
                  A = 0;
                  for (F = k.length; A < F; A++)
                    s = k[A], (d = z[A + 1]) ? (D = d.element, d.label !== s.label && D.text(d.label = s.label), d.id !== s.id && D.val(d.id = s.id), d.selected !== s.selected && D.prop('selected', d.selected = s.selected)) : ('' === s.id && u ? H = u : (H = v.clone()).val(s.id).attr('selected', s.selected).text(s.label), z.push({
                      element: H,
                      label: s.label,
                      id: s.id,
                      selected: s.selected
                    }), D ? D.after(H) : t.element.append(H), D = H);
                  for (A++; z.length > A;)
                    z.pop().element.remove();
                }
                for (; x.length > I;)
                  x.pop()[0].element.remove();
              }
              var k;
              if (!(k = t.match(d)))
                throw Te('iexp', t, ha(f));
              var l = c(k[2] || k[1]), m = k[4] || k[6], n = k[5], p = c(k[3] || ''), q = c(k[2] ? k[1] : m), y = c(k[7]), w = k[8] ? c(k[8]) : null, x = [[{
                      element: f,
                      label: ''
                    }]];
              u && (a(u)(e), u.removeClass('ng-scope'), u.remove());
              f.empty();
              f.on('change', function () {
                e.$apply(function () {
                  var a, c = y(e) || [], d = {}, h, k, l, p, t, v, u;
                  if (r)
                    for (k = [], p = 0, v = x.length; p < v; p++)
                      for (a = x[p], l = 1, t = a.length; l < t; l++) {
                        if ((h = a[l].element)[0].selected) {
                          h = h.val();
                          n && (d[n] = h);
                          if (w)
                            for (u = 0; u < c.length && (d[m] = c[u], w(e, d) != h); u++);
                          else
                            d[m] = c[h];
                          k.push(q(e, d));
                        }
                      }
                  else {
                    h = f.val();
                    if ('?' == h)
                      k = s;
                    else if ('' === h)
                      k = null;
                    else if (w)
                      for (u = 0; u < c.length; u++) {
                        if (d[m] = c[u], w(e, d) == h) {
                          k = q(e, d);
                          break;
                        }
                      }
                    else
                      d[m] = c[h], n && (d[n] = h), k = q(e, d);
                    1 < x[0].length && x[0][1].id !== h && (x[0][1].selected = !1);
                  }
                  g.$setViewValue(k);
                });
              });
              g.$render = h;
              e.$watch(h);
            }
            if (l[1]) {
              var p = l[0];
              l = l[1];
              var r = h.multiple, t = h.ngOptions, u = !1, w, v = y(U.createElement('option')), C = y(U.createElement('optgroup')), A = v.clone();
              h = 0;
              for (var x = f.children(), D = x.length; h < D; h++)
                if ('' === x[h].value) {
                  w = u = x.eq(h);
                  break;
                }
              p.init(l, u, A);
              r && (l.$isEmpty = function (a) {
                return !a || 0 === a.length;
              });
              t ? n(e, f, l) : r ? m(e, f, l) : k(e, f, l, p);
            }
          }
        };
      }
    ], hd = [
      '$interpolate',
      function (a) {
        var c = {
            addOption: C,
            removeOption: C
          };
        return {
          restrict: 'E',
          priority: 100,
          compile: function (d, e) {
            if (E(e.value)) {
              var g = a(d.text(), !0);
              g || e.$set('value', d.text());
            }
            return function (a, d, e) {
              var k = d.parent(), m = k.data('$selectController') || k.parent().data('$selectController');
              m && m.databound ? d.prop('selected', !1) : m = c;
              g ? a.$watch(g, function (a, c) {
                e.$set('value', a);
                a !== c && m.removeOption(c);
                m.addOption(a);
              }) : m.addOption(e.value);
              d.on('$destroy', function () {
                m.removeOption(e.value);
              });
            };
          }
        };
      }
    ], gd = aa({
      restrict: 'E',
      terminal: !0
    });
  O.angular.bootstrap ? console.log('WARNING: Tried to load angular more than once.') : ((Ga = O.jQuery) ? (y = Ga, D(Ga.fn, {
    scope: Ja.scope,
    isolateScope: Ja.isolateScope,
    controller: Ja.controller,
    injector: Ja.injector,
    inheritedData: Ja.inheritedData
  }), Ab('remove', !0, !0, !1), Ab('empty', !1, !1, !1), Ab('html', !1, !1, !0)) : y = N, Ea.element = y, Zc(Ea), y(U).ready(function () {
    Wc(U, $b);
  }));
}(window, document));
!angular.$$csp() && angular.element(document).find('head').prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}</style>');
//# sourceMappingURL=angular.min.js.map
/*
 AngularJS v1.2.16
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (p, f, n) {
  'use strict';
  f.module('ngCookies', ['ng']).factory('$cookies', [
    '$rootScope',
    '$browser',
    function (e, b) {
      var c = {}, g = {}, h, k = !1, l = f.copy, m = f.isUndefined;
      b.addPollFn(function () {
        var a = b.cookies();
        h != a && (h = a, l(a, g), l(a, c), k && e.$apply());
      })();
      k = !0;
      e.$watch(function () {
        var a, d, e;
        for (a in g)
          m(c[a]) && b.cookies(a, n);
        for (a in c)
          d = c[a], f.isString(d) || (d = '' + d, c[a] = d), d !== g[a] && (b.cookies(a, d), e = !0);
        if (e)
          for (a in d = b.cookies(), c)
            c[a] !== d[a] && (m(d[a]) ? delete c[a] : c[a] = d[a]);
      });
      return c;
    }
  ]).factory('$cookieStore', [
    '$cookies',
    function (e) {
      return {
        get: function (b) {
          return (b = e[b]) ? f.fromJson(b) : b;
        },
        put: function (b, c) {
          e[b] = f.toJson(c);
        },
        remove: function (b) {
          delete e[b];
        }
      };
    }
  ]);
}(window, window.angular));
//# sourceMappingURL=angular-cookies.min.js.map
/*!
 * angular-translate - v2.7.2 - 2015-06-01
 * http://github.com/angular-translate/angular-translate
 * Copyright (c) 2015 ; Licensed MIT
 */
!function (a, b) {
  'function' == typeof define && define.amd ? define([], function () {
    return b();
  }) : 'object' == typeof exports ? module.exports = b() : b();
}(this, function () {
  function a(a) {
    'use strict';
    var b = a.storageKey(), c = a.storage(), d = function () {
        var d = a.preferredLanguage();
        angular.isString(d) ? a.use(d) : c.put(b, a.use());
      };
    d.displayName = 'fallbackFromIncorrectStorageValue', c ? c.get(b) ? a.use(c.get(b))['catch'](d) : d() : angular.isString(a.preferredLanguage()) && a.use(a.preferredLanguage());
  }
  function b() {
    'use strict';
    var a, b, c = null, d = !1, e = !1;
    b = {
      sanitize: function (a, b) {
        return 'text' === b && (a = g(a)), a;
      },
      escape: function (a, b) {
        return 'text' === b && (a = f(a)), a;
      },
      sanitizeParameters: function (a, b) {
        return 'params' === b && (a = h(a, g)), a;
      },
      escapeParameters: function (a, b) {
        return 'params' === b && (a = h(a, f)), a;
      }
    }, b.escaped = b.escapeParameters, this.addStrategy = function (a, c) {
      return b[a] = c, this;
    }, this.removeStrategy = function (a) {
      return delete b[a], this;
    }, this.useStrategy = function (a) {
      return d = !0, c = a, this;
    }, this.$get = [
      '$injector',
      '$log',
      function (f, g) {
        var h = function (a, c, d) {
            return angular.forEach(d, function (d) {
              if (angular.isFunction(d))
                a = d(a, c);
              else {
                if (!angular.isFunction(b[d]))
                  throw new Error('pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: \'' + d + '\'');
                a = b[d](a, c);
              }
            }), a;
          }, i = function () {
            d || e || (g.warn('pascalprecht.translate.$translateSanitization: No sanitization strategy has been configured. This can have serious security implications. See http://angular-translate.github.io/docs/#/guide/19_security for details.'), e = !0);
          };
        return f.has('$sanitize') && (a = f.get('$sanitize')), {
          useStrategy: function (a) {
            return function (b) {
              a.useStrategy(b);
            };
          }(this),
          sanitize: function (a, b, d) {
            if (c || i(), arguments.length < 3 && (d = c), !d)
              return a;
            var e = angular.isArray(d) ? d : [d];
            return h(a, b, e);
          }
        };
      }
    ];
    var f = function (a) {
        var b = angular.element('<div></div>');
        return b.text(a), b.html();
      }, g = function (b) {
        if (!a)
          throw new Error('pascalprecht.translate.$translateSanitization: Error cannot find $sanitize service. Either include the ngSanitize module (https://docs.angularjs.org/api/ngSanitize) or use a sanitization strategy which does not depend on $sanitize, such as \'escape\'.');
        return a(b);
      }, h = function (a, b) {
        if (angular.isObject(a)) {
          var c = angular.isArray(a) ? [] : {};
          return angular.forEach(a, function (a, d) {
            c[d] = h(a, b);
          }), c;
        }
        return angular.isNumber(a) ? a : b(a);
      };
  }
  function c(a, b, c, d) {
    'use strict';
    var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t = {}, u = [], v = a, w = [], x = 'translate-cloak', y = !1, z = !1, A = '.', B = 0, C = !0, D = 'default', E = {
        'default': function (a) {
          return (a || '').split('-').join('_');
        },
        java: function (a) {
          var b = (a || '').split('-').join('_'), c = b.split('_');
          return c.length > 1 ? c[0].toLowerCase() + '_' + c[1].toUpperCase() : b;
        },
        bcp47: function (a) {
          var b = (a || '').split('_').join('-'), c = b.split('-');
          return c.length > 1 ? c[0].toLowerCase() + '-' + c[1].toUpperCase() : b;
        }
      }, F = '2.7.2', G = function () {
        if (angular.isFunction(d.getLocale))
          return d.getLocale();
        var a, c, e = b.$get().navigator, f = [
            'language',
            'browserLanguage',
            'systemLanguage',
            'userLanguage'
          ];
        if (angular.isArray(e.languages))
          for (a = 0; a < e.languages.length; a++)
            if (c = e.languages[a], c && c.length)
              return c;
        for (a = 0; a < f.length; a++)
          if (c = e[f[a]], c && c.length)
            return c;
        return null;
      };
    G.displayName = 'angular-translate/service: getFirstBrowserLanguage';
    var H = function () {
      var a = G() || '';
      return E[D] && (a = E[D](a)), a;
    };
    H.displayName = 'angular-translate/service: getLocale';
    var I = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++)
          if (a[c] === b)
            return c;
        return -1;
      }, J = function () {
        return this.toString().replace(/^\s+|\s+$/g, '');
      }, K = function (a) {
        for (var b = [], c = angular.lowercase(a), d = 0, e = u.length; e > d; d++)
          b.push(angular.lowercase(u[d]));
        if (I(b, c) > -1)
          return a;
        if (f) {
          var g;
          for (var h in f) {
            var i = !1, j = Object.prototype.hasOwnProperty.call(f, h) && angular.lowercase(h) === angular.lowercase(a);
            if ('*' === h.slice(-1) && (i = h.slice(0, -1) === a.slice(0, h.length - 1)), (j || i) && (g = f[h], I(b, angular.lowercase(g)) > -1))
              return g;
          }
        }
        if (a) {
          var k = a.split('_');
          if (k.length > 1 && I(b, angular.lowercase(k[0])) > -1)
            return k[0];
        }
        return a;
      }, L = function (a, b) {
        if (!a && !b)
          return t;
        if (a && !b) {
          if (angular.isString(a))
            return t[a];
        } else
          angular.isObject(t[a]) || (t[a] = {}), angular.extend(t[a], M(b));
        return this;
      };
    this.translations = L, this.cloakClassName = function (a) {
      return a ? (x = a, this) : x;
    };
    var M = function (a, b, c, d) {
      var e, f, g, h;
      b || (b = []), c || (c = {});
      for (e in a)
        Object.prototype.hasOwnProperty.call(a, e) && (h = a[e], angular.isObject(h) ? M(h, b.concat(e), c, e) : (f = b.length ? '' + b.join(A) + A + e : e, b.length && e === d && (g = '' + b.join(A), c[g] = '@:' + f), c[f] = h));
      return c;
    };
    M.displayName = 'flatObject', this.addInterpolation = function (a) {
      return w.push(a), this;
    }, this.useMessageFormatInterpolation = function () {
      return this.useInterpolation('$translateMessageFormatInterpolation');
    }, this.useInterpolation = function (a) {
      return n = a, this;
    }, this.useSanitizeValueStrategy = function (a) {
      return c.useStrategy(a), this;
    }, this.preferredLanguage = function (a) {
      return N(a), this;
    };
    var N = function (a) {
      return a && (e = a), e;
    };
    this.translationNotFoundIndicator = function (a) {
      return this.translationNotFoundIndicatorLeft(a), this.translationNotFoundIndicatorRight(a), this;
    }, this.translationNotFoundIndicatorLeft = function (a) {
      return a ? (q = a, this) : q;
    }, this.translationNotFoundIndicatorRight = function (a) {
      return a ? (r = a, this) : r;
    }, this.fallbackLanguage = function (a) {
      return O(a), this;
    };
    var O = function (a) {
      return a ? (angular.isString(a) ? (h = !0, g = [a]) : angular.isArray(a) && (h = !1, g = a), angular.isString(e) && I(g, e) < 0 && g.push(e), this) : h ? g[0] : g;
    };
    this.use = function (a) {
      if (a) {
        if (!t[a] && !o)
          throw new Error('$translateProvider couldn\'t find translationTable for langKey: \'' + a + '\'');
        return i = a, this;
      }
      return i;
    };
    var P = function (a) {
      return a ? (v = a, this) : l ? l + v : v;
    };
    this.storageKey = P, this.useUrlLoader = function (a, b) {
      return this.useLoader('$translateUrlLoader', angular.extend({ url: a }, b));
    }, this.useStaticFilesLoader = function (a) {
      return this.useLoader('$translateStaticFilesLoader', a);
    }, this.useLoader = function (a, b) {
      return o = a, p = b || {}, this;
    }, this.useLocalStorage = function () {
      return this.useStorage('$translateLocalStorage');
    }, this.useCookieStorage = function () {
      return this.useStorage('$translateCookieStorage');
    }, this.useStorage = function (a) {
      return k = a, this;
    }, this.storagePrefix = function (a) {
      return a ? (l = a, this) : a;
    }, this.useMissingTranslationHandlerLog = function () {
      return this.useMissingTranslationHandler('$translateMissingTranslationHandlerLog');
    }, this.useMissingTranslationHandler = function (a) {
      return m = a, this;
    }, this.usePostCompiling = function (a) {
      return y = !!a, this;
    }, this.forceAsyncReload = function (a) {
      return z = !!a, this;
    }, this.uniformLanguageTag = function (a) {
      return a ? angular.isString(a) && (a = { standard: a }) : a = {}, D = a.standard, this;
    }, this.determinePreferredLanguage = function (a) {
      var b = a && angular.isFunction(a) ? a() : H();
      return e = u.length ? K(b) : b, this;
    }, this.registerAvailableLanguageKeys = function (a, b) {
      return a ? (u = a, b && (f = b), this) : u;
    }, this.useLoaderCache = function (a) {
      return a === !1 ? s = void 0 : a === !0 ? s = !0 : 'undefined' == typeof a ? s = '$translationCache' : a && (s = a), this;
    }, this.directivePriority = function (a) {
      return void 0 === a ? B : (B = a, this);
    }, this.statefulFilter = function (a) {
      return void 0 === a ? C : (C = a, this);
    }, this.$get = [
      '$log',
      '$injector',
      '$rootScope',
      '$q',
      function (a, b, c, d) {
        var f, l, u, A = b.get(n || '$translateDefaultInterpolation'), D = !1, E = {}, G = {}, H = function (a, b, c, h) {
            if (angular.isArray(a)) {
              var j = function (a) {
                for (var e = {}, f = [], g = function (a) {
                      var f = d.defer(), g = function (b) {
                          e[a] = b, f.resolve([
                            a,
                            b
                          ]);
                        };
                      return H(a, b, c, h).then(g, g), f.promise;
                    }, i = 0, j = a.length; j > i; i++)
                  f.push(g(a[i]));
                return d.all(f).then(function () {
                  return e;
                });
              };
              return j(a);
            }
            var m = d.defer();
            a && (a = J.apply(a));
            var n = function () {
                var a = e ? G[e] : G[i];
                if (l = 0, k && !a) {
                  var b = f.get(v);
                  if (a = G[b], g && g.length) {
                    var c = I(g, b);
                    l = 0 === c ? 1 : 0, I(g, e) < 0 && g.push(e);
                  }
                }
                return a;
              }();
            if (n) {
              var o = function () {
                ab(a, b, c, h).then(m.resolve, m.reject);
              };
              o.displayName = 'promiseResolved', n['finally'](o, m.reject);
            } else
              ab(a, b, c, h).then(m.resolve, m.reject);
            return m.promise;
          }, Q = function (a) {
            return q && (a = [
              q,
              a
            ].join(' ')), r && (a = [
              a,
              r
            ].join(' ')), a;
          }, R = function (a) {
            i = a, c.$emit('$translateChangeSuccess', { language: a }), k && f.put(H.storageKey(), i), A.setLocale(i);
            var b = function (a, b) {
              E[b].setLocale(i);
            };
            b.displayName = 'eachInterpolatorLocaleSetter', angular.forEach(E, b), c.$emit('$translateChangeEnd', { language: a });
          }, S = function (a) {
            if (!a)
              throw 'No language key specified for loading.';
            var e = d.defer();
            c.$emit('$translateLoadingStart', { language: a }), D = !0;
            var f = s;
            'string' == typeof f && (f = b.get(f));
            var g = angular.extend({}, p, {
                key: a,
                $http: angular.extend({}, { cache: f }, p.$http)
              }), h = function (b) {
                var d = {};
                c.$emit('$translateLoadingSuccess', { language: a }), angular.isArray(b) ? angular.forEach(b, function (a) {
                  angular.extend(d, M(a));
                }) : angular.extend(d, M(b)), D = !1, e.resolve({
                  key: a,
                  table: d
                }), c.$emit('$translateLoadingEnd', { language: a });
              };
            h.displayName = 'onLoaderSuccess';
            var i = function (a) {
              c.$emit('$translateLoadingError', { language: a }), e.reject(a), c.$emit('$translateLoadingEnd', { language: a });
            };
            return i.displayName = 'onLoaderError', b.get(o)(g).then(h, i), e.promise;
          };
        if (k && (f = b.get(k), !f.get || !f.put))
          throw new Error('Couldn\'t use storage \'' + k + '\', missing get() or put() method!');
        if (w.length) {
          var T = function (a) {
            var c = b.get(a);
            c.setLocale(e || i), E[c.getInterpolationIdentifier()] = c;
          };
          T.displayName = 'interpolationFactoryAdder', angular.forEach(w, T);
        }
        var U = function (a) {
            var b = d.defer();
            if (Object.prototype.hasOwnProperty.call(t, a))
              b.resolve(t[a]);
            else if (G[a]) {
              var c = function (a) {
                L(a.key, a.table), b.resolve(a.table);
              };
              c.displayName = 'translationTableResolver', G[a].then(c, b.reject);
            } else
              b.reject();
            return b.promise;
          }, V = function (a, b, c, e) {
            var f = d.defer(), g = function (d) {
                if (Object.prototype.hasOwnProperty.call(d, b)) {
                  e.setLocale(a);
                  var g = d[b];
                  '@:' === g.substr(0, 2) ? V(a, g.substr(2), c, e).then(f.resolve, f.reject) : f.resolve(e.interpolate(d[b], c)), e.setLocale(i);
                } else
                  f.reject();
              };
            return g.displayName = 'fallbackTranslationResolver', U(a).then(g, f.reject), f.promise;
          }, W = function (a, b, c, d) {
            var e, f = t[a];
            if (f && Object.prototype.hasOwnProperty.call(f, b)) {
              if (d.setLocale(a), e = d.interpolate(f[b], c), '@:' === e.substr(0, 2))
                return W(a, e.substr(2), c, d);
              d.setLocale(i);
            }
            return e;
          }, X = function (a, c) {
            if (m) {
              var d = b.get(m)(a, i, c);
              return void 0 !== d ? d : a;
            }
            return a;
          }, Y = function (a, b, c, e, f) {
            var h = d.defer();
            if (a < g.length) {
              var i = g[a];
              V(i, b, c, e).then(h.resolve, function () {
                Y(a + 1, b, c, e, f).then(h.resolve);
              });
            } else
              h.resolve(f ? f : X(b, c));
            return h.promise;
          }, Z = function (a, b, c, d) {
            var e;
            if (a < g.length) {
              var f = g[a];
              e = W(f, b, c, d), e || (e = Z(a + 1, b, c, d));
            }
            return e;
          }, $ = function (a, b, c, d) {
            return Y(u > 0 ? u : l, a, b, c, d);
          }, _ = function (a, b, c) {
            return Z(u > 0 ? u : l, a, b, c);
          }, ab = function (a, b, c, e) {
            var f = d.defer(), h = i ? t[i] : t, j = c ? E[c] : A;
            if (h && Object.prototype.hasOwnProperty.call(h, a)) {
              var k = h[a];
              '@:' === k.substr(0, 2) ? H(k.substr(2), b, c, e).then(f.resolve, f.reject) : f.resolve(j.interpolate(k, b));
            } else {
              var l;
              m && !D && (l = X(a, b)), i && g && g.length ? $(a, b, j, e).then(function (a) {
                f.resolve(a);
              }, function (a) {
                f.reject(Q(a));
              }) : m && !D && l ? f.resolve(e ? e : l) : e ? f.resolve(e) : f.reject(Q(a));
            }
            return f.promise;
          }, bb = function (a, b, c) {
            var d, e = i ? t[i] : t, f = A;
            if (E && Object.prototype.hasOwnProperty.call(E, c) && (f = E[c]), e && Object.prototype.hasOwnProperty.call(e, a)) {
              var h = e[a];
              d = '@:' === h.substr(0, 2) ? bb(h.substr(2), b, c) : f.interpolate(h, b);
            } else {
              var j;
              m && !D && (j = X(a, b)), i && g && g.length ? (l = 0, d = _(a, b, f)) : d = m && !D && j ? j : Q(a);
            }
            return d;
          }, cb = function (a) {
            j === a && (j = void 0), G[a] = void 0;
          };
        if (H.preferredLanguage = function (a) {
            return a && N(a), e;
          }, H.cloakClassName = function () {
            return x;
          }, H.fallbackLanguage = function (a) {
            if (void 0 !== a && null !== a) {
              if (O(a), o && g && g.length)
                for (var b = 0, c = g.length; c > b; b++)
                  G[g[b]] || (G[g[b]] = S(g[b]));
              H.use(H.use());
            }
            return h ? g[0] : g;
          }, H.useFallbackLanguage = function (a) {
            if (void 0 !== a && null !== a)
              if (a) {
                var b = I(g, a);
                b > -1 && (u = b);
              } else
                u = 0;
          }, H.proposedLanguage = function () {
            return j;
          }, H.storage = function () {
            return f;
          }, H.use = function (a) {
            if (!a)
              return i;
            var b = d.defer();
            c.$emit('$translateChangeStart', { language: a });
            var e = K(a);
            return e && (a = e), !z && t[a] || !o || G[a] ? j === a && G[a] ? G[a].then(function (a) {
              return b.resolve(a.key), a;
            }, function (a) {
              return b.reject(a), d.reject(a);
            }) : (b.resolve(a), R(a)) : (j = a, G[a] = S(a).then(function (a) {
              return L(a.key, a.table), b.resolve(a.key), R(a.key), a;
            }, function (a) {
              return c.$emit('$translateChangeError', { language: a }), b.reject(a), c.$emit('$translateChangeEnd', { language: a }), d.reject(a);
            }), G[a]['finally'](function () {
              cb(a);
            })), b.promise;
          }, H.storageKey = function () {
            return P();
          }, H.isPostCompilingEnabled = function () {
            return y;
          }, H.isForceAsyncReloadEnabled = function () {
            return z;
          }, H.refresh = function (a) {
            function b() {
              f.resolve(), c.$emit('$translateRefreshEnd', { language: a });
            }
            function e() {
              f.reject(), c.$emit('$translateRefreshEnd', { language: a });
            }
            if (!o)
              throw new Error('Couldn\'t refresh translation table, no loader registered!');
            var f = d.defer();
            if (c.$emit('$translateRefreshStart', { language: a }), a)
              if (t[a]) {
                var h = function (c) {
                  L(c.key, c.table), a === i && R(i), b();
                };
                h.displayName = 'refreshPostProcessor', S(a).then(h, e);
              } else
                e();
            else {
              var j = [], k = {};
              if (g && g.length)
                for (var l = 0, m = g.length; m > l; l++)
                  j.push(S(g[l])), k[g[l]] = !0;
              i && !k[i] && j.push(S(i));
              var n = function (a) {
                t = {}, angular.forEach(a, function (a) {
                  L(a.key, a.table);
                }), i && R(i), b();
              };
              n.displayName = 'refreshPostProcessor', d.all(j).then(n, e);
            }
            return f.promise;
          }, H.instant = function (a, b, c) {
            if (null === a || angular.isUndefined(a))
              return a;
            if (angular.isArray(a)) {
              for (var d = {}, f = 0, h = a.length; h > f; f++)
                d[a[f]] = H.instant(a[f], b, c);
              return d;
            }
            if (angular.isString(a) && a.length < 1)
              return a;
            a && (a = J.apply(a));
            var j, k = [];
            e && k.push(e), i && k.push(i), g && g.length && (k = k.concat(g));
            for (var l = 0, n = k.length; n > l; l++) {
              var o = k[l];
              if (t[o] && ('undefined' != typeof t[o][a] ? j = bb(a, b, c) : (q || r) && (j = Q(a))), 'undefined' != typeof j)
                break;
            }
            return j || '' === j || (j = A.interpolate(a, b), m && !D && (j = X(a, b))), j;
          }, H.versionInfo = function () {
            return F;
          }, H.loaderCache = function () {
            return s;
          }, H.directivePriority = function () {
            return B;
          }, H.statefulFilter = function () {
            return C;
          }, o && (angular.equals(t, {}) && H.use(H.use()), g && g.length))
          for (var db = function (a) {
                return L(a.key, a.table), c.$emit('$translateChangeEnd', { language: a.key }), a;
              }, eb = 0, fb = g.length; fb > eb; eb++) {
            var gb = g[eb];
            (z || !t[gb]) && (G[gb] = S(gb).then(db));
          }
        return H;
      }
    ];
  }
  function d(a, b) {
    'use strict';
    var c, d = {}, e = 'default';
    return d.setLocale = function (a) {
      c = a;
    }, d.getInterpolationIdentifier = function () {
      return e;
    }, d.useSanitizeValueStrategy = function (a) {
      return b.useStrategy(a), this;
    }, d.interpolate = function (c, d) {
      d = d || {}, d = b.sanitize(d, 'params');
      var e = a(c)(d);
      return e = b.sanitize(e, 'text');
    }, d;
  }
  function e(a, b, c, d, e, f) {
    'use strict';
    var g = function () {
      return this.toString().replace(/^\s+|\s+$/g, '');
    };
    return {
      restrict: 'AE',
      scope: !0,
      priority: a.directivePriority(),
      compile: function (b, h) {
        var i = h.translateValues ? h.translateValues : void 0, j = h.translateInterpolation ? h.translateInterpolation : void 0, k = b[0].outerHTML.match(/translate-value-+/i), l = '^(.*)(' + c.startSymbol() + '.*' + c.endSymbol() + ')(.*)', m = '^(.*)' + c.startSymbol() + '(.*)' + c.endSymbol() + '(.*)';
        return function (b, n, o) {
          b.interpolateParams = {}, b.preText = '', b.postText = '';
          var p = {}, q = function (a, c, d) {
              if (c.translateValues && angular.extend(a, e(c.translateValues)(b.$parent)), k)
                for (var f in d)
                  if (Object.prototype.hasOwnProperty.call(c, f) && 'translateValue' === f.substr(0, 14) && 'translateValues' !== f) {
                    var g = angular.lowercase(f.substr(14, 1)) + f.substr(15);
                    a[g] = d[f];
                  }
            }, r = function (a) {
              if (angular.isFunction(r._unwatchOld) && (r._unwatchOld(), r._unwatchOld = void 0), angular.equals(a, '') || !angular.isDefined(a)) {
                var d = g.apply(n.text()).match(l);
                if (angular.isArray(d)) {
                  b.preText = d[1], b.postText = d[3], p.translate = c(d[2])(b.$parent);
                  var e = n.text().match(m);
                  angular.isArray(e) && e[2] && e[2].length && (r._unwatchOld = b.$watch(e[2], function (a) {
                    p.translate = a, x();
                  }));
                } else
                  p.translate = n.text().replace(/^\s+|\s+$/g, '');
              } else
                p.translate = a;
              x();
            }, s = function (a) {
              o.$observe(a, function (b) {
                p[a] = b, x();
              });
            };
          q(b.interpolateParams, o, h);
          var t = !0;
          o.$observe('translate', function (a) {
            'undefined' == typeof a ? r('') : '' === a && t || (p.translate = a, x()), t = !1;
          });
          for (var u in o)
            o.hasOwnProperty(u) && 'translateAttr' === u.substr(0, 13) && s(u);
          if (o.$observe('translateDefault', function (a) {
              b.defaultText = a;
            }), i && o.$observe('translateValues', function (a) {
              a && b.$parent.$watch(function () {
                angular.extend(b.interpolateParams, e(a)(b.$parent));
              });
            }), k) {
            var v = function (a) {
              o.$observe(a, function (c) {
                var d = angular.lowercase(a.substr(14, 1)) + a.substr(15);
                b.interpolateParams[d] = c;
              });
            };
            for (var w in o)
              Object.prototype.hasOwnProperty.call(o, w) && 'translateValue' === w.substr(0, 14) && 'translateValues' !== w && v(w);
          }
          var x = function () {
              for (var a in p)
                p.hasOwnProperty(a) && void 0 !== p[a] && y(a, p[a], b, b.interpolateParams, b.defaultText);
            }, y = function (b, c, d, e, f) {
              c ? a(c, e, j, f).then(function (a) {
                z(a, d, !0, b);
              }, function (a) {
                z(a, d, !1, b);
              }) : z(c, d, !1, b);
            }, z = function (b, c, e, f) {
              if ('translate' === f) {
                e || 'undefined' == typeof c.defaultText || (b = c.defaultText), n.html(c.preText + b + c.postText);
                var g = a.isPostCompilingEnabled(), i = 'undefined' != typeof h.translateCompile, j = i && 'false' !== h.translateCompile;
                (g && !i || j) && d(n.contents())(c);
              } else {
                e || 'undefined' == typeof c.defaultText || (b = c.defaultText);
                var k = o.$attr[f];
                'data-' === k.substr(0, 5) && (k = k.substr(5)), k = k.substr(15), n.attr(k, b);
              }
            };
          (i || k || o.translateDefault) && b.$watch('interpolateParams', x, !0);
          var A = f.$on('$translateChangeSuccess', x);
          n.text().length ? r(o.translate ? o.translate : '') : o.translate && r(o.translate), x(), b.$on('$destroy', A);
        };
      }
    };
  }
  function f(a, b) {
    'use strict';
    return {
      compile: function (c) {
        var d = function () {
            c.addClass(b.cloakClassName());
          }, e = function () {
            c.removeClass(b.cloakClassName());
          }, f = a.$on('$translateChangeEnd', function () {
            e(), f(), f = null;
          });
        return d(), function (a, c, f) {
          f.translateCloak && f.translateCloak.length && f.$observe('translateCloak', function (a) {
            b(a).then(e, d);
          });
        };
      }
    };
  }
  function g(a, b) {
    'use strict';
    var c = function (c, d, e) {
      return angular.isObject(d) || (d = a(d)(this)), b.instant(c, d, e);
    };
    return b.statefulFilter() && (c.$stateful = !0), c;
  }
  function h(a) {
    'use strict';
    return a('translations');
  }
  return angular.module('pascalprecht.translate', ['ng']).run(a), a.$inject = ['$translate'], a.displayName = 'runTranslate', angular.module('pascalprecht.translate').provider('$translateSanitization', b), angular.module('pascalprecht.translate').constant('pascalprechtTranslateOverrider', {}).provider('$translate', c), c.$inject = [
    '$STORAGE_KEY',
    '$windowProvider',
    '$translateSanitizationProvider',
    'pascalprechtTranslateOverrider'
  ], c.displayName = 'displayName', angular.module('pascalprecht.translate').factory('$translateDefaultInterpolation', d), d.$inject = [
    '$interpolate',
    '$translateSanitization'
  ], d.displayName = '$translateDefaultInterpolation', angular.module('pascalprecht.translate').constant('$STORAGE_KEY', 'NG_TRANSLATE_LANG_KEY'), angular.module('pascalprecht.translate').directive('translate', e), e.$inject = [
    '$translate',
    '$q',
    '$interpolate',
    '$compile',
    '$parse',
    '$rootScope'
  ], e.displayName = 'translateDirective', angular.module('pascalprecht.translate').directive('translateCloak', f), f.$inject = [
    '$rootScope',
    '$translate'
  ], f.displayName = 'translateCloakDirective', angular.module('pascalprecht.translate').filter('translate', g), g.$inject = [
    '$parse',
    '$translate'
  ], g.displayName = 'translateFilterFactory', angular.module('pascalprecht.translate').factory('$translationCache', h), h.$inject = ['$cacheFactory'], h.displayName = '$translationCache', 'pascalprecht.translate';
});
/*!
 * angular-translate - v2.7.2 - 2015-06-01
 * http://github.com/angular-translate/angular-translate
 * Copyright (c) 2015 ; Licensed MIT
 */
!function (a, b) {
  'function' == typeof define && define.amd ? define([], function () {
    return b();
  }) : 'object' == typeof exports ? module.exports = b() : b();
}(this, function () {
  function a(a) {
    'use strict';
    var b = {
        get: function (b) {
          return a.get(b);
        },
        set: function (b, c) {
          a.put(b, c);
        },
        put: function (b, c) {
          a.put(b, c);
        }
      };
    return b;
  }
  return angular.module('pascalprecht.translate').factory('$translateCookieStorage', a), a.$inject = ['$cookieStore'], a.displayName = '$translateCookieStorage', 'pascalprecht.translate';
});
'use strict';
angular.module('transfluentAPI', [
  'transfluentAPI.controllers',
  'transfluentAPI.filters',
  'pascalprecht.translate',
  'ngCookies'
]).config([
  '$interpolateProvider',
  '$translateProvider',
  function ($interpolateProvider, $translateProvider) {
    $interpolateProvider.startSymbol('{[').endSymbol(']}');
    $translateProvider.translations('en', {
      'Japanese': 'Japanese',
      'English': 'English',
      'Search the documentation': 'Search the documentation',
      'Get started': 'Get started',
      'Authentication': 'Authentication',
      'Retrieve a token': 'Retrieve a token',
      'Languages': 'Languages',
      'List languages&pairs': 'List languages&pairs',
      'Text&HTML': 'Text&HTML',
      'Text': 'Text',
      'TextStatus': 'TextStatus',
      'Texts': 'Texts',
      'TextsTranslate': 'TextsTranslate',
      'Resource files': 'Resource files',
      'FileRead': 'FileRead',
      'FileSave': 'FileSave',
      'FileStatus': 'FileStatus',
      'FileTranslate': 'FileTranslate',
      'Development': 'Development',
      'Testing': 'Testing',
      'Callbacks': 'Callbacks',
      'SDKs': 'SDKs',
      'Support': 'Support',
      'home-main-copy': 'Transfluent is the only translation provider to scale from 1 word into millions of words, yet providing excellent quality and having ability to translate into numerous of languages with very little effort from the customer.',
      'home-main-beef': 'The key to fulfill this promise is our innovative use of technology in the translation process. Our API is in the core enabling all this. In this documentation you will find detailed information of our API and description how to the translation process works.',
      'home-main-get-started': 'All of our implementations are built on our API. The translation process over our API is straight forward and simple: authenticate, submit content, place the order and receive the translation (via an API call or by receiving a callback).',
      'home-main-user-accounts-title': 'User accounts',
      'home-main-user-accounts-body': 'To get going, you will need a Transfluent user account. Either <a href="https://www.transfluent.com/en/sign-up/" target="_blank">create a new user account</a> by yourself or ask your company\'s account owner to create one for you.',
      'home-main-development-title': 'Development and testing',
      'home-main-development-body': 'For development and testing your integration, we provide a <strong>Pseudo language</strong> translation. The language code for Pseudo language is <strong>xx-xx</strong>. Use English (<code>en</code>) as source language and Pseudo language as target language and the order will be processed for free. Instead of actual translation, you will get your source text reversed (e.g. &quot;Hello&quot; -&gt; &quot;olleH&quot;). Placing Pseudo language orders is useful for testing the whole process from end to end and, depending on your use case, possibly also for pinpointing any non-translated parts on your end.',
      'home-main-supported-languages-title': 'Supported languages',
      'home-main-supported-languages-body': '<a href="https://www.transfluent.com/en/pricing/#supported-language-pairs">Check supported language pairs</a> from our website or call our API\'s <strong>languages</strong> method to list languages names and language pairs. The API methods can be called using ready-made clients or command line tools, for example call using <strong>curl</strong>: <code>curl https://transfluent.com/languages/</code> or you can even do it with your browser: <a href="https://transfluent.com/languages/" rel="nofollow" target="_blank">HTTP GET https://transfluent.com/languages/</a>. The output is always <a href="https://en.wikipedia.org/wiki/JSON" target="_blank" rel="nofollow">JSON</a>. As you can see, it is easy to get started with the API.',
      'home-main-payments-title': 'Payments',
      'home-main-payments-body': 'The easiest way to pay is by credit card. You or your company\'s account owner can setup a credit card in the <a href="https://www.transfluent.com/my-account/#/creditcard" target="_blank">My Account</a> page. It is recommended to add a backup card so there will not be any interruption in the service if the primary card fails.',
      'home-main-use-cases-title': 'Use cases',
      'home-main-use-cases-first': 'Plain text and HTML content. Content is stored by key (and group). Our backend keeps track of versions, so unchanged texts will not be re-translated.',
      'home-main-use-cases-second': 'Resource files. Usually integrated to the application build process. Our backend keeps track of file versions, so unchanged parts will not be re-translated.',
      'home-main-use-cases-third': '<strong>Translation <a href="https://www.transfluent.com/translate/" target="_blank">Widget</a>:</strong> ad-hoc translation needs, delivery by email. Text or files. <a href="https://transfluent.partners/integrate/" target="_blank">Embedded version</a> available for intranet.',
      'home-main-process-title': 'Translation process example',
      'home-main-process-phase-1-title': 'Setting up phase',
      'home-main-process-phase-2-title': 'Continuous translation phase',
      'home-main-process-phase-1-step-1': '<strong>Authenticate:</strong> Retrieve a token from the API and store it locally',
      'home-main-process-phase-1-step-2': '<strong>Retrieve list of languages:</strong> Retrieve list of language names&codes and supported pairs from the API. It is recommended to refresh the listing every now and then as our list of languages and supported pairs increases often.',
      'home-main-process-phase-2-step-1': '<strong>Save</strong> new content to the API by calling /v2/text/ or /v2/file/save/',
      'home-main-process-phase-2-step-2': '<strong>Order</strong> translations by calling /v2/texts/translate/ or /v2/file/translate/',
      'home-main-process-phase-2-step-3': '<strong>Receive a callback</strong> and handle completed translations on your end. Alternatively you can poll /v2/text/status/ or /v2/file/status/ to see if the translations have been completed.',
      'home-main-process-phase-2-step-4': 'If you did not process the callback, you can <strong>retrieve the translations</strong> by calling /v2/text/ or /v2/file/read/.',
      'home-main-process-phase-2-step-5': '<strong>Now you are done.</strong> To translate more, go to first step of this phase.',
      'home-main-tips-title': 'Please note',
      'home-main-tips-body': 'We would like to remind you of few important points that might cause issues later on if not addressed early on.',
      'home-main-tips-1': '<strong>Charset encoding.</strong> We always provide UTF-8 or UTF-16 encoded content. We highly recommend to use UTF-8.',
      'home-main-tips-2': '<strong>Writing direction.</strong> Some languages are written from right to left, e.g. Arabic.',
      'home-main-tips-3': '<strong>Plurals.</strong> Some languages have more plural forms than two.',
      'home-main-tips-4': '<strong>Space.</strong> Some languages need more space in length on a screen and also in bytes on a storage device. This is utmost important if your translation has either limited storage length or if the text must fit on screen. We provide <a href="https://www.transfluent.com/en/appstore-description-estimator/" target="_blank">a tool</a> to estimate translation size for AppStore descriptions, it can be used for other estimation purposes as well.',
      'home-main-tips-5': '<strong>Tags/placeholders.</strong> Instead of combining strings (e.g. &quot;Hello &quot; + name), prefer using tags and placeholders (e.g. &quot; Hello [name]&quot;). That is because some language have different order of words and therefore combining strings might be problematic. Our translation system supports and our translators are familiar with the most common tags for each resource type but if you are translating plain text, it might be worthwhile to mention about your tags/placeholders in the translator instructions.',
      'home-main-tips-6': '<strong>Tone&amp;context.</strong> Please provide as accurate instructions and supporting context as you can, it will help the translators to do a better job.',
      'home-main-tips-7': '<strong>Hardcoded content.</strong> To fully localize a website or a game, you might encounter issues with some content being &quot;hardcoded&quot; in the source language. This is usually the case with images and strings that are not passed through the localization system. To identify these, you can use our Pseudo language as target language and then see if all content gets reversed or not.',
      'authentication-json-note': 'Please note that you need to pass parameters as a JSON object to the API. Check the cURL example below for clarification.',
      'curl-example-title': 'cURL Example',
      'php-example-title': 'PHP Example',
      'api-Authenticate-desc': 'To call any methods requiring authentication, you need to retrieve an authentication token first. The token is valid until your password changes. <strong>If you store the token between sessions, please store it securely and keep it secret!</strong>',
      'api-method': 'Method',
      'api-url': 'URL',
      'api-parameters': 'Parameters',
      'authentication-curl-ok-example': 'Example of a successful authentication response (HTTP200, <code>Content-Type: application/json</code>):',
      'authentication-curl-fail-example': 'Example of a failed authentication response (HTTP500, <code>Content-Type: application/json</code>):',
      'api-Languages-desc': 'Retrieve list of language names and supported language pairs on each translator level.',
      'languages-curl-response-example': 'Example of a response (HTTP200, <code>Content-Type: application/json</code>):',
      'api-Text-desc': 'Text: either source text to translate or previously made translation you want to save into our system. May contain HTML. Please use UTF-8.',
      'curl-example-get-text-title': 'cURL Example to retrieve a text',
      'curl-successful-response': 'Successful response (HTTP200, <code>Content-Type: application/json</code>):',
      'curl-example-save-source-text': 'cURL Example to save a source text',
      'curl-successfully-saved-text': 'Successfully saved (HTTP200, <code>Content-Type: application/json</code>):',
      'curl-failed-to-save-text': 'Failed to save (HTTP401, <code>Content-Type: application/json</code>):',
      'api-TextStatus-desc': 'Check if text has been translated to specified language.',
      'curl-example-check-text-status-title': 'cURL Example to check status',
      'curl-example-retrieve-texts-title': 'cURL Example to retrieve texts',
      'curl-example-save-texts-title': 'cURL Example to save texts',
      'curl-example-save-texts-fail-title': 'cURL Example (how not) to save texts',
      'curl-response-save-texts-fail-title': 'Failed to save (HTTP400, <code>Content-Type: application/json</code>):',
      'api-TextsTranslate-desc': 'By calling this method you can order translations for your text keys. Our system keeps version information about the keys, so only new keys and changed texts will be translated.',
      'curl-example-place-order-title': 'cURL Example to place an order',
      'curl-response-place-order-ok-title': 'Successfully placed an order (HTTP200, <code>Content-Type: application/json</code>):',
      'curl-response-place-order-failed-title': 'Failed to place the order due payment issue (HTTP500, <code>Content-Type: application/json</code>):',
      'order-details-info': 'You can check the order details in the <a href="https://www.transfluent.com/my-account/" target="_blank">My Account</a> page by order id (e.g. #332666).',
      'api-FileRead-desc': 'Retrieve translated files by calling this method.',
      'api-FileSave-desc': 'Save a file and later order translations for it.',
      'api-FileStatus-desc': 'You can easily check what is the translation progress of your submitted file.',
      'api-FileTranslate-desc': 'Order translations for your files. Please note that previously translated, unchanged items in the files will not be re-translated. All new and changed items will be translated.',
      'curl-example-file-get-title': 'cURL Example to retrieve a file',
      'curl-response-file-get-ok-title': 'Successfully retrieved file (HTTP200, <code>Content-Description: File Transfer; Content-Disposition: attachment; filename="test_en-gb.js"</code>):',
      'file-get-response-type-notice': 'Attention! When the request is successful, this method sends the file content, instead of returning a JSON response. The method will set <code>Content-Disposition: attachment; filename=..</code> HTTP header and suggest your client to initiate a file download.',
      'curl-response-file-get-fail-title': 'Failed to retrieve the file (HTTP400, <code>Content-Type: application/json</code>):',
      'curl-example-file-save-title': 'cURL Example to save a file',
      'curl-response-file-save-ok-title': 'Successfully saved the file (HTTP200, <code>Content-Type: application/json</code>):',
      'curl-response-file-save-fail-title': 'Failed to save the file (HTTP400, <code>Content-Type: application/json</code>):',
      'file-save-failure-explained': 'This could happen e.g. if the JSON file is not valid JSON.',
      'curl-example-file-status-title': 'cURL Example to check the file status',
      'curl-example-file-translate-quote-title': 'cURL Example to get a quote',
      'curl-response-file-translate-quote-title': 'Successfully requested a quote (HTTP200, <code>Content-Type: application/json</code>):',
      'curl-example-file-translate-order-title': 'cURL Example to order translations for a file',
      'curl-response-file-translate-order-title': 'Successfully ordered translations for the file (HTTP200, <code>Content-Type: application/json</code>):',
      'testing-information': 'For development and testing your integration, we provide a <strong>Pseudo language</strong> translation. The language code for Pseudo language is <strong>xx-xx</strong>. Use English (<code>en</code>) as source language and Pseudo language as target language and the order will be processed for free. Instead of actual translation, you will get your source text reversed (e.g. &quot;Hello&quot; -&gt; &quot;olleH&quot;). Placing Pseudo language orders is useful for testing the whole process from end to end and, depending on your use case, possibly also for pinpointing any non-translated parts on your end.',
      'sdk-information': 'Transfluent provides minimal SDKs for <a href="https://github.com/Transfluent/Transfluent-PHP-SDK" target="_blank">PHP</a> and <a href="https://github.com/Transfluent/Transfluent-Ruby" target="_blank">Ruby</a> which helps you to get started quickly. For Python, there is a third party <a href="https://github.com/jpvanhal/python-transfluent" target="_blank">client library</a> available - thanks to <a href="https://github.com/jpvanhal">Janne Vanhala</a>.',
      'callback-information': 'When placing your order, you may provide <code>callback_url</code> parameter. A HTTP POST request with JSON payload will be made to the callback URL once translation is completed.',
      'curl-example-callback-for-text-title': 'Example callback for text orders:',
      'curl-example-callback-for-file-title': 'Example callback for file orders:',
      'callback-security-title': 'Security',
      'callback-security-body': 'It is highly recommended to include a secret key to the callback URL. E.g. <code>https://example.org/my-app/transfluent-callback?auth-key=ABC123</code> where <code>auth-key</code> parameter contains your secret that must match before your application starts processing any callback. This provides security against third party providing unauthorized content to your system.',
      'support-title': 'Need guidance? Got stuck? Have a question?',
      'support-body': 'Drop us a line to <code>coders</code> (the domain is <code>transfluent.com</code>) and we will get back to you.',
      'back-link': 'Back to our website',
      'made-with-love': 'Made with <i class="fa fa-heart"></i> by <a href="https://www.transfluent.com/about/our-company/">Team Transfluent</a>.',
      'optional': 'optional',
      'api-email-parameter': 'Your Transfluent account\'s email address',
      'api-password-parameter': 'Your password',
      'api-text_id-parameter': '<code>text_id</code> is a unique key for your content. It must be an alphanumeric string, maximum length is 64 characters. If <code>group_id</code> is provided, it will be prefixed with the group id, i.e. each group has namespace of its own for text ids.',
      'api-group_id-parameter': '<code>group_id</code> is a unique group name for your text keys. It is recommended to use your project or app name to avoid text id collisions between projects. If provided, it must be an alphanumeric string and it has maximum length of 32 characters.',
      'api-language-parameter': '<code>language</code> is the language code (e.g. <code>en-gb</code>) which the text is written in. Please see <a href="/api/Languages.html">Languages</a> for more details.',
      'api-text-parameter': 'Text: either source text to translate or previously made translation you want to save into our system. May contain HTML. Please use UTF-8.',
      'api-invalidate_translations-parameter': '<code>invalidate_translations</code> is a boolean value (<code>1/0</code> or <code>on/off</code>) which controls if translations are trashed or not. E.g. if you make a spelling error correction to the original text, you probably do not want to trash the translations and re-translate the text. Also if you save previously made translation to our system using this method, it is important to set <code>invalidate_translations</code> off!',
      'api-invalidate_translations-2-parameter': '<code>invalidate_translations</code> is a boolean value (<code>1/0</code> or <code>on/off</code>) which controls if translations are trashed or not. E.g. if you make a spelling error correction to the original text, you probably do not want to trash the translations and re-translate the text. Also if you save previously made translation to our system using this method, it is important to set <code>invalidate_translations</code> off! <span class="label label-warning">Warning! Affects ALL texts set on the same request. If you need to invalidate some and keep others, you have to perform two requests.</span>',
      'api-token-parameter': 'Authentication token. Please see <a href="/api/Authenticate.html">Authenticate</a> for more details.',
      'api-texts-parameter': '<span class="label label-warning">POST-only</span> An array of text keys and content. E.g. <code>..,"texts": {"text-key-1": "My first text", "text-key-2": "My second text"},..</code>',
      'api-limit-parameter': '<span class="label label-warning">GET-only</span> Limit number of text items in the response payload. Maximum is 100.',
      'api-offset-parameter': '<span class="label label-warning">GET-only</span> Begin listing of text items in the payload from Nth item.',
      'api-source_language-parameter': '<code>language</code> is the language code (e.g. <code>en-gb</code>) which the text is written in. Please see <a href="/api/Languages.html">Languages</a> for more details.',
      'api-target_languages-parameter': 'Target languages to translate texts into. Provide language codes always in an array (e.g. ["fi", "fr-fr"] or ["sv-se"]) - even if there is only one target language. Please see <a href="/api/Languages.html">Languages</a> for more details.',
      'api-texts-2-parameter': 'Text keys to translate. Provide an array of text keys (e.g. [{"id":"my_text_id"},{"id":"some_another_key"}]).',
      'api-comment-parameter': 'Context information about your texts and other relevant information to the translator such as preferred tone (formal/informal).',
      'api-callback_url-parameter': 'Callback URL which will be called once the translation is completed. Please see <a href="/api/Callbacks.html">Callbacks</a> for more details.',
      'api-max_words-parameter': 'To avoid surprisingly costly orders, you can specify a maximum word count. If the limit is exceeded, the order will fail. By default, there is no limit.',
      'api-level-parameter': 'Translator level: <code>proof-read</code> for proof-reading source content, <code>translate</code> for translating content, <code>translate+proof-read</code> for using one translator to translate and another to proof-read it, <code>expert</code> for translating the content using a translator specialized in field of expertise (<code>expertise</code>-parameter must be defined, e.g. <code>expertise</code>=<code>Gaming</code>), <code>expert+review</code> same as expertise, but translation is proof-read by another translator. Default is <code>translate+proof-read</code>.',
      'api-expertise-parameter': 'Required expertise for <code>expert</code> or <code>expert+review</code> level translations. Valid values are: <code>AdWords/Banners</code>, <code>Authorised Translations</code>, <code>Automation Engineering</code>, <code>Automotive/Aerospace</code>, <code>Banking and Insurance</code>, <code>Business/Finance</code>, <code>Chemical Engineering</code>, <code>Construction and Architecture</code>, <code>Culture</code>, <code>Education/Learning</code>, <code>Electrical Engineering</code>, <code>EU Documents</code>, <code>Gaming</code>, <code>Legal</code>, <code>Legal/Certificates</code>, <code>Marketing/Consumer/Media</code>, <code>Materials Engineering</code>, <code>Mechanical Engineering</code>, <code>Medical</code>, <code>Mobile Applications/UI</code>, <code>Patents</code>, <code>Pharmaceutical Industry</code>, <code>Scientific</code>, <code>Society and Social Sciences</code>, <code>Software/IT</code>, <code>Sports</code>, <code>Sports/Climbing</code>, <code>Technical/Engineering</code>',
      'api-deliver_by_email-parameter': '<code>deliver_by_email</code> is a boolean value which controls if the completed translation is delivered by email to customer\'s email address.',
      'api-deliver_to_email-parameter': 'If <code>deliver_by_email</code> is on, deliver to this email address instead of customer\'s email address.',
      'api-project_title-parameter': 'Title for the project to identify it on delivery.',
      'api-identifier-parameter': '<code>identifier</code> is unique identifier for the file. It may contain letters, numbers and special characters (e.g. ":/." etc.), maximum length is 255 characters.',
      'api-content-parameter': 'File content <strong>must be</strong> base64 encoded.',
      'api-type-parameter': 'Supported types are: <ul><li><code>json-file</code></li><li><code>Properties-file</code></li><li><code>YAML-file</code></li><li><code>XML-file</code></li><li><code>po-file</code></li><li><code>HTML-file</code></li><li><code>HAML-file</code></li><li><code>iOS-strings</code></li><li><code>Android-strings</code></li><li><code>MooTools-locale</code></li><li><code>WP-RESX</code></li><li><code>Excel-file</code></li></ul>',
      'api-save_only_data-parameter': '<code>save_only_data</code> is a boolean. If you have previously translated content, you may save the translations by specifying this variable as true (<code>1</code> or <code>on</code>). Remember to use the same file identifier as the source file has.',
      'api-format-parameter': 'Supported formats are: <code>UTF-8</code>, <code>UTF-16</code>. UTF-8 should be used for everything except iOS .strings files. They are UTF-16 encoded and the format parameter must be specified as UTF-16 for them.',
      'api-quote-parameter': '<code>quote</code> is a boolean which set <code>on</code> will return a quote instead of processing the payload and placing the order. Default is "off", i.e. order will be immediately processed.',
      'continuous-integration-title': 'A quick start guide how to integrate translation process into your build process',
      'continuous-integration-text': '<strong>Steps to get started:</strong><ol><li>First create a <a href="https://www.transfluent.com/sign-up/">Transfluent account</a></li><li>Go to My Account to set a password and add a credit card</li><li><a href="http://api.transfluent.com/bash-example.zip">Download</a> example bash script or one of the example API clients if you want to customize the process. The bash example file contains only &ldquo;Hello World!&rdquo; and is inexpensive to translate if you want to test with it.</li><li>Setup your CI platform (e.g. Jenkins, CircleCI or Github) provide a post-commit hook to a script to trigger translations. Your script should then call our API to upload the file and then request translations. It&rsquo;s easy to get started with the example BASH script:<br><code>./example.sh you@example.org pass1234 example.json json-file en-gb fr-fr,de-de "https://example.org/example-callback"</code><br>..where email &amp; password are obvious. The next parameter <strong>example.json </strong>is the file to translate, <strong>json-file</strong> is the filetype (see type-parameter <a href="http://api.transfluent.com/api/FileSave.html">documentation</a>), <strong>en-gb</strong> is in this case source language and <strong>fr-fr,de-de </strong>are target languages. You may specify one or more target languages. Separate them using a comma. A list of language is available (as <a href="https://transfluent.com/languages/">JSON</a>) on <a href="https://www.transfluent.com/en/pricing/">Pricing-page</a> (on bottom of the page there is the availability form; the language codes are listed in the first cell next to the language name). The last parameter is the callback URL, it should be accessible from public Internet.</li><li>Setup a script to monitor callbacks to the callback URL. Once you receive a callback, you should trigger a process to finish the build with the translated file.</li><li>All done and ready for next round!</li></ol>',
      'CI': 'Continuous Integration'
    });
    $translateProvider.translations('ja', {
      'Japanese': '\u65e5\u672c\u8a9e',
      'English': 'English',
      'Search the documentation': '\u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3\u3092\u691c\u7d22',
      'Get started': '\u306f\u3058\u3081\u306b',
      'Authentication': '\u8a8d\u8a3c',
      'Retrieve a token': '\u30c8\u30fc\u30af\u30f3\u306e\u53d6\u5f97',
      'Languages': '\u8a00\u8a9e',
      'List languages&pairs': '\u8a00\u8a9e\uff06\u7d44\u307f\u5408\u308f\u305b\u306e\u30ea\u30b9\u30c8',
      'Text&HTML': '\u30c6\u30ad\u30b9\u30c8\uff06HTML',
      'Text': '\u30c6\u30ad\u30b9\u30c8',
      'TextStatus': '\u30c6\u30ad\u30b9\u30c8\u30b9\u30c6\u30fc\u30bf\u30b9',
      'Texts': '\u30c6\u30ad\u30b9\u30c8',
      'TextsTranslate': '\u30c6\u30ad\u30b9\u30c8\u7ffb\u8a33',
      'Resource files': '\u30ea\u30bd\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb',
      'FileRead': '\u30d5\u30a1\u30a4\u30eb\u8aad\u307f\u8fbc\u307f',
      'FileSave': '\u30d5\u30a1\u30a4\u30eb\u4fdd\u5b58',
      'FileStatus': '\u30d5\u30a1\u30a4\u30eb\u30b9\u30c6\u30fc\u30bf\u30b9',
      'FileTranslate': '\u30d5\u30a1\u30a4\u30eb\u7ffb\u8a33',
      'Development': '\u958b\u767a',
      'Testing': '\u30c6\u30b9\u30c8',
      'Callbacks': '\u30b3\u30fc\u30eb\u30d0\u30c3\u30af',
      'SDKs': 'SDKs',
      'Support': '\u30b5\u30dd\u30fc\u30c8',
      'home-main-copy': 'Transfluent\u306f\u30011\u5358\u8a9e\u304b\u3089\u6570\u767e\u4e07\u5358\u8a9e\u307e\u3067\u3001\u304a\u5ba2\u69d8\u306b\u307b\u3068\u3093\u3069\u8ca0\u62c5\u3092\u304b\u3051\u305a\u306b\u512a\u308c\u305f\u54c1\u8cea\u3068\u6570\u591a\u304f\u306e\u8a00\u8a9e\u3078\u306e\u7ffb\u8a33\u3092\u53ef\u80fd\u306b\u3059\u308b\u552f\u4e00\u306e\u7ffb\u8a33\u696d\u8005\u3067\u3059\u3002',
      'home-main-beef': '\u3053\u308c\u3092\u5b9f\u73fe\u3059\u308b\u30ad\u30fc\u30dd\u30a4\u30f3\u30c8\u306f\u3001\u7ffb\u8a33\u904e\u7a0b\u306b\u304a\u3051\u308b\u5f53\u793e\u306e\u9769\u65b0\u7684\u306a\u6280\u8853\u306e\u5229\u7528\u65b9\u6cd5\u3067\u3059\u3002\u3053\u308c\u306fAPI\u3092\u6838\u3068\u3059\u308b\u3053\u3068\u3067\u5b9f\u73fe\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u8cc7\u6599\u306f\u3001\u5f53\u793e\u306eAPI\u304a\u3088\u3073\u7ffb\u8a33\u904e\u7a0b\u304c\u3069\u3046\u884c\u308f\u308c\u308b\u304b\u306b\u95a2\u3059\u308b\u8a73\u7d30\u306a\u60c5\u5831 \u3092\u304a\u5c4a\u3051\u3057\u307e\u3059\u3002',
      'home-main-get-started': '\u5f53\u793e\u306e\u5b9f\u88c5\u306f\u5168\u3066\u5f53\u793eAPI\u4e0a\u306b\u69cb\u7bc9\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u5f53\u793eAPI\u306b\u304a\u3051\u308b\u7ffb\u8a33\u904e\u7a0b\u306f\u5206\u304b\u308a\u3084\u3059\u304f\u30b7\u30f3\u30d7\u30eb\u3067\u3059\u2015\u8a8d\u8a3c\u3001\u7ffb\u8a33\u5185\u5bb9\u3092\u9001\u4fe1\u3001\u767a\u6ce8\u3001\u7ffb\u8a33\u7d50\u679c\u306e\u53d7\u3051\u53d6\u308a\uff08API\u30b3\u30fc\u30eb\u3042\u308b\u3044\u306f\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306e\u53d7\u3051\u53d6\u308a\u306b\u3088\u308b\uff09\u3001\u3053\u308c\u3060\u3051\u3067\u3059\u3002',
      'home-main-user-accounts-title': '\u30e6\u30fc\u30b6\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8',
      'home-main-user-accounts-body': '\u5229\u7528\u306b\u306f\u3001Transfluent\u306e\u30e6\u30fc\u30b6\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002\u65b0\u3057\u3044\u30e6\u30fc\u30b6\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u3054\u81ea\u8eab\u3067\u4f5c\u6210\u3059\u308b\u304b\u3001\u5fa1\u793e\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u6240\u6709\u8005\u306b\u4f5c\u6210\u3092\u4f9d\u983c\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
      'home-main-development-title': '\u958b\u767a\u304a\u3088\u3073\u30c6\u30b9\u30c8',
      'home-main-development-body': '\u304a\u5ba2\u69d8\u5074\u306e\u7d71\u5408\u3092\u958b\u767a\u304a\u3088\u3073\u30c6\u30b9\u30c8\u3059\u308b\u305f\u3081\u306b\u3001\u5f53\u793e\u3067\u306f\u64ec\u4f3c\u8a00\u8a9e\u7ffb\u8a33\u3092\u63d0\u4f9b\u3057\u3066\u304a\u308a\u307e\u3059\u3002\u64ec\u4f3c\u8a00\u8a9e\u306e\u8a00\u8a9e\u30b3\u30fc\u30c9\u306f<strong>xx-xx</strong>\u3067\u3059\u3002\u30bd\u30fc\u30b9\u8a00\u8a9e\u3092\u82f1\u8a9e\uff08<code>en</code>\uff09\u3001\u30bf\u30fc\u30b2\u30c3\u30c8\u8a00\u8a9e\u3092\u64ec\u4f3c\u8a00\u8a9e\u306b\u8a2d\u5b9a\u3059\u308b\u3068\u3001\u305d\u306e\u6ce8\u6587\u306f\u7121\u6599\u3067\u51e6\u7406\u3055\u308c\u307e\u3059\u3002\u5b9f\u969b\u306e\u7ffb\u8a33\u306e\u4ee3\u308f\u308a\u306b\u3001\u5143\u306e\u6587\u7ae0\u306f\u524d\u5f8c\u9006\u306b\u5909\u63db\u3055\u308c\u307e\u3059\u3002\uff08\u4f8b\uff1a&quot;Hello&quot; \u2192 &quot;olleH&quot;\uff09\u3000\u64ec\u4f3c\u8a00\u8a9e\u7ffb\u8a33\u306f\u3001\u5229\u7528\u65b9\u6cd5\u306b\u3088\u3063\u3066\u306f\u904e\u7a0b\u306e\u5168\u4f53\u3092\u521d\u3081\u304b\u3089\u7d42\u308f\u308a\u307e\u3067\u30c6\u30b9\u30c8\u3057\u305f\u308a\u3001\u307e\u305f\u5834\u5408\u306b\u3088\u308a\u304a\u5ba2\u69d8\u5074\u306e\u975e\u7ffb\u8a33\u90e8\u5206\u3092\u7279\u5b9a\u3057\u305f\u308a\u3059\u308b\u305f\u3081\u306b\u5f79\u7acb\u3066\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002',
      'home-main-supported-languages-title': '\u5bfe\u5fdc\u8a00\u8a9e',
      'home-main-supported-languages-body': '\u5bfe\u5fdc\u8a00\u8a9e\u306b\u3064\u3044\u3066\u306f\u5f53\u793e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u304b\u3089\u78ba\u8a8d\u3059\u308b\u304b\u3001\u5f53\u793eAPI\u306e\u8a00\u8a9e\u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3057\u3066\u3001\u8a00\u8a9e\u540d\u3068\u8a00\u8a9e\u306e\u7d44\u307f\u5408\u308f\u305b\u3092\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3057\u3066\u304f\u3060\u3055\u3044\u3002API\u30e1\u30bd\u30c3\u30c9\u306f\u3001\u65e2\u5b58\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3042\u308b\u3044\u306f\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30c4\u30fc\u30eb\u3092\u4f7f\u3063\u3066\u547c\u3073\u51fa\u305b\u307e\u3059\u3002\u4f8b\u3048\u3070cURL\u3092\u7528\u3044\u308b\u304b\uff08<code>curl https://transfluent.com/languages/</code>\uff09\u3001\u3042\u308b\u3044\u306f\u304a\u5ba2\u69d8\u306e\u30d6\u30e9\u30a6\u30b6\u3092\u4f7f\u3046\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\uff08<a href="https://transfluent.com/languages/" rel="nofollow" target="_blank">HTTP GET https://transfluent.com/languages/</a>\uff09 \u51fa\u529b\u306f\u5e38\u306bJSON\u3068\u306a\u308a\u307e\u3059\u3002\u3053\u306e\u901a\u308a\u3001API\u306e\u4f7f\u7528\u306f\u7c21\u5358\u306b\u59cb\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002',
      'home-main-payments-title': '\u304a\u652f\u6255\u3044',
      'home-main-payments-body': '\u6700\u3082\u7c21\u5358\u306a\u304a\u652f\u6255\u3044\u65b9\u6cd5\u306f\u30af\u30ec\u30b8\u30c3\u30c8\u30ab\u30fc\u30c9\u3067\u3059\u3002\u30af\u30ec\u30b8\u30c3\u30c8\u30ab\u30fc\u30c9\u306e\u767b\u9332\u306f\u3001\u304a\u5ba2\u69d8\u500b\u4eba\u3042\u308b\u3044\u306f\u4f1a\u793e\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u6240\u6709\u8005\u306e\u30de\u30a4\u30a2\u30ab\u30a6\u30f3\u30c8\u30da\u30fc\u30b8\u306b\u3066\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3082\u3057\u521d\u3081\u306b\u767b\u9332\u3057\u305f\u30ab\u30fc\u30c9\u304c\u4f7f\u3048\u306a\u304b\u3063\u305f\u5834\u5408\u306b\u3082\u30b5\u30fc\u30d3\u30b9\u304c\u4e2d\u65ad\u3055\u308c\u306a\u3044\u3088\u3046\u306b\u3001\u4e88\u5099\u306e\u30ab\u30fc\u30c9\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3092\u304a\u3059\u3059\u3081\u3057\u307e\u3059\u3002',
      'home-main-use-cases-title': '\u4f7f\u7528\u4e8b\u4f8b',
      'home-main-use-cases-first': '\u30d7\u30ec\u30fc\u30f3\u30c6\u30ad\u30b9\u30c8\u3068HTML\u30b3\u30f3\u30c6\u30f3\u30c4\u3002\u30b3\u30f3\u30c6\u30f3\u30c4\u306f\u30ad\u30fc\uff08\u304a\u3088\u3073\u30b0\u30eb\u30fc\u30d7\uff09\u306b\u3088\u308a\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u8a18\u9332\u306f\u5f53\u793e\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306b\u3088\u308a\u4fdd\u6301\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u5909\u66f4\u306e\u306a\u3044\u30c6\u30ad\u30b9\u30c8\u306f\u518d\u7ffb\u8a33\u3055\u308c\u307e\u305b\u3093\u3002',
      'home-main-use-cases-second': '\u30ea\u30bd\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u3002\u901a\u5e38\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30d3\u30eb\u30c9\u30d7\u30ed\u30bb\u30b9\u306b\u7d71\u5408\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u8a18\u9332\u306f\u5f53\u793e\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306b\u3088\u308a\u4fdd\u6301\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u5909\u66f4\u306e\u306a\u3044\u30c6\u30ad\u30b9\u30c8\u306f\u518d\u7ffb\u8a33\u3055\u308c\u307e\u305b\u3093\u3002',
      'home-main-use-cases-third': '<strong><a href="https://www.transfluent.com/translate/" target="_blank">\u7ffb\u8a33\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\uff1a</a></strong>\u305d\u306e\u6642\u3005\u306e\u7ffb\u8a33\u30cb\u30fc\u30ba\u306b\u5408\u308f\u305b\u3001E\u30e1\u30fc\u30eb\u306b\u3066\u7d0d\u54c1\u3044\u305f\u3057\u307e\u3059\u3002\u30c6\u30ad\u30b9\u30c8\u3042\u308b\u3044\u306f\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u3079\u307e\u3059\u3002\u30a4\u30f3\u30c8\u30e9\u30cd\u30c3\u30c8\u7528\u306b\u57cb\u3081\u8fbc\u307f\u30d0\u30fc\u30b8\u30e7\u30f3\u3082\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002',
      'home-main-process-title': '\u7ffb\u8a33\u904e\u7a0b\u306e\u4f8b',
      'home-main-process-phase-1-title': '\u30d5\u30a7\u30fc\u30ba\u306e\u8a2d\u5b9a',
      'home-main-process-phase-2-title': '\u7ffb\u8a33\u306e\u6d41\u308c',
      'home-main-process-phase-1-step-1': '<strong>\u8a8d\u8a3c\u3059\u308b\uff1a</strong>API\u304b\u3089\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3057\u3001\u30ed\u30fc\u30ab\u30eb\u4fdd\u5b58\u3057\u307e\u3059\u3002',
      'home-main-process-phase-1-step-2': '<strong>\u8a00\u8a9e\u306e\u30ea\u30b9\u30c8\u3092\u53d6\u5f97\u3059\u308b\uff1a</strong>API\u304b\u3089\u8a00\u8a9e\u540d\u3068\u30b3\u30fc\u30c9\u3001\u5bfe\u5fdc\u3057\u3066\u3044\u308b\u7d44\u307f\u5408\u308f\u305b\u306e\u30ea\u30b9\u30c8\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\u5f53\u793e\u3067\u5bfe\u5fdc\u3057\u3066\u3044\u308b\u8a00\u8a9e\u306e\u30ea\u30b9\u30c8\u306f\u983b\u7e41\u306b\u5897\u3048\u307e\u3059\u306e\u3067\u3001\u6642\u3005\u30ea\u30b9\u30c8\u3092\u66f4\u65b0\u3059\u308b\u3053\u3068\u3092\u304a\u3059\u3059\u3081\u3057\u307e\u3059\u3002',
      'home-main-process-phase-2-step-1': '\u25aa /v2/text/\u3042\u308b\u3044\u306f/v2/file/save/\u3092\u547c\u3073\u51fa\u3057\u3066API\u306b\u65b0\u3057\u3044\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u4fdd\u5b58\u3057\u307e\u3059\u3002',
      'home-main-process-phase-2-step-2': '\u25aa /v2/texts/translate/\u3042\u308b\u3044\u306f/v2/file/translate/\u3092\u547c\u3073\u51fa\u3057\u3066\u7ffb\u8a33\u3092\u767a\u6ce8\u3057\u307e\u3059\u3002',
      'home-main-process-phase-2-step-3': '\u25aa \u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u53d7\u3051\u53d6\u3063\u305f\u5f8c\u3001\u5b8c\u6210\u3057\u305f\u7ffb\u8a33\u3092\u304a\u5ba2\u69d8\u5074\u3067\u51e6\u7406\u3067\u304d\u307e\u3059\u3002\u3082\u3046\u4e00\u3064\u306e\u65b9\u6cd5\u3068\u3057\u3066\u306f\u3001/v2/text/status/ \u3042\u308b\u3044\u306f/v2/file/status/\u3092\u547c\u3073\u51fa\u3057\u3066\u3001\u7ffb\u8a33\u304c\u5b8c\u4e86\u3055\u308c\u305f\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002',
      'home-main-process-phase-2-step-4': '\u25aa \u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306e\u51e6\u7406\u3092\u884c\u308f\u306a\u304b\u3063\u305f\u5834\u5408\u306f\u3001/v2/text/\u3042\u308b\u3044\u306f/v2/file/read/\u3092\u547c\u3073\u51fa\u3057\u3066\u7ffb\u8a33\u3092\u53d7\u3051\u53d6\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002',
      'home-main-process-phase-2-step-5': '\u25aa \u3053\u308c\u3067\u5b8c\u4e86\u3067\u3059\u3002\u3055\u3089\u306b\u7ffb\u8a33\u3092\u884c\u3046\u5834\u5408\u306f\u3001\u3053\u306e\u6d41\u308c\u306e\u4e00\u756a\u521d\u3081\u306e\u6bb5\u968e\u306b\u623b\u3063\u3066\u304f\u3060\u3055\u3044\u3002',
      'home-main-tips-title': '\u6ce8\u610f',
      'home-main-tips-body': '\u65e9\u3044\u6bb5\u968e\u3067\u51e6\u7406\u3057\u3066\u304a\u304b\u306a\u3051\u308c\u3070\u5f8c\u306b\u306a\u3063\u3066\u554f\u984c\u3068\u306a\u308b\u304b\u3082\u77e5\u308c\u306a\u3044\u3001\u3044\u304f\u3064\u304b\u306e\u91cd\u8981\u306a\u30dd\u30a4\u30f3\u30c8\u306b\u3064\u3044\u3066\u89e6\u308c\u3066\u304a\u304d\u305f\u3044\u3068\u601d\u3044\u307e\u3059\u3002',
      'home-main-tips-1': '<strong>Charset\u30a8\u30f3\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\uff1a</strong>\u5f53\u793e\u3067\u306f\u5e38\u306bUTF-8\u3042\u308b\u3044\u306fUTF-16\u306b\u30a8\u30f3\u30b3\u30fc\u30c9\u3055\u308c\u305f\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002UTF-8\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u5f37\u304f\u63a8\u5968\u3057\u307e\u3059\u3002',
      'home-main-tips-2': '<strong>\u8a18\u8ff0\u65b9\u5411\uff1a</strong>\u30a2\u30e9\u30d6\u8a9e\u306a\u3069\u3001\u4e00\u90e8\u306e\u8a00\u8a9e\u306f\u53f3\u304b\u3089\u5de6\u306b\u8a18\u8ff0\u3055\u308c\u307e\u3059\u3002',
      'home-main-tips-3': '<strong>\u8907\u6570\u5f62\uff1a</strong>\u4e00\u90e8\u306e\u8a00\u8a9e\u306f\u30012\u3064\u4ee5\u4e0a\u306e\u8907\u6570\u5f62\u3092\u6709\u3057\u3066\u3044\u307e\u3059\u3002',
      'home-main-tips-4': '<strong>\u30b9\u30da\u30fc\u30b9\uff1a</strong>\u8a00\u8a9e\u306b\u3088\u3063\u3066\u306f\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u4e0a\u3067\u306e\u30b9\u30da\u30fc\u30b9\u3084\u4fdd\u5b58\u30c7\u30d0\u30a4\u30b9\u4e0a\u3067\u306e\u30d0\u30a4\u30c8\u6570\u3092\u3001\u4ed6\u306e\u8a00\u8a9e\u3088\u308a\u3082\u8981\u3059\u308b\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u7ffb\u8a33\u306e\u4fdd\u5b58\u5bb9\u91cf\u304c\u9650\u3089\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u3042\u308b\u3044\u306f\u6587\u7ae0\u3092\u30b9\u30af\u30ea\u30fc\u30f3\u4e0a\u306b\u53ce\u3081\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u5834\u5408\u306a\u3069\u306b\u975e\u5e38\u306b\u91cd\u8981\u306b\u306a\u308a\u307e\u3059\u3002\u5f53\u793e\u3067\u306fAppStore\u306e\u8aac\u660e\u7528\u306b\u7ffb\u8a33\u30b5\u30a4\u30ba\u3092\u63a8\u5b9a\u3059\u308b\u30c4\u30fc\u30eb\u3092\u63d0\u4f9b\u3057\u3066\u304a\u308a\u3001\u4ed6\u306e\u30b5\u30a4\u30ba\u63a8\u5b9a\u306b\u3082\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002',
      'home-main-tips-5': '<strong>\u30bf\u30b0/\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\uff1a</strong>&quot;Hello &quot; + \u540d\u524d\u306e\u3088\u3046\u306b\u6587\u5b57\u5217\u3092\u7e4b\u3052\u308b\u306e\u3067\u306f\u306a\u304f\u3001&quot; Hello [\u540d\u524d]&quot;\u306e\u3088\u3046\u306b\u30bf\u30b0\u3068\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002\u4e00\u90e8\u306e\u8a00\u8a9e\u306f\u8a9e\u9806\u304c\u9055\u3046\u305f\u3081\u3001\u6587\u5b57\u5217\u3092\u7e4b\u3052\u308b\u3053\u3068\u306f\u554f\u984c\u306b\u306a\u308a\u304b\u306d\u307e\u305b\u3093\u3002\u5f53\u793e\u306e\u7ffb\u8a33\u30b7\u30b9\u30c6\u30e0\u306f\u5404\u30ea\u30bd\u30fc\u30b9\u30bf\u30a4\u30d7\u306e\u4e00\u822c\u7684\u306a\u30bf\u30b0\u306e\u307b\u3068\u3093\u3069\u306b\u5bfe\u5fdc\u3057\u3066\u304a\u308a\u3001\u7ffb\u8a33\u8005\u3082\u305d\u3046\u3044\u3063\u305f\u30bf\u30b0\u306b\u3064\u3044\u3066\u306f\u719f\u77e5\u3057\u3066\u3044\u307e\u3059\u304c\u3001\u30d7\u30ec\u30fc\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u7ffb\u8a33\u3059\u308b\u5834\u5408\u306f\u3001\u7ffb\u8a33\u8005\u3078\u306e\u6307\u793a\u5185\u3067\u30bf\u30b0/\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u306b\u95a2\u3057\u3066\u89e6\u308c\u3066\u304a\u3044\u305f\u65b9\u304c\u3044\u3044\u3067\u3057\u3087\u3046',
      'home-main-tips-6': '<strong>\u30c8\u30fc\u30f3\u3068\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\uff1a</strong>\u7ffb\u8a33\u8005\u304c\u3088\u308a\u3088\u3044\u7d50\u679c\u3092\u51fa\u305b\u308b\u3088\u3046\u3001\u53ef\u80fd\u306a\u9650\u308a\u7d30\u304b\u306a\u6307\u793a\u3068\u53c2\u8003\u3068\u306a\u308b\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u63d0\u4f9b\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
      'home-main-tips-7': '<strong>\u30cf\u30fc\u30c9\u30b3\u30fc\u30c9\u3055\u308c\u305f\u30b3\u30f3\u30c6\u30f3\u30c4\uff1a</strong>\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3084\u30b2\u30fc\u30e0\u3092\u5b8c\u5168\u306b\u30ed\u30fc\u30ab\u30e9\u30a4\u30ba\u3059\u308b\u969b\u306b\u3001\u4e00\u90e8\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u30bd\u30fc\u30b9\u8a00\u8a9e\u306b\u304a\u3044\u3066\u30cf\u30fc\u30c9\u30b3\u30fc\u30c9\u3055\u308c\u3066\u3044\u308b\u3068\u3044\u3046\u554f\u984c\u306b\u76f4\u9762\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u591a\u304f\u306e\u5834\u5408\u30ed\u30fc\u30ab\u30e9\u30a4\u30bc\u30fc\u30b7\u30e7\u30f3\u306e\u30b7\u30b9\u30c6\u30e0\u3092\u901a\u3057\u3066\u3044\u306a\u3044\u753b\u50cf\u3084\u6587\u5b57\u5217\u304c\u539f\u56e0\u3067\u3059\u3002\u3053\u3046\u3044\u3063\u305f\u554f\u984c\u3092\u7279\u5b9a\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u5f53\u793e\u306e\u64ec\u4f3c\u8a00\u8a9e\u3092\u30bf\u30fc\u30b2\u30c3\u30c8\u8a00\u8a9e\u306b\u8a2d\u5b9a\u3057\u3001\u5168\u3066\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u524d\u5f8c\u9006\u306b\u306a\u3063\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u78ba\u8a8d\u3057\u307e\u3059\u3002',
      'authentication-json-note': 'API\u306b\u5bfe\u3057\u30d1\u30e9\u30e1\u30fc\u30bf\u3092JSON\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u3057\u3066\u6e21\u3059\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u306b\u3054\u7559\u610f\u304f\u3060\u3055\u3044\u3002\u8a73\u3057\u304f\u306f\u4e0b\u8a18\u306ecURL\u4f8b\u3092\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002',
      'curl-example-title': 'cURL\u4f8b',
      'php-example-title': 'PHP\u4f8b',
      'api-Authenticate-desc': '\u8a8d\u8a3c\u304c\u5fc5\u8981\u306b\u306a\u308b\u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3059\u306b\u306f\u307e\u305a\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30c8\u30fc\u30af\u30f3\u306f\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5909\u66f4\u3059\u308b\u307e\u3067\u6709\u52b9\u3067\u3059\u3002<strong>\u30bb\u30c3\u30b7\u30e7\u30f3\u306e\u9593\u306b\u30c8\u30fc\u30af\u30f3\u3092\u4fdd\u5b58\u3059\u308b\u5834\u5408\u306f\u3000\u5b89\u5168\u306a\u5834\u6240\u306b\u4fdd\u5b58\u3057\u3001\u8ab0\u306b\u3082\u8a00\u308f\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002</strong>',
      'api-method': '\u30e1\u30bd\u30c3\u30c9',
      'api-url': 'URL',
      'api-parameters': '\u30d1\u30e9\u30e1\u30fc\u30bf',
      'authentication-curl-ok-example': '\u8a8d\u8a3c\u5fdc\u7b54\u306e\u6210\u529f\u4f8b\uff08 HTTP200, <code>Content-Type: application/json</code>\uff09\uff1a',
      'authentication-curl-fail-example': '\u8a8d\u8a3c\u5fdc\u7b54\u306e\u5931\u6557\u4f8b\uff08HTTP500, <code>Content-Type: application/json</code>\uff09\uff1a',
      'api-Languages-desc': '\u5404\u7ffb\u8a33\u8005\u3054\u3068\u306e\u8a00\u8a9e\u540d\u304a\u3088\u3073\u5bfe\u5fdc\u3067\u304d\u308b\u8a00\u8a9e\u7d44\u307f\u5408\u308f\u305b\u306e\u30ea\u30b9\u30c8\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002',
      'languages-curl-response-example': '\u5fdc\u7b54\u4f8b\uff08 HTTP200, <code>Content-Type: application/json</code>\uff09\uff1a',
      'api-Text-desc': '\u30c6\u30ad\u30b9\u30c8: \u5f53\u30b7\u30b9\u30c6\u30e0\u306b\u4fdd\u5b58\u3057\u3088\u3046\u3068\u3057\u3066\u3044\u308b\u3001\u7ffb\u8a33\u3059\u308b\u30bd\u30fc\u30b9\u30c6\u30ad\u30b9\u30c8\u307e\u305f\u306f\u4ee5\u524d\u306b\u884c\u3063\u305f\u7ffb\u8a33\u306e\u3044\u305a\u308c\u304b\u306b\u306f\u3001HTML\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002UTF-8\u3092\u3054\u4f7f\u7528\u304f\u3060\u3055\u3044\u3002',
      'curl-example-get-text-title': '\u30c6\u30ad\u30b9\u30c8\u3092\u30ea\u30c8\u30ea\u30fc\u30d6\u3059\u308b\u305f\u3081\u306ecURL\u4f8b',
      'curl-successful-response': '\u5fdc\u7b54\u304c\u3042\u308a\u307e\u3057\u305f (HTTP200, <code>Content-Type: application/json</code>):',
      'curl-example-save-source-text': '\u30bd\u30fc\u30b9\u30c6\u30ad\u30b9\u30c8\u3092\u4fdd\u5b58\u3059\u308b\u969b\u306ecURL\u4f8b',
      'curl-successfully-saved-text': '\u4fdd\u5b58\u3067\u304d\u307e\u3057\u305f (HTTP200, <code>Content-Type: application/json</code>):',
      'curl-failed-to-save-text': '\u4fdd\u5b58\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f (HTTP401, <code>Content-Type: application/json</code>):',
      'api-TextStatus-desc': '\u30c6\u30ad\u30b9\u30c8\u304c\u6307\u5b9a\u3057\u305f\u8a00\u8a9e\u306b\u7ffb\u8a33\u3055\u308c\u3066\u3044\u308b\u304b\u78ba\u8a8d\u3057\u307e\u3059\u3002',
      'curl-example-check-text-status-title': '\u30b9\u30c6\u30fc\u30bf\u30b9\u30c1\u30a7\u30c3\u30af\u306e\u969b\u306ecURL\u4f8b',
      'curl-example-retrieve-texts-title': '\u30c6\u30ad\u30b9\u30c8\u3092\u53d6\u5f97\u3059\u308b\u969b\u306ecURL\u4f8b',
      'curl-example-save-texts-title': 'cURL\u3092\u4f7f\u3063\u3066\u30c6\u30ad\u30b9\u30c8\u3092\u4fdd\u5b58\u3059\u308b\u4f8b',
      'curl-example-save-texts-fail-title': 'cURL\u3092\u4f7f\u3063\u3066\u30c6\u30ad\u30b9\u30c8\u3092\u4fdd\u5b58\u300c\u3057\u306a\u3044\u300d\u4f8b',
      'curl-response-save-texts-fail-title': '\u4fdd\u5b58\u306b\u5931\u6557\u3057\u307e\u3057\u305f (HTTP400, <code>Content-Type: application/json</code>):',
      'api-TextsTranslate-desc': '\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u306b\u3088\u308a\u3001\u30c6\u30ad\u30b9\u30c8\u30ad\u30fc\u306e\u7ffb\u8a33\u3092\u767a\u6ce8\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u5f53\u793e\u30b7\u30b9\u30c6\u30e0\u304c\u30ad\u30fc\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u60c5\u5831\u3092\u4fdd\u5b58\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u65b0\u3057\u3044\u30ad\u30fc\u3068\u5909\u66f4\u3055\u308c\u305f\u30c6\u30ad\u30b9\u30c8\u306e\u307f\u304c\u7ffb\u8a33\u3055\u308c\u307e\u3059\u3002',
      'curl-example-place-order-title': '\u767a\u6ce8\u6642\u306ecURL\u4f8b',
      'curl-response-place-order-ok-title': '\u6ce8\u6587\u306b\u6210\u529f\u3057\u307e\u3057\u305f (HTTP200, <code>Content-Type: application/json</code>):',
      'curl-response-place-order-failed-title': '\u6c7a\u6e08\u3067\u554f\u984c\u304c\u767a\u751f\u3057\u305f\u305f\u3081\u3001\u6ce8\u6587\u306b\u5931\u6557\u3057\u307e\u3057\u305f (HTTP500, <code>Content-Type: application/json</code>):',
      'order-details-info': '\u6ce8\u6587\u306e\u8a73\u7d30\u306f<a href="https://www.transfluent.com/my-account/" target="_blank">\u30de\u30a4\u30a2\u30ab\u30a6\u30f3\u30c8</a>\u30da\u30fc\u30b8\u304b\u3089\u6ce8\u6587\u756a\u53f7\u3092\u4f7f\u3063\u3066\u78ba\u8a8d\u3067\u304d\u307e\u3059 (#332666\u306e\u3088\u3046\u306a\u756a\u53f7)\u3002',
      'api-FileRead-desc': '\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u306b\u3088\u308a\u3001\u7ffb\u8a33\u6e08\u307f\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u53d6\u5f97\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002',
      'api-FileSave-desc': '\u30d5\u30a1\u30a4\u30eb\u3092\u4fdd\u5b58\u3057\u3001\u5f8c\u3067\u7ffb\u8a33\u3092\u767a\u6ce8\u3057\u307e\u3059\u3002',
      'api-FileStatus-desc': '\u63d0\u51fa\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u306e\u7ffb\u8a33\u72b6\u6cc1\u3092\u7c21\u5358\u306b\u30c1\u30a7\u30c3\u30af\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002',
      'api-FileTranslate-desc': '\u30d5\u30a1\u30a4\u30eb\u306e\u7ffb\u8a33\u3092\u767a\u6ce8\u3057\u307e\u3059\u3002\u30d5\u30a1\u30a4\u30eb\u5185\u306e\u7ffb\u8a33\u6e08\u307f\u3001\u7121\u5909\u66f4\u90e8\u5206\u306f\u518d\u7ffb\u8a33\u3055\u308c\u307e\u305b\u3093\u306e\u3067\u3054\u6ce8\u610f\u304f\u3060\u3055\u3044\u3002\u65b0\u3057\u3044\u3001\u304a\u3088\u3073\u5909\u66f4\u304c\u3042\u3063\u305f\u90e8\u5206\u306f\u7ffb\u8a33\u3055\u308c\u307e\u3059\u3002',
      'curl-example-file-get-title': '\u30d5\u30a1\u30a4\u30eb\u3092\u53d6\u5f97\u3059\u308b\u969b\u306ecURL\u4f8b',
      'curl-response-file-get-ok-title': '\u30d5\u30a1\u30a4\u30eb\u306e\u53d6\u5f97\u306b\u6210\u529f\u3057\u307e\u3057\u305f (HTTP200, <code>Content-Description: File Transfer; Content-Disposition: attachment; filename="test_en-gb.js"</code>):',
      'file-get-response-type-notice': '\u6ce8\u610f! \u30ea\u30af\u30a8\u30b9\u30c8\u306b\u6210\u529f\u3057\u305f\u5834\u5408\u3001\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u306fJSON\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u3067\u306f\u306a\u304f\u30d5\u30a1\u30a4\u30eb\u306e\u5185\u5bb9\u3092\u76f4\u63a5\u8fd4\u3057\u307e\u3059\u3002\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u306f <code>Content-Disposition: attachment; filename=..</code> HTTP \u30d8\u30c3\u30c0\u30fc\u3092\u30bb\u30c3\u30c8\u3057\u3066\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u3001\u30d5\u30a1\u30a4\u30eb\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3092\u958b\u59cb\u3059\u308b\u3088\u3046\u4fc3\u3057\u307e\u3059\u3002',
      'curl-response-file-get-fail-title': '\u30d5\u30a1\u30a4\u30eb\u306e\u53d6\u5f97\u306b\u5931\u6557\u3057\u307e\u3057\u305f (HTTP400, <code>Content-Type: application/json</code>):',
      'curl-example-file-save-title': 'cURL\u3092\u4f7f\u3063\u3066\u30d5\u30a1\u30a4\u30eb\u3092\u4fdd\u5b58\u3059\u308b\u4f8b',
      'curl-response-file-save-ok-title': '\u30d5\u30a1\u30a4\u30eb\u306e\u4fdd\u5b58\u306b\u6210\u529f\u3057\u307e\u3057\u305f (HTTP200, <code>Content-Type: application/json</code>):',
      'curl-response-file-save-fail-title': '\u30d5\u30a1\u30a4\u30eb\u306e\u4fdd\u5b58\u306b\u5931\u6557\u3057\u307e\u3057\u305f (HTTP400, <code>Content-Type: application/json</code>):',
      'file-save-failure-explained': 'JSON\u30d5\u30a1\u30a4\u30eb\u304c\u6709\u52b9\u306aJSON\u3067\u306a\u3044\u6642\u306a\u3069\u306b\u8d77\u3053\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002',
      'curl-example-file-status-title': 'cURL\u3092\u4f7f\u3063\u3066\u30d5\u30a1\u30a4\u30eb\u306e\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u78ba\u8a8d\u3059\u308b\u4f8b',
      'curl-example-file-translate-quote-title': '\u898b\u7a4d\u308a\u3092\u5f97\u308b\u969b\u306ecURL\u4f8b',
      'curl-response-file-translate-quote-title': '\u898b\u7a4d\u306e\u4f9d\u983c\u306b\u6210\u529f\u3057\u307e\u3057\u305f (HTTP200, <code>Content-Type: application/json</code>):',
      'curl-example-file-translate-order-title': '\u30d5\u30a1\u30a4\u30eb\u306e\u7ffb\u8a33\u3092\u767a\u6ce8\u3059\u308b\u969b\u306ecURL\u4f8b',
      'curl-response-file-translate-order-title': '\u30d5\u30a1\u30a4\u30eb\u306e\u7ffb\u8a33\u306e\u767a\u6ce8\u306b\u6210\u529f\u3057\u307e\u3057\u305f (HTTP200, <code>Content-Type: application/json</code>):',
      'testing-information': '\u304a\u5ba2\u69d8\u5074\u306e\u7d71\u5408\u3092\u958b\u767a\u304a\u3088\u3073\u30c6\u30b9\u30c8\u3059\u308b\u305f\u3081\u306b\u3001\u5f53\u793e\u3067\u306f\u64ec\u4f3c\u8a00\u8a9e\u7ffb\u8a33\u3092\u63d0\u4f9b\u3057\u3066\u304a\u308a\u307e\u3059\u3002\u64ec\u4f3c\u8a00\u8a9e\u306e\u8a00\u8a9e\u30b3\u30fc\u30c9\u306f<strong>xx-xx</strong>\u3067\u3059\u3002\u30bd\u30fc\u30b9\u8a00\u8a9e\u3092\u82f1\u8a9e\uff08<code>en</code>\uff09\u3001\u30bf\u30fc\u30b2\u30c3\u30c8\u8a00\u8a9e\u3092\u64ec\u4f3c\u8a00\u8a9e\u306b\u8a2d\u5b9a\u3059\u308b\u3068\u3001\u305d\u306e\u6ce8\u6587\u306f\u7121\u6599\u3067\u51e6\u7406\u3055\u308c\u307e\u3059\u3002\u5b9f\u969b\u306e\u7ffb\u8a33\u306e\u4ee3\u308f\u308a\u306b\u3001\u5143\u306e\u6587\u7ae0\u306f\u524d\u5f8c\u9006\u306b\u5909\u63db\u3055\u308c\u307e\u3059\u3002\uff08\u4f8b\uff1a&quot;Hello&quot; \u2192 &quot;olleH&quot;\uff09\u64ec\u4f3c\u8a00\u8a9e\u7ffb\u8a33\u306f\u3001\u5229\u7528\u65b9\u6cd5\u306b\u3088\u3063\u3066\u306f\u904e\u7a0b\u306e\u5168\u4f53\u3092\u521d\u3081\u304b\u3089\u7d42\u308f\u308a\u307e\u3067\u30c6\u30b9\u30c8\u3057\u305f\u308a\u3001\u307e\u305f\u5834\u5408\u306b\u3088\u308a\u304a\u5ba2\u69d8\u5074\u306e\u975e\u7ffb\u8a33\u90e8\u5206\u3092\u7279\u5b9a\u3057\u305f\u308a\u3059\u308b\u305f\u3081\u306b\u5f79\u7acb\u3066\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002',
      'sdk-information': 'Transfluent\u3067\u306f<a href="https://github.com/Transfluent/Transfluent-PHP-SDK" target="_blank">PHP</a>\u3068<a href="https://github.com/Transfluent/Transfluent-Ruby" target="_blank">Ruby</a>\u7528\u306bSDK\u3092\u7528\u610f\u3057\u3066\u3044\u307e\u3059\u3002\u3059\u3050\u306b\u7fd2\u5f97\u3067\u304d\u308b\u3088\u3046\u3001\u5fc5\u8981\u6700\u5c0f\u9650\u306e\u6a5f\u80fd\u306b\u6b62\u3081\u3066\u3042\u308a\u307e\u3059\u3002 Python\u306b\u3064\u3044\u3066\u306f\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u88fd\u306e<a href="https://github.com/jpvanhal/python-transfluent" target="_blank">\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30e9\u30a4\u30d6\u30e9\u30ea\u30fc</a>\u304c\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002\u63d0\u4f9b\u3057\u3066\u4e0b\u3055\u3063\u305f<a href="https://github.com/jpvanhal">Janne Vanhala</a>\u306b\u611f\u8b1d\u3057\u307e\u3059\u3002',
      'callback-information': '\u767a\u6ce8\u6642\u306b<code>callback_url</code>\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u63d0\u4f9b\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u7ffb\u8a33\u5b8c\u4e86\u5f8c\u306b\u3001\u30b3\u30fc\u30eb\u30d0\u30c3\u30afURL\u306b\u5bfe\u3057JSON\u30da\u30a4\u30ed\u30fc\u30c9\u3078\u306eHTTP POST\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002',
      'curl-example-callback-for-text-title': '\u30c6\u30ad\u30b9\u30c8\u767a\u6ce8\u306e\u969b\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u4f8b\uff1a',
      'curl-example-callback-for-file-title': '\u30d5\u30a1\u30a4\u30eb\u767a\u6ce8\u306e\u969b\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u4f8b\uff1a',
      'callback-security-title': '\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3',
      'callback-security-body': '\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306e\u51e6\u7406\u3092\u884c\u3046\u524d\u306b\u7167\u5408\u3059\u308b\u6a5f\u5bc6\u304c\u8a8d\u8a3c\u30ad\u30fc\u306b\u542b\u307e\u308c\u308b\u30b3\u30fc\u30eb\u30d0\u30c3\u30afURL\u306b\u306f\u3001\u79d8\u5bc6\u9375\u3092\u542b\u3080\u3053\u3068\u3092\u5f37\u304f\u63a8\u5968\u3057\u307e\u3059\u3002\uff08\u4f8b\uff1a<code>https://example.org/my-app/transfluent-callback?auth-key=ABC123</code> \uff09\u3000\u3053\u308c\u306b\u3088\u308a\u3001\u672a\u8a8d\u8a3c\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u304a\u5ba2\u69d8\u306e\u30b7\u30b9\u30c6\u30e0\u306b\u63d0\u4f9b\u3059\u308b\u7b2c\u4e09\u8005\u306b\u5bfe\u3059\u308b\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3092\u5b9f\u88c5\u3057\u307e\u3059\u3002',
      'support-title': '\u52a9\u3051\u304c\u5fc5\u8981\u3067\u3059\u304b? \u3069\u3053\u304b\u3067\u5f15\u3063\u304b\u304b\u3063\u3066\u3044\u307e\u3059\u304b? \u8cea\u554f\u304c\u3042\u308a\u307e\u3059\u304b?',
      'support-body': '<code>coders</code> (\u30c9\u30e1\u30a4\u30f3\u540d\u306f<code>transfluent.com</code>\u3067\u3059) \u5b9b\u306b\u3054\u9023\u7d61\u304f\u3060\u3055\u3044\u3002\u3053\u3061\u3089\u304b\u3089\u6298\u308a\u8fd4\u3057\u3054\u8fd4\u4e8b\u3057\u307e\u3059\u3002',
      'back-link': '\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3078\u623b\u308b',
      'made-with-love': '<a href="https://www.transfluent.com/about/our-company/">\u30c1\u30fc\u30e0Transfluent</a>\u304c<i class="fa fa-heart"></i>\u3092\u8fbc\u3081\u3066\u4f5c\u6210',
      'optional': '\u4efb\u610f',
      'api-email-parameter': 'Transfluent\u30a2\u30ab\u30a6\u30f3\u30c8\u306eE\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9',
      'api-password-parameter': '\u30d1\u30b9\u30ef\u30fc\u30c9',
      'api-text_id-parameter': '<code>text_id</code> \u306f\u304a\u5ba2\u69d8\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u3054\u3068\u306b\u7279\u6709\u306e\u30ad\u30fc\u3067\u3059\u3002\u6700\u957764\u5b57\u306e\u82f1\u6570\u5b57\u306e\u6587\u5b57\u5217\u3067\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002<code>group_id</code>\u304c\u63d0\u4f9b\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30b0\u30eb\u30fc\u30d7id\u306e\u524d\u306b\u3064\u3051\u3089\u308c\u3066\u304a\u308a\u3001\u305d\u308c\u305e\u308c\u306e\u30b0\u30eb\u30fc\u30d7\u306f\u30c6\u30ad\u30b9\u30c8id\u7528\u306e\u540d\u524d\u7a7a\u9593\u3092\u6709\u3057\u3066\u3044\u307e\u3059\u3002',
      'api-group_id-parameter': '<code>group_id</code>\u306f\u304a\u5ba2\u69d8\u306e\u30c6\u30ad\u30b9\u30c8\u30ad\u30fc\u7279\u6709\u306e\u30b0\u30eb\u30fc\u30d7\u540d\u3067\u3059\u3002\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u9593\u306e\u30b3\u30ea\u30b8\u30e7\u30f3\u3092\u9632\u3050\u305f\u3081\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3042\u308b\u3044\u306f\u30a2\u30d7\u30ea\u306e\u540d\u524d\u3092\u4f7f\u3046\u3053\u3068\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002\u63d0\u4f9b\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u6700\u957732\u6587\u5b57\u306e\u82f1\u6570\u5b57\u306e\u6587\u5b57\u5217\u3067\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002',
      'api-language-parameter': '<code>language</code> \u306f\u30c6\u30ad\u30b9\u30c8\u304c\u66f8\u304b\u308c\u305f\u8a00\u8a9e\u306e\u30b3\u30fc\u30c9\u3067\u3059\u3002\uff08\u4f8b<code>en-gb</code>\uff09 \u8a73\u7d30\u306f <a href="/api/Languages.html">\u8a00\u8a9e</a> \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002',
      'api-text-parameter': '\u30c6\u30ad\u30b9\u30c8\uff1a\u7ffb\u8a33\u3092\u884c\u3046\u30bd\u30fc\u30b9\u30c6\u30ad\u30b9\u30c8\u304b\u3001\u5f53\u793e\u306e\u30b7\u30b9\u30c6\u30e0\u306b\u4fdd\u5b58\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u7ffb\u8a33\u6e08\u307f\u30c6\u30ad\u30b9\u30c8\u3067\u3059\u3002HTML\u3092\u542b\u3080\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002UTF-8\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
      'api-invalidate_translations-parameter': '<code>invalidate_translations</code>\u306f\u3001\u7ffb\u8a33\u3092\u7834\u68c4\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6c7a\u5b9a\u3059\u308b\u30d6\u30fc\u30eb\u5024\u3067\u3059\uff08\u4f8b\uff1a<code>1/0</code> \u3082\u3057\u304f\u306f <code>on/off</code>\uff09\u3002\u4f8b\u3048\u3070\u7ffb\u8a33\u524d\u306e\u30c6\u30ad\u30b9\u30c8\u306e\u8aa4\u5b57\u3092\u4fee\u6b63\u3057\u305f\u5834\u5408\u3001\u7ffb\u8a33\u3092\u7834\u68c4\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u30c6\u30ad\u30b9\u30c8\u3092\u518d\u7ffb\u8a33\u3057\u305f\u65b9\u304c\u826f\u3044\u3067\u3057\u3087\u3046\u3002\u307e\u305f\u3001\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u3067\u5f53\u793e\u306e\u30b7\u30b9\u30c6\u30e0\u306b\u4ee5\u524d\u306e\u7ffb\u8a33\u3092\u4fdd\u5b58\u3059\u308b\u5834\u5408\u3001<code>invalidate_translations</code>\u3092\u30aa\u30d5\u306b\u8a2d\u5b9a\u3057\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002',
      'api-invalidate_translations-2-parameter': '<code>invalidate_translations</code>\u306f\u3001\u7ffb\u8a33\u3092\u7834\u68c4\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6c7a\u5b9a\u3059\u308b\u30d6\u30fc\u30eb\u5024\u3067\u3059\uff08\u4f8b\uff1a<code>1/0</code> \u3082\u3057\u304f\u306f <code>on/off</code>\uff09\u3002\u4f8b\u3048\u3070\u7ffb\u8a33\u524d\u306e\u30c6\u30ad\u30b9\u30c8\u306e\u8aa4\u5b57\u3092\u4fee\u6b63\u3057\u305f\u5834\u5408\u3001\u7ffb\u8a33\u3092\u7834\u68c4\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u30c6\u30ad\u30b9\u30c8\u3092\u518d\u7ffb\u8a33\u3057\u305f\u65b9\u304c\u826f\u3044\u3067\u3057\u3087\u3046\u3002\u307e\u305f\u3001\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u3067\u5f53\u793e\u306e\u30b7\u30b9\u30c6\u30e0\u306b\u4ee5\u524d\u306e\u7ffb\u8a33\u3092\u4fdd\u5b58\u3059\u308b\u5834\u5408\u3001<code>invalidate_translations</code>\u3092\u30aa\u30d5\u306b\u8a2d\u5b9a\u3057\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002<span class="label label-warning">\u6ce8\u610f\uff01\u3053\u308c\u306f\u540c\u3058\u30ea\u30af\u30a8\u30b9\u30c8\u4e0a\u306e\u5168\u3066\u306e\u30c6\u30ad\u30b9\u30c8\u306b\u5f71\u97ff\u3057\u307e\u3059\u3002\u4e00\u90e8\u3060\u3051\u3092\u7121\u52b9\u306b\u3059\u308b\u5834\u5408\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u30922\u56de\u884c\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002</span>',
      'api-token-parameter': '\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u3002\u8a73\u7d30\u306f <a href="/api/Authenticate.html">\u8a8d\u8a3c</a> \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002',
      'api-texts-parameter': '<span class="label label-warning">POST-only</span>\u30c6\u30ad\u30b9\u30c8\u30ad\u30fc\u304a\u3088\u3073\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u914d\u5217\u3067\u3059\u3002 \uff08\u4f8b\uff1a<code>..,"texts": {"text-key-1": "My first text", "text-key-2": "My second text"},..</code>\uff09',
      'api-limit-parameter': '<span class="label label-warning">GET-only</span>\u5fdc\u7b54\u30da\u30a4\u30ed\u30fc\u30c9\u306e\u30c6\u30ad\u30b9\u30c8\u30a2\u30a4\u30c6\u30e0\u306e\u6570\u3092\u5236\u9650\u3057\u307e\u3059\u3002\u6700\u5927100\u6587\u5b57\u3067\u3059\u3002',
      'api-offset-parameter': '<span class="label label-warning">GET-only</span>n\u756a\u76ee\u306e\u30a2\u30a4\u30c6\u30e0\u304b\u3089\u30da\u30a4\u30ed\u30fc\u30c9\u5185\u306e\u30c6\u30ad\u30b9\u30c8\u30a2\u30a4\u30c6\u30e0\u306e\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7\u3092\u59cb\u3081\u307e\u3059\u3002',
      'api-source_language-parameter': '<code>language</code> \u306f\u30c6\u30ad\u30b9\u30c8\u304c\u66f8\u304b\u308c\u305f\u8a00\u8a9e\u306e\u30b3\u30fc\u30c9\u3067\u3059\u3002\uff08\u4f8b<code>en-gb</code>\uff09 \u8a73\u7d30\u306f <a href="/api/Languages.html">\u8a00\u8a9e</a> \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002',
      'api-target_languages-parameter': '\u30c6\u30ad\u30b9\u30c8\u3092\u7ffb\u8a33\u3059\u308b\u30bf\u30fc\u30b2\u30c3\u30c8\u8a00\u8a9e\u3067\u3059\u3002\u30bf\u30fc\u30b2\u30c3\u30c8\u8a00\u8a9e\u304c1\u3064\u3060\u3051\u306e\u5834\u5408\u3067\u3082\u3001\u8a00\u8a9e\u30b3\u30fc\u30c9\u306f\u5fc5\u305a\u914d\u5217\u3068\u3057\u3066\u63d0\u4f9b\u3057\u3066\u304f\u3060\u3055\u3044\uff08\u4f8b\uff1a ["fi", "fr-fr"]\u3042\u308b\u3044\u306f["sv-se"]\u306a\u3069\uff09\u3002\u8a73\u7d30\u306f<a href="/api/Languages.html">\u8a00\u8a9e</a>\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002',
      'api-texts-2-parameter': '\u7ffb\u8a33\u3059\u308b\u30c6\u30ad\u30b9\u30c8\u30ad\u30fc\u3002\u30c6\u30ad\u30b9\u30c8\u30ad\u30fc\u914d\u5217\u3092\u63d0\u4f9b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\uff08\u4f8b\uff1a[{"id":"my_text_id"},{"id":"some_another_key"}]\uff09',
      'api-comment-parameter': '\u5e0c\u671b\u3055\u308c\u308b\u6587\u7ae0\u306e\u30c8\u30fc\u30f3\uff08\u6539\u307e\u3063\u305f\uff0f\u7815\u3051\u305f\uff09\u306a\u3069\u3001\u304a\u5ba2\u69d8\u306e\u30c6\u30ad\u30b9\u30c8\u3084\u7ffb\u8a33\u8005\u3078\u306e\u4ed6\u95a2\u9023\u60c5\u5831\u306b\u95a2\u3059\u308b\u6587\u8108\u60c5\u5831\u3067\u3059\u3002',
      'api-callback_url-parameter': '\u7ffb\u8a33\u5b8c\u4e86\u6642\u306b\u547c\u3073\u51fa\u3055\u308c\u308b\u30b3\u30fc\u30eb\u30d0\u30c3\u30afURL\u3067\u3059\u3002\u8a73\u7d30\u306fhref="/api/Callbacks.html">\u30b3\u30fc\u30eb\u30d0\u30c3\u30af</a>\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002 ',
      'api-max_words-parameter': '\u610f\u56f3\u305b\u305a\u9ad8\u984d\u306a\u767a\u6ce8\u3092\u884c\u308f\u306a\u3044\u3088\u3046\u306b\u3001\u6587\u5b57\u30ab\u30a6\u30f3\u30c8\u306e\u6700\u5927\u6570\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u6700\u5927\u6570\u306e\u5236\u9650\u3092\u8d85\u3048\u305f\u5834\u5408\u306f\u6ce8\u6587\u304c\u884c\u308f\u308c\u307e\u305b\u3093\u3002\u521d\u671f\u8a2d\u5b9a\u3067\u306f\u6587\u5b57\u6570\u306e\u5236\u9650\u306f\u3042\u308a\u307e\u305b\u3093\u3002',
      'api-deliver_by_email-parameter': '<code>deliver_by_email</code>\u306f\u5b8c\u6210\u3057\u305f\u7ffb\u8a33\u3092\u304a\u5ba2\u69d8\u306eE\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u9001\u4fe1\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6c7a\u3081\u308b\u30d6\u30fc\u30eb\u5024\u3067\u3059\u3002',
      'api-deliver_to_email-parameter': ' <code>deliver_by_email</code>\u304c\u30aa\u30f3\u306b\u8a2d\u5b9a\u3055\u308c\u305f\u5834\u5408\u3001\u304a\u5ba2\u69d8\u306eE\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3067\u306f\u306a\u304f\u3053\u3061\u3089\u306e\u30a2\u30c9\u30ec\u30b9\u3078\u9001\u4fe1\u3055\u308c\u307e\u3059\u3002',
      'api-project_title-parameter': '\u7d0d\u54c1\u6642\u306e\u78ba\u8a8d\u306e\u305f\u3081\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30bf\u30a4\u30c8\u30eb\u3002',
      'api-identifier-parameter': ' <code>identifier</code> \u306f\u30d5\u30a1\u30a4\u30eb\u3054\u3068\u306b\u7279\u6709\u306e\u8b58\u5225\u5b50\u3067\u3059\u3002\u3000\u6587\u5b57\u3001\u6570\u5b57\u3001\u7279\u6b8a\u6587\u5b57\uff08:/.\u306a\u3069\uff09\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002',
      'api-content-parameter': '\u30d5\u30a1\u30a4\u30eb\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306f<strong>\u5fc5\u305a</strong>base64\u65b9\u5f0f\u3067\u30a8\u30f3\u30b3\u30fc\u30c9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002',
      'api-type-parameter': '\u5bfe\u5fdc\u3059\u308b\u30bf\u30a4\u30d7\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002\uff1a<ul><li><code>json-file</code></li><li><code>Properties-file</code></li><li><code>YAML-file</code></li><li><code>XML-file</code></li><li><code>po-file</code></li><li><code>HAML-file</code></li><li><code>HTML-file</code></li><li><code>iOS-strings</code></li><li><code>Android-strings</code></li><li><code>MooTools-locale</code></li><li><code>WP-RESX</code></li><li><code>Excel-file</code></li></ul>',
      'api-save_only_data-parameter': '<code>save_only_data</code>\u306f\u30d6\u30fc\u30eb\u5024\u3067\u3059\u3002\n\u65e2\u306b\u7ffb\u8a33\u3055\u308c\u305f\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u3053\u306e\u5909\u6570\u3092true\u306b\u6307\u5b9a\uff08<code>1</code>\u3042\u308b\u3044\u306f<code>on</code>\uff09\u3059\u308b\u3053\u3068\u3067\u7ffb\u8a33\u3092\u4fdd\u5b58\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30bd\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u3068\u540c\u3058\u8b58\u5225\u5b50\u3092\u4f7f\u3046\u3088\u3046\u3054\u6ce8\u610f\u304f\u3060\u3055\u3044\u3002',
      'api-format-parameter': '\u5bfe\u5fdc\u3059\u308b\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f<code>UTF-8</code>\u3068<code>UTF-16</code>\u3067\u3059\u3002iOS\u6587\u5b57\u5217\u30d5\u30a1\u30a4\u30eb\u4ee5\u5916\u306f\u5168\u3066UTF-8\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002iOS\u6587\u5b57\u5217\u30d5\u30a1\u30a4\u30eb\u306fUTF-16\u65b9\u5f0f\u3067\u30a8\u30f3\u30b3\u30fc\u30c9\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u30d1\u30e9\u30e1\u30fc\u30bf\u3092UTF-16\u3068\u3057\u3066\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002',
      'api-quote-parameter': '<code>quote</code> \u306f<code>on</code>\u306b\u8a2d\u5b9a\u3055\u308c\u305f\u5834\u5408\u3001\u767a\u6ce8\u6642\u306b\u30da\u30a4\u30ed\u30fc\u30c9\u3092\u51e6\u7406\u3059\u308b\u4ee3\u308f\u308a\u306b\u898b\u7a4d\u308a\u3092\u884c\u3046\u30d6\u30fc\u30eb\u5024\u3067\u3059\u3002 '
    });
    $translateProvider.preferredLanguage('en');
    $translateProvider.useCookieStorage();
  }
]).controller('LanguageSelector', [
  '$scope',
  '$translate',
  '$rootScope',
  function ($scope, $translate, $rootScope) {
    $scope.ChangeLanguage = function (key) {
      $translate.use(key);
    };
  }
]).directive('watchLanguage', [
  '$rootScope',
  function ($rootScope) {
    return {
      link: function (scope, element) {
        $rootScope.$on('$translateChangeSuccess', function (event, translationResp) {
          element.attr('lang', translationResp.language || 'en');
        });
      }
    };
  }
]);
'use strict';
/* Controllers */
angular.module('transfluentAPI.controllers', []).controller('servicesCtrl', [
  '$scope',
  '$sce',
  '$http',
  function ($scope, $sce, $http) {
    $http.get('/json/services-methods.json').success(function (data) {
      $scope.navs = data;
    });
  }
]).controller('securityCtrl', [
  '$scope',
  '$sce',
  '$http',
  function ($scope, $sce, $http) {
    $http.get('/json/security-methods.json').success(function (data) {
      $scope.navs = data;
    });
  }
]).controller('fileCtrl', [
  '$scope',
  '$sce',
  '$http',
  function ($scope, $sce, $http) {
    $http.get('/json/file-methods.json').success(function (data) {
      $scope.navs = data;
    });
  }
]).controller('languagesCtrl', [
  '$scope',
  '$sce',
  '$http',
  function ($scope, $sce, $http) {
    $http.get('/json/languages-methods.json').success(function (data) {
      $scope.navs = data;
    });
  }
]).controller('textCtrl', [
  '$scope',
  '$sce',
  '$http',
  function ($scope, $sce, $http) {
    $http.get('/json/text-methods.json').success(function (data) {
      $scope.navs = data;
    });
  }
]);
'use strict';
/* Filters */
angular.module('transfluentAPI.filters', []).filter('linebreak', function () {
  return function (text) {
    return text.replace(/\n/g, '<br>');
  };
}).filter('to_trusted', [
  '$sce',
  function ($sce) {
    return function (text) {
      return $sce.trustAsHtml(text);
    };
  }
]);
var _gaq = _gaq || [];
_gaq.push([
  '_setAccount',
  'UA-2040852-7'
]);
_gaq.push(['_trackPageview']);
(function () {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
}());