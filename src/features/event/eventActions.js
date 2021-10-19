import {
  CREATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENT,
  UPDATE_EVENT,
} from "./eventConstants";
import { toastr } from "react-redux-toastr";
import { fetchSampleData } from "../../app/sample data/MockAPI";
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../async/asyncActions";

export const createEvent = (event) => {
  return (dispatch) => {
    try {
      dispatch({
        type: CREATE_EVENT,
        payload: {
          event,
        },
      });
      toastr.success("Success!", "Event has been created.");
    } catch (error) {
      toastr.error("Oops", "Something went wrong.");
    }
  };
};
export const updateEvent = (event) => {
  return (dispatch) => {
    try {
      dispatch({
        type: UPDATE_EVENT,
        payload: {
          event,
        },
      });
      toastr.success("Success!", "Event has been updated.");
    } catch (error) {
      toastr.error("Oops", "Something went wrong.");
    }
  };
};
export const deleteEvent = (eventId) => {
  return {
    type: DELETE_EVENT,
    payload: {
      eventId,
    },
  };
};

export const loadEvent = () => {
  return async (dispatch) => {
    try {
      dispatch(asyncActionStart());
      const events = await fetchSampleData();
      dispatch({ type: FETCH_EVENT, payload: { events } });
      dispatch(asyncActionFinish());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }
  };
};
