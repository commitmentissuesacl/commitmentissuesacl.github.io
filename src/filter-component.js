
export function filterByMaxMiles(routes, maxMiles) {
    return routes.filter(route => route.distance <= maxMiles);
}

export function filterByMinMiles(routes, minMiles) {
    return routes.filter(route => route.distance >= minMiles);
}

export function filterByDistance(routes, minMiles, maxMiles) {
    const filteredByMin = filterByMinMiles(routes, minMiles);
    return filterByMaxMiles(filteredByMin, maxMiles);
}

export function filterByMinElevation(routes, minElev) {
    return routes.filter(route => route.elevation >= minElev);
}

export function filterByMaxElevation(routes, maxElev) {
    return routes.filter(route => route.elevation <= maxElev);
}

export function filterByElevation(routes, minElev, maxElev) {
    const filteredByMin = filterByMinElevation(routes, minElev);
    return filterByMaxElevation(filteredByMin, maxElev);
}

export function filterByBathrooms(routes) {
    return routes.filter(route => route.bathroom);
}

export function filterByFamily(routes) {
    return routes.filter(route => route.familyFriendly);
}