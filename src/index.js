import { auth, usersRef } from './firebase/firebase.js';

const ui = new firebaseui.auth.AuthUI(auth);

auth.onAuthStateChanged(user => {
    if(user){
        window.location = 'routes.html';
    }
});

ui.start('#firebaseui-auth-container', {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: './routes.html?destination=forest-park',
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    callbacks: {
        signInSuccessWithAuthResult(authResult) {
            const user = authResult.user;
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