import * as React from "react";
import { Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";


import { Text, View } from "../components/Themed";
import { firebase } from "../src/firebase/config"

export default function UserScreen({ }) {
  const auth = firebase.auth();

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Email</Text>
      <TextInput/>
      <Text style={styles.title}>Password</Text>
      <TextInput/>
      <Text style={styles.title}>Confirm Password</Text>
      <TextInput/>
      <Button title="Login" onPress={() => navigation.navigate("Search")} /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
