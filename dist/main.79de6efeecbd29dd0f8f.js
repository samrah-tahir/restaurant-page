/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/contact.css":
/*!********************************!*\
  !*** ./src/styles/contact.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/menu.css":
/*!*****************************!*\
  !*** ./src/styles/menu.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _styles_contact_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/contact.css */ "./src/styles/contact.css");

const heading  = function(){
    const headingContainer = document.createElement('div');
    const heading = document.createElement('h1');
    const logoImgContainer = document.createElement('div');
    const logoImg = document.createElement('img');
    // const description = document.createElement('div');

    headingContainer.classList.add('heading-container');
    logoImgContainer.classList.add('decoration', 'bubble-tea');

    heading.textContent = "Contact";
    logoImg.src = "../img/bubble-tea.png";

    logoImgContainer.appendChild(logoImg);
    headingContainer.append(heading, logoImgContainer);
    document.getElementById('content').appendChild(headingContainer);

}

const contactContainer = function(){
    const contactBox = document.createElement('div');
    contactBox.classList.add('contact-container');
    document.getElementById('content').appendChild(contactBox);
    
}

const contactHeader = function(){
    const header = document.createElement('h3');
    header.textContent = 'Get In Touch';
    const contactContainer = document.querySelector('.contact-container');
    contactContainer.appendChild(header);
}

;

const contactInfo = function(){
    const mobileHeading = document.createElement('h3');
    const emailHeading = document.createElement('h3');
    const mobileNum = document.createElement('p');
    const email = document.createElement('p');

    mobileHeading.textContent = 'Mobile';
    emailHeading.textContent = 'Email';
    
    mobileNum.textContent = '+971501234567';
    email.textContent = 'xyz@qmail.com';

    document.querySelector('.contact-container').append(mobileHeading, mobileNum, emailHeading, email);
}

const contact = function(){
    heading();
    contactContainer();
    contactHeader();
    contactInfo();
}

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
/* harmony import */ var _styles_menu_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/menu.css */ "./src/styles/menu.css");


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
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _firstLoad_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firstLoad.js */ "./src/firstLoad.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");







(0,_firstLoad_js__WEBPACK_IMPORTED_MODULE_4__.firstLoad)();

const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');
const contactBtn = document.querySelector('.contact');

homeBtn.addEventListener('click', function(){
    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)();
    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.home)();
});

menuBtn.addEventListener('click', function(){
    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)();
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menu)();
});

