import makeNavigationTemplate, { updateUserNameDisplay } from '../src/header-template.js';

const test = QUnit.test;

QUnit.module('header template');

test('make header template', assert => {

    const result = makeNavigationTemplate();
    const expected = `
        <header class="header">
            <section class="header-container">
                <nav class="nav-container">
                    <a href="index.html"><img src="assets/boundless-logo.svg" alt="Logo" id="logo-image"></a>
                    <a href="routes.html" id="map-nav" class="header-nav">All Routes</a>
                    <a href="aboutus.html" class="header-nav">About Us</a>
                </nav>
            </section>
        </header>
    `;

    assert.htmlEqual(result, expected);
});

test('user profile template', assert => {
    const user = {
        displayName: 'Bonnie McNeil',
        photoURL: 'https://lh6.googleusercontent.com/-D20cdlu8OaE/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3re6jVVZ4PqZYPGq31QitCRT3gyqng/mo/photo.jpg'
    };
    const expected = `
        <section id="user-name-container">
            <img src="https://lh6.googleusercontent.com/-D20cdlu8OaE/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3re6jVVZ4PqZYPGq31QitCRT3gyqng/mo/photo.jpg" id="user-avatar">
            <a href="runnerprofile.html"><span id="user-name-display">Bonnie McNeil</span></a>
            <span id="logout">Logout</span>
        </section>
    `;
    const result = updateUserNameDisplay(user);

    assert.htmlEqual(result, expected);
});