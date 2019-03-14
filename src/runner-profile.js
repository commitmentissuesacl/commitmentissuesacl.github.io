import { loadHeader, loadFooter } from './header-template.js';
import { auth, usersRef } from './firebase/firebase.js';

loadHeader();
loadFooter();

const fileUpload = document.getElementById('avatar-upload');
const imageDisplay = document.getElementById('image-display');
const photoForm = document.getElementById('photo-form');

auth.onAuthStateChanged(user => {
    if(!user) {
        window.location = 'routes.html';
    }

    else {
        usersRef.child(user.uid).once('value')
            .then(snapshot => {
                const value = snapshot.val();
                const customPhotoURL = value.customPhotoURL;
                if(customPhotoURL) {
                    imageDisplay.src = customPhotoURL;
                    imageDisplay.classList.remove('hidden');
                }
                if(!customPhotoURL) {
                    imageDisplay.classList.add('hidden');
                }
            });

        fileUpload.addEventListener('change', e => {
            const file = e.target.files[0];

            photoForm.addEventListener('submit', event => {
                event.preventDefault();
                const folderName = user.uid + '/';
                const fileName = 'avatar';
                const ref = firebase.storage().ref(folderName + fileName);
                const uploadTask = ref.put(file);
    
                uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, 
                    function() {
                        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                            imageDisplay.src = downloadURL;
                            imageDisplay.classList.remove('hidden');
                            usersRef.child(user.uid)
                                .update({
                                    customPhotoURL: downloadURL
                                });
                        });

                    });
            });

        });
    }

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