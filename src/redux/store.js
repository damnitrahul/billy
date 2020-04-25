// Firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/firebase-analytics';
import firebaseConfig from '../others/firebaseConfigEnv';

// Redux
import { createStore, compose, applyMiddleware } from 'redux';
import { getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance, reduxFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducers';

// Firebase Init
firebase.initializeApp(firebaseConfig);
firebase.firestore();
firebase.functions();
firebase.analytics();

// React-Redux-Firebase Init
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase })),
    reduxFirestore(firebase, firebaseConfig)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};
