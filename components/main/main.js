import React from "react";
import { View, Text } from "react-native";
import ProfileScreen from "./Profile";
import LoginScreen from "../auth/Login";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
