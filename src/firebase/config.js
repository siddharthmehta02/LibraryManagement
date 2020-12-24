import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAnOiTyhlggxpIEjlSRxuVB3O-V-e-8Ywc",
  authDomain: "library-4ad58.firebaseapp.com",
  projectId: "library-4ad58",
  storageBucket: "library-4ad58.appspot.com",
  messagingSenderId: "761963379866",
  appId: "1:761963379866:web:7b08b1c56a540535caf323",
  measurementId: "G-R0HDLDNM5X"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


export { firebase };