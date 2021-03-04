import { USER_STATE_CHANGE } from "../constants/index";
import firebase from "firebase";
import { USER_STATE_CHANGE } from "../constants";

export function fetchUser() {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("user")
      .doc(firebase.autch().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data() });
        } else {
          console.log("does not exist");
        }
      });
  };
}
