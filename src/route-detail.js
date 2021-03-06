import forestParkOptions from './routes/forest-park.js';
import { loadHeader, loadFooter } from './header-template.js';
import { toggleFavorite } from './favorite-component.js';

loadHeader();
loadFooter();

let routeOptions = null;

routeOptions = forestParkOptions;

const urlParams = new URLSearchParams(window.location.search);
const routeId = urlParams.get('routeid');

let route = null;
for(let i = 0; i < routeOptions.length; i++) {
    if(routeOptions[i].id === routeId) {
        route = routeOptions[i];
        break;
    }
}

const main = document.getElementById('main');
const dom = makeRouteDetail(route);
main.appendChild(dom);

const favoriteIcon = document.getElementById('favorite-icon');

toggleFavorite(route, favoriteIcon);


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
                    <img src="assets/fav-unselected.svg" title="favorite" id="favorite-icon">
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


// FUNCTIONALITY FOR ADDITIONAL DESTINATIONS - TO COME UPON GROWTH OF PROJECT

// import otherOptions from './routes/other.js';
// if(user.destination === 'forest-park') {
//     routeOptions = forestParkOptions;
// }
// else {
//     routeOptions = otherOptions;
// }