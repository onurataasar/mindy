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

const Login = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../../assets/images/welcome.png")}
          className="w-32 object-contain h-32"
        />
        <Text className="text-4xl italic font-bold text-white">MINDY</Text>
      </View>
      <View className="flex flex-col w-full items-center gap-4">
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
        <Text
          onPress={() => Vibration.vibrate(500)}
          className="text-white font-light text-sm self-end "
        >
          Forgot password?
        </Text>
      </View>
      <View className="flex justify-between gap-4 flex-row">
        <Pressable
          style={{ transform: clicked ? "translateY(-5px)" : "translateY(0)" }}
          onPress={() => setClicked(!clicked)}
          className="bg-red-500 px-11 flex items-center py-2 rounded-md border-red-600  border-2 shadow-2xl shadow-pink-400"
        >
          <Text className="text-white font-light text-lg">
            Sign in with E-mail
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 25,
    backgroundColor: "darkorange",
    alignItems: "center",
    justifyContent: "center",
    width: "66%",
  },
});

export default Login;
