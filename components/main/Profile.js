import React from "react";
import { View, Text, Button } from "react-native";
import firebase from "firebase";

export default function ProfileScreen() {
  const onLogout = () => {
    firebase.auth().signOut();
  };
  return (
    <View>
      <Button title="Logout" onPress={() => onLogout()}></Button>
    </View>
  );
}
