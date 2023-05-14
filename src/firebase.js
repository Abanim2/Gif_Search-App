import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBzpz2sj44dyy8dlM-iCXnW7NrZmaHVeqk",
  authDomain: "gif-search-f7bc3.firebaseapp.com",
  projectId: "gif-search-f7bc3",
  storageBucket: "gif-search-f7bc3.appspot.com",
  messagingSenderId: "390021268600",
  appId: "1:390021268600:web:b968001f8d1f7fa690d98d"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };