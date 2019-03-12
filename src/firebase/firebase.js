const config = {
    apiKey: 'AIzaSyB37E7a1WcuVg6sHdsE_-HOD9eLB_XB-yo',
    authDomain: 'the-runs.firebaseapp.com',
    databaseURL: 'https://the-runs.firebaseio.com',
    projectId: 'the-runs',
    storageBucket: 'the-runs.appspot.com',
    messagingSenderId: '875809462063'
};

firebase.initializeApp(config);

export const auth = firebase.auth();