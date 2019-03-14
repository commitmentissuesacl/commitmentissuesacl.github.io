import forestParkOptions from './routes/forest-park.js';
import otherOptions from './routes/other.js';
import { loadRoutes } from './make-html-template.js';
import { loadHeader, loadFooter } from './header-template.js';


const search = window.location.search;
const searchParams = new URLSearchParams(search);
const routeUrl = searchParams.get('destination');

loadHeader();
loadFooter();

let routeOptions = null;

if(routeUrl === 'forest-park') {
    routeOptions = forestParkOptions;
}
else if(routeUrl === 'other') {
    routeOptions = otherOptions;
}
else {
    routeOptions = forestParkOptions;
}

loadRoutes(routeOptions);

const minMiles = document.getElementById('min-miles');
const maxMiles = document.getElementById('max-miles');
const minElevation = document.getElementById('min-elevation');
const maxElevation = document.getElementById('max-elevation');
const bathroomFilter = document.getElementById('bathroom');
const familyFilter = document.getElementById('family');