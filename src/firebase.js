import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAhh3nvWp0lwrcaHx3YxqaU0rFv0ge4OPc",
    authDomain: "banking-blockchain.firebaseapp.com",
    projectId: "banking-blockchain",
    storageBucket: "banking-blockchain.appspot.com",
    messagingSenderId: "1003504952164",
    appId: "1:1003504952164:web:894a7c80c5b2203fee1071"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export default db;