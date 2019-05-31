import { auth, usersRef } from './firebase/firebase.js';

export default function makeNavigationTemplate() {
    const dom = `
    <header class="header">
        <section class="header-container">
            <nav class="nav-container">
                <a href="routes.html"><div id="logo-image"></div></a>
                <a href="routes.html" id="map-nav" class="header-nav">All Routes</a>
                <a href="favorites.html" id="favorites-nav" class="header-nav">Favorites</a>
                <a href="aboutus.html" class="header-nav" style="display: none">About Us</a>
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
                <a href="routes.html"><div id="footer-logo"></div></a>
                <section id="footer-content">
                    <ul>
                        <li><a href="routes.html" id="map-nav" class="header-nav">All Routes</a></li>
                        <li><a href="favorites.html" id="footer-favorites-nav" class="header-nav">Favorites</a></li>
                        <li><a href="aboutus.html" class="header-nav" style="display: none">About Us</a></li>
                    <p id="footer-copyright">&copy; The Runs 2019</p>
                </section>
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
    const avatar = user.customPhotoURL || user.photoURL || ''; 
    template.innerHTML = /*html*/`
        <section id="user-name-container">

            <div id="user-avatar-and-name" class="pointer drop-down-menu">
                <div id="user-avatar-container" >
                    <img src="${avatar}" id="user-avatar">
                </div>
                <span id="user-name-display">${user.displayName}</span> <span id="down-arrow"><img src="assets/down-arrow.svg"></span>
                
                <ul class="drop-down-content">
                    <!-- <li><a href="runnerprofile.html">Update Profile</a> -->
                    <li><span id="logout" class="pointer text-decoration">Logout</span>
                </ul>
            </div>



        </section>
    `; 
    return template.content;   
}

function noUserNameDisplay() {

    const template = document.createElement('template');
    template.innerHTML = /*html*/`
        <section id="user-name-container">
            <span id="login" class="pointer text-decoration">Login</span>
        </section>
    `;

    return template.content;
}

const headerContainer = document.getElementById('header-container-wrapper');

export function loadHeader() {
    const dom = makeNavigationTemplate();
    headerContainer.appendChild(dom);
    const favoritesNav = document.getElementById('favorites-nav');


    auth.onAuthStateChanged(user => {
        if(user) {
            favoritesNav.classList.remove('hidden');
            usersRef.child(user.uid).once('value')
                .then(snapshot => {
                    const user = snapshot.val();
                    const userHeaderInfo = updateUserNameDisplay(user);
                    headerContainer.appendChild(userHeaderInfo);
                    const logOut = document.getElementById('logout');
                    logOut.addEventListener('click', () => {
                        auth.signOut();
                        window.location = 'index.html';
                    });
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
