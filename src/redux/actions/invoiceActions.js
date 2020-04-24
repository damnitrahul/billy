import history from '../../others/history';

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
      console.log(err);
      dispatch({ type: 'CREATE_INVOICE_ERROR', err });
    })
    .finally(() => dispatch({ type: 'CREATE_BUTTON', payload: false }));
};

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
    });
  history.push('/invoices');
};

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
    });
};

export const sendInvoiceMail = (id) => (
  dispatch,
  getState,
  { getFirebase }
) => {
  dispatch({ type: 'EMAILSEND_BUTTON', payload: true });
  var invoiceRemindMail = getFirebase()
    .functions()
    .httpsCallable('invoiceRemindMail');
  invoiceRemindMail(id).then((res) => {
    dispatch({ type: 'EMAIL_SUCCESS_BAR' });
    dispatch({ type: 'EMAILSEND_BUTTON', payload: false });
    console.log(res);
  });
};
