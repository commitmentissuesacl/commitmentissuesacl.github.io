import forestParkOptions from './routes/forest-park.js';
import otherOptions from './routes/other.js';
import makeHtmlTemplate from './make-html-template.js';
import { auth } from './firebase/firebase.js';
import { loadHeader, updateUserNameDisplay } from './header-template.js';

const runContainerAll = document.getElementById('run-container-all');
const userNameDisplay = document.getElementById('user-name-display');
const search = window.location.search;
const searchParams = new URLSearchParams(search);
const routeUrl = searchParams.get('destination');

loadHeader();

// auth.onAuthStateChanged(user => {
//     if(user) {
//         updateUserNameDisplay(user);
//         console.log('there is a logged in user');
//     }
//     else {
//         console.log('there is not a logged in user');
//         //make login button
//     }
// });

let routeOptions = null;

if(routeUrl === 'forest-park') {
    routeOptions = forestParkOptions;
}
else if(routeUrl === 'other') {
    routeOptions = otherOptions;
}
routeOptions = forestParkOptions;

routeOptions.forEach(route => {
    const dom = makeHtmlTemplate(route);
    runContainerAll.appendChild(dom);
});