import makeNavigationTemplate from '../src/header-template.js';

const test = QUnit.test;

QUnit.module('header template');

test('make header template', assert => {

    const result = makeNavigationTemplate();
    const expected = `
        <header class="header">
            <section class="header-container">
                <nav class="nav-container">
                    <a href="index.html"><img src="assets/boundless-logo.svg" alt="Logo" id="logo-image"></a>
                    <a href="" id="map-nav" class="header-nav">All Routes</a>
                    <a href="aboutus.html" class="header-nav">About Us</a>
                </nav>
            </section>
        </header>
    `;

    assert.htmlEqual(result, expected);
});
