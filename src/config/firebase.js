import firebase from 'firebase';

//firebase
var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDJuG3RFXqihWN-sFBb2tA-pp_ccfKnLks",
    authDomain: "shikilia-backend-7ec47.firebaseapp.com",
    databaseURL: "https://shikilia-backend-7ec47-default-rtdb.firebaseio.com",
    projectId: "shikilia-backend-7ec47",
    storageBucket: "shikilia-backend-7ec47.appspot.com",
    messagingSenderId: "840041591604",
    appId: "1:840041591604:web:f1bccc86de2444f3c16b61",
    measurementId: "G-J7BCXK6VEX"
})
//initialize firebase 
var db = firebaseApp.firestore();
var auth = firebase.auth();
var provider= new firebase.auth.GoogleAuthProvider();


// allow sign in from anywhere
export const signIn = e => {
        e.preventDefault();
        auth.signInWithPopup(provider)
        .catch(error =>alert(error.message))
    };


export  {auth, provider, db };