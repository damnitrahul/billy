import history from '../../others/history';
import defaultSettings from '../../others/defaultInvoiceSettings';

export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch({ type: 'LOGIN_BUTTON', payload: true });
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((data) => {
        dispatch({ type: 'LOGIN_SUCCESS' });
        history.push('/');
      })
      .catch((err) => dispatch({ type: 'LOGIN_ERROR', err }))
      .finally(() => dispatch({ type: 'LOGIN_BUTTON', payload: false }));
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: 'LOGOUT_SUCCESS' });
        history.push('/login');
      });
  };
};

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch({ type: 'REGISTER_BUTTON', payload: true });
    const firebase = getFirebase();
    const firestore = getFirebase().firestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((res) =>
        firestore.collection('users').doc(res.user.uid).set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
          settings: defaultSettings,
          currentInvoice: 1
        })
      )
      .then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
        history.push('/');
      })
      .catch((err) => {
        dispatch({ type: 'SIGNUP_ERROR', err });
      })
      .finally(() => dispatch({ type: 'REGISTER_BUTTON', payload: false }));
  };
};

export const changePassword = (currentPassword, newPassword) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch({ type: 'PASSWORDCHANGE_BUTTON', payload: true });
    dispatch({ type: 'RESET_PASSWORDCHANGE_ERROR' });

    const user = getFirebase().auth().currentUser;

    var cred = getFirebase().auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    user
      .reauthenticateWithCredential(cred)
      .then(() => {
        user.updatePassword(newPassword);
      })
      .then(() => {
        dispatch({ type: 'PASSWORDCHANGE_SUCCESS' });
        history.push('/settings');
      })
      .catch((err) => {
        dispatch({ type: 'PASSWORDCHANGE_ERROR', err });
      })
      .finally(() => {
        dispatch({ type: 'PASSWORD_SUCCESS_BAR' });
        dispatch({ type: 'PASSWORDCHANGE_BUTTON', payload: false });
      });
  };
};

export const forgotPassword = (email) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch({ type: 'FORGOTPASSWORD_BUTTON', payload: true });
    dispatch({ type: 'RESET_FORGOTPASSWORD_ERROR' });

    const auth = getFirebase().auth();

    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        history.push('/login');
      })
      .catch((err) => {
        dispatch({ type: 'FORGOTPASSWORD_ERROR', err });
      })
      .finally(() => {
        dispatch({ type: 'PASSWORDRESET_SUCCESS_BAR' });
        dispatch({ type: 'FORGOTPASSWORD_BUTTON', payload: false });
      });
  };
};

export const updateSetting = (newSetting) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch({ type: 'SETTING_BUTTON', payload: true });

    const uid = getState().firebase.auth.uid;

    const firestore = getFirebase().firestore();

    firestore
      .collection('users')
      .doc(uid)
      .update({
        settings: newSetting
      })
      .then(() => {
        history.push('/settings');
        dispatch({ type: 'SETTINGS_SUCCESS_BAR' });
        dispatch({ type: 'SETTING_BUTTON', payload: false });
      });
  };
};
