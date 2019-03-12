import forestParkOptions from './routes/forest-park.js';
import otherOptions from './routes/other.js';

const runContainerAll = document.getElementById('run-container-all');
const userNameDisplay = document.getElementById('user-name-display');
const search = window.location.search;
const searchParams = new URLSearchParams(search);
const routeUrl = searchParams.get('destination');
// const userJson = window.localStorage.getItem('user');

// if(!userJson) {
//     window.location = './index.html';
// } 

// const user = JSON.parse(userJson);
// userNameDisplay.textContent = user.name;

let routeOptions = null;

if(routeUrl === 'forest-park') {
    routeOptions = forestParkOptions;
}
else if(routeUrl === 'other') {
    routeOptions = otherOptions;
}

for(let i = 0; i < routeOptions.length; i++) {
    const route = routeOptions[i];

    const runContainer = document.createElement('section');
    runContainer.classList.add('run-container');

    if(!route.bathroom){
        runContainer.classList.add('no-bathroom');
    }
    if(!route.familyFriendly){
        runContainer.classList.add('no-family');
    }

    runContainer.distance = route.distance;
    runContainer.elevation = route.elevation;
    
    const runImage = document.createElement('img');
    runImage.src = route.imageMapPage;
    runImage.alt = 'image of run';
    runImage.classList.add('display-photo');
    const imageContainer = document.createElement('section');
    imageContainer.classList.add('image-container');
    const imageLink = document.createElement('a');
    imageLink.href = 'route.html?routeid=' + encodeURIComponent(route.id);
    imageContainer.appendChild(runImage);
    imageLink.appendChild(imageContainer);
    runContainer.appendChild(imageLink);
    
    const link = document.createElement('a');
    link.href = 'route.html?routeid=' + encodeURIComponent(route.id);

    if(routeUrl === 'other'){
        link.href = 'index.html';
    }

    const runName = document.createElement('h3');
    runName.textContent = route.name;
    link.appendChild(runName);
    const distance = document.createElement('h4');
    distance.textContent = route.distance + ' miles';
    const elevation = document.createElement('h4');
    elevation.textContent = route.elevation + ' feet';
    const description = document.createElement('p');
    description.textContent = route.description;
    const runInfoContainer = document.createElement('section');
    runInfoContainer.classList.add('run-info-container');
    runInfoContainer.appendChild(link);
    runInfoContainer.appendChild(distance);
    runInfoContainer.appendChild(elevation);
    runInfoContainer.appendChild(description);
    runContainer.appendChild(runInfoContainer);
    
    const runIcons = document.createElement('section');
    runIcons.classList.add('run-icon-container');
    const thumbnailMap = document.createElement('img');
    thumbnailMap.classList.add('thumbnail-map');
    thumbnailMap.src = route.thumbnailMap;
    runIcons.appendChild(thumbnailMap);
    
    runContainer.appendChild(runIcons);
    runContainerAll.appendChild(runContainer);
}

const minMiles = document.getElementById('min-miles');
const maxMiles = document.getElementById('max-miles');
const minElevation = document.getElementById('min-elevation');
const maxElevation = document.getElementById('max-elevation');
const bathroomFilter = document.getElementById('bathroom');
const familyFilter = document.getElementById('family');

function filter() {
    const routes = document.getElementsByClassName('run-container');
    
    let filterByBathrooms = false;
    let filterByFamily = false;
    
    if(bathroomFilter.checked) {
        filterByBathrooms = true;
    }
    if(familyFilter.checked) {
        filterByFamily = true;
    }

    for(let i = 0; i < routes.length; i++){
        routes[i].classList.remove('hidden');
    }

    if(filterByBathrooms){
        const noBathroom = document.getElementsByClassName('no-bathroom');
        for(let i = 0; i < noBathroom.length; i++) {
            noBathroom[i].classList.add('hidden');
        }
    }

    if(filterByFamily){
        const noFamily = document.getElementsByClassName('no-family');
        for(let i = 0; i < noFamily.length; i++) {
            noFamily[i].classList.add('hidden');
        }
    }

    const min = minMiles.value;
    maxMiles.min = Number(min) + 2;
    for(let i = 0; i < routes.length; i++) {
        if(Number(routes[i].distance) < Number(min)) {
            routes[i].classList.add('hidden');
        }
    }

    const max = maxMiles.value;
    minMiles.max = Number(max) - 2;
    for(let i = 0; i < routes.length; i++) {
        if(Number(routes[i].distance) > Number(max)) {
            routes[i].classList.add('hidden');
        }
    }

    const minElev = minElevation.value;
    maxElevation.min = Number(minElev) + 2;
    for(let i = 0; i < routes.length; i++) {
        if(Number(routes[i].elevation) < Number(minElev)) {
            routes[i].classList.add('hidden');
        }
    }
    
    const maxElev = maxElevation.value;
    minElevation.max = Number(maxElev) - 2;
    for(let i = 0; i < routes.length; i++) {
        if(Number(routes[i].elevation) > Number(maxElev)) {
            routes[i].classList.add('hidden');
        }
    }
}

bathroomFilter.addEventListener('change', function(){
    filter();
});

familyFilter.addEventListener('change', function(){
    filter();
});

minMiles.addEventListener('change', function() {
    filter();
});

maxMiles.addEventListener('change', function() {
    filter();
});

minElevation.addEventListener('change', function() {
    filter();
});

maxElevation.addEventListener('change', function() {
    filter();
});