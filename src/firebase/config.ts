// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAJtzsInlEewASlwtllSxxBEwpbXTPtH60',
  authDomain: 'curso-svelte-ec3bc.firebaseapp.com',
  projectId: 'curso-svelte-ec3bc',
  storageBucket: 'curso-svelte-ec3bc.appspot.com',
  messagingSenderId: '451890026485',
  appId: '1:451890026485:web:21fef5750e668b246a32bc',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleAuth = new GoogleAuthProvider();

export { app, googleAuth };
