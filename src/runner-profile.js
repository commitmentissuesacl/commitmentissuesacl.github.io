import { loadHeader, loadFooter } from './header-template.js';
import { auth, usersRef } from './firebase/firebase.js';

loadHeader();
loadFooter();

const fileUpload = document.getElementById('avatar-upload');
const imageDisplay = document.getElementById('image-display');
const photoForm = document.getElementById('photo-form');

//store reference to file in user database object
//display photo in header and on upload page

auth.onAuthStateChanged(user => {
    if(!user) {
        window.location = 'routes.html';
    }

    else {
        console.log(user.customPhotoUrl);
        if(user.customPhotoUrl) {
            imageDisplay.src = user.customPhotoUrl;
        }
        //check if user has a photo, and add it to imageDisplay

        fileUpload.addEventListener('change', e => {
            const file = e.target.files[0];
            console.log(file);

            photoForm.addEventListener('submit', event => {
                console.log('submit form');
                event.preventDefault();
                const folderName = user.uid + '/';
                const fileName = 'avatar';
                const ref = firebase.storage().ref(folderName + fileName);
                const uploadTask = ref.put(file);
    
                uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, 
                    function() {
                        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                            console.log('File available at', downloadURL);
                            imageDisplay.src = downloadURL;
                            imageDisplay.classList.remove('hidden');
                            //put download url into user database info
                            //THIS DOESN'T WORK
                            usersRef.child(user.uid)
                                .push({
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