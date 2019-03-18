import { loadHeader, loadFooter } from './header-template.js';
import { auth, favoritesByUserRef } from './firebase/firebase.js';
import objectToArray from './object-to-array.js';
import { loadRoutes } from './make-html-template.js';

const noFavorites = document.getElementById('no-favorites-container');

loadHeader();
loadFooter();

auth.onAuthStateChanged(user => {
    if(!user){
        window.location = 'routes.html';
    }
    else {
        const userFavoritesRef = favoritesByUserRef.child(user.uid);
        userFavoritesRef.on('value', snapshot => {
            const value = snapshot.val();
            if(!value) {
                noFavorites.classList.remove('hidden');
                loadRoutes([]);
            }
            else {
                noFavorites.classList.add('hidden');
                const routes = objectToArray(value);
                loadRoutes(routes);
            }
        });
    }
});