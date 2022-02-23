import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD8ukUL3DMIUEEa8zbVUdqGJ_7siOsYyh0",
  authDomain: "image-community-b8b26.firebaseapp.com",
  projectId: "image-community-b8b26",
  storageBucket: "image-community-b8b26.appspot.com",
  messagingSenderId: "908833000947",
  appId: "1:908833000947:web:148fe1ef8e3d25809b5686",
  measurementId: "G-67F2FSK0JM"
};

export default firebase.initializeApp(firebaseConfig);

export const apiKey = firebaseConfig.apiKey;
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();