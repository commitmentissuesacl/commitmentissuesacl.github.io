import { auth } from './firebase/firebase.js';

export default function makeNavigationTemplate() {
    const dom = `
    <header class="header">
        <section class="header-container">
            <nav class="nav-container">
                <a href="routes.html"><img src="assets/boundless-logo.svg" alt="Logo" id="logo-image"></a>
                <a href="routes.html" id="map-nav" class="header-nav">All Routes</a>
                <a href="favorites.html" id="favorites-nav">Favorites</a>
                <a href="aboutus.html" class="header-nav">About Us</a>
            </nav>
        </section>
    </header>
    `;
    const template = document.createElement('template');
    template.innerHTML = dom;
    return template.content;
}
export function makeFooter() {
    const template = document.createElement('template');
    template.innerHTML = `
        <footer class="footer">
            <section id="footer-container">
                <img src="assets/boundless-logo-white.svg" id="footer-logo">
                <a href="routes.html" id="map-nav" class="header-nav">All Routes</a>
                <a href="favorites.html" id="footer-favorites-nav">Favorites</a>
                <a href="aboutus.html" class="header-nav">About Us</a>
                <p id="footer-copyright">&copy; Commitment Issues 2019</p>
            </section>
        </footer>
    `;

    return template.content;
}

const footerContainer = document.getElementById('footer-container');

export function loadFooter() {
    const dom = makeFooter();
    footerContainer.appendChild(dom);

    const footerFavoritesNav = document.getElementById('footer-favorites-nav');

    auth.onAuthStateChanged(user => {
        if(user) {
            footerFavoritesNav.classList.remove('hidden');
        }
        else {
            footerFavoritesNav.classList.add('hidden');
        }
    });
}

export function updateUserNameDisplay(user) {
    const template = document.createElement('template');
    const avatar = user.photoURL || '';

    
    template.innerHTML = `
    <section id="user-name-container">
    <img src="${avatar}" id="user-avatar">
    <a href="runnerprofile.html"><span id="user-name-display">${user.displayName}</span></a>
    <span id="logout">Logout</span>
    </section>
    `;
    
    return template.content;
}

function noUserNameDisplay() {

    const template = document.createElement('template');
    template.innerHTML = `
        <section id="user-name-container">
            <span id="login">Login</span>
        </section>
    `;

    return template.content;
}

const headerContainer = document.getElementById('header-container');

export function loadHeader() {
    const dom = makeNavigationTemplate();
    headerContainer.appendChild(dom);
    const favoritesNav = document.getElementById('favorites-nav');


    auth.onAuthStateChanged(user => {
        if(user) {
            const userInfo = updateUserNameDisplay(user);
            favoritesNav.classList.remove('hidden');
            headerContainer.appendChild(userInfo);
            const logOut = document.getElementById('logout');
            logOut.addEventListener('click', () => {
                auth.signOut();
                window.location = 'index.html';
            });
        }
        else {
            const noUserInfo = noUserNameDisplay();
            favoritesNav.classList.add('hidden');
            headerContainer.appendChild(noUserInfo);
            const logIn = document.getElementById('login');
            logIn.addEventListener('click', () => {
                window.location = 'index.html';
            });
        }
    });
}
