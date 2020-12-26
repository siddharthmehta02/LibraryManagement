import React, { useState } from "react";
import { Button, StyleSheet, LogBox } from "react-native";
import { TextInput } from "react-native-gesture-handler";


import { Text, View } from "../components/Themed";
import { firebase } from "../src/firebase/config"

export default function UserScreen({ }) {
  LogBox.ignoreAllLogs();
  console.log(firebase.auth().currentUser?.uid)
  // const [user, setUser] = React.useState([])
  // const auth = firebase.auth();
  // firebase.firestore()
  //   .collection("Library")
  //   .doc("Users")
  //   .collection("Users")
  //   .doc(firebase.auth().currentUser?.uid).get().then((snapshot) => {
  //     const data = snapshot.docs.map((doc) => doc.data());

  //     console.log("data");
  //     setUser(data)
  //     console.log(user)
  //   });

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Email</Text>
      <TextInput/>
      <Text style={styles.title}>Password</Text>
      <TextInput/>
      <Text style={styles.title}>Confirm Password</Text>
      <TextInput/>
      <Button title="Login" onPress={() => navigation.navigate("Search")} /> */}
      {/* <Text>{user}</Text> */}

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
