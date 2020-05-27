import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAPy1_cpGNl2vJq-ehG4EPW13GmvXkuDx0',
  authDomain: 'trullo-5cf06.firebaseapp.com',
  databaseURL: 'https://trullo-5cf06.firebaseio.com',
  projectId: 'trullo-5cf06',
  storageBucket: 'trullo-5cf06.appspot.com',
  messagingSenderId: '563349246783',
  appId: '1:563349246783:web:0b4e1ad3436bcf72d7398a',
  measurementId: 'G-QDP5J2X0JP'
};

const app = firebase.initializeApp(firebaseConfig);

export const addDocumentToCollection = async (collection, document) => {
  try {
    document.timestamp = firebase.firestore.FieldValue.serverTimestamp();
    return await db.collection(collection).add(document);
  } catch (error) {
    console.error('Error adding document ', document,
      ' to collection ', collection, ' Error: ', error);
    return null;
  }
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = db.doc(`users/${userAuth.uid}`);
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
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const db = firebase.firestore(app);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;