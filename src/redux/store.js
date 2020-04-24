import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; // <- needed if using firestore
import 'firebase/functions';
import { createStore, compose, applyMiddleware } from 'redux';
import { getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance, reduxFirestore } from 'redux-firestore';
import firebaseConfig from '../others/firebaseConfigEnv';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducers';
console.log(process.env);
firebase.initializeApp(firebaseConfig);
firebase.firestore();
firebase.functions();
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase })),
    reduxFirestore(firebase, firebaseConfig),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};
