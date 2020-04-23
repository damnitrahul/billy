const initState = {
  message: ''
};

const snackbarReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DELETE_SUCCESS_BAR':
      return { message: 'Invoice Deleted' };

    case 'PASSWORD_SUCCESS_BAR':
      return { message: 'Password Updated' };

    case 'EMAIL_SUCCESS_BAR':
      return { message: 'Email Reminder Sent' };

    case 'SETTINGS_SUCCESS_BAR':
      return { message: 'Settings Updated' };

    case 'PASSWORDRESET_SUCCESS_BAR':
      return { message: 'Password Reset Sent Link on Email' };

    default:
      return state;
  }
};
export default snackbarReducer;
