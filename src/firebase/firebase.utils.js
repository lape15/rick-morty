import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const config = {
  apiKey: 'AIzaSyC4Bnig4ln9Y4_GouqOZ6Rpp-DGSajE-8Q',
  authDomain: 'rick-morty-f5798.firebaseapp.com',
  databaseURL: 'https://rick-morty-f5798.firebaseio.com',
  projectId: 'rick-morty-f5798',
  storageBucket: 'rick-morty-f5798.appspot.com',
  messagingSenderId: '220696427874',
  appId: '1:220696427874:web:d0d2911722e53906c4c03b',
  measurementId: 'G-C0Y64V3JD2',
}
firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase
