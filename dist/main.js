/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.css":
/*!**********************!*\
  !*** ./src/menu.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

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

    const ulDiv = document.createElement('div');
    ulDiv.appendChild(ul)

    header.appendChild(ulDiv);
    
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

    heading.textContent = "Drink House";
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
/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.css */ "./src/menu.css");



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

    heading.textContent = "Menu";
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
    let imgContainer = document.createElement('div');

    console.log(shake)
    shakeTitle.textContent = shake.name;
    shakeImg.src = shake.img;
    itemCard.classList.add(shake.name.split(' ').join('-').toLowerCase(), "item");

    imgContainer.appendChild(shakeImg);
    itemCard.append(shakeTitle, imgContainer);

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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZrQztBQUNIO0FBQ0Q7QUFDVTtBQUNwQjtBQUNwQjtBQUNBLHdEQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQU07QUFDVixJQUFJLDhDQUFJO0FBQ1IsQ0FBQztBQUNEO0FBQ0E7QUFDQSxJQUFJLGtEQUFNO0FBQ1YsSUFBSSw4Q0FBSTtBQUNSLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmNzcz8xZjA3Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZmlyc3RMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQge25hdmJhciwgaG9tZX0gIGZyb20gXCIuL2hvbWUuanNcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGZpcnN0TG9hZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICBuYXZiYXIoKTtcclxuICAgIGhvbWUoKTtcclxufVxyXG4iLCIvL0xvYWRzIHRoZSBob21lIHBhZ2UgZm9yIERyaW5rIEhvdXNlIENhZmVcclxuXHJcbi8qKlxyXG4gKiBQVVJQT1NFOiBOYXZiYXIgc2VjaW9uIG9mIHRoZSBGaXJzdCBwYWdlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbmF2YmFyID0gZnVuY3Rpb24gKCl7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cclxuICAgIGNvbnN0IHVsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB1bERpdi5hcHBlbmRDaGlsZCh1bClcclxuXHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodWxEaXYpO1xyXG4gICAgXHJcbiAgICBob21lQnRuLnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcbiAgICBtZW51QnRuLnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbiAgICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gXCJDb250YWN0XCJcclxuXHJcbiAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcclxuICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWVudScpO1xyXG4gICAgY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XHJcblxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIFxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xyXG4gICAgdWwuYXBwZW5kKGhvbWVCdG4sIG1lbnVCdG4sIGNvbnRhY3RCdG4pO1xyXG4gICAgYm9keS5wcmVwZW5kKGhlYWRlcik7XHJcbiAgICBcclxufVxyXG5cclxuY29uc3QgaGVhZGluZyA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBoZWFkaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGNvbnN0IGxvZ29JbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIC8vIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgaGVhZGluZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nLWNvbnRhaW5lcicpO1xyXG4gICAgbG9nb0ltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkZWNvcmF0aW9uJywgJ2J1YmJsZS10ZWEnKTtcclxuXHJcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJEcmluayBIb3VzZVwiO1xyXG4gICAgbG9nb0ltZy5zcmMgPSBcIi4uL2ltZy9idWJibGUtdGVhLnBuZ1wiO1xyXG5cclxuICAgIGxvZ29JbWdDb250YWluZXIuYXBwZW5kQ2hpbGQobG9nb0ltZyk7XHJcbiAgICBoZWFkaW5nQ29udGFpbmVyLmFwcGVuZChoZWFkaW5nLCBsb2dvSW1nQ29udGFpbmVyKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQoaGVhZGluZ0NvbnRhaW5lcik7XHJcblxyXG5cclxufVxyXG5cclxuY29uc3QgZGVzY3JpcHRpb24gPSBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJGZWVsaW4nIHRoZSBoZWF0PyBDb21lIGpvaW4gdXMgYXQgdGhlIGRyaW5rIGhvdXNlISBcXFxyXG4gICAgQmVzdCBwbGFjZSB3aXRoIHRoZSBiZXN0IGFtYmlhbmNlIGFuZCBvZmNvdXJzZSB0aGUgYmVzdCBcXFxyXG4gICAgZHJpbmtzIGR1aCEgb2ggeW91IGRvbid0IGxpa2UgbGVhdmluZyB5b3VyIGhvdXNlPyBubyB3b3JyaWVzIGNhbGwgdXMgYXQgKzk3MTUwMTIzNDU2Ny5cIlxyXG5cclxuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uLW91dGVyJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQ29udGFpbmVyKTtcclxufVxyXG5cclxuY29uc3QgaW5mb1NlY3Rpb24gPSBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgaW5mb0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgY29uc3QgdGltaW5ncyA9IHtcIlN1bmRheVwiOiBcIjhhbSAtIDhwbVwiLCBcIk1vbmRheVwiOiBcIjZhbSAtIDZwbVwiLFwiVHVlc2RheVwiOiBcIjZhbSAtIDZwbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiV2VkbmVzZGF5XCI6IFwiNmFtIC0gNnBtXCIsXCJUaHVyc2RheVwiOiBcIjZhbSAtIDEwcG1cIiwgXCJGcmlkYXlcIjogXCI2YW0gLSAxMHBtXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiU2F0dXJkYXlcIjogXCI4YW0gLSAxMHBtXCJ9XHJcbiAgICBcclxuICAgIGluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5mby1ob3VycycpO1xyXG4gICAgaW5mb0hlYWRpbmcudGV4dENvbnRlbnQgPSBcIkhvdXJzXCJcclxuICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb0hlYWRpbmcpO1xyXG5cclxuICAgIGZvciAobGV0IHRpbWluZyBpbiB0aW1pbmdzKXtcclxuICAgICAgICBsZXQgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGRheS50ZXh0Q29udGVudCA9IGAke3RpbWluZ306ICR7dGltaW5nc1t0aW1pbmddfWA7XHJcbiAgICAgICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChkYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lcik7XHJcblxyXG59XHJcbi8qKlxyXG4gKiA8ZGl2IGNsYXNzPVwibG9jYXRpb25cIj5cclxuICAgICAgICA8aDM+TG9jYXRpb248L2gzPlxyXG4gICAgICAgIENhbmR5TGFuZCwgVW5pY29ybnZpbGxlLCBDb3R0b25jYW5keVxyXG4gICAgICA8L2Rpdj5cclxuICovXHJcbmNvbnN0IGxvY2F0aW9uU2VjID0gZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGxvY2F0aW9uQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgXHJcbiAgICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IFwiTG9jYXRpb25cIjtcclxuICAgIGxvY2F0aW9uQ29udC5hcHBlbmRDaGlsZChsb2NhdGlvbik7XHJcbiAgICBsb2NhdGlvbkNvbnQuYXBwZW5kKFwiQ2FuZHlMYW5kLCBVbmljb3JudmlsbGUsIENvdHRvbmNhbmR5XCIpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQobG9jYXRpb25Db250KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhvbWUgPSBmdW5jdGlvbigpe1xyXG4gICAgLy8gbmF2YmFyKCk7XHJcbiAgICBoZWFkaW5nKCk7XHJcbiAgICBkZXNjcmlwdGlvbigpO1xyXG4gICAgaW5mb1NlY3Rpb24oKTtcclxuICAgIGxvY2F0aW9uU2VjKCk7XHJcbn0iLCJpbXBvcnQge1NoYWtlU3RvcmFnZX0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xyXG5pbXBvcnQgJy4vbWVudS5jc3MnXHJcblxyXG4vKipcclxuICogUFVSUE9TRTogbWVudSBwYWdlIGZvciB0aGUgcmVzdGF1cmF0ZSB3ZWJzaXRlXHJcbiAqL1xyXG5cclxuY29uc3QgaGVhZGluZyAgPSBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgaGVhZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBjb25zdCBsb2dvSW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAvLyBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGhlYWRpbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGluZy1jb250YWluZXInKTtcclxuICAgIGxvZ29JbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGVjb3JhdGlvbicsICdidWJibGUtdGVhJyk7XHJcblxyXG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG4gICAgbG9nb0ltZy5zcmMgPSBcIi4uL2ltZy9idWJibGUtdGVhLnBuZ1wiO1xyXG5cclxuICAgIGxvZ29JbWdDb250YWluZXIuYXBwZW5kQ2hpbGQobG9nb0ltZyk7XHJcbiAgICBoZWFkaW5nQ29udGFpbmVyLmFwcGVuZChoZWFkaW5nLCBsb2dvSW1nQ29udGFpbmVyKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQoaGVhZGluZ0NvbnRhaW5lcik7XHJcblxyXG59XHJcblxyXG5jb25zdCBpdGVtQ29udGFpbmVyID0gZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaXRlbS1jb250YWluZXInKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lcik7XHJcbn1cclxuXHJcbmNvbnN0IGl0ZW0gPSBmdW5jdGlvbigpe1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2hpJylcclxuICAgIGNvbnNvbGUubG9nKFNoYWtlU3RvcmFnZSgpLmdldFNoYWtlcygpKTtcclxuICAgIGZvciAobGV0IHNoYWtlIG9mIFNoYWtlU3RvcmFnZSgpLmdldFNoYWtlcygpKXtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnMScpXHJcbiAgICAgICAgaXRlbUNhcmRNYWtlcihzaGFrZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGl0ZW1DYXJkTWFrZXIgPSBmdW5jdGlvbihzaGFrZSkge1xyXG4gICAgbGV0IGl0ZW1DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgc2hha2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBsZXQgc2hha2VJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGxldCBpbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhzaGFrZSlcclxuICAgIHNoYWtlVGl0bGUudGV4dENvbnRlbnQgPSBzaGFrZS5uYW1lO1xyXG4gICAgc2hha2VJbWcuc3JjID0gc2hha2UuaW1nO1xyXG4gICAgaXRlbUNhcmQuY2xhc3NMaXN0LmFkZChzaGFrZS5uYW1lLnNwbGl0KCcgJykuam9pbignLScpLnRvTG93ZXJDYXNlKCksIFwiaXRlbVwiKTtcclxuXHJcbiAgICBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hha2VJbWcpO1xyXG4gICAgaXRlbUNhcmQuYXBwZW5kKHNoYWtlVGl0bGUsIGltZ0NvbnRhaW5lcik7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoaXRlbUNhcmQpO1xyXG59XHJcbmV4cG9ydCBjb25zdCBtZW51ID0gZnVuY3Rpb24oKXtcclxuICAgIC8vIG5hdmJhcigpO1xyXG4gICAgaGVhZGluZygpO1xyXG4gICAgaXRlbUNvbnRhaW5lcigpO1xyXG4gICAgaXRlbSgpO1xyXG59IiwiLyoqXHJcbiAqIFBVUlBPU0U6IE1haW4gZnVuY3Rpb24gdG8gZW5hYmxlIHRhYmJlZCBmdW5jdGlvbmFsaXR5LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlbmRlciA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICAgIGNvbnRlbnQuaW5uZXJUZXh0PSBcIlwiO1xyXG59IiwiaW1wb3J0IENob2NvbGF0ZVNoYWtlIGZyb20gXCIuLi9pbWcvY2hvY28tc2hha2UuanBnXCI7XHJcbmltcG9ydCBTdHJhd2JlcnJ5U2hha2UgZnJvbSBcIi4uL2ltZy9zdHJhd2JlcnJ5LXNoYWtlLmpwZ1wiO1xyXG5pbXBvcnQgVmFuaWxsYVNoYWtlIGZyb20gXCIuLi9pbWcvdmFuaWxsYS1zaGFrZS5qcGdcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTaGFrZVN0b3JhZ2UoKXtcclxuICAgIGNvbnN0IHNoYWtlcyA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhDaG9jb2xhdGVTaGFrZSlcclxuICAgICAgICBhZGRTaGFrZSgnQ2hvY29sYXRlIFNoYWtlJywgQ2hvY29sYXRlU2hha2UpO1xyXG4gICAgICAgIGFkZFNoYWtlKCdTdHJhd2JlcnJ5IFNoYWtlJywgU3RyYXdiZXJyeVNoYWtlKTtcclxuICAgICAgICBhZGRTaGFrZSgnVmFuaWxsYSBTaGFrZScsIFZhbmlsbGFTaGFrZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkU2hha2UgPSBmdW5jdGlvbihzaGFrZU5hbWUsc2hha2VJbWcpe1xyXG4gICAgICAgIGxldCBuZXdTaGFrZSA9IHt9O1xyXG4gICAgICAgIG5ld1NoYWtlLm5hbWUgPSBzaGFrZU5hbWU7XHJcbiAgICAgICAgbmV3U2hha2UuaW1nID0gc2hha2VJbWc7XHJcbiAgICAgICAgc2hha2VzLnB1c2gobmV3U2hha2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZVNoYWtlID0gZnVuY3Rpb24oc2hha2Upe1xyXG4gICAgICAgIGlmKHNoYWtlcy5pbmNsdWRlcyhzaGFrZSkpe1xyXG4gICAgICAgICAgICBzaGFrZXMuc3BsaWNlKHNoYWtlcy5pbmRleE9mKHNoYWtlKSwxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0U2hha2VzID0gZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gc2hha2VzO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKTtcclxuICAgIHJldHVybiB7YWRkU2hha2UsIHJlbW92ZVNoYWtlLCBnZXRTaGFrZXN9O1xyXG59XHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHtyZW5kZXJ9IGZyb20gXCIuL3JlbmRlci5qc1wiXHJcbmltcG9ydCB7aG9tZX0gIGZyb20gXCIuL2hvbWUuanNcIlxyXG5pbXBvcnQge21lbnV9IGZyb20gXCIuL21lbnUuanNcIlxyXG5pbXBvcnQge2ZpcnN0TG9hZH0gZnJvbSBcIi4vZmlyc3RMb2FkLmpzXCJcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxyXG5cclxuZmlyc3RMb2FkKCk7XHJcblxyXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcclxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XHJcblxyXG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHJlbmRlcigpO1xyXG4gICAgaG9tZSgpO1xyXG59KTtcclxuXHJcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgcmVuZGVyKCk7XHJcbiAgICBtZW51KCk7XHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==