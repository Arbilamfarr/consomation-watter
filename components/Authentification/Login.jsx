import React, { useState } from "react";
import {
  Alert,
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

import { bgcolor, iconcolor } from "../../utils/Variable/Color";

const Login = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Optional: Add a login function
  const handleLogin = () => {
    navigation.navigate("TabNav");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={"red"} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Login</Text>
        <View>
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              style={ styles.passwordInput}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeIconContainer}
            >
              <Text style={styles.eyeIcon}>{showPassword ? "🙈" : "👁️"}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.motpasse}></Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.link}>
          Don't have an account?{" "}
          <Text
            onPress={() => navigation.navigate("SignUp")}
            style={styles.signUpLink}
          >
            Sign up
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  innerContainer: {
    padding: 20,
    width: "80%",
    backgroundColor: bgcolor,
    borderRadius: 10,
    shadowColor: "#575758",
    shadowOffset: { width: 10, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    color: "#575758",
    letterSpacing: 2,
    fontWeight: "500",
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    height: 55,
    backgroundColor: "white",
    color: "black",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    marginBottom: 10,
    height: 55,
    backgroundColor: "white",
    color: "black",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
  },
  eyeIconContainer: {
    padding: 10,
  },
  eyeIcon: {
    fontSize: 20,
    color: iconcolor,
  },
  motpasse: {
    textAlign: "center",
    color: "red",
    fontSize: 14,
    marginVertical: 5,
  },
  button: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  link: {
    textAlign: "center",
    marginTop: 10,
    color: "#575758",
  },
  signUpLink: {
    color: "black",
    fontWeight: "500",
  },
});

export default Login;
