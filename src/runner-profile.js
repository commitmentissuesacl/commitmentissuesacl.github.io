import { loadHeader, loadFooter } from './header-template.js';
import { auth, usersRef } from './firebase/firebase.js';

loadHeader();
loadFooter();

const fileUpload = document.getElementById('avatar-upload');
const imageDisplay = document.getElementById('image-display');
const photoForm = document.getElementById('photo-form');

const name = document.getElementById('input-name');
const age = document.getElementById('age');
const gender = document.getElementById('gender');
const location = document.getElementById('location');
const form = document.getElementById('user-info');

auth.onAuthStateChanged(user => {
    if(!user) {
        window.location = 'routes.html';
    }

    else {
        //get custom photo from user database info
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
        //get file from user
        fileUpload.addEventListener('change', e => {
            const file = e.target.files[0];
            //add file to storage
            photoForm.addEventListener('submit', event => {
                event.preventDefault();
                const folderName = user.uid + '/';
                const fileName = 'avatar';
                const ref = firebase.storage().ref(folderName + fileName);
                const uploadTask = ref.put(file);
                //add reference to photo to user database
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

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(form);
        
            usersRef.child(user.uid)
                .update({
                    age: formData.get('age'),
                    gender: formData.get('gender'),
                    location: formData.get('location')
                });
            window.alert('User info updated');     
        });

    }

});



// set form values with existing data
// name.value = user.name;
// age.value = user.age;
// gender.value = user.gender;
// location.value = user.location;

