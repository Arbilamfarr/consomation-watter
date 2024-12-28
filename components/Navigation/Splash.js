import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Splash = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");
      console.log("token ",token)
      if (token) {
        navigation.navigate("TabNav");
      } else {
        navigation.navigate("Login");
      }
    } catch (error) {
      console.error("Erreur lors de la vérification du token :", error);
    } finally {
      setLoading(false); // Hide loading indicator after check
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={"red"} />
        <ActivityIndicator size="large" color="#0000ff" />
        
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={"red"} />
      <Image
        source={require("../../assets/images/splash/eau.jpg")}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#ffffff",
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default Splash;
