import React, { useState, useEffect} from "react";
import {StyleSheet, Image, TouchableOpacity } from "react-native";


import { Text, View } from "../components/Themed";
import { firebase } from "../src/firebase/config";



export default function UserScreen({navigation }) {

  console.log(firebase.auth().currentUser?.uid)
  const [user, setUser] = useState({})
  
  useEffect(() => {
    firebase.firestore()
      .collection("Library")
      .doc("Users")
      .collection("Users")
      .doc(firebase.auth().currentUser?.uid).get().then((snapshot) => {
        setUser(snapshot.data())
        console.log(snapshot.data())
      });
  }, [])
  

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:user.Photo}}/>
      <Text style={styles.title}>{user.Name}</Text>
      <Text style={styles.text}>{user.Email}</Text>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.replace('Login')}>
                  <Text style={styles.button_text}>Logout :)</Text>
                </TouchableOpacity>
      


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
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
  image:{
    width:200,
    height:200,
    borderRadius:100,
    marginTop:10,
    marginBottom:10
  },
  text:{
    marginBottom:20
  },
  button: {
    elevation: 8,
    backgroundColor: "#009688",
    width: '50%',
    borderRadius: 10,
    paddingVertical: 10,
    // paddingHorizontal: 12,
    marginTop: 20,
    alignItems: 'center'

  },
});
