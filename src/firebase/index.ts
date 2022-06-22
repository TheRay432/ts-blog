import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAnuL3RqoAZJefJbfJtEA7Ob34L5pnDHmQ",
  authDomain: "ts-blog-b1f45.firebaseapp.com",
  projectId: "ts-blog-b1f45",
  storageBucket: "ts-blog-b1f45.appspot.com",
  messagingSenderId: "743864950891",
  appId: "1:743864950891:web:1cb56da8d70b309441512e",
  measurementId: "G-9FNDSXDQD1",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;
