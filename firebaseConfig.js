// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyYVlGJ2epoLgaXdd8I5FlITRmSjhr7pM",
  authDomain: "book-haven-d9e84.firebaseapp.com",
  projectId: "book-haven-d9e84",
  storageBucket: "book-haven-d9e84.appspot.com",
  messagingSenderId: "974052287892",
  appId: "1:974052287892:web:30483550a7d94ac62f9b81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Storage and get a reference to the service
const storage = getStorage(app);

export { auth , db , storage };