import { loadHeader, loadFooter } from './header-template.js';
import { auth, favoritesByUserRef } from './firebase/firebase.js';
// import { toggleFavorite } from './favorite-component.js';
import objectToArray from './object-to-array.js';
import { loadRoutes } from './make-html-template.js';

loadHeader();
loadFooter();

auth.onAuthStateChanged(user => {
    const userFavoritesRef = favoritesByUserRef.child(user.uid);
    userFavoritesRef.on('value', snapshot => {
        const value = snapshot.val();
        const routes = objectToArray(value);
        loadRoutes(routes);
    });
});