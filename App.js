import Home from "./views/app-views/home";
import Login from "./views/auth-views/login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from "./components/TabBar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Notifications from "./views/app-views/notifications";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  // ...

  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen
          name="Login"
          options={{
            headerShown: false,
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        >
          {(props) => <Login {...props} />}
        </Tab.Screen>
        <Tab.Screen name="Home">{(props) => <Home {...props} />}</Tab.Screen>
        <Tab.Screen name="Notifications">
          {(props) => <Notifications {...props} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
