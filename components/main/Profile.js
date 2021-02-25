import React from "react";
import { View, Text, Button } from "react-native";
import firebase from "firebase";

export default function Profile() {
  const onLogout = () => {
    firebase.auth().signOut();
  };
  return (
    <View>
      <Text>Profile</Text>
      <Button title="Logout" onPress={() => onLogout()}></Button>
    </View>
  );
}
