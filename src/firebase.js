import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB6Zv_I1wWaOguaDM_8swvKsG_wsJWFRHE",
    authDomain: "clone-4e2c8.firebaseapp.com",
    databaseURL: "https://clone-4e2c8.firebaseio.com",
    projectId: "clone-4e2c8",
    storageBucket: "clone-4e2c8.appspot.com",
    messagingSenderId: "854106722392",
    appId: "1:854106722392:web:26c4e1cddefd1a0bd33a2d",
    measurementId: "G-70YGN4P9D7"
})


const auth = firebase.auth();

export {auth};