contactBtn.addEventListener('click', function(){
    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)();
    (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.contact)();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNma0M7QUFDSDtBQUNEO0FBQ007QUFDSTtBQUNiO0FBQzNCO0FBQ0Esd0RBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFNO0FBQ1YsSUFBSSw4Q0FBSTtBQUNSLENBQUM7QUFDRDtBQUNBO0FBQ0EsSUFBSSxrREFBTTtBQUNWLElBQUksOENBQUk7QUFDUixDQUFDO0FBQ0Q7QUFDQTtBQUNBLElBQUksa0RBQU07QUFDVixJQUFJLG9EQUFPO0FBQ1gsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9jb250YWN0LmNzcz9mYmYwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvbWVudS5jc3M/OGY5MiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz8yMzk0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9maXJzdExvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIlxyXG5jb25zdCBoZWFkaW5nICA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBoZWFkaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGNvbnN0IGxvZ29JbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIC8vIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgaGVhZGluZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nLWNvbnRhaW5lcicpO1xyXG4gICAgbG9nb0ltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkZWNvcmF0aW9uJywgJ2J1YmJsZS10ZWEnKTtcclxuXHJcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcbiAgICBsb2dvSW1nLnNyYyA9IFwiLi4vaW1nL2J1YmJsZS10ZWEucG5nXCI7XHJcblxyXG4gICAgbG9nb0ltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvSW1nKTtcclxuICAgIGhlYWRpbmdDb250YWluZXIuYXBwZW5kKGhlYWRpbmcsIGxvZ29JbWdDb250YWluZXIpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChoZWFkaW5nQ29udGFpbmVyKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgY29udGFjdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdEJveC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWNvbnRhaW5lcicpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChjb250YWN0Qm94KTtcclxuICAgIFxyXG59XHJcblxyXG5jb25zdCBjb250YWN0SGVhZGVyID0gZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnR2V0IEluIFRvdWNoJztcclxuICAgIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1jb250YWluZXInKTtcclxuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxufVxyXG5cclxuaW1wb3J0ICcuL3N0eWxlcy9jb250YWN0LmNzcyc7XHJcblxyXG5jb25zdCBjb250YWN0SW5mbyA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBtb2JpbGVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGNvbnN0IGVtYWlsSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBjb25zdCBtb2JpbGVOdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgICBtb2JpbGVIZWFkaW5nLnRleHRDb250ZW50ID0gJ01vYmlsZSc7XHJcbiAgICBlbWFpbEhlYWRpbmcudGV4dENvbnRlbnQgPSAnRW1haWwnO1xyXG4gICAgXHJcbiAgICBtb2JpbGVOdW0udGV4dENvbnRlbnQgPSAnKzk3MTUwMTIzNDU2Nyc7XHJcbiAgICBlbWFpbC50ZXh0Q29udGVudCA9ICd4eXpAcW1haWwuY29tJztcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1jb250YWluZXInKS5hcHBlbmQobW9iaWxlSGVhZGluZywgbW9iaWxlTnVtLCBlbWFpbEhlYWRpbmcsIGVtYWlsKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnRhY3QgPSBmdW5jdGlvbigpe1xyXG4gICAgaGVhZGluZygpO1xyXG4gICAgY29udGFjdENvbnRhaW5lcigpO1xyXG4gICAgY29udGFjdEhlYWRlcigpO1xyXG4gICAgY29udGFjdEluZm8oKTtcclxufSIsImltcG9ydCB7bmF2YmFyLCBob21lfSAgZnJvbSBcIi4vaG9tZS5qc1wiXHJcblxyXG5leHBvcnQgY29uc3QgZmlyc3RMb2FkID0gZnVuY3Rpb24oKXtcclxuICAgIG5hdmJhcigpO1xyXG4gICAgaG9tZSgpO1xyXG59XHJcbiIsIi8vTG9hZHMgdGhlIGhvbWUgcGFnZSBmb3IgRHJpbmsgSG91c2UgQ2FmZVxyXG5cclxuLyoqXHJcbiAqIFBVUlBPU0U6IE5hdmJhciBzZWNpb24gb2YgdGhlIEZpcnN0IHBhZ2VcclxuICovXHJcbmV4cG9ydCBjb25zdCBuYXZiYXIgPSBmdW5jdGlvbiAoKXtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblxyXG4gICAgY29uc3QgdWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHVsRGl2LmFwcGVuZENoaWxkKHVsKVxyXG5cclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh1bERpdik7XHJcbiAgICBcclxuICAgIGhvbWVCdG4udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcclxuICAgIG1lbnVCdG4udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICAgIGNvbnRhY3RCdG4udGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIlxyXG5cclxuICAgIGhvbWVCdG4uY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xyXG4gICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcbiAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcclxuXHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgXHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgICB1bC5hcHBlbmQoaG9tZUJ0biwgbWVudUJ0biwgY29udGFjdEJ0bik7XHJcbiAgICBib2R5LnByZXBlbmQoaGVhZGVyKTtcclxuICAgIFxyXG59XHJcblxyXG5jb25zdCBoZWFkaW5nID0gZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGhlYWRpbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgY29uc3QgbG9nb0ltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgLy8gY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBoZWFkaW5nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmctY29udGFpbmVyJyk7XHJcbiAgICBsb2dvSW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RlY29yYXRpb24nLCAnYnViYmxlLXRlYScpO1xyXG5cclxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkRyaW5rIEhvdXNlXCI7XHJcbiAgICBsb2dvSW1nLnNyYyA9IFwiLi4vaW1nL2J1YmJsZS10ZWEucG5nXCI7XHJcblxyXG4gICAgbG9nb0ltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvSW1nKTtcclxuICAgIGhlYWRpbmdDb250YWluZXIuYXBwZW5kKGhlYWRpbmcsIGxvZ29JbWdDb250YWluZXIpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChoZWFkaW5nQ29udGFpbmVyKTtcclxuXHJcblxyXG59XHJcblxyXG5jb25zdCBkZXNjcmlwdGlvbiA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVzY3JpcHRpb25Db250YWluZXIudGV4dENvbnRlbnQgPSBcIkZlZWxpbicgdGhlIGhlYXQ/IENvbWUgam9pbiB1cyBhdCB0aGUgZHJpbmsgaG91c2UhIFxcXHJcbiAgICBCZXN0IHBsYWNlIHdpdGggdGhlIGJlc3QgYW1iaWFuY2UgYW5kIG9mY291cnNlIHRoZSBiZXN0IFxcXHJcbiAgICBkcmlua3MgZHVoISBvaCB5b3UgZG9uJ3QgbGlrZSBsZWF2aW5nIHlvdXIgaG91c2U/IG5vIHdvcnJpZXMgY2FsbCB1cyBhdCArOTcxNTAxMjM0NTY3LlwiXHJcblxyXG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24tb3V0ZXInKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Db250YWluZXIpO1xyXG59XHJcblxyXG5jb25zdCBpbmZvU2VjdGlvbiA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBpbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBpbmZvSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBjb25zdCB0aW1pbmdzID0ge1wiU3VuZGF5XCI6IFwiOGFtIC0gOHBtXCIsIFwiTW9uZGF5XCI6IFwiNmFtIC0gNnBtXCIsXCJUdWVzZGF5XCI6IFwiNmFtIC0gNnBtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJXZWRuZXNkYXlcIjogXCI2YW0gLSA2cG1cIixcIlRodXJzZGF5XCI6IFwiNmFtIC0gMTBwbVwiLCBcIkZyaWRheVwiOiBcIjZhbSAtIDEwcG1cIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJTYXR1cmRheVwiOiBcIjhhbSAtIDEwcG1cIn1cclxuICAgIFxyXG4gICAgaW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbmZvLWhvdXJzJyk7XHJcbiAgICBpbmZvSGVhZGluZy50ZXh0Q29udGVudCA9IFwiSG91cnNcIlxyXG4gICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvSGVhZGluZyk7XHJcblxyXG4gICAgZm9yIChsZXQgdGltaW5nIGluIHRpbWluZ3Mpe1xyXG4gICAgICAgIGxldCBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgZGF5LnRleHRDb250ZW50ID0gYCR7dGltaW5nfTogJHt0aW1pbmdzW3RpbWluZ119YDtcclxuICAgICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGRheSk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChpbmZvQ29udGFpbmVyKTtcclxuXHJcbn1cclxuLyoqXHJcbiAqIDxkaXYgY2xhc3M9XCJsb2NhdGlvblwiPlxyXG4gICAgICAgIDxoMz5Mb2NhdGlvbjwvaDM+XHJcbiAgICAgICAgQ2FuZHlMYW5kLCBVbmljb3JudmlsbGUsIENvdHRvbmNhbmR5XHJcbiAgICAgIDwvZGl2PlxyXG4gKi9cclxuY29uc3QgbG9jYXRpb25TZWMgPSBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgbG9jYXRpb25Db250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBcclxuICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gXCJMb2NhdGlvblwiO1xyXG4gICAgbG9jYXRpb25Db250LmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcclxuICAgIGxvY2F0aW9uQ29udC5hcHBlbmQoXCJDYW5keUxhbmQsIFVuaWNvcm52aWxsZSwgQ290dG9uY2FuZHlcIik7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChsb2NhdGlvbkNvbnQpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaG9tZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAvLyBuYXZiYXIoKTtcclxuICAgIGhlYWRpbmcoKTtcclxuICAgIGRlc2NyaXB0aW9uKCk7XHJcbiAgICBpbmZvU2VjdGlvbigpO1xyXG4gICAgbG9jYXRpb25TZWMoKTtcclxufSIsImltcG9ydCB7U2hha2VTdG9yYWdlfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XHJcbmltcG9ydCAnLi9zdHlsZXMvbWVudS5jc3MnXHJcbi8qKlxyXG4gKiBQVVJQT1NFOiBtZW51IHBhZ2UgZm9yIHRoZSByZXN0YXVyYXRlIHdlYnNpdGVcclxuICovXHJcblxyXG5jb25zdCBoZWFkaW5nICA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBoZWFkaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGNvbnN0IGxvZ29JbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIC8vIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgaGVhZGluZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nLWNvbnRhaW5lcicpO1xyXG4gICAgbG9nb0ltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkZWNvcmF0aW9uJywgJ2J1YmJsZS10ZWEnKTtcclxuXHJcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbiAgICBsb2dvSW1nLnNyYyA9IFwiLi4vaW1nL2J1YmJsZS10ZWEucG5nXCI7XHJcblxyXG4gICAgbG9nb0ltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvSW1nKTtcclxuICAgIGhlYWRpbmdDb250YWluZXIuYXBwZW5kKGhlYWRpbmcsIGxvZ29JbWdDb250YWluZXIpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChoZWFkaW5nQ29udGFpbmVyKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IGl0ZW1Db250YWluZXIgPSBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpdGVtLWNvbnRhaW5lcicpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChpdGVtQ29udGFpbmVyKTtcclxufVxyXG5cclxuY29uc3QgaXRlbSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnaGknKVxyXG4gICAgY29uc29sZS5sb2coU2hha2VTdG9yYWdlKCkuZ2V0U2hha2VzKCkpO1xyXG4gICAgZm9yIChsZXQgc2hha2Ugb2YgU2hha2VTdG9yYWdlKCkuZ2V0U2hha2VzKCkpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCcxJylcclxuICAgICAgICBpdGVtQ2FyZE1ha2VyKHNoYWtlKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgaXRlbUNhcmRNYWtlciA9IGZ1bmN0aW9uKHNoYWtlKSB7XHJcbiAgICBsZXQgaXRlbUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBzaGFrZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGxldCBzaGFrZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgbGV0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHNoYWtlKVxyXG4gICAgc2hha2VUaXRsZS50ZXh0Q29udGVudCA9IHNoYWtlLm5hbWU7XHJcbiAgICBzaGFrZUltZy5zcmMgPSBzaGFrZS5pbWc7XHJcbiAgICBpdGVtQ2FyZC5jbGFzc0xpc3QuYWRkKHNoYWtlLm5hbWUuc3BsaXQoJyAnKS5qb2luKCctJykudG9Mb3dlckNhc2UoKSwgXCJpdGVtXCIpO1xyXG5cclxuICAgIGltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChzaGFrZUltZyk7XHJcbiAgICBpdGVtQ2FyZC5hcHBlbmQoc2hha2VUaXRsZSwgaW1nQ29udGFpbmVyKTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1jb250YWluZXInKS5hcHBlbmRDaGlsZChpdGVtQ2FyZCk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IG1lbnUgPSBmdW5jdGlvbigpe1xyXG4gICAgLy8gbmF2YmFyKCk7XHJcbiAgICBoZWFkaW5nKCk7XHJcbiAgICBpdGVtQ29udGFpbmVyKCk7XHJcbiAgICBpdGVtKCk7XHJcbn0iLCIvKipcclxuICogUFVSUE9TRTogTWFpbiBmdW5jdGlvbiB0byBlbmFibGUgdGFiYmVkIGZ1bmN0aW9uYWxpdHkuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVuZGVyID0gZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gICAgY29udGVudC5pbm5lclRleHQ9IFwiXCI7XHJcbn0iLCJpbXBvcnQgQ2hvY29sYXRlU2hha2UgZnJvbSBcIi4uL2ltZy9jaG9jby1zaGFrZS5qcGdcIjtcclxuaW1wb3J0IFN0cmF3YmVycnlTaGFrZSBmcm9tIFwiLi4vaW1nL3N0cmF3YmVycnktc2hha2UuanBnXCI7XHJcbmltcG9ydCBWYW5pbGxhU2hha2UgZnJvbSBcIi4uL2ltZy92YW5pbGxhLXNoYWtlLmpwZ1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNoYWtlU3RvcmFnZSgpe1xyXG4gICAgY29uc3Qgc2hha2VzID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKENob2NvbGF0ZVNoYWtlKVxyXG4gICAgICAgIGFkZFNoYWtlKCdDaG9jb2xhdGUgU2hha2UnLCBDaG9jb2xhdGVTaGFrZSk7XHJcbiAgICAgICAgYWRkU2hha2UoJ1N0cmF3YmVycnkgU2hha2UnLCBTdHJhd2JlcnJ5U2hha2UpO1xyXG4gICAgICAgIGFkZFNoYWtlKCdWYW5pbGxhIFNoYWtlJywgVmFuaWxsYVNoYWtlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRTaGFrZSA9IGZ1bmN0aW9uKHNoYWtlTmFtZSxzaGFrZUltZyl7XHJcbiAgICAgICAgbGV0IG5ld1NoYWtlID0ge307XHJcbiAgICAgICAgbmV3U2hha2UubmFtZSA9IHNoYWtlTmFtZTtcclxuICAgICAgICBuZXdTaGFrZS5pbWcgPSBzaGFrZUltZztcclxuICAgICAgICBzaGFrZXMucHVzaChuZXdTaGFrZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlU2hha2UgPSBmdW5jdGlvbihzaGFrZSl7XHJcbiAgICAgICAgaWYoc2hha2VzLmluY2x1ZGVzKHNoYWtlKSl7XHJcbiAgICAgICAgICAgIHNoYWtlcy5zcGxpY2Uoc2hha2VzLmluZGV4T2Yoc2hha2UpLDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRTaGFrZXMgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBzaGFrZXM7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpO1xyXG4gICAgcmV0dXJuIHthZGRTaGFrZSwgcmVtb3ZlU2hha2UsIGdldFNoYWtlc307XHJcbn1cclxuXHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQge3JlbmRlcn0gZnJvbSBcIi4vcmVuZGVyLmpzXCJcclxuaW1wb3J0IHtob21lfSAgZnJvbSBcIi4vaG9tZS5qc1wiXHJcbmltcG9ydCB7bWVudX0gZnJvbSBcIi4vbWVudS5qc1wiXHJcbmltcG9ydCB7Y29udGFjdH0gZnJvbSBcIi4vY29udGFjdC5qc1wiXHJcbmltcG9ydCB7Zmlyc3RMb2FkfSBmcm9tIFwiLi9maXJzdExvYWQuanNcIlxyXG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIlxyXG5cclxuZmlyc3RMb2FkKCk7XHJcblxyXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcclxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XHJcbmNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdCcpO1xyXG5cclxuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICByZW5kZXIoKTtcclxuICAgIGhvbWUoKTtcclxufSk7XHJcblxyXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHJlbmRlcigpO1xyXG4gICAgbWVudSgpO1xyXG59KTtcclxuXHJcbmNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgcmVuZGVyKCk7XHJcbiAgICBjb250YWN0KCk7XHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==