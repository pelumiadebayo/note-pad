import * as firebase from "firebase"
// Initialize Firebase
const config = {
    apiKey: "AIzaSyCcdGJWLNFvvbHn0sflhpAV0uNqMcSAHiU",
    authDomain: "firestoreredux-c2dd4.firebaseapp.com",
    databaseURL: "https://firestoreredux-c2dd4.firebaseio.com",
    projectId: "firestoreredux-c2dd4",
    storageBucket: "firestoreredux-c2dd4.appspot.com",
    messagingSenderId: "874457723230"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('posts/');
