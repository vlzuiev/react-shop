import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBfu9wpv60Z5uYXbFJod7rQwIr_Pf8-Rek",
  authDomain: "firstprj-cbc75.firebaseapp.com",
  databaseURL: "https://firstprj-cbc75.firebaseio.com",
  projectId: "firstprj-cbc75",
  storageBucket: "firstprj-cbc75.appspot.com",
  messagingSenderId: "11013486235",
  appId: "1:11013486235:web:aa5f789f6814a6dbfef83e",
  measurementId: "G-FXK8Y532CX"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData })
    }
    catch (err) {
      console.log(`Error during creation: ${err}`);
    }
  }

  return userRef;
}

export const updateUserProfileDocument = async (userAuth, dataToUpdate) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  try {
    await userRef.set({ ...dataToUpdate }, { merge: true })
  }
  catch (err) {
    console.log(`Error during creation: ${err}`);
  }

  return userRef;
}

export const getUserCartRef = async (userId) => {
  if (!userId) return;
 
  const cartRef = firestore.collection('carts').where('userId', '==', userId);
  
  const snapShot = await cartRef.get();

  if (snapShot.empty) {
    const cartDocRef = firestore.collection('carts').doc();
    await cartDocRef.set({ userId, cartItems: [] }); 
    return cartDocRef;
  } else { 
    return snapShot.docs[0].ref;
  }
} 

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  });
}  

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ promt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;