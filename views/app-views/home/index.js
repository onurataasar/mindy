import React from "react";
import { Text, View } from "react-native";

const Home = ({ navigation, route }) => {
  return (
    <View>
      <Text className="text-4xl font-semibold">{"route.params"}</Text>
    </View>
  );
};

export default Home;
