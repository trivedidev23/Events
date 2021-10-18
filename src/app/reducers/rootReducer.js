import eventReducer from "../../features/event/eventReducer";
import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";

const rootReducer = combineReducers({
  events: eventReducer,
  form: FormReducer,
});

export default rootReducer;
