//import './route-list-component.test.js';
//import './html-equal.js';

class TemplateError extends Error {}

var pattern = /[\f\n\r\t\v ]{2,}/g;
var replacement = ' ';

function normalize(str) {
    return str.replace(pattern, replacement).trim();
}

QUnit.assert.htmlEqual = function(fragment, expected) {
    if(fragment.children.length > 1) {
        throw new TemplateError('Templates must only have single top-level element');
    }
    const childHTML = fragment.firstElementChild.outerHTML;
    const normalizedActual = normalize(childHTML);
    const normalizedExpected = normalize(expected);
    const result = normalizedActual === normalizedExpected;
    const message = result ? 'okay' : 'HTML was not the same.';

    this.pushResult({
        result,
        actual: normalizedActual,
        expected: normalizedExpected,
        message
    });
};

function makeHtmlTemplate(route) {
    const html = /* html */`
        <section class="run-container no-family">

                <a href="route.html?routeid=fp-marathon">
                    <section class="image-container">
                            <img src="assets/thumbnailsformaps/forest-park-marathon-thumb.jpg" alt="image of run" class="display-photo">
                    </section>
                </a>

                <section class="run-info-container">
                    <a href="route.html?routeid=fp-marathon">
                        <h3>Forest Park Marathon</h3>
                    </a>
                    <h4>26.38 miles</h4>
                    <h4>3200 feet</h4>
                    <p>This route will take you across 2/3 of the length of Forest Park, through some of the less busy areas, and along some of the most scenic parts of Wildwood Trail. Note that this route is not a loop! It begins with a climb from the Lower Saltzman Road trailhead and ends at Lower Macleay Park.</p>
                </section>

                <section class="run-icon-container">
                    <img class="thumbnail-map" src="assets/working/FP-MarathonTwo.svg">
                </section>
            </section>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;

    return template.content;
}


const route = {
    id: 'fp-marathon',
    name: 'Forest Park Marathon',
    description: 'This route will take you across 2/3 of the length of Forest Park, through some of the less busy areas, and along some of the most scenic parts of Wildwood Trail. Note that this route is not a loop! It begins with a climb from the Lower Saltzman Road trailhead and ends at Lower Macleay Park.',
    distance: '26.38',
    elevation: '3200',
    favorite: false,
    completed: false,
    imageMapPage: 'assets/thumbnailsformaps/forest-park-marathon-thumb.jpg',
    imageOne: 'assets/images/lowerpark/lowermacleay/LM2.jpg',
    imageTwo: 'assets/images/lowerpark/lowermacleay/LM6.jpg',
    imageThree: 'assets/images/lowerpark/keil.jpg',
    imageFour: 'assets/images/midpark/trillium.jpg',
    thumbnailMap: 'assets/working/FP-MarathonTwo.svg',
    largeMap: 'assets/working/FP-MarathonTwo.svg',
    extraInfo: 'Access the starting trailhead on Lower Saltzman Road off of Highway 30. Limited street parking is available. The route ends at Lower Macleay Park, which has restrooms, parking, and a water fountain.',
    bathroom: true,
    familyFriendly: false,
    gpsCoordinates: '519280E 504589N',
    elevationChart: 'assets/elevation-profile/fp-marathon-elevation.svg'
};


QUnit.test("forest park template", assert => {
    const expected = /* html */ `
        <section class="run-container no-family">

                <a href="route.html?routeid=fp-marathon">
                    <section class="image-container">
                            <img src="assets/thumbnailsformaps/forest-park-marathon-thumb.jpg" alt="image of run" class="display-photo">
                    </section>
                </a>

                <section class="run-info-container">
                    <a href="route.html?routeid=fp-marathon">
                        <h3>Forest Park Marathon</h3>
                    </a>
                    <h4>26.38 miles</h4>
                    <h4>3200 feet</h4>
                    <p>This route will take you across 2/3 of the length of Forest Park, through some of the less busy areas, and along some of the most scenic parts of Wildwood Trail. Note that this route is not a loop! It begins with a climb from the Lower Saltzman Road trailhead and ends at Lower Macleay Park.</p>
                </section>

                <section class="run-icon-container">
                    <img class="thumbnail-map" src="assets/working/FP-MarathonTwo.svg">
                </section>
            </section>
    `;

    const result = makeHtmlTemplate(route);

    assert.htmlEqual(result, expected);
});