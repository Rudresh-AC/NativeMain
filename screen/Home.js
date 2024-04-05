import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Personal")}>
          <ImageBackground
            source={require("../assets/heart.jpg")}
            style={styles.cardBackground}
          >
            <View style={styles.CardTextContainer}>
              <Text style={styles.cardText}>Are You</Text>
              <Text style={styles.cardText}>feeling</Text>
              <Text style={styles.cardText}>Personal?</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Professional")}>
          <ImageBackground
            source={require("../assets/job.jpg")}
            style={styles.cardBackground}
          >
            <View style={styles.CardTextContainer}>
              <Text style={styles.cardText}>Are You</Text>
              <Text style={styles.cardText}>feeling</Text>
              <Text style={styles.cardText}>Professional?</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Any feedback/suggestions?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>write us for support</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 100,
  },
  cardBackground: {
    width: 180,
    height: 200,
    // opacity: 0.5,
    resizeMode: "cover",
    backgroundColor: "rgba(255, 255, 255, 0.5)", // Semi-transparent background color for text container
    padding: 20,
    borderRadius: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5, // For Android
  },
  cardText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  CardTextContainer: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 30,
  },
  btn: {
    marginHorizontal: 20,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#9458ed",
    borderRadius: 10,
    marginVertical: 80,
  },
  btnText: {
    color: "#fff",
    fontSize: 24,
  },
});
