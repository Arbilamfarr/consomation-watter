import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ActivityIndicator,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";

const PaymentVerificationScreen = () => {
  const [isPaid, setIsPaid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [password, setPassword] = useState("");

  const handleVerifyPayment = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsPaid((prevStatus) => !prevStatus);
      Alert.alert(
        "Payment Status",
        isPaid ? "Payment has been confirmed." : "Payment is not confirmed."
      );
    } catch (error) {
      Alert.alert("Error", "Failed to verify payment.");
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsPaid = () => {
    setModalVisible(true);
  };

  const handlePasswordSubmit = () => {
    if (password === "1234") {
      setIsPaid(true);
      Alert.alert(
        "Payment Status",
        "The payment has been marked as completed."
      );
      setModalVisible(false);
      setPassword("");
    } else {
      Alert.alert("Error", "Incorrect password.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Payment Status</Text>
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>
          Payment Status: {isPaid ? "Paid" : "Not Paid"}
        </Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#007BFF" />
      ) : (
        <>
          <TouchableOpacity
            style={[styles.button, styles.verifyButton]}
            onPress={handleVerifyPayment}
          >
            <Text style={styles.buttonText}>Verify Payment</Text>
          </TouchableOpacity>
          {!isPaid && (
            <TouchableOpacity
              style={[styles.button, styles.markAsPaidButton]}
              onPress={handleMarkAsPaid}
            >
              <Text style={styles.buttonText}>Mark as Paid</Text>
            </TouchableOpacity>
          )}
        </>
      )}

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
            <TouchableOpacity
              style={[styles.button, styles.submitButton]}
              onPress={handlePasswordSubmit}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
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
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  statusContainer: {
    marginBottom: 20,
  },
  statusText: {
    fontSize: 18,
    fontWeight: "500",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 8,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  verifyButton: {
    backgroundColor: "#007BFF",
  },
  markAsPaidButton: {
    backgroundColor: "#28a745",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
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
    fontSize: 16,
    fontWeight: "500",
  },
  submitButton: {
    backgroundColor: "#007BFF",
  },
});

export default PaymentVerificationScreen;
