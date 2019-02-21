const userJson = window.localStorage.getItem('user');
const mapNav = document.getElementById('map-nav');
const userNameDisplay = document.getElementById('user-name-display');

let user = {
    name: '',
    age: '',
    sex: '',
    location: '',
    destination: ''
};

if(userJson) {
    user = JSON.parse(userJson);
}

userNameDisplay.textContent = user.name;
mapNav.href = 'map.html?destination=' + encodeURIComponent(user.destination);

const name = document.getElementById('input-name');
const age = document.getElementById('age');
const sex = document.getElementById('sex');
const location = document.getElementById('location');
const form = document.getElementById('user-info');

name.value = user.name;
age.value = user.age;
sex.value = user.sex;
location.value = user.location;

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    user.name = formData.get('input-name');
    user.age = formData.get('age');
    user.sex = formData.get('sex');
    user.location = formData.get('location');

    const jsonUser = JSON.stringify(user);
    window.localStorage.setItem('user', jsonUser);

    window.history.back();
});