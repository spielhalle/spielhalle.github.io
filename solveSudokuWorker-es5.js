(function () {
  /******/
  (function () {
    // webpackBootstrap

    /******/
    "use strict";
    /******/

    var __webpack_modules__ = {
      /***/
      46022: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _donmahallem_sudoku__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @donmahallem/sudoku */
        18939);
        /*!
         * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
         */
        /// <reference lib="webworker" />


        addEventListener('message', function (evt) {
          var results = (0, _donmahallem_sudoku__WEBPACK_IMPORTED_MODULE_0__.knuthSolveNum)(evt.data, 9, 3, 10);
          self.postMessage(results);
        });
        /***/
      }
      /******/

    };
    /************************************************************************/

    /******/
    // The module cache

    /******/

    var __webpack_module_cache__ = {};
    /******/

    /******/
    // The require function

    /******/

    function __webpack_require__(moduleId) {
      /******/
      // Check if module is in cache

      /******/
      var cachedModule = __webpack_module_cache__[moduleId];
      /******/

      if (cachedModule !== undefined) {
        /******/
        return cachedModule.exports;
        /******/
      }
      /******/
      // Create a new module (and put it into the cache)

      /******/


      var module = __webpack_module_cache__[moduleId] = {
        /******/
        // no module.id needed

        /******/
        // no module.loaded needed

        /******/
        exports: {}
        /******/

      };
      /******/

      /******/
      // Execute the module function

      /******/

      __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
      /******/

      /******/
      // Return the exports of the module

      /******/


      return module.exports;
      /******/
    }
    /******/

    /******/
    // expose the modules object (__webpack_modules__)

    /******/


    __webpack_require__.m = __webpack_modules__;
    /******/

    /******/
    // the startup function

    /******/

    __webpack_require__.x = function () {
      /******/
      // Load entry module and return exports

      /******/
      // This entry module depends on other loaded chunks and execution need to be delayed

      /******/
      var __webpack_exports__ = __webpack_require__.O(undefined, ["default-node_modules_donmahallem_sudoku_dist_esm_index_js"], function () {
        return __webpack_require__(46022);
      });
      /******/


      __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
      /******/

      return __webpack_exports__;
      /******/
    };
    /******/

    /************************************************************************/

    /******/

    /* webpack/runtime/chunk loaded */

    /******/


    !function () {
      /******/
      var deferred = [];
      /******/

      __webpack_require__.O = function (result, chunkIds, fn, priority) {
        /******/
        if (chunkIds) {
          /******/
          priority = priority || 0;
          /******/

          for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) {
            deferred[i] = deferred[i - 1];
          }
          /******/


          deferred[i] = [chunkIds, fn, priority];
          /******/

          return;
          /******/
        }
        /******/


        var notFulfilled = Infinity;
        /******/

        for (var i = 0; i < deferred.length; i++) {
          /******/
          var chunkIds = deferred[i][0];
          /******/

          var fn = deferred[i][1];
          /******/

          var priority = deferred[i][2];
          /******/

          var fulfilled = true;
          /******/

          for (var j = 0; j < chunkIds.length; j++) {
            /******/
            if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function (key) {
              return __webpack_require__.O[key](chunkIds[j]);
            })) {
              /******/
              chunkIds.splice(j--, 1);
              /******/
            } else {
              /******/
              fulfilled = false;
              /******/

              if (priority < notFulfilled) notFulfilled = priority;
              /******/
            }
            /******/

          }
          /******/


          if (fulfilled) {
            /******/
            deferred.splice(i--, 1);
            /******/

            var r = fn();
            /******/

            if (r !== undefined) result = r;
            /******/
          }
          /******/

        }
        /******/


        return result;
        /******/
      };
      /******/

    }();
    /******/

    /******/

    /* webpack/runtime/define property getters */

    /******/

    !function () {
      /******/
      // define getter functions for harmony exports

      /******/
      __webpack_require__.d = function (exports, definition) {
        /******/
        for (var key in definition) {
          /******/
          if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            /******/
            Object.defineProperty(exports, key, {
              enumerable: true,
              get: definition[key]
            });
            /******/
          }
          /******/

        }
        /******/

      };
      /******/

    }();
    /******/

    /******/

    /* webpack/runtime/ensure chunk */

    /******/

    !function () {
      /******/
      __webpack_require__.f = {};
      /******/
      // This file contains only the entry chunk.

      /******/
      // The chunk loading function for additional chunks

      /******/

      __webpack_require__.e = function (chunkId) {
        /******/
        return Promise.all(Object.keys(__webpack_require__.f).reduce(function (promises, key) {
          /******/
          __webpack_require__.f[key](chunkId, promises);
          /******/


          return promises;
          /******/
        }, []));
        /******/
      };
      /******/

    }();
    /******/

    /******/

    /* webpack/runtime/get javascript chunk filename */

    /******/

    !function () {
      /******/
      // This function allow to reference async chunks and sibling chunks for the entrypoint

      /******/
      __webpack_require__.u = function (chunkId) {
        /******/
        // return url for filenames based on template

        /******/
        return "" + chunkId + "-es2015.js";
        /******/
      };
      /******/

    }();
    /******/

    /******/

    /* webpack/runtime/get mini-css chunk filename */

    /******/

    !function () {
      /******/
      // This function allow to reference all chunks

      /******/
      __webpack_require__.miniCssF = function (chunkId) {
        /******/
        // return url for filenames based on template

        /******/
        return undefined;
        /******/
      };
      /******/

    }();
    /******/

    /******/

    /* webpack/runtime/hasOwnProperty shorthand */

    /******/

    !function () {
      /******/
      __webpack_require__.o = function (obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      };
      /******/

    }();
    /******/

    /******/

    /* webpack/runtime/make namespace object */

    /******/

    !function () {
      /******/
      // define __esModule on exports

      /******/
      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

    }();
    /******/

    /******/

    /* webpack/runtime/trusted types */

    /******/

    !function () {
      /******/
      var policy;
      /******/

      __webpack_require__.tu = function (url) {
        /******/
        // Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.

        /******/
        if (policy === undefined) {
          /******/
          policy = {
            /******/
            createScriptURL: function createScriptURL(url) {
              return url;
            }
            /******/

          };
          /******/

          if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
            /******/
            policy = trustedTypes.createPolicy("angular#bundler", policy);
            /******/
          }
          /******/

        }
        /******/


        return policy.createScriptURL(url);
        /******/
      };
      /******/

    }();
    /******/

    /******/

    /* webpack/runtime/publicPath */

    /******/

    !function () {
      /******/
      __webpack_require__.p = "";
      /******/
    }();
    /******/

    /******/

    /* webpack/runtime/importScripts chunk loading */

    /******/

    !function () {
      /******/
      // no baseURI

      /******/

      /******/
      // object to store loaded chunks

      /******/
      // "1" means "already loaded"

      /******/
      var installedChunks = {
        /******/
        "solveSudokuWorker": 1
        /******/

      };
      /******/

      /******/
      // importScripts chunk loading

      /******/

      var installChunk = function installChunk(data) {
        /******/
        var chunkIds = data[0];
        /******/

        var moreModules = data[1];
        /******/

        var runtime = data[2];
        /******/

        for (var moduleId in moreModules) {
          /******/
          if (__webpack_require__.o(moreModules, moduleId)) {
            /******/
            __webpack_require__.m[moduleId] = moreModules[moduleId];
            /******/
          }
          /******/

        }
        /******/


        if (runtime) runtime(__webpack_require__);
        /******/

        while (chunkIds.length) {
          /******/
          installedChunks[chunkIds.pop()] = 1;
        }
        /******/


        parentChunkLoadingFunction(data);
        /******/
      };
      /******/


      __webpack_require__.f.i = function (chunkId, promises) {
        /******/
        // "1" is the signal for "already loaded"

        /******/
        if (!installedChunks[chunkId]) {
          /******/
          if (true) {
            // all chunks have JS

            /******/
            importScripts(__webpack_require__.tu(__webpack_require__.p + __webpack_require__.u(chunkId)));
            /******/
          }
          /******/

        }
        /******/

      };
      /******/

      /******/


      var chunkLoadingGlobal = self["webpackChunk_spielhalle_client"] = self["webpackChunk_spielhalle_client"] || [];
      /******/

      var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
      /******/

      chunkLoadingGlobal.push = installChunk;
      /******/

      /******/
      // no HMR

      /******/

      /******/
      // no HMR manifest

      /******/
    }();
    /******/

    /******/

    /* webpack/runtime/startup chunk dependencies */

    /******/

    !function () {
      /******/
      var next = __webpack_require__.x;
      /******/

      __webpack_require__.x = function () {
        /******/
        return __webpack_require__.e("default-node_modules_donmahallem_sudoku_dist_esm_index_js").then(next);
        /******/
      };
      /******/

    }();
    /******/

    /************************************************************************/

    /******/

    /******/
    // run startup

    /******/

    var __webpack_exports__ = __webpack_require__.x();
    /******/

    /******/

  })();
})();
//# sourceMappingURL=solveSudokuWorker-es5.js.map