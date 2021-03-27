import firebase from 'firebase';
import config from '../firebase.config';

const db = firebase.initializeApp(config.firebase).firestore();
firebase.analytics();

export default db;