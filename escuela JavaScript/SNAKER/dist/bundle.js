/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./square */ \"./src/square.js\");\n\nvar myCanvas = document.getElementById('myCanvas');\nvar contex = myCanvas.getContext('2d');\n/**\n* CONSTANTE PARA AGREGAR LA POSICION DE LA SERPIENTE\n*/\nvar SIZE = 20;\nvar headSnake = new _square__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0);\nvar bodySnake = [];\nvar dx = 0;\nvar dy = 0;\nvar lastAxis;\n\n//vamos a definir una variable food que va a cambiar su valor\n//la declaramos con let y un valor vacio que es igual a null\n//asignamos este valor en update ya que es ahi donde se carga los valores\nvar food = null;\nsetInterval(main, 1000); //1000 = 1s\n\nfunction main() {\n  update(); //me actualize las variables\n  draw(); //despues dibuja el objeto\n}\nfunction draw() {\n  //da el fondo \n  contex.fillStyle = 'black';\n  contex.fillRect(0, 0, myCanvas.width, myCanvas.height);\n  //dibuja la headSnake\n  drawObject(headSnake, 'white');\n  //darle color al body de la snake\n  bodySnake.forEach(function (elemento) {\n    return drawObject(elemento, 'white');\n  });\n  //dibuja la food\n  drawObject(food, 'red');\n}\nfunction drawObject(obje, color) {\n  contex.fillStyle = color;\n  contex.fillRect(obje.x, obje.y, SIZE, SIZE);\n}\nfunction update() {\n  var detectedCollision = checkSnakeCollision();\n  if (detectedCollision) {\n    gameOver();\n    return;\n  }\n  var prevX, prevY;\n  if (bodySnake.length >= 1) {\n    prevX = bodySnake[bodySnake.length - 1].x;\n    prevY = bodySnake[bodySnake.length - 1].y;\n  } else {\n    //guardar la posicion en una variable\n    prevX = headSnake.x;\n    prevY = headSnake.y;\n  }\n\n  //hagamos un for para que la posicion siga al cuadradp\n  for (var i = bodySnake.length - 1; i >= 1; --i) {\n    bodySnake[i].x = bodySnake[i - 1].x;\n    bodySnake[i].y = bodySnake[i - 1].y;\n  }\n  if (bodySnake.length >= 1) {\n    bodySnake[0].x = headSnake.x;\n    bodySnake[0].y = headSnake.y;\n  }\n\n  //actualizar las cordenadas de la serpiente\n  headSnake.desplazamiento(dx, dy);\n  //aqui tederminamos en que eje ha ocurrido el ultimo movimiento\n  if (dx !== 0) {\n    lastAxis = 'X';\n  } else if (dy !== 0) {\n    lastAxis = 'Y';\n  }\n\n  //detectar que la serpiente se topa con el alimento\n  if (food && headSnake.checkCollision(food)) {\n    //vuelve a valer null\n    food = null;\n    //aumentar el tamanño de la serpiente\n    increaseSnakeSize(prevX, prevY);\n  }\n\n  //hacemos una condicion afirmando que si es nulo el valor se le asigne uno\n  if (!food) {\n    food = ramdonFoodPosition();\n  }\n}\nfunction ramdonFoodPosition() {\n  var position;\n  do {\n    position = {\n      x: getRamdonX(),\n      y: getRamdonY()\n    };\n  } while (checkfoodCollision(position));\n  return position;\n}\nfunction getRamdonY() {\n  //el ancho del cuadrado canvas es de 460 y el tamaño del cuadro es de 20 se resta\n  // 460 y lo que hacemos es dividir 460 entre 20 = 22\n  //entonces tenemos que sacar un numero aleatorio entre 22 y multi.. por 20 \n  return 20 * parseInt(Math.random() * 23);\n}\nfunction getRamdonX() {\n  //el ancho del cuadrado canvas es de 400 y el tamaño del cuadro es de 20 se resta\n  // 400 y lo que hacemos es dividir 380 entre 20 = 19\n  //entonces tenemos que sacar un numero aleatorio entre 19 y multi.. por 20 \n  return 20 * parseInt(Math.random() * 20);\n}\nfunction increaseSnakeSize(prevX, prevY) {\n  bodySnake.push(new _square__WEBPACK_IMPORTED_MODULE_0__[\"default\"](prevX, prevY));\n}\ndocument.addEventListener('keydown', snakeMove);\nfunction snakeMove(event) {\n  switch (event.key) {\n    case 'ArrowUp':\n      //si dy ya obtine un valor al darle flecha arriba no se podra ir hacia abajo\n      if (lastAxis !== 'Y') {\n        dx = 0;\n        dy = -SIZE;\n      }\n      break;\n    case 'ArrowDown':\n      if (lastAxis !== 'Y') {\n        dx = 0;\n        dy = +SIZE;\n      }\n      break;\n    case 'ArrowRight':\n      if (lastAxis !== 'X') {\n        dx = +SIZE;\n        dy = 0;\n      }\n      break;\n    case 'ArrowLeft':\n      if (lastAxis !== 'X') {\n        dx = -SIZE;\n        dy = 0;\n      }\n      break;\n    default:\n      break;\n  }\n}\nfunction checkfoodCollision(position) {\n  //comparar las cordenadas del alimento generado con el cuerpo de la serpiente\n  for (var i = 0; i < bodySnake.length; ++i) {\n    if (bodySnake[i].checkCollision(position)) {\n      return true;\n    }\n  }\n  //comparar las cordenadas del alimento generadp con la cabeza de la serpiente\n  if (headSnake.checkCollision(position)) {\n    return true;\n  }\n  return false;\n\n  /**\n   *\n  //variables para determinar el final del campo de la snake\n  const topCollision = (headSnake.y < 0);\n  const bottomCollision = (headSnake.y > 440);\n  const rightCollision = (headSnake.x < 0 );\n  const leftCollision = (headSnake.x > 380)\n  \n  //verificar que la serpiente no se salga de los limites permitidos\n  if(topCollision || bottomCollision || rightCollision || leftCollision){\n      return true;\n  }    \n  return false;\n  */\n}\nfunction gameOver() {\n  alert('perdido');\n  headSnake.x = 0;\n  headSnake.y = 0;\n  dx = 0;\n  dy = 0;\n  //el snake.bodySnake es una constante entonces toca de cambiarla a let o hacer que la longitud se restaure a 0\n  bodySnake.length = 0;\n}\n\n//# sourceURL=webpack://snaker/./src/index.js?");

/***/ }),

/***/ "./src/square.js":
/*!***********************!*\
  !*** ./src/square.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Square)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Square = /*#__PURE__*/function () {\n  function Square(x, y) {\n    _classCallCheck(this, Square);\n    this.x = x;\n    this.y = y;\n  }\n  _createClass(Square, [{\n    key: \"draw\",\n    value: function draw() {}\n  }, {\n    key: \"desplazamiento\",\n    value: function desplazamiento(dx, dy) {\n      this.x += dx;\n      this.y += dy;\n    }\n  }, {\n    key: \"checkCollision\",\n    value: function checkCollision(objeto) {\n      return this.x == objeto.x && this.y == objeto.y;\n    }\n  }]);\n  return Square;\n}();\n\n\n//# sourceURL=webpack://snaker/./src/square.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;