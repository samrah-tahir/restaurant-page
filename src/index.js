import {render} from "./render.js"
import {home}  from "./home.js"
import {menu} from "./menu.js"
import {firstLoad} from "./firstLoad.js"
import "./style.css"

firstLoad();

const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');

homeBtn.addEventListener('click', function(){
    render();
    home();
});

menuBtn.addEventListener('click', function(){
    render();
    menu();
});