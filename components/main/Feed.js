import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function StopWatch() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#eaeaea",
    },
    title: {
      marginTop: 225,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: "#20232a",
      borderRadius: 6,
      backgroundColor: "#61dafb",
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold",
    },
  });

  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPauded, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const handleStart = () => {
    // start button logic here
  };

  const handlePause = () => {
    // Pause button logic here
  };

  const handleResume = () => {
    // Resume button logic here
  };

  const handleReset = () => {
    // Reset button logic here
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {timer}</Text>

      <Button title="Start" onPress={handleStart}></Button>
      <Button title="Pause" onPress={handlePause}></Button>
      <Button title="Resume" onPress={handleResume}></Button>
      <Button title="Reset" onPress={handleReset}></Button>
    </View>
  );
}
