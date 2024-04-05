import React from "react";
import {
  Image,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Register({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={require("../assets/rgister.png")} />
        </View>
        <View style={styles.RegisterTextContainer}>
          <Text style={styles.RegisterText}>Register</Text>
        </View>

        <View style={styles.otherLoginLinks}>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={require("../assets/google.png")}
          />
          <Image
            resizeMode="cover"
            style={styles.image}
            source={require("../assets/facebook.webp")}
          />
          <Image
            resizeMode="cover"
            style={styles.image}
            source={require("../assets/twitter.jpg")}
          />
        </View>

        <View style={styles.otherLoginContainer}>
          <Text>Or, register with email...</Text>
        </View>

        <View style={styles.formContainer}>
          <Icon name="user" size={20} color="#000" />
          <TextInput style={styles.textInput} placeholder="Full Name" />
        </View>

        <View style={styles.formContainer}>
          <Icon name="at" size={20} color="#000" />
          <TextInput style={styles.textInput} placeholder="Email ID" />
        </View>

        <View style={styles.formContainer}>
          <Icon name="lock" size={20} color="#000" />
          <TextInput style={styles.textInput} placeholder="Password" />
        </View>

        <View style={styles.formContainer}>
          <Icon name="lock" size={20} color="#000" />
          <TextInput style={styles.textInput} placeholder="Confirm Password" />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  imageContainer: {
    width: "100%",
    marginTop: 30,
    alignItems: "center",
  },
  RegisterTextContainer: {
    marginTop: 20,
  },
  RegisterText: {
    fontWeight: "bold",
    fontSize: 26,
    paddingHorizontal: 20,
  },
  otherLoginLinks: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
  image: {
    borderWidth: 1,
    borderColor: "gray",
    width: 50,
    height: 50,
    paddingHorizontal: 20,
  },
  otherLoginContainer: {
    marginTop: 30,
    alignItems: "center",
  },

  formContainer: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBlockColor: "gray",
    marginHorizontal: 20,
    padding: 2,
  },
  textInput: {
    marginHorizontal: 10,
  },
  button: {
    marginTop: 30,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f25ed0",
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
