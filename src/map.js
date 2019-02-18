import forestParkOptions from './routes/forest-park.js';

const runContainerAll = document.getElementById('run-container-all');
const search = window.location.search;
const searchParams = new URLSearchParams(search);
const routeUrl = searchParams.get('destination');

let routeOptions = null;

if(routeUrl === 'forest-park') {
    routeOptions = forestParkOptions;
}

for(let i = 0; i < routeOptions.length; i++) {
    const route = routeOptions[i];
    console.log(route);

    const runImage = document.createElement('img');
    runImage.src = './assets/fp-marathon1.jpg';
    runImage.alt = 'image of run';
    runImage.classList.add('display-photo');
    const imageContainer = document.createElement('section');
    imageContainer.classList.add('image-container');
    imageContainer.appendChild(runImage);
    runContainerAll.appendChild(imageContainer);

    const runName = document.createElement('h3');
    runName.textContent = route.name;
    const distance = document.createElement('h4');
    distance.textContent = route.distance;
    const elevation = document.createElement('h4');
    elevation.textContent = route.elevation;
    const description = document.createElement('p');
    description.textContent = route.description;
    const runInfoContainer = document.createElement('section');
    runInfoContainer.classList.add('run-info-container');
    runInfoContainer.appendChild(runName);
    runInfoContainer.appendChild(distance);
    runInfoContainer.appendChild(elevation);
    runInfoContainer.appendChild(description);
    runContainerAll.appendChild(runInfoContainer);

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

    runContainerAll.appendChild(runIcons);
}


// build a route obj 
// display routes on map page using DOM
// implement filters






// const forestParkMarathon = {
//     id: 'fp-marathon',
//     name: 'Forest Park Marathon',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales ex quis arcu accumsan sodales. Integer eget felis in augue condimentum vehicula. Proin pretium finibus erat, et placerat arcu. In hac habitasse platea dictumst. Nunc porttitor ornare leo in dapibus. Aliquam nec tincidunt risus. Curabitur ac ullamcorper ipsum. Mauris at.',
//     distance: '26.38',
//     elevation: '100000000',
//     favorite: false,
//      completed: ,
//     imageOne: './assets/fp-marathon1.jpg',
//     imageTwo: '',
//     imageThree: '',
//     thumbnailMap: './assets/fp-marathon-map-thumb.jpg',
//     largeMap: '',
//     extraInfo: '',
//     bathroom: false,
//     familyFriendly: false,
//     // completed to be found in user object
//     gpsCoordinates: '12.345 67.890'
// };



