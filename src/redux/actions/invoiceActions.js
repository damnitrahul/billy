import history from '../../others/history';

/* ******************* Create Invoice ******************* */

export const createInvoice = (invoiceDetails) => (
  dispatch,
  getState,
  { getFirebase }
) => {
  dispatch({ type: 'CREATE_BUTTON', payload: true });
  const uid = getState().firebase.auth.uid;
  const currInvoice = getState().firebase.profile.currentInvoice;
  const firestore = getFirebase().firestore();
  let path = '';
  firestore
    .collection('users')
    .doc(uid)
    .collection('invoices')
    .add({ ...invoiceDetails })
    .then((res) => {
      path = res.id;
      firestore
        .collection('users')
        .doc(uid)
        .update({ currentInvoice: currInvoice + 1 });
    })
    .then((res) => {
      dispatch({ type: 'CREATE_INVOICE', payload: invoiceDetails });
      history.push(`/invoice/${path}`);
    })
    .catch((err) => {
      dispatch({ type: 'CREATE_INVOICE_ERROR', err });
      dispatch({ type: 'WENTWRONG_BAR' });
    })
    .finally(() => dispatch({ type: 'CREATE_BUTTON', payload: false }));
};

/* ******************* Delete Invoice ******************* */

export const deleteInovice = (invoiceId) => (
  dispatch,
  getState,
  { getFirebase }
) => {
  const uid = getState().firebase.auth.uid;
  const firestore = getFirebase().firestore();
  firestore
    .collection('users')
    .doc(uid)
    .collection('invoices')
    .doc(invoiceId)
    .delete()
    .then(() => {
      dispatch({ type: 'DELETE_SUCCESS_BAR' });
    })
    .catch((err) => dispatch({ type: 'WENTWRONG_BAR' }));
  if (history.location.pathname !== '/') {
    history.push('/invoices');
  }
};

/* **************** Change Payment Status *************** */

export const updatePaymentStatus = (invoiceId, status) => (
  dispatch,
  getState,
  { getFirebase }
) => {
  const uid = getState().firebase.auth.uid;
  const firestore = getFirebase().firestore();
  firestore
    .collection('users')
    .doc(uid)
    .collection('invoices')
    .doc(invoiceId)
    .update({ paidStatus: status })
    .then(() => {
      dispatch({ type: 'UPDATE_PAYMENT_STATUS' });
    })
    .catch((err) => dispatch({ type: 'WENTWRONG_BAR' }));
};

/* ************* Send Email Invoice Reminder ************ */

export const sendInvoiceMail = (id) => (
  dispatch,
  getState,
  { getFirebase }
) => {
  dispatch({ type: 'EMAILSEND_BUTTON', payload: true });

  const lastReminder = getState()
    .firestore.data.invoices[id].remindedAt.toDate()
    .setHours(0, 0, 0, 0);
  const today = new Date().setHours(0, 0, 0, 0);

  const diff = Math.floor(Math.abs(today - lastReminder) / 1000 / 60 / 60 / 24);

  // Stop Function if Reminded on same Day
  if (diff === 0) {
    dispatch({ type: 'EMAILSEND_BUTTON', payload: false });
    return dispatch({ type: 'EMAILMAXLIMIT_BAR' });
  }

  var invoiceRemindMail = getFirebase()
    .functions()
    .httpsCallable('invoiceRemindMail');
  invoiceRemindMail(id)
    .then((res) => {
      const firestore = getFirebase().firestore();
      const uid = getState().firebase.auth.uid;
      firestore
        .collection('users')
        .doc(uid)
        .collection('invoices')
        .doc(id)
        .update({ remindedAt: new Date() });
    })
    .then(() => {
      dispatch({ type: 'EMAIL_SUCCESS_BAR' });
      dispatch({ type: 'EMAILSEND_BUTTON', payload: false });
    })
    .catch((err) => dispatch({ type: 'WENTWRONG_BAR' }));
};
