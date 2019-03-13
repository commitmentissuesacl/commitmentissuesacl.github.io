import forestParkOptions from './routes/forest-park.js';
import otherOptions from './routes/other.js';
import makeHtmlTemplate from './make-html-template.js';
import { loadHeader, loadFooter } from './header-template.js';
import { toggleFavorite } from './favorite-component.js';

const runContainerAll = document.getElementById('run-container-all');
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
routeOptions = forestParkOptions;

function loadRoutes(routeOptions) {
    while(runContainerAll.children.length > 0) {
        runContainerAll.lastElementChild.remove();
    }

    routeOptions.forEach(route => {
        const dom = makeHtmlTemplate(route);
        const favoriteIcon = dom.querySelector('#favorite-icon');
        toggleFavorite(route, favoriteIcon);
        
        runContainerAll.appendChild(dom);
    });
}

loadRoutes(routeOptions);