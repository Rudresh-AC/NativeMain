import { StatusBar } from "expo-status-bar";
import { Button, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.loginImage}
            source={require("../assets/Walking.png")}
          />
        </View>

        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Login </Text>

          <View style={styles.formContainer}>
            <Icon name="at" size={20} color="#000" />
            <TextInput style={styles.textInput} placeholder="Email ID" />
          </View>

          <View style={styles.formContainer}>
            <Icon name="lock" size={20} color="#000" />
            <TextInput style={styles.textInput} placeholder="Password" />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Feed")}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.otherLoginContainer}>
            <Text>Or, login with...</Text>
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
          <View style={styles.registertextContainer}>
            <Text style={styles.registertext}>New to the app ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <View style={styles.circle}>
                <Text style={styles.registertextColor}> Register</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    marginBottom: 50,
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 10 : 0,
  },
  imageContainer: {
    width: "100%",
    marginTop: 60,
    alignItems: "center",
  },
  loginTextContainer: {
    marginTop: 20,
    flex: 2,
  },

  loginText: {
    fontWeight: "bold",
    fontSize: 26,
    paddingHorizontal: 20,
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
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  otherLoginContainer: {
    marginTop: 30,
    alignItems: "center",
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
  registertextContainer: {
    marginTop: 30,
    flexDirection: "row",
    // backgroundColor: "red",
    justifyContent: "center",
  },
  registertextColor: {
    color: "#f25ed0",
  },
});
