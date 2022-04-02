import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyBOite5Cl9y-OuulKwI30CH7KhZyTZA4m0",
    authDomain: "olx-clone-f6d86.firebaseapp.com",
    projectId: "olx-clone-f6d86",
    storageBucket: "olx-clone-f6d86.appspot.com",
    messagingSenderId: "400344210875",
    appId: "1:400344210875:web:89ba10e990f7dd6198b89e",
    measurementId: "G-S1GPJPT2G2"
  };

  export const firebase = initializeApp(firebaseConfig)
  export const auth = getAuth(firebase)
  export const db = getFirestore(firebase);
  export const storage = getStorage(firebase)

  