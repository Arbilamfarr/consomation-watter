import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const WaterConsumptionScreen = () => {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [consumption, setConsumption] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (month && year && consumption) {
      setModalVisible(true);
    } else {
      Alert.alert("Erreur", "Veuillez remplir tous les champs.");
    }
  };

  const handlePasswordSubmit = () => {
    if (password === "1234") {
      Alert.alert("Succès", "Consommation enregistrée avec succès.");
      setModalVisible(false);
      setPassword("");
    } else {
      Alert.alert("Erreur", "Mot de passe incorrect.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enregistrer la consommation d'eau</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={month}
          onValueChange={(itemValue) => setMonth(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Sélectionner un mois" value="" />
          <Picker.Item label="Janvier" value="January" />
          <Picker.Item label="Février" value="February" />
          <Picker.Item label="Mars" value="March" />
          <Picker.Item label="Avril" value="April" />
          <Picker.Item label="Mai" value="May" />
          <Picker.Item label="Juin" value="June" />
          <Picker.Item label="Juillet" value="July" />
          <Picker.Item label="Août" value="August" />
          <Picker.Item label="Septembre" value="September" />
          <Picker.Item label="Octobre" value="October" />
          <Picker.Item label="Novembre" value="November" />
          <Picker.Item label="Décembre" value="December" />
        </Picker>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Année"
        keyboardType="numeric"
        maxLength={4}
        value={year}
        onChangeText={(text) => setYear(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Consommation d'eau (m³)"
        keyboardType="numeric"
        value={consumption}
        onChangeText={(text) => setConsumption(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Soumettre</Text>
      </TouchableOpacity>

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
              Entrez le mot de passe pour vérification
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Mot de passe"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handlePasswordSubmit}
            >
              <Text style={styles.buttonText}>Soumettre</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  pickerContainer: {
    borderColor: "#007BFF",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    overflow: "hidden",
  },
  picker: {
    height: 50,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderColor: "#007BFF",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
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
  },
});

export default WaterConsumptionScreen;
