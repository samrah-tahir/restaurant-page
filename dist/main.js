/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/firstLoad.js":
/*!**************************!*\
  !*** ./src/firstLoad.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "firstLoad": () => (/* binding */ firstLoad)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");


const firstLoad = function(){
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.navbar)();
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.home)();
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home),
/* harmony export */   "navbar": () => (/* binding */ navbar)
/* harmony export */ });
//Loads the home page for Drink House Cafe

/**
 * PURPOSE: Navbar secion of the First page
 */
const navbar = function (){
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const homeBtn = document.createElement('li');
    const menuBtn = document.createElement('li');
    const contactBtn = document.createElement('li');

    homeBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contact"

    homeBtn.classList.add('home');
    menuBtn.classList.add('menu');
    contactBtn.classList.add('contact');

    const body = document.querySelector('body');
    
    header.appendChild(nav);
    nav.appendChild(ul);
    ul.append(homeBtn, menuBtn, contactBtn);
    body.prepend(header);
    
}

const heading = function(){
    const headingContainer = document.createElement('div');
    const heading = document.createElement('h1');
    const logoImgContainer = document.createElement('div');
    const logoImg = document.createElement('img');
    // const description = document.createElement('div');

    headingContainer.classList.add('heading-container');
    logoImgContainer.classList.add('decoration', 'bubble-tea');

    heading.textContent = "DRINK HOUSE";
    logoImg.src = "../img/bubble-tea.png";

    logoImgContainer.appendChild(logoImg);
    headingContainer.append(heading, logoImgContainer);
    document.getElementById('content').appendChild(headingContainer);


}

const description = function(){
    const descriptionContainer = document.createElement('div');
    descriptionContainer.textContent = "Feelin' the heat? Come join us at the drink house! \
    Best place with the best ambiance and ofcourse the best \
    drinks duh! oh you don't like leaving your house? no worries call us at +971501234567."

    descriptionContainer.classList.add('description-outer');
    document.getElementById('content').appendChild(descriptionContainer);
}

const infoSection = function(){
    const infoContainer = document.createElement('div');
    const infoHeading = document.createElement('h3');
    const timings = {"Sunday": "8am - 8pm", "Monday": "6am - 6pm","Tuesday": "6am - 6pm",
                    "Wednesday": "6am - 6pm","Thursday": "6am - 10pm", "Friday": "6am - 10pm", 
                    "Saturday": "8am - 10pm"}
    
    infoContainer.classList.add('info-hours');
    infoHeading.textContent = "Hours"
    infoContainer.appendChild(infoHeading);

    for (let timing in timings){
        let day = document.createElement('p');
        day.textContent = `${timing}: ${timings[timing]}`;
        infoContainer.appendChild(day);
    }

    document.getElementById('content').appendChild(infoContainer);

}
/**
 * <div class="location">
        <h3>Location</h3>
        CandyLand, Unicornville, Cottoncandy
      </div>
 */
const locationSec = function(){
    const locationCont = document.createElement('div');
    const location = document.createElement('h3');
    
    location.textContent = "Location";
    locationCont.appendChild(location);
    locationCont.append("CandyLand, Unicornville, Cottoncandy");

    document.getElementById('content').appendChild(locationCont);
}

