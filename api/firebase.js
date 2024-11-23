import firebase from "firebase/compat/app";
import 'firebase/database';
// no estoy guardando estas clavez en un punto env
const firebaseConfig = {
    apiKey: "AIzaSyBBXR-7qRJnyzzFLcUL65cpT7eLjM5JhFs",
    authDomain: "my-user-proyect-db-firebase.firebaseapp.com",
    databaseURL: "https://my-user-proyect-db-firebase.firebaseio.com",
    projectId: "my-user-proyect-db-firebase",
    storageBucket: "my-user-proyect-db-firebase.appspot.com",
    messagingSenderId: "295855733795",
    appId: "1:295855733795:android:406d5f5753bb3ba9988596"
};

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }


  export default firebase;