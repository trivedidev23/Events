import eventReducer from "../../features/event/eventReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  events: eventReducer,
});

export default rootReducer;