const home = function(){
    // navbar();
    heading();
    description();
    infoSection();
    locationSec();
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");


/**
 * PURPOSE: menu page for the restaurate website
 */

const heading  = function(){
    const headingContainer = document.createElement('div');
    const heading = document.createElement('h1');
    const logoImgContainer = document.createElement('div');
    const logoImg = document.createElement('img');
    // const description = document.createElement('div');

    headingContainer.classList.add('heading-container');
    logoImgContainer.classList.add('decoration', 'bubble-tea');

    heading.textContent = "MENU";
    logoImg.src = "../img/bubble-tea.png";

    logoImgContainer.appendChild(logoImg);
    headingContainer.append(heading, logoImgContainer);
    document.getElementById('content').appendChild(headingContainer);

}

const itemContainer = function(){
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');
    document.getElementById('content').appendChild(itemContainer);
}

const item = function(){
    // console.log('hi')
    console.log((0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.ShakeStorage)().getShakes());
    for (let shake of (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.ShakeStorage)().getShakes()){
        // console.log('1')
        itemCardMaker(shake);
    }
}

const itemCardMaker = function(shake) {
    let itemCard = document.createElement('div');
    let shakeTitle = document.createElement('h3');
    let shakeImg = document.createElement('img');
    console.log(shake)
    shakeTitle.textContent = shake.name;
    shakeImg.src = shake.img;
    itemCard.append(shakeTitle, shakeImg);

    document.querySelector('.item-container').appendChild(itemCard);
}
const menu = function(){
    // navbar();
    heading();
    itemContainer();
    item();
}

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/**
 * PURPOSE: Main function to enable tabbed functionality.
 */
const render = function(){
    const content = document.querySelector('#content');
    content.innerText= "";
}

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShakeStorage": () => (/* binding */ ShakeStorage)
/* harmony export */ });
/* harmony import */ var _img_choco_shake_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/choco-shake.jpg */ "./img/choco-shake.jpg");
/* harmony import */ var _img_strawberry_shake_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/strawberry-shake.jpg */ "./img/strawberry-shake.jpg");
/* harmony import */ var _img_vanilla_shake_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/vanilla-shake.jpg */ "./img/vanilla-shake.jpg");




function ShakeStorage(){
    const shakes = [];

    function init(){
        console.log(_img_choco_shake_jpg__WEBPACK_IMPORTED_MODULE_0__)
        addShake('Chocolate Shake', _img_choco_shake_jpg__WEBPACK_IMPORTED_MODULE_0__);
        addShake('Strawberry Shake', _img_strawberry_shake_jpg__WEBPACK_IMPORTED_MODULE_1__);
        addShake('Vanilla Shake', _img_vanilla_shake_jpg__WEBPACK_IMPORTED_MODULE_2__);
    }

    const addShake = function(shakeName,shakeImg){
        let newShake = {};
        newShake.name = shakeName;
        newShake.img = shakeImg;
        shakes.push(newShake);
    }

    const removeShake = function(shake){
        if(shakes.includes(shake)){
            shakes.splice(shakes.indexOf(shake),1);
        }
    }

    const getShakes = function(){
        return shakes;
    }

    init();
    return {addShake, removeShake, getShakes};
}




/***/ }),

/***/ "./img/choco-shake.jpg":
/*!*****************************!*\
  !*** ./img/choco-shake.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/choco-shake.9cb8c20395e77e95926b.jpg";

/***/ }),

/***/ "./img/strawberry-shake.jpg":
/*!**********************************!*\
  !*** ./img/strawberry-shake.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/strawberry-shake.e3478b953b4ba0249df6.jpg";

/***/ }),

/***/ "./img/vanilla-shake.jpg":
/*!*******************************!*\
  !*** ./img/vanilla-shake.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/vanilla-shake.82d2ba31d2e41a0d2640.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ "./src/render.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _firstLoad_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firstLoad.js */ "./src/firstLoad.js");





(0,_firstLoad_js__WEBPACK_IMPORTED_MODULE_3__.firstLoad)();

const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');

homeBtn.addEventListener('click', function(){
    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)();
    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.home)();
});

