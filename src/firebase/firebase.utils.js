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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
