import { loadRoutes } from './make-html-template.js';

export function filterByMaxMiles(routes, max) {
    return routes.filter(route => parseFloat(route.distance) < parseFloat(max));
}

export function filterByMinMiles(routes, min) {
    return routes.filter(route => parseFloat(route.distance) > parseFloat(min));
}

export function filterByDistance(routes, min, max) {
    const filteredByMin = filterByMinMiles(routes, min);
    return filterByMaxMiles(filteredByMin, max);
}

export function filterByMinElevation(routes, min) {
    return routes.filter(route => parseInt(route.elevation) > parseInt(min));
}

export function filterByMaxElevation(routes, max) {
    return routes.filter(route => parseInt(route.elevation) < parseInt(max));
}

export function filterByElevation(routes, min, max) {
    const filteredByMin = filterByMinElevation(routes, min);
    return filterByMaxElevation(filteredByMin, max);
}

export function filterByBathrooms(routes) {
    return routes.filter(route => route.bathroom);
}

export function filterByFamily(routes) {
    return routes.filter(route => route.familyFriendly);
}

const minMiles = document.getElementById('min-miles');
const maxMiles = document.getElementById('max-miles');
const minElevation = document.getElementById('min-elevation');
const maxElevation = document.getElementById('max-elevation');
const bathroomFilter = document.getElementById('bathroom');
const familyFilter = document.getElementById('family');

export function filterRoutes(allRoutes) {
    let routes = allRoutes;
    const min = minMiles.value;
    const max = maxMiles.value;
    const minElev = minElevation.value;
    const maxElev = maxElevation.value;

    if(bathroomFilter.checked) {
        routes = filterByBathrooms(routes);
    }

    if(familyFilter.checked) {
        routes = filterByFamily(routes);
    }

    routes = filterByElevation(routes, minElev, maxElev);
    routes = filterByDistance(routes, min, max);
    loadRoutes(routes);
}

export default function loadFilter(routes) {
    bathroomFilter.addEventListener('change', () => { filterRoutes(routes); });
    familyFilter.addEventListener('change', () => { filterRoutes(routes); });
    minMiles.addEventListener('change', () => { filterRoutes(routes); });
    maxMiles.addEventListener('change', () => { filterRoutes(routes); });
    minElevation.addEventListener('change', () => { filterRoutes(routes); });
    maxElevation.addEventListener('change', () => { filterRoutes(routes); });

}