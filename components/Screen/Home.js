import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Tooltip } from "react-native-elements"; // Assurez-vous d'importer Tooltip
import PersonCard from "./Card/PersonCard";

const Home = ({ navigation }) => {
  const [visible, setVisible] = useState(false); // État pour gérer la visibilité du tooltip
  const [newConsumer, setNewConsumer] = useState({
    firstName: "",
    lastName: "",
    waterMeterNumber: "",
  });

  // Fonction pour gérer l'ajout d'un consommateur
  const addConsumer = () => {
    // Logique pour ajouter le consommateur (en fonction de votre implémentation)
    console.log(newConsumer);
    // Réinitialiser les champs après ajout
    setNewConsumer({ firstName: "", lastName: "", waterMeterNumber: "" });
    setVisible(false);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setVisible(!visible)}
          style={styles.tooltipButton}
        >
          <Text style={styles.tooltipButtonText}>+</Text>
        </TouchableOpacity>

        <Tooltip
          popover={
            <View style={styles.tooltipContent}>
              <Text style={styles.tooltipTitle}>
                Ajouter un consommateur d'eau
              </Text>
              <TextInput
                placeholder="Prénom"
                value={newConsumer.firstName}
                onChangeText={(text) =>
                  setNewConsumer({ ...newConsumer, firstName: text })
                }
                style={styles.input}
              />
              <TextInput
                placeholder="Nom"
                value={newConsumer.lastName}
                onChangeText={(text) =>
                  setNewConsumer({ ...newConsumer, lastName: text })
                }
                style={styles.input}
              />
              <TextInput
                placeholder="Numéro de compteur"
                value={newConsumer.waterMeterNumber}
                onChangeText={(text) =>
                  setNewConsumer({ ...newConsumer, waterMeterNumber: text })
                }
                style={styles.input}
              />
              <TouchableOpacity onPress={addConsumer} style={styles.addButton}>
                <Text style={styles.addButtonText}>Ajouter</Text>
              </TouchableOpacity>
            </View>
          }
          isVisible={visible}
          onClose={() => setVisible(false)}
        >
          <Text>Ajouter un consommateur</Text>
        </Tooltip>

        <PersonCard
          firstName="John"
          lastName="Doe"
          waterMeterNumber="789012"
          onEnterConsumption={() =>
            navigation.navigate("WaterConsumptionScreen")
          }
          onVerifyPayment={() =>
            navigation.navigate("PaymentVerificationScreen")
          }
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  tooltipButton: {
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  tooltipButtonText: {
    color: "white",
    fontSize: 16,
  },
  tooltipContent: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    width: 250,
  },
  tooltipTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
  },
});

export default Home;
