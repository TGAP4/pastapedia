import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDuT13dF2Jph6igFI8mOM1gHrRJRRgNBg0",
  authDomain: "pastapedia-aae8c.firebaseapp.com",
  databaseURL: "https://pastapedia-aae8c.firebaseio.com",
  projectId: "pastapedia-aae8c",
  storageBucket: "pastapedia-aae8c.appspot.com",
  messagingSenderId: "20403042143",
  appId: "1:20403042143:web:ececeaf40aefdfef88a8ea",
  measurementId: "G-CRMG7HDG5Q"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();