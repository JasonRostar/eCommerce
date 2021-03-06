import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDxm6gJulJk7xZgDZ_JwcscmgLQrhmPk98",
    authDomain: "crwn-db-ab10f.firebaseapp.com",
    databaseURL: "https://crwn-db-ab10f.firebaseio.com",
    projectId: "crwn-db-ab10f",
    storageBucket: "crwn-db-ab10f.appspot.com",
    messagingSenderId: "60566177476",
    appId: "1:60566177476:web:8676b3be1a019754ad6b91",
    measurementId: "G-E07PZVCED3"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = userRef.get();

  console.log(snapShot)

  console.log(firestore.doc('users/128fdashadu'))

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;

}  

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;