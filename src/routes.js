import forestParkOptions from './routes/forest-park.js';
import otherOptions from './routes/other.js';
import { loadRoutes } from './make-html-template.js';
import { loadHeader, loadFooter } from './header-template.js';
import loadFilter from './filter-component.js';


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
loadFilter(routeOptions);