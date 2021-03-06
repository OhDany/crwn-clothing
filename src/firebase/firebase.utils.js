import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDBKSPSK0fnG3UHC8rdE0QUabPBXTb4qBU',
  authDomain: 'crwwn-db.firebaseapp.com',
  databaseURL: 'https://crwwn-db.firebaseio.com',
  projectId: 'crwwn-db',
  storageBucket: 'crwwn-db.appspot.com',
  messagingSenderId: '781363541723',
  appId: '1:781363541723:web:957aba27aac6787393befe',
};

export const createUserProfileDocument = async (userAuth, AdditionalData) => {
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
        ...AdditionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
