import 'regenerator-runtime';
import App from './script/views/app';
import './styles/style.css';

const hamburger = document.querySelector('#hamburger');
const navigation = document.querySelector('#navigation');
const drawer = document.querySelector('#drawer');
const content = document.querySelector('#page-content');
const home = document.getElementById('home-link');
const domainAvailability = document.getElementById('domain-availability-link');
const ipGeolocation = document.getElementById('ip-geolocation-link');
const emailVerification = document.getElementById('email-verification-link');
const about = document.getElementById('about-link');
const links = document.querySelectorAll('.menu-link');

const clickedLinks = [
    home,
    domainAvailability,
    ipGeolocation,
    emailVerification,
    about,
];

const app = new App({
    hamburger,
    navigation,
    drawer,
    content,
    clickedLinks,
    links,
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
});
