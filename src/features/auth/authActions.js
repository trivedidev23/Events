import { closeModal } from "../modals/modalActions";
import { SubmissionError, reset } from "redux-form";
import { toastr } from "react-redux-toastr";

export const login = (creds) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(creds.email, creds.password);

      const user = firebase.auth().currentUser;
      firestore
        .collection("users")
        .doc(`${user.uid}`)
        .get()
        .then((doc) => {
          const userArray = [];
          console.log(user.uid);
          if (doc.exists) {
            dispatch({
              type: "LOAD_USER",
              payload: doc.data(),
            });
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });

      dispatch(closeModal());
    } catch (error) {
      throw new SubmissionError({
        _error: error.message,
      });
    }
  };
};

export const registerUser =
  (user) =>
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    try {
      let createdUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);
      console.log(createdUser);
      await createdUser.user.updateProfile({
        displayName: user.displayName,
      });
      let newUser = {
        displayName: user.displayName,
        createdAt: firestore.FieldValue.serverTimestamp(),
      };
      await firestore.set(`users/${createdUser.user.uid}`, { ...newUser });
      const currUser = firebase.auth().currentUser;
      firestore
        .collection("users")
        .doc(`${currUser.uid}`)
        .get()
        .then((doc) => {
          const userArray = [];
          if (doc.exists) {
            dispatch({
              type: "LOAD_USER",
              payload: doc.data(),
            });
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });

      dispatch(closeModal());
    } catch (error) {
      console.log(error.message);
      throw new SubmissionError({
        _error: error.message,
      });
    }
  };

export const socialLogin =
  (selectedProvider) =>
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    try {
      dispatch(closeModal());
      const user = await firebase.login({
        provider: selectedProvider,
        type: "popup",
      });
      if (user.additionalUserInfo.isNewUser) {
        await firestore.set(`users/${user.user.uid}`, {
          displayName: user.profile.displayName,
          photoURL: user.profile.photoURL,
          createdAt: firestore.FieldValue.serverTimestamp(),
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

export const updatePassword =
  (creds) =>
  async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const user = firebase.auth().currentUser;
    try {
      await user.updatePassword(creds.newPassword1);
      await dispatch(reset("account"));
      toastr.success("success", "Your Password has been updated");
    } catch (error) {
      console.log(error);
      throw new SubmissionError({
        _error: error.message,
      });
    }
  };
