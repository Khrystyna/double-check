import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCEG3EHWV7F7OUjloGqFf6yEynmcw1n0Dc",
  authDomain: "double-check-69bcb.firebaseapp.com",
  databaseURL: "https://double-check-69bcb.firebaseio.com",
  projectId: "double-check-69bcb",
  storageBucket: "double-check-69bcb.appspot.com",
  messagingSenderId: "827499142046"
};

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const auth = firebase.auth();
export default firebase;