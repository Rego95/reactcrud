import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAX6BHvU0pbJWxMt_lDVuCKYEbH_emZFfE",
  authDomain: "crudreact-6fe40.firebaseapp.com",
  projectId: "crudreact-6fe40",
  storageBucket: "crudreact-6fe40.appspot.com",
  messagingSenderId: "542710877236",
  appId: "1:542710877236:web:227d28886fe21e3ff0ce61"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};