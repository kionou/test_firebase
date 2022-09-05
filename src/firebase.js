import { initializeApp } from "firebase/app";
import 'firebase/auth'
import { getFirestore} from 'firebase/firestore'
import 'firebase/storage'



const firebaseConfig = {
    apiKey: "AIzaSyBoyLsDgqbfoppR9AjbfDPu3DjY7k-PWYM",
    authDomain: "test-firebase-1e34a.firebaseapp.com",
    projectId: "test-firebase-1e34a",
    storageBucket: "test-firebase-1e34a.appspot.com",
    messagingSenderId: "27800385245",
    appId: "1:27800385245:web:c626564f5295fa42b74d34",
    measurementId: "G-SS9WSK96KS"
  };

  const app = initializeApp(firebaseConfig);
  export const data = getFirestore(app)
//   export const usersCollection = data.collection('users')


