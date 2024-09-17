import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./Splash";
import Login from "../Authentification/Login";
import TabNav from "./TabNav";
import SignUp from "../Authentification/SignUp";
import WaterConsumptionScreen from "../Screen/consomationWatter/WaterConsumptionScreen";
import PaymentVerificationScreen from "../Screen/consomationWatter/PaymentVerificationScreen";




const Stack = createNativeStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        options={{ headerShown: false }}
        component={Splash}
      />
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={Login}
      />
      <Stack.Screen
        name="SignUp"
        options={{ headerShown: false }}
        component={SignUp}
      />
      <Stack.Screen
        name="TabNav"
        options={{ headerShown: false }}
        component={TabNav}
      />
      <Stack.Screen
        name="WaterConsumptionScreen"
        options={{ headerShown: false }}
        component={WaterConsumptionScreen}
      />
      <Stack.Screen
        name="PaymentVerificationScreen"
        options={{ headerShown: false }}
        component={PaymentVerificationScreen}
      />
    </Stack.Navigator>
  );
}
