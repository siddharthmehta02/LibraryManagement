import React, { useState } from 'react';
import { StyleSheet, FlatList, Image, Button, LogBox } from 'react-native';
import { firebase } from '../src/firebase/config';


import { Text, View } from '../components/Themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
// import { FlatList } from 'react-native-gesture-handler';

export default function CartScreen() {
  const [cart, setCart] = useState({})

  const title = firebase.firestore()
    .collection("Library")
    .doc("Users")
    .collection("Users")
    .doc(firebase.auth().currentUser?.uid)

  LogBox.ignoreAllLogs();

  const deleteCart = (del) => {
    title.collection("Cart").doc(del.Title).delete().then(() => {
      // console.log(del.Title);
      // display();
      title
        .get()
        .then((snapshot) => {
          const data = snapshot.docs.map((doc) => doc.data());

          // console.log(data);
          setCart(data)
          // console.log(cart)
        });
    });

  }
  const addToCollections = (add) => {
    title.collection('Books').doc(add.Title)
      .set({
        Title: add.Title,
        Author: add.Author,
        Genre: add.Genre,
        Image: add.Image
      }).then(() => {
        deleteCart(add)
      })
  }
  const books = title.collection('Cart')
    .get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());

      // console.log(data);
      setCart(data)
      // console.log(cart)
    });

 




  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Cart</Text> */}
      <FlatList
        data={cart}
        renderItem={({ item }) => {
          return (
            <View style={styles.cover}>
              <View >
                <Image style={styles.image} source={{ uri: item.Image }} />
              </View>
              <View style={styles.info}>
                <View style={styles.delete}>
                  <Text style={styles.title}>{item.Title}</Text>
                  <TouchableOpacity onPress={() => deleteCart(item)}>
                    <MaterialIcons name="delete" size={24} color="white" style={styles.deleteBtn} />
                  </TouchableOpacity>
                </View>

                <Text style={styles.author}>{item.Author}</Text>

                <TouchableOpacity style={styles.button} onPress={() => addToCollections(item)}>
                  <Text style={styles.button_text}>Add to Collections</Text>
                </TouchableOpacity>

              </View>
              <Button color="#841584" title="Add to Collections" />

            </View>
          )
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  button: {
    elevation: 8,
    backgroundColor: "#009688",
    width: '50%',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 20,
    alignItems: 'center'

  },

  info: {
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingLeft: 10,
    width: '100%'
  },
  cover: {
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 10
  },
  title: {
    fontSize: 25,
    // fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    width: 100,
    height: 150
  },
  author: {
    color: 'gray',
    paddingTop: 3
  },
  delete: {
    flexDirection: 'row',
    // width: 700,
    alignItems: 'center',
    // justifyContent: 'space-between'

  },
  deleteBtn: {
    marginLeft: 10
  }
});
