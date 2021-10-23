import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCLMUNCytG6j_C3QySxqMlzNfIA6TwDWQI",
    authDomain: "alan-c39cf.firebaseapp.com",
    projectId: "alan-c39cf",
    storageBucket: "alan-c39cf.appspot.com",
    messagingSenderId: "245354185123",
    appId: "1:245354185123:web:b1f9243fb5e01fbe421a16"
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
// export const projectdb = firebase.database().ref();