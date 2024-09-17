import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const PersonCard = ({
  firstName,
  lastName,
  waterMeterNumber,
  onEnterConsumption,
  onVerifyPayment,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>
        {firstName} {lastName}
      </Text>
      <Text style={styles.waterMeterNumber}>
        Water Meter Number: {waterMeterNumber}
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Consumption"
          onPress={onEnterConsumption}
          color="#007BFF" // Blue color for the button
        />
        <Button
          title="Payment"
          onPress={onVerifyPayment}
          color="#28a745" // Green color for the button
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  waterMeterNumber: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20, // Adjust margin as needed
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default PersonCard;
