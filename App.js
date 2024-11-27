import * as React from "react";
import { Text, View } from "react-native";
import {
  createStaticNavigation,
  useNavigation
} from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyListScreen  from "./screens/MyListScreen"; 
import  MyTodoScreen from "./screens/MyTodoScreen"; 
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen"; 
import SignUpScreen from "./screens/SignUpScreen"; 

const MyTabs = createBottomTabNavigator({
  screens: {
    MyTodo: MyTodoScreen,
    MyList: MyListScreen
  }
});

const TabsNavigation = createStaticNavigation(MyTabs);

const MyStack = createStackNavigator({
  screens: {
    Login: LoginScreen,
    SignUp: SignUpScreen
  }
});

const StackNavigation = createStaticNavigation(MyStack);

export default function App() {

  const [isUserLoggedIn, setIsUserLoggedIn] =  React.useState(true);

  return !isUserLoggedIn ? <StackNavigation  /> : <TabsNavigation />;
}
