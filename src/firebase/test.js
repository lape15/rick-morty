import App from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyC4Bnig4ln9Y4_GouqOZ6Rpp-DGSajE-8Q',
  authDomain: 'rick-morty-f5798.firebaseapp.com',
  databaseURL: 'https://rick-morty-f5798.firebaseio.com',
  projectId: 'rick-morty-f5798',
  storageBucket: 'rick-morty-f5798.appspot.com',
  messagingSenderId: '220696427874',
  appId: '1:220696427874:web:d0d2911722e53906c4c03b',
  measurementId: 'G-C0Y64V3JD2',
};
App.initializeApp(firebaseConfig);
class Firebase {
  constructor() {
    this.auth = App.auth();
    this.db = App.firestore();
    this.provider = new App.auth.GoogleAuthProvider();
    this.loginProvider = this.provider.setCustomParameters({
      prompt: 'select_account',
    });
  }
  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  async register(displayName, email, password, confirmPassword) {
    const createdAt = new Date().toDateString();
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName,
      email,
      createdAt,
    });
  }
  logOut() {
    return this.auth.signOut();
  }
  getUser() {
    return this.auth.currentUser();
  }

  authChange(user) {
    return this.auth.onAuthStateChanged(user);
  }
  // signInWithGoogle() {
  //   return this.auth.signInWithPopup(this.loginProvider);
  // }
}
const auth = App.auth();
const provider = new App.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default new Firebase();
