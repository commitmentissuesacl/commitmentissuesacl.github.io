const userJson = window.localStorage.getItem('user');
const mapNav = document.getElementById('map-nav');
const userNameDisplay = document.getElementById('user-name-display');

if(!userJson) {
    window.location = './index.html';
}

const user = JSON.parse(userJson);
userNameDisplay.textContent = user.name;
// encodeURIComponent will only escape non-alphanumeric characters (it also
// won't escape parens, hyphens, etc); the destination value
// doesn't require any encoding. Also this method applies more when
// sending this data to a server, which we aren't doing yet.
// See MDN for details on when you'd want to use encodeURIComponent
mapNav.href = 'map.html?destination=' + encodeURIComponent(user.destination);