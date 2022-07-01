import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAwN3IIOeleFsF04R8Q67ih0wlo9wYbUAo",
  authDomain: "note-ify-99caa.firebaseapp.com",
  databaseURL: "https://note-ify-99caa-default-rtdb.firebaseio.com",
  projectId: "note-ify-99caa",
  storageBucket: "note-ify-99caa.appspot.com",
  messagingSenderId: "966722318386",
  appId: "1:966722318386:web:1e35044987410c49164c2b",
  measurementId: "G-3ENLMY02JG"
};

export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)