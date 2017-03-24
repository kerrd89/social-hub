import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCmMEm0awSukrbB0kVkYhxV1UNDXEbmF1U",
    authDomain: "content-aggregation.firebaseapp.com",
    databaseURL: "https://content-aggregation.firebaseio.com",
    storageBucket: "content-aggregation.appspot.com",
    messagingSenderId: "303974345066"
  };
  firebase.initializeApp(config);

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export const signIn = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export const reference = firebase.database().ref('users');

export default firebase;
