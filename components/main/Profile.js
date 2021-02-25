import React from "react";
import { View, Text } from "react-native";
import firebase from "firebase";

export default function Profile() {
  const onLogout = () => {
    firebase.auth().signOut();
  };
  return (
    <View>
      <Text>Profile</Text>
      <button title="Logout" onClick={() => onLogout()}>
        Logout
      </button>
    </View>
  );
}
