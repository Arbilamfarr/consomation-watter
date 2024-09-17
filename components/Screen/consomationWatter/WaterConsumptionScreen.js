import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const WaterConsumptionScreen = () => {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [consumption, setConsumption] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    setModalVisible(true);
  };

  const handlePasswordSubmit = () => {
    // Verify password (for demonstration purposes, we'll assume '1234' is the correct password)
    if (password === "1234") {
      Alert.alert("Success", "Consumption recorded successfully.");
      // Here you would handle the submission logic, e.g., API call
      setModalVisible(false);
      setPassword("");
    } else {
      Alert.alert("Error", "Incorrect password.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Record Water Consumption</Text>
      <Picker
        selectedValue={month}
        onValueChange={(itemValue) => setMonth(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select Month" value="" />
        <Picker.Item label="January" value="January" />
        <Picker.Item label="February" value="February" />
        {/* Add other months here */}
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Year"
        keyboardType="numeric"
        value={year}
        onChangeText={(text) => setYear(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Water Consumption (m³)"
        keyboardType="numeric"
        value={consumption}
        onChangeText={(text) => setConsumption(text)}
      />
      <Button title="Submit" onPress={handleSubmit} color="#007BFF" />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Enter Password for Verification
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <Button
              title="Submit"
              onPress={handlePasswordSubmit}
              color="#007BFF"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  picker: {
    height: 50,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default WaterConsumptionScreen;
