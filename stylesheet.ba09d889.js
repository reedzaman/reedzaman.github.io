// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"font/stylesheet.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./BwModelicaCyrillicDEMO-Black.eot":[["BwModelicaCyrillicDEMO-Black.d190b3e1.eot","font/BwModelicaCyrillicDEMO-Black.eot"],"font/BwModelicaCyrillicDEMO-Black.eot"],"./BwModelicaCyrillicDEMO-Black.woff2":[["BwModelicaCyrillicDEMO-Black.d5db6802.woff2","font/BwModelicaCyrillicDEMO-Black.woff2"],"font/BwModelicaCyrillicDEMO-Black.woff2"],"./BwModelicaCyrillicDEMO-Black.woff":[["BwModelicaCyrillicDEMO-Black.27b02b1a.woff","font/BwModelicaCyrillicDEMO-Black.woff"],"font/BwModelicaCyrillicDEMO-Black.woff"],"./BwModelicaCyrillicDEMO-Black.ttf":[["BwModelicaCyrillicDEMO-Black.c39e224b.ttf","font/BwModelicaCyrillicDEMO-Black.ttf"],"font/BwModelicaCyrillicDEMO-Black.ttf"],"./BwModelicaCyrillicDEMO-Regular.eot":[["BwModelicaCyrillicDEMO-Regular.e118316a.eot","font/BwModelicaCyrillicDEMO-Regular.eot"],"font/BwModelicaCyrillicDEMO-Regular.eot"],"./BwModelicaCyrillicDEMO-Regular.woff2":[["BwModelicaCyrillicDEMO-Regular.72003559.woff2","font/BwModelicaCyrillicDEMO-Regular.woff2"],"font/BwModelicaCyrillicDEMO-Regular.woff2"],"./BwModelicaCyrillicDEMO-Regular.woff":[["BwModelicaCyrillicDEMO-Regular.dcb3ed04.woff","font/BwModelicaCyrillicDEMO-Regular.woff"],"font/BwModelicaCyrillicDEMO-Regular.woff"],"./BwModelicaCyrillicDEMO-Regular.ttf":[["BwModelicaCyrillicDEMO-Regular.d0b46e91.ttf","font/BwModelicaCyrillicDEMO-Regular.ttf"],"font/BwModelicaCyrillicDEMO-Regular.ttf"],"./BwModelicaCyrillicDEMO-Bold.eot":[["BwModelicaCyrillicDEMO-Bold.f25186b5.eot","font/BwModelicaCyrillicDEMO-Bold.eot"],"font/BwModelicaCyrillicDEMO-Bold.eot"],"./BwModelicaCyrillicDEMO-Bold.woff2":[["BwModelicaCyrillicDEMO-Bold.5197ad4a.woff2","font/BwModelicaCyrillicDEMO-Bold.woff2"],"font/BwModelicaCyrillicDEMO-Bold.woff2"],"./BwModelicaCyrillicDEMO-Bold.woff":[["BwModelicaCyrillicDEMO-Bold.bbe039ab.woff","font/BwModelicaCyrillicDEMO-Bold.woff"],"font/BwModelicaCyrillicDEMO-Bold.woff"],"./BwModelicaCyrillicDEMO-Bold.ttf":[["BwModelicaCyrillicDEMO-Bold.7c9b246c.ttf","font/BwModelicaCyrillicDEMO-Bold.ttf"],"font/BwModelicaCyrillicDEMO-Bold.ttf"],"./BwModelicaCyrillicDEMO-Thin.eot":[["BwModelicaCyrillicDEMO-Thin.09a6ba28.eot","font/BwModelicaCyrillicDEMO-Thin.eot"],"font/BwModelicaCyrillicDEMO-Thin.eot"],"./BwModelicaCyrillicDEMO-Thin.woff2":[["BwModelicaCyrillicDEMO-Thin.2cd41182.woff2","font/BwModelicaCyrillicDEMO-Thin.woff2"],"font/BwModelicaCyrillicDEMO-Thin.woff2"],"./BwModelicaCyrillicDEMO-Thin.woff":[["BwModelicaCyrillicDEMO-Thin.cdfd775c.woff","font/BwModelicaCyrillicDEMO-Thin.woff"],"font/BwModelicaCyrillicDEMO-Thin.woff"],"./BwModelicaCyrillicDEMO-Thin.ttf":[["BwModelicaCyrillicDEMO-Thin.756a0b68.ttf","font/BwModelicaCyrillicDEMO-Thin.ttf"],"font/BwModelicaCyrillicDEMO-Thin.ttf"],"./BwModelicaCyrillicDEMO-RegularItalic.eot":[["BwModelicaCyrillicDEMO-RegularItalic.6dab24be.eot","font/BwModelicaCyrillicDEMO-RegularItalic.eot"],"font/BwModelicaCyrillicDEMO-RegularItalic.eot"],"./BwModelicaCyrillicDEMO-RegularItalic.woff2":[["BwModelicaCyrillicDEMO-RegularItalic.98c54a22.woff2","font/BwModelicaCyrillicDEMO-RegularItalic.woff2"],"font/BwModelicaCyrillicDEMO-RegularItalic.woff2"],"./BwModelicaCyrillicDEMO-RegularItalic.woff":[["BwModelicaCyrillicDEMO-RegularItalic.13cba3d7.woff","font/BwModelicaCyrillicDEMO-RegularItalic.woff"],"font/BwModelicaCyrillicDEMO-RegularItalic.woff"],"./BwModelicaCyrillicDEMO-RegularItalic.ttf":[["BwModelicaCyrillicDEMO-RegularItalic.6b90b422.ttf","font/BwModelicaCyrillicDEMO-RegularItalic.ttf"],"font/BwModelicaCyrillicDEMO-RegularItalic.ttf"],"./BwModelicaCyrillicDEMO-Medium.eot":[["BwModelicaCyrillicDEMO-Medium.283c5e6d.eot","font/BwModelicaCyrillicDEMO-Medium.eot"],"font/BwModelicaCyrillicDEMO-Medium.eot"],"./BwModelicaCyrillicDEMO-Medium.woff2":[["BwModelicaCyrillicDEMO-Medium.64318ba1.woff2","font/BwModelicaCyrillicDEMO-Medium.woff2"],"font/BwModelicaCyrillicDEMO-Medium.woff2"],"./BwModelicaCyrillicDEMO-Medium.woff":[["BwModelicaCyrillicDEMO-Medium.b2d582fd.woff","font/BwModelicaCyrillicDEMO-Medium.woff"],"font/BwModelicaCyrillicDEMO-Medium.woff"],"./BwModelicaCyrillicDEMO-Medium.ttf":[["BwModelicaCyrillicDEMO-Medium.f762a93f.ttf","font/BwModelicaCyrillicDEMO-Medium.ttf"],"font/BwModelicaCyrillicDEMO-Medium.ttf"],"./BwModelicaCyrillicDEMO-ExtraBoldItalic.eot":[["BwModelicaCyrillicDEMO-ExtraBoldItalic.59744010.eot","font/BwModelicaCyrillicDEMO-ExtraBoldItalic.eot"],"font/BwModelicaCyrillicDEMO-ExtraBoldItalic.eot"],"./BwModelicaCyrillicDEMO-ExtraBoldItalic.woff2":[["BwModelicaCyrillicDEMO-ExtraBoldItalic.361a4eea.woff2","font/BwModelicaCyrillicDEMO-ExtraBoldItalic.woff2"],"font/BwModelicaCyrillicDEMO-ExtraBoldItalic.woff2"],"./BwModelicaCyrillicDEMO-ExtraBoldItalic.woff":[["BwModelicaCyrillicDEMO-ExtraBoldItalic.baf9016f.woff","font/BwModelicaCyrillicDEMO-ExtraBoldItalic.woff"],"font/BwModelicaCyrillicDEMO-ExtraBoldItalic.woff"],"./BwModelicaCyrillicDEMO-ExtraBoldItalic.ttf":[["BwModelicaCyrillicDEMO-ExtraBoldItalic.1dd76127.ttf","font/BwModelicaCyrillicDEMO-ExtraBoldItalic.ttf"],"font/BwModelicaCyrillicDEMO-ExtraBoldItalic.ttf"],"./BwModelicaCyrillicDEMO-HairlineItalic.eot":[["BwModelicaCyrillicDEMO-HairlineItalic.d3d7636c.eot","font/BwModelicaCyrillicDEMO-HairlineItalic.eot"],"font/BwModelicaCyrillicDEMO-HairlineItalic.eot"],"./BwModelicaCyrillicDEMO-HairlineItalic.woff2":[["BwModelicaCyrillicDEMO-HairlineItalic.19050a1b.woff2","font/BwModelicaCyrillicDEMO-HairlineItalic.woff2"],"font/BwModelicaCyrillicDEMO-HairlineItalic.woff2"],"./BwModelicaCyrillicDEMO-HairlineItalic.woff":[["BwModelicaCyrillicDEMO-HairlineItalic.b08f2ee2.woff","font/BwModelicaCyrillicDEMO-HairlineItalic.woff"],"font/BwModelicaCyrillicDEMO-HairlineItalic.woff"],"./BwModelicaCyrillicDEMO-HairlineItalic.ttf":[["BwModelicaCyrillicDEMO-HairlineItalic.277d84da.ttf","font/BwModelicaCyrillicDEMO-HairlineItalic.ttf"],"font/BwModelicaCyrillicDEMO-HairlineItalic.ttf"],"./BwModelicaCyrillicDEMO-ThinItalic.eot":[["BwModelicaCyrillicDEMO-ThinItalic.b1eeb2db.eot","font/BwModelicaCyrillicDEMO-ThinItalic.eot"],"font/BwModelicaCyrillicDEMO-ThinItalic.eot"],"./BwModelicaCyrillicDEMO-ThinItalic.woff2":[["BwModelicaCyrillicDEMO-ThinItalic.000533ab.woff2","font/BwModelicaCyrillicDEMO-ThinItalic.woff2"],"font/BwModelicaCyrillicDEMO-ThinItalic.woff2"],"./BwModelicaCyrillicDEMO-ThinItalic.woff":[["BwModelicaCyrillicDEMO-ThinItalic.188d90c3.woff","font/BwModelicaCyrillicDEMO-ThinItalic.woff"],"font/BwModelicaCyrillicDEMO-ThinItalic.woff"],"./BwModelicaCyrillicDEMO-ThinItalic.ttf":[["BwModelicaCyrillicDEMO-ThinItalic.efe7fe56.ttf","font/BwModelicaCyrillicDEMO-ThinItalic.ttf"],"font/BwModelicaCyrillicDEMO-ThinItalic.ttf"],"./BwModelicaCyrillicDEMO-BoldItalic.eot":[["BwModelicaCyrillicDEMO-BoldItalic.8cb6ecc0.eot","font/BwModelicaCyrillicDEMO-BoldItalic.eot"],"font/BwModelicaCyrillicDEMO-BoldItalic.eot"],"./BwModelicaCyrillicDEMO-BoldItalic.woff2":[["BwModelicaCyrillicDEMO-BoldItalic.a23dadda.woff2","font/BwModelicaCyrillicDEMO-BoldItalic.woff2"],"font/BwModelicaCyrillicDEMO-BoldItalic.woff2"],"./BwModelicaCyrillicDEMO-BoldItalic.woff":[["BwModelicaCyrillicDEMO-BoldItalic.91b6300e.woff","font/BwModelicaCyrillicDEMO-BoldItalic.woff"],"font/BwModelicaCyrillicDEMO-BoldItalic.woff"],"./BwModelicaCyrillicDEMO-BoldItalic.ttf":[["BwModelicaCyrillicDEMO-BoldItalic.6df35a69.ttf","font/BwModelicaCyrillicDEMO-BoldItalic.ttf"],"font/BwModelicaCyrillicDEMO-BoldItalic.ttf"],"./BwModelicaCyrillicDEMO-Hairline.eot":[["BwModelicaCyrillicDEMO-Hairline.a5d9d8e3.eot","font/BwModelicaCyrillicDEMO-Hairline.eot"],"font/BwModelicaCyrillicDEMO-Hairline.eot"],"./BwModelicaCyrillicDEMO-Hairline.woff2":[["BwModelicaCyrillicDEMO-Hairline.891b206b.woff2","font/BwModelicaCyrillicDEMO-Hairline.woff2"],"font/BwModelicaCyrillicDEMO-Hairline.woff2"],"./BwModelicaCyrillicDEMO-Hairline.woff":[["BwModelicaCyrillicDEMO-Hairline.ecbdb47b.woff","font/BwModelicaCyrillicDEMO-Hairline.woff"],"font/BwModelicaCyrillicDEMO-Hairline.woff"],"./BwModelicaCyrillicDEMO-Hairline.ttf":[["BwModelicaCyrillicDEMO-Hairline.7fe1d547.ttf","font/BwModelicaCyrillicDEMO-Hairline.ttf"],"font/BwModelicaCyrillicDEMO-Hairline.ttf"],"./BwModelicaCyrillicDEMO-BlackItalic.eot":[["BwModelicaCyrillicDEMO-BlackItalic.353acedc.eot","font/BwModelicaCyrillicDEMO-BlackItalic.eot"],"font/BwModelicaCyrillicDEMO-BlackItalic.eot"],"./BwModelicaCyrillicDEMO-BlackItalic.woff2":[["BwModelicaCyrillicDEMO-BlackItalic.08a0ff4c.woff2","font/BwModelicaCyrillicDEMO-BlackItalic.woff2"],"font/BwModelicaCyrillicDEMO-BlackItalic.woff2"],"./BwModelicaCyrillicDEMO-BlackItalic.woff":[["BwModelicaCyrillicDEMO-BlackItalic.8a5daf89.woff","font/BwModelicaCyrillicDEMO-BlackItalic.woff"],"font/BwModelicaCyrillicDEMO-BlackItalic.woff"],"./BwModelicaCyrillicDEMO-BlackItalic.ttf":[["BwModelicaCyrillicDEMO-BlackItalic.f2337a8c.ttf","font/BwModelicaCyrillicDEMO-BlackItalic.ttf"],"font/BwModelicaCyrillicDEMO-BlackItalic.ttf"],"./BwModelicaCyrillicDEMO-Light.eot":[["BwModelicaCyrillicDEMO-Light.98d28ff8.eot","font/BwModelicaCyrillicDEMO-Light.eot"],"font/BwModelicaCyrillicDEMO-Light.eot"],"./BwModelicaCyrillicDEMO-Light.woff2":[["BwModelicaCyrillicDEMO-Light.63157ade.woff2","font/BwModelicaCyrillicDEMO-Light.woff2"],"font/BwModelicaCyrillicDEMO-Light.woff2"],"./BwModelicaCyrillicDEMO-Light.woff":[["BwModelicaCyrillicDEMO-Light.05a2821d.woff","font/BwModelicaCyrillicDEMO-Light.woff"],"font/BwModelicaCyrillicDEMO-Light.woff"],"./BwModelicaCyrillicDEMO-Light.ttf":[["BwModelicaCyrillicDEMO-Light.d6edeecf.ttf","font/BwModelicaCyrillicDEMO-Light.ttf"],"font/BwModelicaCyrillicDEMO-Light.ttf"],"./BwModelicaCyrillicDEMO-ExtraBold.eot":[["BwModelicaCyrillicDEMO-ExtraBold.a3913a7f.eot","font/BwModelicaCyrillicDEMO-ExtraBold.eot"],"font/BwModelicaCyrillicDEMO-ExtraBold.eot"],"./BwModelicaCyrillicDEMO-ExtraBold.woff2":[["BwModelicaCyrillicDEMO-ExtraBold.6e47a658.woff2","font/BwModelicaCyrillicDEMO-ExtraBold.woff2"],"font/BwModelicaCyrillicDEMO-ExtraBold.woff2"],"./BwModelicaCyrillicDEMO-ExtraBold.woff":[["BwModelicaCyrillicDEMO-ExtraBold.e114cc2d.woff","font/BwModelicaCyrillicDEMO-ExtraBold.woff"],"font/BwModelicaCyrillicDEMO-ExtraBold.woff"],"./BwModelicaCyrillicDEMO-ExtraBold.ttf":[["BwModelicaCyrillicDEMO-ExtraBold.7331a158.ttf","font/BwModelicaCyrillicDEMO-ExtraBold.ttf"],"font/BwModelicaCyrillicDEMO-ExtraBold.ttf"],"./BwModelicaCyrillicDEMO-MediumItalic.eot":[["BwModelicaCyrillicDEMO-MediumItalic.a11d135d.eot","font/BwModelicaCyrillicDEMO-MediumItalic.eot"],"font/BwModelicaCyrillicDEMO-MediumItalic.eot"],"./BwModelicaCyrillicDEMO-MediumItalic.woff2":[["BwModelicaCyrillicDEMO-MediumItalic.f5b2cfd4.woff2","font/BwModelicaCyrillicDEMO-MediumItalic.woff2"],"font/BwModelicaCyrillicDEMO-MediumItalic.woff2"],"./BwModelicaCyrillicDEMO-MediumItalic.woff":[["BwModelicaCyrillicDEMO-MediumItalic.7f0c3e21.woff","font/BwModelicaCyrillicDEMO-MediumItalic.woff"],"font/BwModelicaCyrillicDEMO-MediumItalic.woff"],"./BwModelicaCyrillicDEMO-MediumItalic.ttf":[["BwModelicaCyrillicDEMO-MediumItalic.589aa6a2.ttf","font/BwModelicaCyrillicDEMO-MediumItalic.ttf"],"font/BwModelicaCyrillicDEMO-MediumItalic.ttf"],"./BwModelicaCyrillicDEMO-LightItalic.eot":[["BwModelicaCyrillicDEMO-LightItalic.21a957aa.eot","font/BwModelicaCyrillicDEMO-LightItalic.eot"],"font/BwModelicaCyrillicDEMO-LightItalic.eot"],"./BwModelicaCyrillicDEMO-LightItalic.woff2":[["BwModelicaCyrillicDEMO-LightItalic.a10fb34b.woff2","font/BwModelicaCyrillicDEMO-LightItalic.woff2"],"font/BwModelicaCyrillicDEMO-LightItalic.woff2"],"./BwModelicaCyrillicDEMO-LightItalic.woff":[["BwModelicaCyrillicDEMO-LightItalic.a8b784d9.woff","font/BwModelicaCyrillicDEMO-LightItalic.woff"],"font/BwModelicaCyrillicDEMO-LightItalic.woff"],"./BwModelicaCyrillicDEMO-LightItalic.ttf":[["BwModelicaCyrillicDEMO-LightItalic.06b14fab.ttf","font/BwModelicaCyrillicDEMO-LightItalic.ttf"],"font/BwModelicaCyrillicDEMO-LightItalic.ttf"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "36421" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/stylesheet.ba09d889.js.map