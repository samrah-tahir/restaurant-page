import {ShakeStorage} from "./storage.js"

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
    console.log(ShakeStorage().getShakes());
    for (let shake of ShakeStorage().getShakes()){
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
export const menu = function(){
    // navbar();
    heading();
    itemContainer();
    item();
}