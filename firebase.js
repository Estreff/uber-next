import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAMWlx2QcMzxB71xz24JW2TLbTiS82moSc',
  authDomain: 'uber-next-d4d0e.firebaseapp.com',
  projectId: 'uber-next-d4d0e',
  storageBucket: 'uber-next-d4d0e.appspot.com',
  messagingSenderId: '194908934142',
  appId: '1:194908934142:web:ef11fba666560b8b007aaf',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
