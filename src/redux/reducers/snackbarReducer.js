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

    case 'EMAILMAXLIMIT_BAR':
      return { message: 'Can Only Remind Once In A Day' };

    case 'WENTWRONG_BAR':
      return { message: 'Uh oh... Somthing Went Wrong!' };

    default:
      return state;
  }
};
export default snackbarReducer;
