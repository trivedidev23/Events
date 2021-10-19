import { LOGIN_USER, SIGN_OUT_USER } from "./authConstants";

const initialState = {
  authenticated: false,
  currentUser: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        authenticated: true,
        currentUser: action.payload.creds.email,
      };
    case SIGN_OUT_USER:
      return {
        authenticated: false,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default authReducer;
