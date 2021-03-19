import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyBVpmbDr1tyCcluCmOHxYGS01Bx8QESS8Q",
    authDomain: "i-got-a-budget.firebaseapp.com",
    projectId: "i-got-a-budget",
    storageBucket: "i-got-a-budget.appspot.com",
    messagingSenderId: "757992028428",
    appId: "1:757992028428:web:6b46be3d79bcdf413ef129",
    measurementId: "G-T19S5BNXHQ"
}

const db = firebase.initializeApp(config).firestore();
firebase.analytics();

export default db;