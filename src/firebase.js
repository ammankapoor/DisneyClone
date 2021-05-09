import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDkdBITFF21pmlgJzEvUJlPmvCpU4ulPUc",
    authDomain: "disneyplus-clone-e208e.firebaseapp.com",
    projectId: "disneyplus-clone-e208e",
    storageBucket: "disneyplus-clone-e208e.appspot.com",
    messagingSenderId: "525634423624",
    appId: "1:525634423624:web:7656e659bf3b0e0ff4c17d",
    measurementId: "G-X18RYLZYQY"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage};
export default db;