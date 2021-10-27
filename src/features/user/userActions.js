import cuid from "cuid";
import { toastr } from "react-redux-toastr";
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../async/asyncActions";
// import { SubmissionError } from "redux-form";

export const updateProfile =
  (user) =>
  async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const { isLoaded, isEmpty, ...updatedUser } = user;
    try {
      await firebase.updateProfile(updatedUser);
      toastr.success("Success", "Your Profile has been updated");
    } catch (error) {
      console.log(error);
    }
  };

export const uploadProfileImage =
  (file, fileName) =>
  async (getState, dispatch, { getFirebase, getFirestore }) => {
    const imageName = cuid();
    const firebase = getFirebase();
    const firestore = getFirestore();
    const user = firebase.auth().currentUser;
    const path = `${user.uid}/user_image`;
    const options = {
      name: imageName,
    };

    try {
      dispatch(asyncActionStart());
      // upload the file to firebase storage
      let uploadedFile = await firebase.uploadFile(path, file, null, options);
      // get the url of image
      let downloadURL =
        await uploadedFile.uploadTaskSnapshot.ref.getDownloadURL();
      // get userdoc
      let userDoc = await firestore.get(`users/${user.uid}`);
      // check if user has photo if not then update the profile
      if (!userDoc.data().photoURL) {
        await firebase.updateProfile({
          photoURL: downloadURL,
        });
        await user.updateProfile({
          photoURL: downloadURL,
        });
      }
      // add the image to firestore
      await firestore.add(
        {
          collection: "users",
          doc: user.uid,
          subcollections: [{ collection: "photos" }],
        },
        {
          name: imageName,
          url: downloadURL,
        }
      );

      dispatch(asyncActionFinish());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }
  };

export const deletePhoto =
  (photo) =>
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const user = firebase.auth().currentUser;

    try {
      await firebase.deleteFile(`${user.uid}/user_image/${photo.name}`);
      await firestore.delete({
        collection: "users",
        doc: user.uid,
        subcollections: [{ collection: "photos", doc: photo.id }],
      });
    } catch (error) {
      console.log(error);
      throw new Error("problem deleting the photo");
    }
  };

export const selectMainPhoto =
  (photo) =>
  async (getState, dispatch, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase.updateProfile({
        photoURL: photo.url,
      });
    } catch (error) {
      console.log(error);
      throw new Error("Problem setting main photo");
    }
  };
