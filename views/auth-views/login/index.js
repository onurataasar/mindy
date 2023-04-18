import React from "react";
import { useState } from "react";
import {
  Alert,
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  Vibration,
  View,
} from "react-native";
import TextCustom from "../../../components/TextCustom";

const Login = ({ navigation }) => {
  return (
    <View style={styles.login_container}>
      <View>
        <Image
          source={require("../../../assets/images/welcome.png")}
          className="w-32 object-contain h-32"
        />
        <TextCustom textClassName={"text-4xl text-red-500  font-bold"}>
          MINDY
        </TextCustom>
      </View>
      <View className="flex flex-col items-center gap-4 w-full">
        <TextInput
          className="w-full pl-2 border border-amber-400 py-3 rounded-md bg-orange-300 drop-shadow-xl"
          placeholder="📧 E-mail"
          keyboardType="email-address"
        />
        <TextInput
          className="w-full pl-2 border border-amber-400 py-3 rounded-md bg-orange-300 drop-shadow-xl"
          placeholder="🔒 Password"
          keyboardType="twitter"
          passwordRules={"required: upper; required: lower; required: digit;"}
          secureTextEntry={true}
        />
        <TextCustom
          onPress={() => Vibration.vibrate(500)}
          textClassName="text-white font-light text-sm self-end "
        >
          Forgot password?
        </TextCustom>
      </View>
      <View className="flex justify-between gap-4 flex-row">
        <Pressable
          onPress={() => navigation.navigate("Home")}
          className="bg-red-500 w-full flex items-center py-4 rounded-md border-red-600  border-2 shadow-2xl shadow-pink-400"
        >
          <TextCustom textClassName={"text-white font-light text-sm"}>
            Sign in with E-mail
          </TextCustom>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  login_container: {
    flex: 1,
    gap: 25,
    backgroundColor: "darkorange",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
  },
});

export default Login;
