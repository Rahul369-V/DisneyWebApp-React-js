// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAMgTlFG13lQ9iGZYe_lqpTQRiD37aGW3A",
    authDomain: "react-js-disney.firebaseapp.com",
    projectId: "react-js-disney",
    storageBucket: "react-js-disney.appspot.com",
    messagingSenderId: "1027644339010",
    appId: "1:1027644339010:web:d323832c7f5ee9e5f0cedb",
    measurementId: "G-Q0PX86K5JY"
  }

const firebaseApp =firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage =getStorage(firebaseApp);

// export default {auth,provider};
export {auth,provider,storage};
export default db;