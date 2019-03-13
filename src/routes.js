import forestParkOptions from './routes/forest-park.js';
import otherOptions from './routes/other.js';
import makeHtmlTemplate from './make-html-template.js';
import { auth } from './firebase/firebase.js';

const runContainerAll = document.getElementById('run-container-all');
const userNameDisplay = document.getElementById('user-name-display');
const search = window.location.search;
const searchParams = new URLSearchParams(search);
const routeUrl = searchParams.get('destination');

// console.log(JSON.stringify(auth, true, 2));
auth.onAuthStateChanged(user => {
    console.log(user.photoURL);
});

// const userJson = window.localStorage.getItem('user');
// if(!userJson) {
//     window.location = './index.html';
// }
// const user = JSON.parse(userJson);
// userNameDisplay.textContent = user.name;

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