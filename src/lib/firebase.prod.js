import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDrs1Li_TczwEH3hpUStoTIjqgfbe7oVLM",
  authDomain: "netme-36004.firebaseapp.com",
  databaseURL: "https://netme-36004-default-rtdb.firebaseio.com",
  projectId: "netme-36004",
  storageBucket: "netme-36004.appspot.com",
  messagingSenderId: "131299818746",
  appId: "1:131299818746:web:0c5a37a349940f6464dd43",
  measurementId: "G-Y0ZYDL8SXH",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment
// this so you don't get duplicate data

export { firebase };
