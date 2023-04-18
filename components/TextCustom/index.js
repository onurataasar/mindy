import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

const TextCustom = ({ children, textClassName }) => {
  return (
    <Text style={styles.text} className={textClassName}>
      {children}
    </Text>
  );
};

/* style={{
  fontFamily: "source-sans",
}} */

const styles = StyleSheet.create({
  text: {
    fontFamily: "Alata",
  },
});

export default TextCustom;
