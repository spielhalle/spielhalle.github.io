/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "ZPDc");
/******/ })
/************************************************************************/
/******/ ({

/***/ "7H2C":
/*!************************************************************!*\
  !*** ./node_modules/@donmahallem/sudoku/dist/esm/index.js ***!
  \************************************************************/
/*! exports provided: backtrackSolve, createEmptySudokuBoard, createSudokuBoard, knuthSolve, knuthSolveNum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backtrackSolve", function() { return solve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmptySudokuBoard", function() { return createEmptySudokuBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSudokuBoard", function() { return createSudokuBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "knuthSolve", function() { return solve$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "knuthSolveNum", function() { return solveNum; });
/**!
 * Source https://github.com/donmahallem/js-libs Package: sudoku
 */
const COVER_START_IDX = 1;
const BOARD_START_IDX = 0;
const CONSTRAINTS = 4;
const EMPTY_CELL = 0;
const CELL_VALUE_MIN = 1;

/**!
 * Source https://github.com/donmahallem/js-libs Package: sudoku
 */
const checkConstraint = (board, row, constraint, column) => {
    if (board[row][column] !== EMPTY_CELL) {
        if (!constraint[board[row][column] - 1]) {
            constraint[board[row][column] - 1] = true;
        }
        else {
            return false;
        }
    }
    return true;
};

/**!
 * Source https://github.com/donmahallem/js-libs Package: sudoku
 */
const checkBoxConstraint = (board, row, column, boardSize, boxSize) => {
    const constraint = new Array(boardSize).fill(false);
    const subsectionRowStart = Math.floor(row / boxSize) * boxSize;
    const subsectionRowEnd = subsectionRowStart + boxSize;
    const subsectionColumnStart = Math.floor(column / boxSize) * boxSize;
    const subsectionColumnEnd = subsectionColumnStart + boxSize;
    for (let r = subsectionRowStart; r < subsectionRowEnd; r++) {
        for (let c = subsectionColumnStart; c < subsectionColumnEnd; c++) {
            if (!checkConstraint(board, r, constraint, c))
                return false;
        }
    }
    return true;
};

/**!
 * Source https://github.com/donmahallem/js-libs Package: sudoku
 */
const checkColumnConstraint = (board, column, boardSize) => {
    const constraint = new Array(boardSize).fill(false);
    for (let row = BOARD_START_IDX; row < boardSize; row++) {
        if (!checkConstraint(board, row, constraint, column)) {
            return false;
        }
    }
    return true;
};

/**!
 * Source https://github.com/donmahallem/js-libs Package: sudoku
 */
const checkRowConstraint = (board, row, boardSize) => {
    const constraint = new Array(boardSize).fill(false);
    for (let column = BOARD_START_IDX; column < boardSize; column++) {
        if (!checkConstraint(board, row, constraint, column)) {
            return false;
        }
    }
    return true;
};

/**!
 * Source https://github.com/donmahallem/js-libs Package: sudoku
 */
const isValid = (board, row, column, boardSize, boxSize) => {
    return checkRowConstraint(board, row, boardSize) &&
        checkColumnConstraint(board, column, boardSize) &&
        checkBoxConstraint(board, row, column, boardSize, boxSize);
};

/**!
 * Source https://github.com/donmahallem/js-libs Package: sudoku
 */
const solve = (board, boardSize, boxSize) => {
    for (let row = BOARD_START_IDX; row < boardSize; row++) {
        for (let column = BOARD_START_IDX; column < boardSize; column++) {
            if (board[row][column] === EMPTY_CELL) {
                for (let k = CELL_VALUE_MIN; k <= boardSize; k++) {
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
const createEmptySudokuBoard = (boardSize) => {
    return new Array(boardSize)
        .fill(0)
        .map(() => new Array(boardSize).fill(EMPTY_CELL));
};

/**!
 * Source https://github.com/donmahallem/js-libs Package: sudoku
 */
// tslint:disable:max-classes-per-file
class DancingNode {
    constructor(columnNode) {
        this.left = this;
        this.right = this;
        this.top = this;
        this.bottom = this;
        this.column = columnNode;
    }
    linkDown(node) {
        node.bottom = this.bottom;
        node.bottom.top = node;
        node.top = this;
        this.bottom = node;
        return node;
    }
    linkRight(node) {
        node.right = this.right;
        node.right.left = node;
        node.left = this;
        this.right = node;
        return node;
    }
    removeLeftRight() {
        this.left.right = this.right;
        this.right.left = this.left;
    }
    reinsertLeftRight() {
        this.left.right = this;
        this.right.left = this;
    }
    removeTopBottom() {
        this.top.bottom = this.bottom;
        this.bottom.top = this.top;
    }
    reinsertTopBottom() {
        this.top.bottom = this;
        this.bottom.top = this;
    }
}
class ColumnNode extends DancingNode {
    constructor(name) {
        super();
        this.name = name;
        this.size = 0;
        this.column = this;
    }
    cover() {
        this.removeLeftRight();
        for (let i = this.bottom; i !== this; i = i.bottom) {
            for (let j = i.right; j !== i; j = j.right) {
                j.removeTopBottom();
                j.column.size--;
            }
        }
    }
    uncover() {
        for (let i = this.top; i !== this; i = i.top) {
            for (let j = i.left; j !== i; j = j.left) {
                j.column.size++;
                j.reinsertTopBottom();
            }
        }
        this.reinsertLeftRight();
    }
}

/**!
 * Source https://github.com/donmahallem/js-libs Package: sudoku
 */
class DLX {
    constructor(cover, boardSize) {
        this.boardSize = boardSize;
        this.isDone = false;
        this.header = this.createDLXList(cover);
    }
    createDLXList(grid) {
        const nbColumns = grid[0].length;
        let headerNode = new ColumnNode('header');
        const columnNodes = [];
        for (let i = 0; i < nbColumns; i++) {
            const n = new ColumnNode(`${i}`);
            columnNodes.push(n);
            headerNode = headerNode.linkRight(n);
        }
        headerNode = headerNode.right.column;
        for (const aGrid of grid) {
            let prev = undefined;
            for (let j = 0; j < nbColumns; j++) {
                if (aGrid[j]) {
                    const col = columnNodes[j];
                    const newNode = new DancingNode(col);
                    // tslint:disable-next-line:triple-equals
                    if (prev == undefined) {
                        prev = newNode;
                    }
                    col.top.linkDown(newNode);
                    prev = prev.linkRight(newNode);
                    col.size++;
                }
            }
        }
        headerNode.size = nbColumns;
        return headerNode;
    }
    selectColumnNodeHeuristic() {
        let min = Number.MAX_VALUE;
        // tslint:disable-next-line:no-unnecessary-initializer
        let ret = undefined;
        for (let c = this.header.right; c !== this.header; c = c.right) {
            if (c.size < min) {
                min = c.size;
                ret = c;
            }
        }
        return ret;
    }
    handleSolution(anser) {
        const field = this.parseSolution(anser);
        this.isDone = this.resultCallback(field);
    }
    parseSolution(answer) {
        const result = createEmptySudokuBoard(this.boardSize);
        for (const n of answer) {
            let rcNode = n;
            let min = parseInt(rcNode.column.name, 10);
            for (let tmp = n.right; tmp !== n; tmp = tmp.right) {
                const val = parseInt(tmp.column.name, 10);
                if (val < min) {
                    min = val;
                    rcNode = tmp;
                }
            }
            const ans1 = parseInt(rcNode.column.name, 10);
            const ans2 = parseInt(rcNode.right.column.name, 10);
            const r = Math.floor(ans1 / this.boardSize);
            const c = ans1 % this.boardSize;
            const num = (ans2 % this.boardSize) + 1;
            result[r][c] = num;
        }
        return result;
    }
    search(k) {
        if (this.isDone) {
            return;
        }
        if (this.header.right === this.header) {
            this.handleSolution(this.answer);
        }
        else {
            let c = this.selectColumnNodeHeuristic();
            c.cover();
            for (let r = c.bottom; r !== c; r = r.bottom) {
                this.answer.push(r);
                for (let j = r.right; j !== r; j = j.right) {
                    j.column.cover();
                }
                this.search(k + 1);
                r = this.answer.splice(this.answer.length - 1, 1)[0];
                c = r.column;
                for (let j = r.left; j !== r; j = j.left) {
                    j.column.uncover();
                }
            }
            c.uncover();
        }
    }
    runSolver(cb) {
        this.answer = [];
        this.isDone = false;
        this.resultCallback = cb;
        this.search(0);
    }
}

/**!
 * Source https://github.com/donmahallem/js-libs Package: sudoku
 */
const getIndex = (row, column, num, boardSize) => {
    return (row - 1) * boardSize * boardSize + (column - 1) * boardSize + (num - 1);
};

/**!
 * Source https://github.com/donmahallem/js-libs Package: sudoku
 */
const createBoxConstraints = (matrix, header, boardSize, boxSize) => {
    let headerIter = header;
    for (let row = COVER_START_IDX; row <= boardSize; row += boxSize) {
        for (let column = COVER_START_IDX; column <= boardSize; column += boxSize) {
            for (let n = COVER_START_IDX; n <= boardSize; n++, headerIter++) {
                for (let rowDelta = 0; rowDelta < boxSize; rowDelta++) {
                    for (let columnDelta = 0; columnDelta < boxSize; columnDelta++) {
                        const index = getIndex(row + rowDelta, column + columnDelta, n, boardSize);
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
const createCellConstraints = (matrix, header, boardSize) => {
    let headerIter = header;
    for (let row = COVER_START_IDX; row <= boardSize; row++) {
        for (let column = COVER_START_IDX; column <= boardSize; column++, headerIter++) {
            for (let n = COVER_START_IDX; n <= boardSize; n++) {
                const index = getIndex(row, column, n, boardSize);
                // console.log(index, _header, matrix.length);
                matrix[index][headerIter] = true;
            }
        }
    }
    return headerIter;
};

/**!
 * Source https://github.com/donmahallem/js-libs Package: sudoku
 */
const createColumnConstraints = (matrix, header, boardSize) => {
    let iterHeader = header;
    for (let column = COVER_START_IDX; column <= boardSize; column++) {
        for (let n = COVER_START_IDX; n <= boardSize; n++, iterHeader++) {
            for (let row = COVER_START_IDX; row <= boardSize; row++) {
                const index = getIndex(row, column, n, boardSize);
                matrix[index][iterHeader] = true;
            }
        }
    }
    return iterHeader;
};

/**!
 * Source https://github.com/donmahallem/js-libs Package: sudoku
 */
const createRowConstraints = (coverBoard, hBase, boardSize) => {
    let headerIter = hBase;
    for (let row = COVER_START_IDX; row <= boardSize; row++) {
        for (let n = COVER_START_IDX; n <= boardSize; n++, headerIter++) {
            for (let column = COVER_START_IDX; column <= boardSize; column++) {
                const index = getIndex(row, column, n, boardSize);
                coverBoard[index][headerIter] = true;
            }
        }
    }
    return headerIter;
};

/**!
 * Source https://github.com/donmahallem/js-libs Package: sudoku
 */
const createCoverMatrix = (boardSize, boxSize) => {
    const coverMatrix = new Array(boardSize * boardSize * boardSize)
        .fill([])
        .map(() => new Array(boardSize * boardSize * CONSTRAINTS).fill(false));
    let header = 0;
    header = createCellConstraints(coverMatrix, header, boardSize);
    header = createRowConstraints(coverMatrix, header, boardSize);
    header = createColumnConstraints(coverMatrix, header, boardSize);
    createBoxConstraints(coverMatrix, header, boardSize, boxSize);
    return coverMatrix;
};

/**!
 * Source https://github.com/donmahallem/js-libs Package: sudoku
 */
const initializeExactCoverBoard = (board, boardSize, boxSize) => {
    const coverBoard = createCoverMatrix(boardSize, boxSize);
    for (let row = COVER_START_IDX; row <= boardSize; row++) {
        for (let column = COVER_START_IDX; column <= boardSize; column++) {
            const n = board[row - 1][column - 1];
            if (n !== EMPTY_CELL) {
                for (let num = CELL_VALUE_MIN; num <= boardSize; num++) {
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
const solve$1 = (board, boardSize, boxSize, cb) => {
    const cover = initializeExactCoverBoard(board, boardSize, boxSize);
    const dlx = new DLX(cover, boardSize);
    dlx.runSolver(cb);
};
const solveNum = (board, boardSize, boxSize, num) => {
    const results = [];
    solve$1(board, boardSize, boxSize, (result) => {
        results.push(result);
        return results.length >= num;
    });
    return results;
};

/**!
 * Source https://github.com/donmahallem/js-libs Package: sudoku
 */
const indexMap = {};
const getIndexMap = (boardSize) => {
    if (!(boardSize in indexMap)) {
        indexMap[boardSize] = new Array(boardSize ** 2).fill(0).map((val, idx) => idx);
    }
    return indexMap[boardSize];
};
const createSudokuBoard = (boardSize, retainPercentage) => {
    const board = createEmptySudokuBoard(boardSize);
    const boxSize = Math.sqrt(boardSize);
    const randomNumbers = new Array(boardSize).fill(0).map((val, idx) => idx + 1)
        .sort(() => Math.random() - 0.5);
    for (let i = 0; i < boardSize; i++) {
        board[i][Math.floor(Math.random() * boardSize)] = randomNumbers[i];
    }
    const selectBoard = solveNum(board, boardSize, boxSize, 1)[0];
    const removeIndexes = getIndexMap(boardSize)
        .sort(() => Math.random() - 0.5);
    for (let i = 0; i <= Math.floor(removeIndexes.length * retainPercentage); i++) {
        const removeX = removeIndexes[i] % boardSize;
        const removeY = Math.floor(removeIndexes[i] / boardSize);
        selectBoard[removeX][removeY] = 0;
    }
    return selectBoard;
};


// BUILD: Tue Feb 23 2021 09:46:03 GMT+0000 (Coordinated Universal Time)

//# sourceMappingURL=index.js.map


/***/ }),

/***/ "MdJQ":
/*!**********************************************************************************************!*\
  !*** ./src/app/routes/sudoku/modules/sudoku-benchmark/component/sudoku-benchmark-message.ts ***!
  \**********************************************************************************************/
/*! exports provided: SudokuBenchmarkMessageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SudokuBenchmarkMessageType", function() { return SudokuBenchmarkMessageType; });
/*!
 * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
 */
var SudokuBenchmarkMessageType;
(function (SudokuBenchmarkMessageType) {
    SudokuBenchmarkMessageType[SudokuBenchmarkMessageType["STARTING"] = 0] = "STARTING";
    SudokuBenchmarkMessageType[SudokuBenchmarkMessageType["RESULT"] = 1] = "RESULT";
    SudokuBenchmarkMessageType[SudokuBenchmarkMessageType["PROGRESS"] = 2] = "PROGRESS";
})(SudokuBenchmarkMessageType || (SudokuBenchmarkMessageType = {}));


/***/ }),

/***/ "ZPDc":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ref--7-0!./node_modules/@ngtools/webpack/src/ivy!./src/app/routes/sudoku/modules/sudoku-benchmark/component/sudoku-benchmark.worker.ts ***!
  \************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _donmahallem_sudoku__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @donmahallem/sudoku */ "7H2C");
/* harmony import */ var _sudoku_benchmark_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sudoku-benchmark-message */ "MdJQ");
/*!
 * Source https://github.com/spielhalle/spielhalle Package: @spielhalle/client
 */
/// <reference lib='webworker' />


const reportStatus = (status) => {
    self.postMessage(status);
};
addEventListener('message', (evt) => {
    const size = evt.data || 9;
    reportStatus({
        boardSize: size,
        type: _sudoku_benchmark_message__WEBPACK_IMPORTED_MODULE_1__["SudokuBenchmarkMessageType"].STARTING,
    });
    const startTime = Date.now();
    let results = 0;
    let lastResult = 0;
    Object(_donmahallem_sudoku__WEBPACK_IMPORTED_MODULE_0__["knuthSolve"])(new Array(size)
        .fill(0)
        .map(() => new Array(size).fill(0)), size, Math.sqrt(size), (board) => {
        results += 1;
        const tDelta = Date.now() - startTime;
        if (tDelta - lastResult > 100 || results === 1) {
            lastResult = tDelta;
            reportStatus({
                board,
                boardSize: size,
                results,
                time: tDelta,
                type: _sudoku_benchmark_message__WEBPACK_IMPORTED_MODULE_1__["SudokuBenchmarkMessageType"].PROGRESS,
            });
        }
        return false;
    });
    const endTime = Date.now();
    reportStatus({
        boardSize: size,
        results,
        time: endTime - startTime,
        type: _sudoku_benchmark_message__WEBPACK_IMPORTED_MODULE_1__["SudokuBenchmarkMessageType"].RESULT,
    });
});


/***/ })

/******/ });
//# sourceMappingURL=benchmarkSudokuWorker-es2015.worker.js.map