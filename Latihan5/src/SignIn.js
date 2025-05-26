import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Dimensions,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [validEmail, setValidEmail] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validCredentials = {
    email: "212310016@student.ibik.ac.id",
    password: "BESTstudent_2023",
  };

  const handlerValidMail = (value) => {
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(value)) {
      setValidEmail("");
    } else {
      setValidEmail("Email tidak valid");
    }
  };

  const handleSignIn = () => {
    setPasswordError("");

    if (!email) {
      setPasswordError("Email tidak boleh kosong");
      return;
    }

    if (!password) {
      setPasswordError("Password tidak boleh kosong");
      return;
    }

    if (validEmail) {
      setPasswordError("Format email tidak valid");
      return;
    }

    if (password.length < 3) {
      setPasswordError("Type minimum 3 character");
      return;
    }

    const hasLetter = /[A-Za-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[^A-Za-z0-9]/.test(password);

    if (!(hasLetter && hasNumber && hasSymbol)) {
      setPasswordError("Value must contain alphabet, number and symbol");
      return;
    }

    if (
        email === validCredentials.email &&
        password === validCredentials.password
        ) {
            console.log("Login berhasil, redirect ke Home");
            navigation.replace("Home", { name: "User" });
        } else {
            Alert.alert("Error", "Email/Password is not match");
        }
    };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../assets/icons/LOGO_IBIK.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>IBI Kesatuan</Text>
        <Text style={styles.subtitle}>Bogor Indonesia</Text>
      </View>

      {/* Banner */}
      <Image
        source={require("../assets/icons/images.jpeg")}
        style={styles.banner}
        resizeMode="cover"
      />

      {/* Form */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="npm@student.ibik.ac.id"
          value={email}
          onChangeText={handlerValidMail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        {validEmail ? (
          <Text style={styles.errorText}>{validEmail}</Text>
        ) : null}

        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Enter your password"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setPasswordError("");
            }}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}

        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    marginTop: 30,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#800080",
  },
  subtitle: {
    fontSize: 14,
    color: "#800080",
  },
  banner: {
    width: "100%",
    height: 180,
    marginTop: 15,
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  eyeIcon: {
    marginLeft: -35,
    marginRight: 10,
    bottom: 10,
  },
  signInButton: {
    backgroundColor: "#800080",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,   
    zIndex: 99,              
  },
  signInText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    fontSize: 12,
  },
});

export default SignIn;
