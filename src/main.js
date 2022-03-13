import { createApp } from 'vue'
import App from './App.vue'
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var firebaseConfig = {
    apiKey: "AIzaSyDwO_QADTHKK3C1b9Nt0i1YcDWpKRnDfnM",
    authDomain: "whynot-29910.firebaseapp.com",
    projectId: "whynot-29910",
    storageBucket: "whynot-29910.appspot.com",
    messagingSenderId: "527390837538",
    appId: "1:527390837538:web:20d2acaaaeea047e98337b",
    measurementId: "G-Q2R5C4Q187"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

const rooms = [];
db.collection('rooms').get().then((result)=>{
    result.forEach(doc => {
        rooms.push(doc.data());
    })
});
console.log(rooms)

export { db, storage, rooms }


createApp(App).mount('#app')
