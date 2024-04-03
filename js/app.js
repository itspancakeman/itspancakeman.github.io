/*==================== toggle icon navbar ====================*/
/*==================== scroll sections active link ====================*/

/*==================== sticky navbar ====================*/
/*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/

/*==================== scroll reveal ====================*/
/*==================== typed js ====================*/

//create header, set class, append to newly declared body
const header = document.createElement('header');
header.setAttribute('class', 'header');
const body = document.querySelector('body');
body.appendChild(header);
//create logo and link it
const logo = document.createElement('a');
logo.setAttribute('class', 'logo');
logo.textContent = 'Portfolio';
logo.setAttribute('href', '#')
//create box menu, assign class and id
const boxMenu = document.createElement('i');
boxMenu.setAttribute('class', 'bx bx-menu');
boxMenu.setAttribute('id', 'menu-icon');
//create navbar, set class
const navBar = document.createElement('nav');
navBar.setAttribute('class', 'navbar');
//append new elements to header
header.appendChild(logo);
header.appendChild(boxMenu);
header.appendChild(navBar);
//create navbarlinks
const home = document.createElement('a');
home.setAttribute('href', '#home');
home.setAttribute('class', 'active');
home.textContent = 'Home';
const about = document.createElement('a');
about.setAttribute('href', '#about');
about.textContent = 'About';
const services = document.createElement('a');
services.setAttribute('href', '#services');
services.textContent = 'Services';
const portfolio = document.createElement('a');
portfolio.setAttribute('href', '#portfolio');
portfolio.textContent = 'Portfolio';
const contact = document.createElement('a');
contact.setAttribute('href', '#contact');
contact.textContent = 'Contact';
navBar.appendChild(home);
navBar.appendChild(about);
navBar.appendChild(services);
navBar.appendChild(portfolio);
navBar.appendChild(contact);