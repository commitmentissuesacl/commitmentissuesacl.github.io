import { loadHeader, loadFooter } from './header-template.js';

loadHeader();
loadFooter();

const fileUpload = document.getElementById('avatar-upload');

//check for user, if none redirect
//if user, get user id for file name
//upload file with userName = user id
//store reference to file in user database object

fileUpload.addEventListener('change', event => {
    const file = event.target.files[0];
    const fileName = 'userID';
    const ref = firebase.storage().ref('custom-avatar/' + fileName);
    ref.put(file);
});

// const name = document.getElementById('input-name');
// const age = document.getElementById('age');
// const sex = document.getElementById('sex');
// const location = document.getElementById('location');
// const form = document.getElementById('user-info');

// name.value = user.name;
// age.value = user.age;
// sex.value = user.sex;
// location.value = user.location;

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     const formData = new FormData(form);
//     user.name = formData.get('input-name');
//     user.age = formData.get('age');
//     user.sex = formData.get('sex');
//     user.location = formData.get('location');

//     const jsonUser = JSON.stringify(user);
//     window.localStorage.setItem('user', jsonUser);

//     window.history.back();
// });