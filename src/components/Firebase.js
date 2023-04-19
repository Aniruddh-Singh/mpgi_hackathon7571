import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD_iQCzfnlgyC_OHWjAFHrMJHuCLOWl9G8",
    authDomain: "codexhbtu.firebaseapp.com",
    projectId: "codexhbtu",
    databaseURL: "https://codexhbtu-default-rtdb.firebaseio.com",
    storageBucket: "codexhbtu.appspot.com",
    messagingSenderId: "651265305317",
    appId: "1:651265305317:web:95c30761f9528ba3f8820c",
    measurementId: "G-HRKWLD4T1D",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const dbs = getDatabase(app);
