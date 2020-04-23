const initState = {};
const invoiceReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_INVOICE':
      console.log(action.payload);
      return state;
    case 'CREATE_INVOICE_ERROR':
      console.log(action.err);
      return state;
    case 'DELETE_INVOICE':
      console.log('invoice Deleted');
      return state;
    default:
      return state;
  }
};
export default invoiceReducer;
