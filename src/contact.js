
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

import './styles/contact.css';

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

export const contact = function(){
    heading();
    contactContainer();
    contactHeader();
    contactInfo();
}