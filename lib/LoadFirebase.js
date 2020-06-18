import firebase from 'firebase/app';
import 'firebase/firestore';
import { firebaseConfig } from './config';

export function loadFirebase() {
  
    if ( firebase.apps.length === 0){
      firebase.initializeApp(firebaseConfig);
    }
    return firebase;
  }
  