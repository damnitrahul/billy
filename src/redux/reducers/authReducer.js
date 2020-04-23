const initState = {
  authError: null,
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return { ...state, authError: action.err };

    case 'LOGIN_SUCCESS':
      return { ...state, authError: null };

    case 'LOGOUT_SUCCESS':
      return { ...state, authError: null };

    case 'SIGNUP_SUCCESS':
      return { ...state, authError: null };

    case 'SIGNUP_ERROR':
      return { ...state, authError: action.err };

    case 'PASSWORDCHANGE_ERROR':
      return { ...state, passChangeError: action.err };

    case 'RESET_PASSWORDCHANGE_ERROR':
      return { ...state, passChangeError: null };

    case 'RESET_AUTH_ERROR':
      return { ...state, authError: null };

    case 'FORGOTPASSWORD_ERROR':
      return { ...state, forgotPassError: action.err };

    case 'RESET_FORGOTPASSWORD_ERROR':
      return { ...state, forgotPassError: null };

    default:
      return state;
  }
};
export default authReducer;
