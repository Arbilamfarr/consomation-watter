import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import PersonCard from "./Card/PersonCard";

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <PersonCard
        firstName="John"
        lastName="Doe"
        waterMeterNumber="789012"
        onEnterConsumption={() => navigation.navigate("WaterConsumptionScreen")}
        onVerifyPayment={() => navigation.navigate("PaymentVerificationScreen")}
      />
      <PersonCard
        firstName="John"
        lastName="Doe"
        waterMeterNumber="789012"
        onEnterConsumption={() => navigation.navigate("WaterConsumptionScreen")}
        onVerifyPayment={() => console.log("Verify Payment pressed")}
      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
