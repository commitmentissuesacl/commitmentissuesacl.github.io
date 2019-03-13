import { auth, usersRef } from './firebase/firebase.js';

const ui = new firebaseui.auth.AuthUI(auth);

ui.start('#firebaseui-auth-container', {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: './routes.html?destination=forest-park',
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    callbacks: {
        signInSuccessWithAuthResult(authResult) {
            const user = authResult.user;
            console.log(user);
            usersRef.child(user.uid)
                .set({
                    uid: user.uid,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                });
            return true;
        }
    }
});



// const userNameForm = document.getElementById('user-name');
// const destinationForm = document.getElementById('destination-form');
// const destinationDropdown = document.getElementById('destination-dropdown');
// const userNameDisplay = document.getElementById('user-name-display');
// const userNameContainer = document.getElementById('user-name-container');
// const selectForm = document.getElementById('destination-dropdown');

// const user = {
//     name: '',
//     age: '',
//     sex: '',
//     location: '',
//     destination: ''
// };

// userNameForm.addEventListener('submit', function(event) {
//     event.preventDefault();
//     const formData = new FormData(userNameForm);
//     user.name = formData.get('name');
//     userNameForm.classList.remove('user-name');
//     userNameForm.classList.add('hidden');
//     destinationForm.hidden = false;

//     selectForm.classList.remove('hidden');
    
//     userNameContainer.hidden = false;
//     userNameDisplay.textContent = user.name;
// });

// destinationDropdown.addEventListener('change', function() {
//     const formData = new FormData(destinationForm);
//     const destinationChoice = formData.get('destination-dropdown');
//     user.destination = destinationChoice;

//     const userJson = JSON.stringify(user);
//     window.localStorage.setItem('user', userJson);
//     window.location = './map.html?destination=' + encodeURIComponent(destinationChoice);
// });