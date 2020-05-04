import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAD-br0L1DteAOBukpAIp9fnCAVE3GK-qc",
  authDomain: "crwn-db-309ac.firebaseapp.com",
  databaseURL: "https://crwn-db-309ac.firebaseio.com",
  projectId: "crwn-db-309ac",
  storageBucket: "crwn-db-309ac.appspot.com",
  messagingSenderId: "860935265872",
  appId: "1:860935265872:web:4cce847d44f67fea293b55",
  measurementId: "G-3XYR3K2D47",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
