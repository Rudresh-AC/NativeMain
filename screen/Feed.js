import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Personal from "../screen/Personal";
import Professional from "../screen/Professional";
import Home from "../screen/Home";

const Tab = createBottomTabNavigator();

export default function Feed() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Personal"
        component={Personal}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Professional"
        component={Professional}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
