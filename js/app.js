/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
/*==================== scroll sections active link ====================*/

/*==================== sticky navbar ====================*/
let header1 = document.querySelector('header');
header1.classList.toggle('sticky', window.scrollY > 100)

/*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

/*==================== scroll reveal ====================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
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
//create navbarlinks, set text and links
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
//append to navBar
navBar.appendChild(home);
navBar.appendChild(about);
navBar.appendChild(services);
navBar.appendChild(portfolio);
navBar.appendChild(contact);
//create section, set class and id
const section = document.createElement('section');
section.setAttribute('class', 'home');
section.setAttribute('id', 'home');
body.appendChild(section);
//create homeContent div
const homeContent = document.createElement('div');
homeContent.setAttribute('class', 'home-content');
section.appendChild(homeContent);
//creating fillings for homeContent
const greeting = document.createElement('h3');
greeting.textContent = "Hello, it's me";
homeContent.appendChild(greeting);
const namePlate = document.createElement('h1');
namePlate.textContent = 'Collin S';
homeContent.appendChild(namePlate);
const jobTitle = document.createElement('h3');
jobTitle.textContent = "And I'm a ";
homeContent.appendChild(jobTitle);
//creating span for job title
const jobTitle2 = document.createElement('span');
jobTitle2.textContent = 'Frontend Engineer';
jobTitle.appendChild(jobTitle2);
const pContent = document.createElement('p');
pContent.textContent = 'super interesting paragraph content found here';
homeContent.appendChild(pContent);
const socialMedia = document.createElement('div');
//creating social media div
socialMedia.setAttribute('class', 'social-media');
homeContent.appendChild(socialMedia);
//fillings for social media

//facebook
const facebook = document.createElement('a');
facebook.setAttribute('href', '#');
homeContent.appendChild(facebook);
const facebook2 = document.createElement('i');
facebook2.setAttribute('class', 'bx bxl-facebook');
facebook.appendChild(facebook2);
//twitter
const twitter = document.createElement('a');
twitter.setAttribute('href', '#');
homeContent.appendChild(twitter);
const twitter2 = document.createElement('i');
twitter2.setAttribute('class', 'bx bxl-twitter');
facebook.appendChild(twitter2);
//instagram
const instagram = document.createElement('a');
instagram.setAttribute('href', '#');
homeContent.appendChild(instagram);
const instagram2 = document.createElement('i');
instagram2.setAttribute('class', 'bx bxl-instagram');
instagram.appendChild(instagram2);
//linkedin
const linkedIn = document.createElement('a');
linkedIn.setAttribute('href', '#');
homeContent.appendChild(linkedIn);
const linkedIn2 = document.createElement('i');
linkedIn2.setAttribute('class', 'bx bxl-linkedin');
linkedIn.appendChild(linkedIn2);
//creating cv download button
const cvDownload = document.createElement('a');
cvDownload.setAttribute('href', '#');
cvDownload.setAttribute('class', 'btn');
cvDownload.textContent = 'Download CV';
homeContent.appendChild(cvDownload);
//creating home image
const homePic = document.createElement('div');
homePic.setAttribute('class', 'home-img');
homeContent.appendChild(homePic);
const homePic2 = document.createElement('img');
homePic2.setAttribute('src', './images/personal-portfolio-pic.png');
homePic2.setAttribute('alt', "");
homePic.appendChild(homePic2);



