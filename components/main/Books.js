import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

import Timer from "../Timer/Timer";
import Search from "../search/search";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/FontAwesome";

export default function BooksScreen() {
  return (
    <View>
      <Button
        icon={<MaterialCommunityIcons name="plus" color="black" size={26} />}
      />

      <Search></Search>
    </View>
  );
}
