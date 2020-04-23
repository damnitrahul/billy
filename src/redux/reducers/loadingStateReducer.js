const initState = {
  createBtn: false,
  loginBtn: false,
  registerBtn: false
};
const loadingStateReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_BUTTON':
      return { ...state, createBtn: action.payload };
    case 'LOGIN_BUTTON':
      return { ...state, loginBtn: action.payload };
    case 'REGISTER_BUTTON':
      return { ...state, registerBtn: action.payload };
    case 'SETTING_BUTTON':
      return { ...state, settingBtn: action.payload };
    case 'PASSWORDCHANGE_BUTTON':
      return { ...state, passwordBtn: action.payload };
    case 'FORGOTPASSWORD_BUTTON':
      return { ...state, forgotPassBtn: action.payload };
    case 'EMAILSEND_BUTTON':
      return { ...state, emailSendBtn: action.payload };
    default:
      return state;
  }
};
export default loadingStateReducer;
