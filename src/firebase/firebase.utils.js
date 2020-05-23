import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
  apiKey: 'AIzaSyC4Bnig4ln9Y4_GouqOZ6Rpp-DGSajE-8Q',
  authDomain: 'rick-morty-f5798.firebaseapp.com',
  databaseURL: 'https://rick-morty-f5798.firebaseio.com',
  projectId: 'rick-morty-f5798',
  storageBucket: 'rick-morty-f5798.appspot.com',
  messagingSenderId: '220696427874',
  appId: '1:220696427874:web:d0d2911722e53906c4c03b',
  measurementId: 'G-C0Y64V3JD2',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date().toDateString();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error);
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
