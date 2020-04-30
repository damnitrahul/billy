const initState = {};
const invoiceReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_INVOICE':
      return state;
    case 'CREATE_INVOICE_ERROR':
      return state;
    case 'DELETE_INVOICE':
      return state;
    default:
      return state;
  }
};
export default invoiceReducer;
