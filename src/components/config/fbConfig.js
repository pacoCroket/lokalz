import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";
import "firebase/auth";

export const fbConfig = {
    apiKey: "AIzaSyAoM6QHagKb1zwYwDjUC0_BTDZsn_6NrRY",
    authDomain: "lokalz.firebaseapp.com",
    databaseURL: "https://lokalz.firebaseio.com",
    projectId: "lokalz",
    storageBucket: "lokalz.appspot.com",
    messagingSenderId: "238230218877",
    appId: "1:238230218877:web:b2ace496592420cbeaa914",
    measurementId: "G-YQWDS89X75"
};
// initialize Firebase with config
firebase.initializeApp(fbConfig);
export const db = firebase.firestore();

export default firebase;
