import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import About from "./components/About";
import Home from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{title:'Inicio'}}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{title:'Acerca de'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

