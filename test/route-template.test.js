function makeHtmlTemplate(route) {
    const html = /* html */`
        <section class="run-container">

                <a href="route.html?routeid=${route.id}">
                    <section class="image-container">
                            <img src="${route.imageMapPage}" alt="image of run" class="display-photo">
                    </section>
                </a>

                <section class="run-info-container">
                    <a href="route.html?routeid=${route.id}">
                        <h3>${route.name}</h3>
                    </a>
                    <h4>${route.distance} miles</h4>
                    <h4>${route.elevation} feet</h4>
                    <p>${route.description}</p>
                </section>

                <section class="run-icon-container">
                    <img class="thumbnail-map" src="${route.thumbnailMap}">
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


QUnit.test('forest park template', assert => {
    const expected = /* html */ `
        <section class="run-container">

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

function makeRouteDetail(route) {
    const template = document.createElement('template');
    template.innerHTML = `
        <main>
            <section class="route-map">
                <img src="${route.largeMap}" alt="route map" id="route-map">
            </section>

            <section id="elevation-details">
                <img src="${route.elevationChart}" alt="elevation chart" id="elevation-chart">
            </section>

            <section id="route-details">
                <section class="route-details-container">
                    <h3>${route.name}</h3>
                    <h4>${route.distance} miles</h4>
                    <h4>${route.elevation} feet</h4>
                    <h5>${route.gpsCoordinates}</h5>
                    <p>${route.description}</p>
                </section>
            </section>

            <section id="detail-photo-section">
                <section id="detail-photo-flex">
                    <img class="detail-photo" id="detail-photo-1" src="${route.imageOne}">
                    <img class="detail-photo" id="detail-photo-2" src="${route.imageTwo}">
                    <img class="detail-photo" id="detail-photo-3" src="${route.imageThree}">
                    <img class="detail-photo" id="detail-photo-4" src="${route.imageFour}">
                </section>
            </section>

            <section id="more-info-container">
                <section id="more-info-section">
                    <h4>More Info</h4>
                    <p>${route.extraInfo}</p>
                </section>
            </section>
        </main>
    `;
    return template.content;
}

QUnit.test('forest park marathon route detail template', assert => {
    const expected = `
        <main>
            <section class="route-map">
                <img src="assets/working/FP-MarathonTwo.svg" alt="route map" id="route-map">
            </section>

            <section id="elevation-details">
                <img src="assets/elevation-profile/fp-marathon-elevation.svg" alt="elevation chart" id="elevation-chart">
            </section>

            <section id="route-details">
                <section class="route-details-container">
                    <h3>Forest Park Marathon</h3>
                    <h4>26.38 miles</h4>
                    <h4>3200 feet</h4>
                    <h5>519280E 504589N</h5>
                    <p>This route will take you across 2/3 of the length of Forest Park, through some of the less busy areas, and along some of the most scenic parts of Wildwood Trail. Note that this route is not a loop! It begins with a climb from the Lower Saltzman Road trailhead and ends at Lower Macleay Park.</p>
                </section>
            </section>

            <section id="detail-photo-section">
                <section id="detail-photo-flex">
                    <img class="detail-photo" id="detail-photo-1" src="assets/images/lowerpark/lowermacleay/LM2.jpg">
                    <img class="detail-photo" id="detail-photo-2" src="assets/images/lowerpark/lowermacleay/LM6.jpg">
                    <img class="detail-photo" id="detail-photo-3" src="assets/images/lowerpark/keil.jpg">
                    <img class="detail-photo" id="detail-photo-4" src="assets/images/midpark/trillium.jpg">
                </section>
            </section>

            <section id="more-info-container">
                <section id="more-info-section">
                    <h4>More Info</h4>
                    <p>Access the starting trailhead on Lower Saltzman Road off of Highway 30. Limited street parking is available. The route ends at Lower Macleay Park, which has restrooms, parking, and a water fountain.</p>
                </section>
            </section>
        </main>
    `;
    const result = makeRouteDetail(route);

    assert.htmlEqual(result, expected);
});