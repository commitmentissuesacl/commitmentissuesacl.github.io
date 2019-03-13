import { loadHeader, loadFooter } from './header-template.js';
import { auth, favoritesByUserRef } from './firebase/firebase.js';
import { toggleFavorite } from './favorite-component.js';

const favoritesContainer = document.getElementById('favorites-container');

loadHeader();
loadFooter();
