import BubbleTeaLogo from '../img/bubble-tea.png'
//Loads the home page for Drink House Cafe

/**
 * PURPOSE: Navbar secion of the First page
 */
export const navbar = function (){
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
    logoImg.src = BubbleTeaLogo;

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

export const home = function(){
    // navbar();
    heading();
    description();
    infoSection();
    locationSec();
}