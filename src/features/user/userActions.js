import { toastr } from "react-redux-toastr";
// import { SubmissionError } from "redux-form";

export const updateProfile =
  (user) =>
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const { isLoaded, isEmpty, ...updatedUser } = user;
    try {
      await firebase.updateProfile(updatedUser);
      toastr.success("Success", "Your Profile has been updated");
    } catch (error) {
      console.log(error);
    }
  };
