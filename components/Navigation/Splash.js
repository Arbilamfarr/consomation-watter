import React, { useEffect } from "react";
import { View, StyleSheet, Image, StatusBar, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Splash = ({ navigation }) => {
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    try {
      
      const token = await AsyncStorage.getItem("token");
      if (token) {
        navigation.navigate("TabNav");
      } else {
        navigation.navigate("Login");
      }
    } catch (error) {
      console.error("Erreur lors de la vérification du token :", error);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="white" backgroundColor={"red"} />

      <Text>hello world </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    backgroundColor: "#ffffff",
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default Splash;
