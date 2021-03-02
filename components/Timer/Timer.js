import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import useTimer from "../hook/useTimer";
import { formatTime } from "../utils";

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

const Timer = () => {
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  } = useTimer(0);

  return (
    <View>
      <Text style={styles.title}> {formatTime(timer)}</Text>
      {!isActive && !isPaused ? (
        <Button title="Start" onPress={handleStart}></Button>
      ) : isPaused ? (
        <Button title="Pause" onPress={handlePause}></Button>
      ) : (
        <Button title="Resume" onPress={handleResume}></Button>
      )}

      <Button title="Reset" disabled={!isActive} onPress={handleReset}></Button>
    </View>
  );
};

export default Timer;
