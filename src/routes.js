import forestParkOptions from './routes/forest-park.js';
import otherOptions from './routes/other.js';
import makeHtmlTemplate from './make-html-template.js';
import { loadHeader, loadFooter } from './header-template.js';
// import { auth, favoritesByUserRef } from './firebase/firebase.js';
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
        
        // auth.onAuthStateChanged(user => {
        //     if(user) {
        //         const userId = user.uid;
        //         const userFavoritesRef = favoritesByUserRef.child(userId);
        //         const userFavoriteRouteRef = userFavoritesRef.child(route.id);
        //         userFavoriteRouteRef.once('value')
        //             .then(snapshot => {
        //                 const value = snapshot.val();
        //                 let isFavorite = false;
        //                 if(value) {
        //                     addFavorite();
        //                 }
        //                 else {
        //                     removeFavorite();
        //                 }
                
        //                 function addFavorite() {
        //                     isFavorite = true;
        //                     favoriteIcon.src = 'assets/fav-selected.svg';
        //                 }
                
        //                 function removeFavorite() {
        //                     isFavorite = false;
        //                     favoriteIcon.src = 'assets/fav-unselected.svg';
        //                 }
                
        //                 favoriteIcon.addEventListener('click', () => {
        //                     if(isFavorite) {
        //                         userFavoriteRouteRef.remove();
        //                         removeFavorite();
        //                     }
        //                     else {
        //                         userFavoriteRouteRef.set({
        //                             id: route.id,
        //                             name: route.name
        //                         });
        //                         addFavorite();
        //                     }
        //                 });
        //             });
        //     }
        //     else {
        //         favoriteIcon.classList.add('hidden');
        //     }
        // });

        runContainerAll.appendChild(dom);
    });
}

loadRoutes(routeOptions);