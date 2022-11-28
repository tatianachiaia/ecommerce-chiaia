
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDqsBU96CBLMF0gCPDZdGYBc2Fy6BixFl4",
  authDomain: "ecom-chiaia.firebaseapp.com",
  projectId: "ecom-chiaia",
  storageBucket: "ecom-chiaia.appspot.com",
  messagingSenderId: "593632750476",
  appId: "1:593632750476:web:52563996ec399b64e084a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)