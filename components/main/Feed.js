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
      marginBottom: 25,
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
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
    setTimer(0);
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
