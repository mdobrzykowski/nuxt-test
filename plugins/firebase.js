import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

if(!firebase.apps.length){
    firebase.initializeApp({
        apiKey: "AIzaSyArHpmf_G-gVJuLErXVpT1RFA5N2aagnAE",
        authDomain: "nuxt-firebase-stripe-template.firebaseapp.com",
        projectId: "nuxt-firebase-stripe-template",
        storageBucket: "nuxt-firebase-stripe-template.appspot.com",
        messagingSenderId: "1068011033744",
        appId: "1:1068011033744:web:a8cdc15dd2167501187415",
        measurementId: "G-DL5JDT0L86"
    });
}

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const firestore = firebase.firestore();

// 
auth.useEmulator("http://localhost:9099");
firestore.useEmulator("localhost", 8080);
// 

export default (ctx, inject) => {
    inject("auth", auth),
    inject("firebase", firebase),
    inject("firestore", firestore),
    inject("googleAuthProvider", googleAuthProvider)
};