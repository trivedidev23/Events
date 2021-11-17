import { DELETE_EVENT, FETCH_EVENT } from "./eventConstants";
import { toastr } from "react-redux-toastr";
import { fetchSampleData } from "../../app/sample data/MockAPI";
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../async/asyncActions";
import { createNewEvent } from "../../app/common/Utils/helpers";

export const createEvent = (event) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const user = firebase.auth().currentUser;
    const photoURL = getState().firebase.profile.photoURL;
    const newEvent = createNewEvent(user, photoURL, event);

    try {
      let createdEvent = await firestore.add("events", newEvent);
      await firestore.set(`event_attendee/${createdEvent.id}_${user.uid}`, {
        eventId: createdEvent.id,
        userUid: user.uid,
        eventDate: event.date,
        host: true,
      });
      toastr.success("Success!", "Event has been created.");
      return createdEvent;
    } catch (error) {
      toastr.error("Oops", "Something went wrong.");
    }
  };
};
export const updateEvent = (event) => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    try {
      await firestore.update(`events/${event.id}`, event);
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
