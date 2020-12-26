import  React,{useState} from 'react';
import { StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { firebase } from '../src/firebase/config';
import { MaterialIcons } from '@expo/vector-icons';


import { Text, View } from '../components/Themed';

export default function BooksScreen() {
    const [book,setBook]=useState()

    const title = firebase.firestore()
    .collection("Library")
    .doc("Users")
    .collection("Users")
    .doc(firebase.auth().currentUser?.uid)

    const books = title.collection('Books')
    .get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());
      setBook(data)
    });
    return (
        <View style={styles.container}>
      {/* <Text style={styles.title}>Cart</Text> */}
      <FlatList
        data={book}
        renderItem={({ item }) => {
          return (
            <View style={styles.cover}>
              <View >
                <Image style={styles.image} source={{ uri: item.Image }} />
              </View>
              <View style={styles.info}>
                <View style={styles.delete}>
                  <Text style={styles.title}>{item.Title}</Text>
                </View>
                <Text style={styles.author}>{item.Author}</Text>
              </View>
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
        alignItems: 'center',
    
      },
      deleteBtn: {
        marginLeft: 10
      }
});