menuBtn.addEventListener('click', function(){
    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)();
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menu)();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLElBQUksa0RBQU07QUFDVixJQUFJLDhDQUFJO0FBQ1IsQ0FBQztBQUNEO0FBQ0E7QUFDQSxJQUFJLGtEQUFNO0FBQ1YsSUFBSSw4Q0FBSTtBQUNSLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9maXJzdExvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bmF2YmFyLCBob21lfSAgZnJvbSBcIi4vaG9tZS5qc1wiXHJcblxyXG5leHBvcnQgY29uc3QgZmlyc3RMb2FkID0gZnVuY3Rpb24oKXtcclxuICAgIG5hdmJhcigpO1xyXG4gICAgaG9tZSgpO1xyXG59XHJcbiIsIi8vTG9hZHMgdGhlIGhvbWUgcGFnZSBmb3IgRHJpbmsgSG91c2UgQ2FmZVxyXG5cclxuLyoqXHJcbiAqIFBVUlBPU0U6IE5hdmJhciBzZWNpb24gb2YgdGhlIEZpcnN0IHBhZ2VcclxuICovXHJcbmV4cG9ydCBjb25zdCBuYXZiYXIgPSBmdW5jdGlvbiAoKXtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblxyXG4gICAgaG9tZUJ0bi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG4gICAgbWVudUJ0bi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG4gICAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiXHJcblxyXG4gICAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKCdob21lJyk7XHJcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcclxuICAgIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xyXG5cclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICBcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKHVsKTtcclxuICAgIHVsLmFwcGVuZChob21lQnRuLCBtZW51QnRuLCBjb250YWN0QnRuKTtcclxuICAgIGJvZHkucHJlcGVuZChoZWFkZXIpO1xyXG4gICAgXHJcbn1cclxuXHJcbmNvbnN0IGhlYWRpbmcgPSBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgaGVhZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBjb25zdCBsb2dvSW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAvLyBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGhlYWRpbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGluZy1jb250YWluZXInKTtcclxuICAgIGxvZ29JbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGVjb3JhdGlvbicsICdidWJibGUtdGVhJyk7XHJcblxyXG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiRFJJTksgSE9VU0VcIjtcclxuICAgIGxvZ29JbWcuc3JjID0gXCIuLi9pbWcvYnViYmxlLXRlYS5wbmdcIjtcclxuXHJcbiAgICBsb2dvSW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29JbWcpO1xyXG4gICAgaGVhZGluZ0NvbnRhaW5lci5hcHBlbmQoaGVhZGluZywgbG9nb0ltZ0NvbnRhaW5lcik7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKGhlYWRpbmdDb250YWluZXIpO1xyXG5cclxuXHJcbn1cclxuXHJcbmNvbnN0IGRlc2NyaXB0aW9uID0gZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiRmVlbGluJyB0aGUgaGVhdD8gQ29tZSBqb2luIHVzIGF0IHRoZSBkcmluayBob3VzZSEgXFxcclxuICAgIEJlc3QgcGxhY2Ugd2l0aCB0aGUgYmVzdCBhbWJpYW5jZSBhbmQgb2Zjb3Vyc2UgdGhlIGJlc3QgXFxcclxuICAgIGRyaW5rcyBkdWghIG9oIHlvdSBkb24ndCBsaWtlIGxlYXZpbmcgeW91ciBob3VzZT8gbm8gd29ycmllcyBjYWxsIHVzIGF0ICs5NzE1MDEyMzQ1NjcuXCJcclxuXHJcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbi1vdXRlcicpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkNvbnRhaW5lcik7XHJcbn1cclxuXHJcbmNvbnN0IGluZm9TZWN0aW9uID0gZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGluZm9IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGNvbnN0IHRpbWluZ3MgPSB7XCJTdW5kYXlcIjogXCI4YW0gLSA4cG1cIiwgXCJNb25kYXlcIjogXCI2YW0gLSA2cG1cIixcIlR1ZXNkYXlcIjogXCI2YW0gLSA2cG1cIixcclxuICAgICAgICAgICAgICAgICAgICBcIldlZG5lc2RheVwiOiBcIjZhbSAtIDZwbVwiLFwiVGh1cnNkYXlcIjogXCI2YW0gLSAxMHBtXCIsIFwiRnJpZGF5XCI6IFwiNmFtIC0gMTBwbVwiLCBcclxuICAgICAgICAgICAgICAgICAgICBcIlNhdHVyZGF5XCI6IFwiOGFtIC0gMTBwbVwifVxyXG4gICAgXHJcbiAgICBpbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2luZm8taG91cnMnKTtcclxuICAgIGluZm9IZWFkaW5nLnRleHRDb250ZW50ID0gXCJIb3Vyc1wiXHJcbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9IZWFkaW5nKTtcclxuXHJcbiAgICBmb3IgKGxldCB0aW1pbmcgaW4gdGltaW5ncyl7XHJcbiAgICAgICAgbGV0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBkYXkudGV4dENvbnRlbnQgPSBgJHt0aW1pbmd9OiAke3RpbWluZ3NbdGltaW5nXX1gO1xyXG4gICAgICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGF5KTtcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKGluZm9Db250YWluZXIpO1xyXG5cclxufVxyXG4vKipcclxuICogPGRpdiBjbGFzcz1cImxvY2F0aW9uXCI+XHJcbiAgICAgICAgPGgzPkxvY2F0aW9uPC9oMz5cclxuICAgICAgICBDYW5keUxhbmQsIFVuaWNvcm52aWxsZSwgQ290dG9uY2FuZHlcclxuICAgICAgPC9kaXY+XHJcbiAqL1xyXG5jb25zdCBsb2NhdGlvblNlYyA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBsb2NhdGlvbkNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIFxyXG4gICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uXCI7XHJcbiAgICBsb2NhdGlvbkNvbnQuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xyXG4gICAgbG9jYXRpb25Db250LmFwcGVuZChcIkNhbmR5TGFuZCwgVW5pY29ybnZpbGxlLCBDb3R0b25jYW5keVwiKTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKGxvY2F0aW9uQ29udCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBob21lID0gZnVuY3Rpb24oKXtcclxuICAgIC8vIG5hdmJhcigpO1xyXG4gICAgaGVhZGluZygpO1xyXG4gICAgZGVzY3JpcHRpb24oKTtcclxuICAgIGluZm9TZWN0aW9uKCk7XHJcbiAgICBsb2NhdGlvblNlYygpO1xyXG59IiwiaW1wb3J0IHtTaGFrZVN0b3JhZ2V9IGZyb20gXCIuL3N0b3JhZ2UuanNcIlxyXG5cclxuLyoqXHJcbiAqIFBVUlBPU0U6IG1lbnUgcGFnZSBmb3IgdGhlIHJlc3RhdXJhdGUgd2Vic2l0ZVxyXG4gKi9cclxuXHJcbmNvbnN0IGhlYWRpbmcgID0gZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGhlYWRpbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgY29uc3QgbG9nb0ltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgLy8gY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBoZWFkaW5nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmctY29udGFpbmVyJyk7XHJcbiAgICBsb2dvSW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RlY29yYXRpb24nLCAnYnViYmxlLXRlYScpO1xyXG5cclxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIk1FTlVcIjtcclxuICAgIGxvZ29JbWcuc3JjID0gXCIuLi9pbWcvYnViYmxlLXRlYS5wbmdcIjtcclxuXHJcbiAgICBsb2dvSW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29JbWcpO1xyXG4gICAgaGVhZGluZ0NvbnRhaW5lci5hcHBlbmQoaGVhZGluZywgbG9nb0ltZ0NvbnRhaW5lcik7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKGhlYWRpbmdDb250YWluZXIpO1xyXG5cclxufVxyXG5cclxuY29uc3QgaXRlbUNvbnRhaW5lciA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tY29udGFpbmVyJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXIpO1xyXG59XHJcblxyXG5jb25zdCBpdGVtID0gZnVuY3Rpb24oKXtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdoaScpXHJcbiAgICBjb25zb2xlLmxvZyhTaGFrZVN0b3JhZ2UoKS5nZXRTaGFrZXMoKSk7XHJcbiAgICBmb3IgKGxldCBzaGFrZSBvZiBTaGFrZVN0b3JhZ2UoKS5nZXRTaGFrZXMoKSl7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJzEnKVxyXG4gICAgICAgIGl0ZW1DYXJkTWFrZXIoc2hha2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBpdGVtQ2FyZE1ha2VyID0gZnVuY3Rpb24oc2hha2UpIHtcclxuICAgIGxldCBpdGVtQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IHNoYWtlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgbGV0IHNoYWtlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBjb25zb2xlLmxvZyhzaGFrZSlcclxuICAgIHNoYWtlVGl0bGUudGV4dENvbnRlbnQgPSBzaGFrZS5uYW1lO1xyXG4gICAgc2hha2VJbWcuc3JjID0gc2hha2UuaW1nO1xyXG4gICAgaXRlbUNhcmQuYXBwZW5kKHNoYWtlVGl0bGUsIHNoYWtlSW1nKTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1jb250YWluZXInKS5hcHBlbmRDaGlsZChpdGVtQ2FyZCk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IG1lbnUgPSBmdW5jdGlvbigpe1xyXG4gICAgLy8gbmF2YmFyKCk7XHJcbiAgICBoZWFkaW5nKCk7XHJcbiAgICBpdGVtQ29udGFpbmVyKCk7XHJcbiAgICBpdGVtKCk7XHJcbn0iLCIvKipcclxuICogUFVSUE9TRTogTWFpbiBmdW5jdGlvbiB0byBlbmFibGUgdGFiYmVkIGZ1bmN0aW9uYWxpdHkuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVuZGVyID0gZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gICAgY29udGVudC5pbm5lclRleHQ9IFwiXCI7XHJcbn0iLCJpbXBvcnQgQ2hvY29sYXRlU2hha2UgZnJvbSBcIi4uL2ltZy9jaG9jby1zaGFrZS5qcGdcIjtcclxuaW1wb3J0IFN0cmF3YmVycnlTaGFrZSBmcm9tIFwiLi4vaW1nL3N0cmF3YmVycnktc2hha2UuanBnXCI7XHJcbmltcG9ydCBWYW5pbGxhU2hha2UgZnJvbSBcIi4uL2ltZy92YW5pbGxhLXNoYWtlLmpwZ1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNoYWtlU3RvcmFnZSgpe1xyXG4gICAgY29uc3Qgc2hha2VzID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKENob2NvbGF0ZVNoYWtlKVxyXG4gICAgICAgIGFkZFNoYWtlKCdDaG9jb2xhdGUgU2hha2UnLCBDaG9jb2xhdGVTaGFrZSk7XHJcbiAgICAgICAgYWRkU2hha2UoJ1N0cmF3YmVycnkgU2hha2UnLCBTdHJhd2JlcnJ5U2hha2UpO1xyXG4gICAgICAgIGFkZFNoYWtlKCdWYW5pbGxhIFNoYWtlJywgVmFuaWxsYVNoYWtlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRTaGFrZSA9IGZ1bmN0aW9uKHNoYWtlTmFtZSxzaGFrZUltZyl7XHJcbiAgICAgICAgbGV0IG5ld1NoYWtlID0ge307XHJcbiAgICAgICAgbmV3U2hha2UubmFtZSA9IHNoYWtlTmFtZTtcclxuICAgICAgICBuZXdTaGFrZS5pbWcgPSBzaGFrZUltZztcclxuICAgICAgICBzaGFrZXMucHVzaChuZXdTaGFrZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlU2hha2UgPSBmdW5jdGlvbihzaGFrZSl7XHJcbiAgICAgICAgaWYoc2hha2VzLmluY2x1ZGVzKHNoYWtlKSl7XHJcbiAgICAgICAgICAgIHNoYWtlcy5zcGxpY2Uoc2hha2VzLmluZGV4T2Yoc2hha2UpLDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRTaGFrZXMgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBzaGFrZXM7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpO1xyXG4gICAgcmV0dXJuIHthZGRTaGFrZSwgcmVtb3ZlU2hha2UsIGdldFNoYWtlc307XHJcbn1cclxuXHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQge3JlbmRlcn0gZnJvbSBcIi4vcmVuZGVyLmpzXCJcclxuaW1wb3J0IHtob21lfSAgZnJvbSBcIi4vaG9tZS5qc1wiXHJcbmltcG9ydCB7bWVudX0gZnJvbSBcIi4vbWVudS5qc1wiXHJcbmltcG9ydCB7Zmlyc3RMb2FkfSBmcm9tIFwiLi9maXJzdExvYWQuanNcIlxyXG5cclxuZmlyc3RMb2FkKCk7XHJcblxyXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcclxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XHJcblxyXG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHJlbmRlcigpO1xyXG4gICAgaG9tZSgpO1xyXG59KTtcclxuXHJcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgcmVuZGVyKCk7XHJcbiAgICBtZW51KCk7XHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==