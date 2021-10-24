import eventReducer from "../../features/event/eventReducer";
import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import modalReducer from "../../features/modals/modalReducer";
import authReducer from "../../features/auth/authReducer";
import asyncReducer from "../../features/async/asyncReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { reducer as ToastrReducer } from "react-redux-toastr";
import userReducer from "../../features/UserD/UserReducer";

const rootReducer = combineReducers({
  events: eventReducer,
  form: FormReducer,
  modals: modalReducer,
  auth: authReducer,
  user: userReducer,
  async: asyncReducer,
  toastr: ToastrReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
