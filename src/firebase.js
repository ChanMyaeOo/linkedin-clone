import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDMMaRPLh5pfBq_d7IunEsYc89pjccu3-4",
    authDomain: "linkedin-clone-396a2.firebaseapp.com",
    projectId: "linkedin-clone-396a2",
    storageBucket: "linkedin-clone-396a2.appspot.com",
    messagingSenderId: "154969384505",
    appId: "1:154969384505:web:74380f6eea95f051b98fe8",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
