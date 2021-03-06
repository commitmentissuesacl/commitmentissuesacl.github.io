import { auth, favoritesByUserRef } from './firebase/firebase.js';

export function toggleFavorite(route, favoriteIcon) {
    auth.onAuthStateChanged(user => {
        if(user) {
            const userId = user.uid;
            const userFavoritesRef = favoritesByUserRef.child(userId);
            const userFavoriteRouteRef = userFavoritesRef.child(route.id);
            userFavoriteRouteRef.once('value')
                .then(snapshot => {
                    const value = snapshot.val();
                    let isFavorite = false;
                    if(value) {
                        addFavorite();
                    }
                    else {
                        removeFavorite();
                    }
                    function addFavorite() {
                        isFavorite = true;
                        favoriteIcon.src = 'assets/fav-selected.svg';
                    }
                    function removeFavorite() {
                        isFavorite = false;
                        favoriteIcon.src = 'assets/fav-unselected.svg';
                    }
                    favoriteIcon.addEventListener('click', () => {
                        if(isFavorite) {
                            userFavoriteRouteRef.remove();
                            removeFavorite();
                        }
                        else {
                            userFavoriteRouteRef.set({
                                id: route.id,
                                name: route.name,
                                imageMapPage: route.imageMapPage,
                                distance: route.distance,
                                elevation: route.elevation,
                                description: route.description,
                                thumbnailMap: route.thumbnailMap
                            });
                            addFavorite();
                        }
                    });
                });
        }
        else {
            favoriteIcon.classList.add('hidden');
        }
    });
}
