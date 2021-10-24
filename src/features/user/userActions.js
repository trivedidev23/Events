import { toastr } from "react-redux-toastr";
import { SubmissionError } from "redux-form";

export const updateProfile =
  (user) =>
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    console.log(user);
    var currUser = firebase.auth().currentUser;

    try {
      await firestore
        .collection("users")
        .doc(`${user.uid}`)
        .set(
          {
            displayName: user.displayName,
            gender: user.gender,
            dateOfBirth: user.dateOfBirth,
            city: user.city,
            photoURL: currUser.photoURL ? currUser.photoURL : user.photoURL,
          },
          { merge: true }
        );
      await currUser.updateProfile(user);
      toastr.success("Success", "Your Profile has been updated");
    } catch (error) {
      // SubmissionError
      console.log(error);
    }
  };

export const getUserByEmail =
  (email) =>
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log(email);
    const firebase = getFirebase();
    const firestore = getFirestore();

    firestore
      .collection("users")
      .get()
      .then((querySnapshot) => {
        const userArray = [];
        querySnapshot.forEach((element) => {
          var data = element.data();
          userArray.push(data);
        });

        dispatch({
          type: "LOAD_USER",
          payload: userArray,
        });
      })
      .catch((err) => {});
  };
