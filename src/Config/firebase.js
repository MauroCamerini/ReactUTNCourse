import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBthS-HYPEAA7SPfM8XSaci-IGvOGA6N9U",
    authDomain: "utn-utn.firebaseapp.com",
    projectId: "utn-utn",
    storageBucket: "utn-utn.appspot.com",
    messagingSenderId: "1092444842138",
    appId: "1:1092444842138:web:6b83034888a752d8f5d723"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const FirebaseAuth = firebase.auth()
  firebase.db = firebase.firestore()

  export default firebase