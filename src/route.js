const routeMap = document.getElementById('route-map');
const elevationChart = document.getElementById('elevation-chart');
const routeDetails = document.getElementById('route-details');
const detailPhoto1 = document.getElementById('detail-photo-1');
const detailPhoto2 = document.getElementById('detail-photo-2');
const detailPhoto3 = document.getElementById('detail-photo-3');
const moreInfoSection = document.getElementById('more-info-section');
const moreInfo = document.getElementById('more-info');


//get destination (edit map js to send destination)
//get route id
//import route array
//bring in user info
//get info for chosen route
//update DOM with route info    
const routeOptionsJson = window.localStorage.getItem('destination-array');
if(!routeOptionsJson) {
    window.location = 'index.html';
}

const routeOptions = JSON.parse(routeOptionsJson);

const urlParams = new URLSearchParams(window.location.search);
const routeId = urlParams.get('routeid');

let route = null;
for(let i = 0; i < routeOptions.length; i++) {
    if(routeOptions[i].id === routeId) {
        route = routeOptions[i];
        break;
    }
}

routeMap.src = route.largeMap;
elevationChart.src = route.elevationChart;``
detailPhoto1.src = route.imageOne;
detailPhoto2.src = route.imageTwo;
detailPhoto3.src = route.imageThree;


const runName = document.createElement('h3');
runName.textContent = route.name;
const distance = document.createElement('h4');
distance.textContent = route.distance + ' miles';
const elevation = document.createElement('h4');
elevation.textContent = route.elevation + ' feet';
const description = document.createElement('p');
description.textContent = route.description;
const routeDetailsContainer = document.createElement('section');
routeDetailsContainer.classList.add('route-details-container');
routeDetailsContainer.appendChild(runName);
routeDetailsContainer.appendChild(distance);
routeDetailsContainer.appendChild(elevation);
routeDetailsContainer.appendChild(description);
routeDetails.appendChild(routeDetailsContainer);