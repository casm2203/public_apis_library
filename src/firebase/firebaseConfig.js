// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC_b4wD64TxBiIA7ri4VI8p9UCYqfbkFHw',
  authDomain: 'public-apis-library.firebaseapp.com',
  projectId: 'public-apis-library',
  storageBucket: 'public-apis-library.appspot.com',
  messagingSenderId: '1047044817880',
  appId: '1:1047044817880:web:64606414757ac0b219a8ad',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };