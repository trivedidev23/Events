import { MODAL_CLOSE, MODAL_OPEN } from "./modalConstants";

const initialState = null;

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return action.payload;
    case MODAL_CLOSE:
      return null;
    default:
      return state;
  }
};

export default modalReducer;
