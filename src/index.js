import {render} from "./render.js"
import {home}  from "./home.js"
import {menu} from "./menu.js"
import {contact} from "./contact.js"
import {firstLoad} from "./firstLoad.js"
import "./styles/style.css"

firstLoad();

const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');
const contactBtn = document.querySelector('.contact');

homeBtn.addEventListener('click', function(){
    render();
    home();
});

menuBtn.addEventListener('click', function(){
    render();
    menu();
});

contactBtn.addEventListener('click', function(){
    render();
    contact();
});