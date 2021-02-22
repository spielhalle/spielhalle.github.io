(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  /******/
  (function (modules) {
    // webpackBootstrap

    /******/
    // The module cache

    /******/
    var installedModules = {};
    /******/

    /******/
    // The require function

    /******/

    function __webpack_require__(moduleId) {
      /******/

      /******/
      // Check if module is in cache

      /******/
      if (installedModules[moduleId]) {
        /******/
        return installedModules[moduleId].exports;
        /******/
      }
      /******/
      // Create a new module (and put it into the cache)

      /******/


      var module = installedModules[moduleId] = {
        /******/
        i: moduleId,

        /******/
        l: false,

        /******/
        exports: {}
        /******/

      };
      /******/

      /******/
      // Execute the module function

      /******/

      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /******/

      /******/
      // Flag the module as loaded

      /******/

      module.l = true;
      /******/

      /******/
      // Return the exports of the module

      /******/

      return module.exports;
      /******/
    }
    /******/

    /******/

    /******/
    // expose the modules object (__webpack_modules__)

    /******/


    __webpack_require__.m = modules;
    /******/

    /******/
    // expose the module cache

    /******/

    __webpack_require__.c = installedModules;
    /******/

    /******/
    // define getter function for harmony exports

    /******/

    __webpack_require__.d = function (exports, name, getter) {
      /******/
      if (!__webpack_require__.o(exports, name)) {
        /******/
        Object.defineProperty(exports, name, {
          enumerable: true,
          get: getter
        });
        /******/
      }
      /******/

    };
    /******/

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

    /******/
    // create a fake namespace object

    /******/
    // mode & 1: value is a module id, require it

    /******/
    // mode & 2: merge all properties of value into the ns

    /******/
    // mode & 4: return value when already ns object

    /******/
    // mode & 8|1: behave like require

    /******/


    __webpack_require__.t = function (value, mode) {
      /******/
      if (mode & 1) value = __webpack_require__(value);
      /******/

      if (mode & 8) return value;
      /******/

      if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
      /******/

      var ns = Object.create(null);
      /******/

      __webpack_require__.r(ns);
      /******/


      Object.defineProperty(ns, 'default', {
        enumerable: true,
        value: value
      });
      /******/

      if (mode & 2 && typeof value != 'string') for (var key in value) {
        __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
      }
      /******/

      return ns;
      /******/
    };
    /******/

    /******/
    // getDefaultExport function for compatibility with non-harmony modules

    /******/


    __webpack_require__.n = function (module) {
      /******/
      var getter = module && module.__esModule ?
      /******/
      function getDefault() {
        return module['default'];
      } :
      /******/
      function getModuleExports() {
        return module;
      };
      /******/

      __webpack_require__.d(getter, 'a', getter);
      /******/


      return getter;
      /******/
    };
    /******/

    /******/
    // Object.prototype.hasOwnProperty.call

    /******/


    __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/

    /******/
    // __webpack_public_path__

    /******/


    __webpack_require__.p = "";
    /******/

    /******/

    /******/
    // Load entry module and return exports

    /******/

    return __webpack_require__(__webpack_require__.s = "ZwK9");
    /******/
  })(
  /************************************************************************/

  /******/
  {
    /***/
    "7H2C":
    /*!************************************************************!*\
      !*** ./node_modules/@donmahallem/sudoku/dist/esm/index.js ***!
      \************************************************************/

    /*! exports provided: backtrackSolve, createEmptySudokuBoard, createSudokuBoard, knuthSolve, knuthSolveNum */

    /***/
    function H2C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "backtrackSolve", function () {
        return solve;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createEmptySudokuBoard", function () {
        return createEmptySudokuBoard;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createSudokuBoard", function () {
        return createSudokuBoard;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "knuthSolve", function () {
        return solve$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "knuthSolveNum", function () {
        return solveNum;
      });
      /**!
       * Source https://github.com/donmahallem/js-libs Package: sudoku
       */


      var COVER_START_IDX = 1;
      var BOARD_START_IDX = 0;
      var CONSTRAINTS = 4;
      var EMPTY_CELL = 0;
      var CELL_VALUE_MIN = 1;
      /**!
       * Source https://github.com/donmahallem/js-libs Package: sudoku
       */

      var checkConstraint = function checkConstraint(board, row, constraint, column) {
        if (board[row][column] !== EMPTY_CELL) {
          if (!constraint[board[row][column] - 1]) {
            constraint[board[row][column] - 1] = true;
          } else {
            return false;
          }
        }

        return true;
      };
      /**!
       * Source https://github.com/donmahallem/js-libs Package: sudoku
       */


      var checkBoxConstraint = function checkBoxConstraint(board, row, column, boardSize, boxSize) {
        var constraint = new Array(boardSize).fill(false);
        var subsectionRowStart = Math.floor(row / boxSize) * boxSize;
        var subsectionRowEnd = subsectionRowStart + boxSize;
        var subsectionColumnStart = Math.floor(column / boxSize) * boxSize;
        var subsectionColumnEnd = subsectionColumnStart + boxSize;

        for (var r = subsectionRowStart; r < subsectionRowEnd; r++) {
          for (var c = subsectionColumnStart; c < subsectionColumnEnd; c++) {
            if (!checkConstraint(board, r, constraint, c)) return false;
          }
        }

        return true;
      };
      /**!
       * Source https://github.com/donmahallem/js-libs Package: sudoku
       */


      var checkColumnConstraint = function checkColumnConstraint(board, column, boardSize) {
        var constraint = new Array(boardSize).fill(false);

        for (var row = BOARD_START_IDX; row < boardSize; row++) {
          if (!checkConstraint(board, row, constraint, column)) {
            return false;
          }
        }

        return true;
      };
      /**!
       * Source https://github.com/donmahallem/js-libs Package: sudoku
       */


      var checkRowConstraint = function checkRowConstraint(board, row, boardSize) {
        var constraint = new Array(boardSize).fill(false);

        for (var column = BOARD_START_IDX; column < boardSize; column++) {
          if (!checkConstraint(board, row, constraint, column)) {
            return false;
          }
        }

        return true;
      };
      /**!
       * Source https://github.com/donmahallem/js-libs Package: sudoku
       */


      var isValid = function isValid(board, row, column, boardSize, boxSize) {
        return checkRowConstraint(board, row, boardSize) && checkColumnConstraint(board, column, boardSize) && checkBoxConstraint(board, row, column, boardSize, boxSize);
      };
      /**!
       * Source https://github.com/donmahallem/js-libs Package: sudoku
       */


      var solve = function solve(board, boardSize, boxSize) {
        for (var row = BOARD_START_IDX; row < boardSize; row++) {
          for (var column = BOARD_START_IDX; column < boardSize; column++) {
            if (board[row][column] === EMPTY_CELL) {
              for (var k = CELL_VALUE_MIN; k <= boardSize; k++) {
                board[row][column] = k;

                if (isValid(board, row, column, boardSize, boxSize) && solve(board, boardSize, boxSize)) {
                  return true;
                }

                board[row][column] = EMPTY_CELL;
              }

              return false;
            }
          }
        }

        return true;
      };
      /**!
       * Source https://github.com/donmahallem/js-libs Package: sudoku
       */


      var createEmptySudokuBoard = function createEmptySudokuBoard(boardSize) {
        return new Array(boardSize).fill(0).map(function () {
          return new Array(boardSize).fill(EMPTY_CELL);
        });
      };
      /**!
       * Source https://github.com/donmahallem/js-libs Package: sudoku
       */
      // tslint:disable:max-classes-per-file


      var DancingNode = /*#__PURE__*/function () {
        function DancingNode(columnNode) {
          _classCallCheck(this, DancingNode);

          this.left = this;
          this.right = this;
          this.top = this;
          this.bottom = this;
          this.column = columnNode;
        }

        _createClass(DancingNode, [{
          key: "linkDown",
          value: function linkDown(node) {
            node.bottom = this.bottom;
            node.bottom.top = node;
            node.top = this;
            this.bottom = node;
            return node;
          }
        }, {
          key: "linkRight",
          value: function linkRight(node) {
            node.right = this.right;
            node.right.left = node;
            node.left = this;
            this.right = node;
            return node;
          }
        }, {
          key: "removeLeftRight",
          value: function removeLeftRight() {
            this.left.right = this.right;
            this.right.left = this.left;
          }
        }, {
          key: "reinsertLeftRight",
          value: function reinsertLeftRight() {
            this.left.right = this;
            this.right.left = this;
          }
        }, {
          key: "removeTopBottom",
          value: function removeTopBottom() {
            this.top.bottom = this.bottom;
            this.bottom.top = this.top;
          }
        }, {
          key: "reinsertTopBottom",
          value: function reinsertTopBottom() {
            this.top.bottom = this;
            this.bottom.top = this;
          }
        }]);

        return DancingNode;
      }();

      var ColumnNode = /*#__PURE__*/function (_DancingNode) {
        _inherits(ColumnNode, _DancingNode);

        var _super = _createSuper(ColumnNode);

        function ColumnNode(name) {
          var _this;

          _classCallCheck(this, ColumnNode);

          _this = _super.call(this);
          _this.name = name;
          _this.size = 0;
          _this.column = _assertThisInitialized(_this);
          return _this;
        }

        _createClass(ColumnNode, [{
          key: "cover",
          value: function cover() {
            this.removeLeftRight();

            for (var i = this.bottom; i !== this; i = i.bottom) {
              for (var j = i.right; j !== i; j = j.right) {
                j.removeTopBottom();
                j.column.size--;
              }
            }
          }
        }, {
          key: "uncover",
          value: function uncover() {
            for (var i = this.top; i !== this; i = i.top) {
              for (var j = i.left; j !== i; j = j.left) {
                j.column.size++;
                j.reinsertTopBottom();
              }
            }

            this.reinsertLeftRight();
          }
        }]);

        return ColumnNode;
      }(DancingNode);
      /**!
       * Source https://github.com/donmahallem/js-libs Package: sudoku
       */


      var DLX = /*#__PURE__*/function () {
        function DLX(cover, boardSize) {
          _classCallCheck(this, DLX);

          this.boardSize = boardSize;
          this.isDone = false;
          this.header = this.createDLXList(cover);
        }

        _createClass(DLX, [{
          key: "createDLXList",
          value: function createDLXList(grid) {
            var nbColumns = grid[0].length;
            var headerNode = new ColumnNode('header');
            var columnNodes = [];

            for (var i = 0; i < nbColumns; i++) {
              var n = new ColumnNode("".concat(i));
              columnNodes.push(n);
              headerNode = headerNode.linkRight(n);
            }

            headerNode = headerNode.right.column;

            var _iterator = _createForOfIteratorHelper(grid),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var aGrid = _step.value;
                var prev = undefined;

                for (var j = 0; j < nbColumns; j++) {
                  if (aGrid[j]) {
                    var col = columnNodes[j];
                    var newNode = new DancingNode(col); // tslint:disable-next-line:triple-equals

                    if (prev == undefined) {
                      prev = newNode;
                    }

                    col.top.linkDown(newNode);
                    prev = prev.linkRight(newNode);
                    col.size++;
                  }
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            headerNode.size = nbColumns;
            return headerNode;
          }
        }, {
          key: "selectColumnNodeHeuristic",
          value: function selectColumnNodeHeuristic() {
            var min = Number.MAX_VALUE; // tslint:disable-next-line:no-unnecessary-initializer

            var ret = undefined;

            for (var c = this.header.right; c !== this.header; c = c.right) {
              if (c.size < min) {
                min = c.size;
                ret = c;
              }
            }

            return ret;
          }
        }, {
          key: "handleSolution",
          value: function handleSolution(anser) {
            var field = this.parseSolution(anser);
            this.isDone = this.resultCallback(field);
          }
        }, {
          key: "parseSolution",
          value: function parseSolution(answer) {
            var result = createEmptySudokuBoard(this.boardSize);

            var _iterator2 = _createForOfIteratorHelper(answer),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var n = _step2.value;
                var rcNode = n;
                var min = parseInt(rcNode.column.name, 10);

                for (var tmp = n.right; tmp !== n; tmp = tmp.right) {
                  var val = parseInt(tmp.column.name, 10);

                  if (val < min) {
                    min = val;
                    rcNode = tmp;
                  }
                }

                var ans1 = parseInt(rcNode.column.name, 10);
                var ans2 = parseInt(rcNode.right.column.name, 10);
                var r = Math.floor(ans1 / this.boardSize);
                var c = ans1 % this.boardSize;
                var num = ans2 % this.boardSize + 1;
                result[r][c] = num;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return result;
          }
        }, {
          key: "search",
          value: function search(k) {
            if (this.isDone) {
              return;
            }

            if (this.header.right === this.header) {
              this.handleSolution(this.answer);
            } else {
              var c = this.selectColumnNodeHeuristic();
              c.cover();

              for (var r = c.bottom; r !== c; r = r.bottom) {
                this.answer.push(r);

                for (var j = r.right; j !== r; j = j.right) {
                  j.column.cover();
                }

                this.search(k + 1);
                r = this.answer.splice(this.answer.length - 1, 1)[0];
                c = r.column;

                for (var _j = r.left; _j !== r; _j = _j.left) {
                  _j.column.uncover();
                }
              }

              c.uncover();
            }
          }
        }, {
          key: "runSolver",
          value: function runSolver(cb) {
            this.answer = [];
            this.isDone = false;
            this.resultCallback = cb;
            this.search(0);
          }
        }]);

        return DLX;
      }();
      /**!
       * Source https://github.com/donmahallem/js-libs Package: sudoku
       */


      var getIndex = function getIndex(row, column, num, boardSize) {
        return (row - 1) * boardSize * boardSize + (column - 1) * boardSize + (num - 1);
      };
      /**!
       * Source https://github.com/donmahallem/js-libs Package: sudoku
       */


      var createBoxConstraints = function createBoxConstraints(matrix, header, boardSize, boxSize) {
        var headerIter = header;

        for (var row = COVER_START_IDX; row <= boardSize; row += boxSize) {
          for (var column = COVER_START_IDX; column <= boardSize; column += boxSize) {
            for (var n = COVER_START_IDX; n <= boardSize; n++, headerIter++) {
              for (var rowDelta = 0; rowDelta < boxSize; rowDelta++) {
                for (var columnDelta = 0; columnDelta < boxSize; columnDelta++) {
                  var index = getIndex(row + rowDelta, column + columnDelta, n, boardSize);
                  matrix[index][headerIter] = true;
                }
              }
            }
          }
        }

        return headerIter;
      };
      /**!
       * Source https://github.com/donmahallem/js-libs Package: sudoku
       */


      var createCellConstraints = function createCellConstraints(matrix, header, boardSize) {
        var headerIter = header;

        for (var row = COVER_START_IDX; row <= boardSize; row++) {
          for (var column = COVER_START_IDX; column <= boardSize; column++, headerIter++) {
            for (var n = COVER_START_IDX; n <= boardSize; n++) {
              var index = getIndex(row, column, n, boardSize); // console.log(index, _header, matrix.length);

              matrix[index][headerIter] = true;
            }
          }
        }

        return headerIter;
      };
      /**!
       * Source https://github.com/donmahallem/js-libs Package: sudoku
       */


      var createColumnConstraints = function createColumnConstraints(matrix, header, boardSize) {
        var iterHeader = header;

        for (var column = COVER_START_IDX; column <= boardSize; column++) {
          for (var n = COVER_START_IDX; n <= boardSize; n++, iterHeader++) {
            for (var row = COVER_START_IDX; row <= boardSize; row++) {
              var index = getIndex(row, column, n, boardSize);
              matrix[index][iterHeader] = true;
            }
          }
        }

        return iterHeader;
      };
      /**!
       * Source https://github.com/donmahallem/js-libs Package: sudoku
       */


      var createRowConstraints = function createRowConstraints(coverBoard, hBase, boardSize) {
        var headerIter = hBase;

        for (var row = COVER_START_IDX; row <= boardSize; row++) {
          for (var n = COVER_START_IDX; n <= boardSize; n++, headerIter++) {
            for (var column = COVER_START_IDX; column <= boardSize; column++) {
              var index = getIndex(row, column, n, boardSize);
              coverBoard[index][headerIter] = true;
            }
          }
        }

        return headerIter;
      };
      /**!
       * Source https://github.com/donmahallem/js-libs Package: sudoku
       */


      var createCoverMatrix = function createCoverMatrix(boardSize, boxSize) {
        var coverMatrix = new Array(boardSize * boardSize * boardSize).fill([]).map(function () {
          return new Array(boardSize * boardSize * CONSTRAINTS).fill(false);
        });
        var header = 0;
        header = createCellConstraints(coverMatrix, header, boardSize);
        header = createRowConstraints(coverMatrix, header, boardSize);
        header = createColumnConstraints(coverMatrix, header, boardSize);
        createBoxConstraints(coverMatrix, header, boardSize, boxSize);
        return coverMatrix;
      };
      /**!
       * Source https://github.com/donmahallem/js-libs Package: sudoku
       */


      var initializeExactCoverBoard = function initializeExactCoverBoard(board, boardSize, boxSize) {
        var coverBoard = createCoverMatrix(boardSize, boxSize);

        for (var row = COVER_START_IDX; row <= boardSize; row++) {
          for (var column = COVER_START_IDX; column <= boardSize; column++) {
            var n = board[row - 1][column - 1];

            if (n !== EMPTY_CELL) {
              for (var num = CELL_VALUE_MIN; num <= boardSize; num++) {
                if (num !== n) {
                  coverBoard[getIndex(row, column, num, boardSize)].fill(false);
                }
              }
            }
          }
        }

        return coverBoard;
      };
      /**!
       * Source https://github.com/donmahallem/js-libs Package: sudoku
       */


      var solve$1 = function solve$1(board, boardSize, boxSize, cb) {
        var cover = initializeExactCoverBoard(board, boardSize, boxSize);
        var dlx = new DLX(cover, boardSize);
        dlx.runSolver(cb);
      };

      var solveNum = function solveNum(board, boardSize, boxSize, num) {
        var results = [];
        solve$1(board, boardSize, boxSize, function (result) {
          results.push(result);
          return results.length >= num;
        });
        return results;
      };
      /**!
       * Source https://github.com/donmahallem/js-libs Package: sudoku
       */


      var indexMap = {};

      var getIndexMap = function getIndexMap(boardSize) {
        if (!(boardSize in indexMap)) {
          indexMap[boardSize] = new Array(Math.pow(boardSize, 2)).fill(0).map(function (val, idx) {
            return idx;
          });
        }

        return indexMap[boardSize];
      };

      var createSudokuBoard = function createSudokuBoard(boardSize, retainPercentage) {
        var board = createEmptySudokuBoard(boardSize);
        var boxSize = Math.sqrt(boardSize);
        var randomNumbers = new Array(boardSize).fill(0).map(function (val, idx) {
          return idx + 1;
        }).sort(function () {
          return Math.random() - 0.5;
        });

        for (var i = 0; i < boardSize; i++) {
          board[i][Math.floor(Math.random() * boardSize)] = randomNumbers[i];
        }

        var selectBoard = solveNum(board, boardSize, boxSize, 1)[0];
        var removeIndexes = getIndexMap(boardSize).sort(function () {
          return Math.random() - 0.5;
        });

        for (var _i = 0; _i <= Math.floor(removeIndexes.length * retainPercentage); _i++) {
          var removeX = removeIndexes[_i] % boardSize;
          var removeY = Math.floor(removeIndexes[_i] / boardSize);
          selectBoard[removeX][removeY] = 0;
        }

        return selectBoard;
      }; // BUILD: Mon Feb 22 2021 13:33:42 GMT+0100 (Central European Standard Time)
      //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "ZwK9":
    /*!*******************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ref--7-0!./node_modules/@ngtools/webpack/src/ivy!./src/app/routes/sudoku/services/sudoku-solver.worker.ts ***!
      \*******************************************************************************************************************************************************************************************/

    /*! no exports provided */

    /***/
    function ZwK9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _donmahallem_sudoku__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @donmahallem/sudoku */
      "7H2C");
      /*!
       * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
       */
      /// <reference lib="webworker" />


      addEventListener('message', function (evt) {
        var results = Object(_donmahallem_sudoku__WEBPACK_IMPORTED_MODULE_0__["knuthSolveNum"])(evt.data, 9, 3, 10);
        self.postMessage(results);
      });
      /***/
    }
    /******/

  });
})();
//# sourceMappingURL=solveSudokuWorker-es5.worker.js.map