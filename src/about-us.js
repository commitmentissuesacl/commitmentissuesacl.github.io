//const userJson = window.localStorage.getItem('user');
const mapNav = document.getElementById('map-nav');
const userNameDisplay = document.getElementById('user-name-display');

// if(!userJson) {
//     window.location = './index.html';
// }

// const user = JSON.parse(userJson);
// userNameDisplay.textContent = user.name;
mapNav.href = 'map.html?destination=' + encodeURIComponent(user.destination);