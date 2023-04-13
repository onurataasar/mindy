import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import Login from "./views/auth-views/login";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 25,
    backgroundColor: "darkorange",
    justifyContent: "center",
  },
});
