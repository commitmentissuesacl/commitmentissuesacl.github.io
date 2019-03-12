const test = QUnit.test;

QUnit.module('header template');

function makeNavigationTemplate() {
    const dom = `
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
    const template = document.createElement('template');
    template.innerHTML = dom;
    return template.content;
}

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