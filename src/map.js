import forestParkOptions from './routes/forest-park.js';
import otherOptions from './routes/other.js';

const runContainerAll = document.getElementById('run-container-all');
const userNameDisplay = document.getElementById('user-name-display');
const search = window.location.search;
const searchParams = new URLSearchParams(search);
const routeUrl = searchParams.get('destination');
const userJson = window.localStorage.getItem('user');

if(!userJson) {
    window.location = './index.html';
}
const user = JSON.parse(userJson);
userNameDisplay.textContent = user.name;

let routeOptions = null;

if(routeUrl === 'forest-park') {
    routeOptions = forestParkOptions;
}
else if(routeUrl === 'other') {
    routeOptions = otherOptions;
}

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
        console.log(routes[i]);
        const route = routeOptions[i];
        console.log(route);
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
    const completedIcon = document.createElement('img');
    completedIcon.classList.add('completed-icon');
    const favoriteIcon = document.createElement('img');
    favoriteIcon.classList.add('favorite-icon');
    const thumbnailMap = document.createElement('img');
    thumbnailMap.classList.add('thumbnail-map');
    
    completedIcon.src = './assets/completed.png';
    if(route.favorite) {
        favoriteIcon.src = './assets/favorite.png';
    }
    else {
        favoriteIcon.src = './assets/not-favorite.png';
    }
    thumbnailMap.src = route.thumbnailMap;
    runIcons.appendChild(completedIcon);
    runIcons.appendChild(favoriteIcon);
    runIcons.appendChild(thumbnailMap);
    
    runContainer.appendChild(runIcons);
    runContainerAll.appendChild(runContainer);
}

bathroomFilter.addEventListener('change', function(){
    filter();
});

familyFilter.addEventListener('change', function(){
    filter();
});

// $(function() {
//     $('#slider-range').slider({
//         range: true,
//         min: 1,
//         max: 50,
//         values: [1, 15],
//         slide: function(event, ui) {
//             $('#amount').val(ui.values[ 0 ] + '- ' + ui.values[ 1 ] + 'mi.');
//         }
//     });
//     $('#amount').val(('#slider-range').slider('values', 0) +
//       '- ' + $('#slider-range').slider('values', 1));
// // });

// let min = $('#slider-range').slider('values', 0);
// let max = $('#slider-range').slider('values', 1);

// console.log(min, max, "!!");
const minMiles = document.getElementById('min-miles');
const maxMiles = document.getElementById('max-miles');

function changeMilesRange() {
    const rangeDisplay = document.getElementById('range-display');
    maxMiles.min = Number(minMiles.value) + 2;
    console.log(minMiles.value, maxMiles.value);
    rangeDisplay.textContent = 'Distance: ' + minMiles.value + ' - ' + maxMiles.value + ' miles';
}

minMiles.addEventListener('change', function() {
    changeMilesRange();
});

maxMiles.addEventListener('change', function() {
    changeMilesRange();
});

// get values from mile sliders
// elevation slider
// button to filter
// event listener to listen for range values to display results