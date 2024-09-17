import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { bgcolor, iconcolor } from "../../utils/Variable/Color";


const SignUp = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={"red"} />
      <View style={styles.formContainer}>
        <Text style={styles.title}>SignUp</Text>
        <View style={styles.form}>
          <TextInput
            placeholder="First name"
            value={firstName}
            onChangeText={setFirstName}
            style={styles.input}
          />
          <TextInput
            placeholder="Last name"
            value={lastName}
            onChangeText={setLastName}
            style={styles.input}
          />
        
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              style={ styles.passwordInput}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeIconContainer}
            >
              <Text style={styles.eyeIcon}>{showPassword ? "🙈" : "👁️"}</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            placeholder="Number of phone"
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
            maxLength={10}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <Text style={styles.link}>
          I have account?{" "}
          <Text
            onPress={() => navigation.navigate("Login")}
            style={{ color: "black", fontWeight: "500" }}
          >
            Sign in
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
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    color: "#575758",
    letterSpacing: 2,
    fontWeight: "500",
    marginBottom: 20,
  },
  formContainer: {
    width: "80%",
    shadowColor: "#575758",
    shadowOffset: { width: 10, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: bgcolor,
    borderRadius: 20,
  },
  form: {
    padding: 20,
    borderRadius: 10,
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
  button: {
    width: "80%",
    backgroundColor: "red",
    marginHorizontal: "10%",
    marginBottom: 10,
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
    margin: 10,
    color: "#575758",
  },
});

export default SignUp;
