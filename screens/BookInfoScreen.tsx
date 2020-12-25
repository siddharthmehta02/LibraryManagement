import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, Image, StyleSheet, Button, SafeAreaView, StatusBar} from 'react-native'
import { RootStackParamList } from '../types';
import {firebase} from '../src/firebase/config';
import { connect } from 'react-redux';



function BookInfoScreen({ navigation, route }: StackScreenProps<RootStackParamList, 'BookInfo'>) {
    // const {image, bookName, author} = navigation.getParam()
    // console.log(this.props)
    const book = route.params.item
    console.log(route.params.item)
    const bookAddToFirestore=()=>{
        firebase
            .firestore()
            .collection("Library")
            .doc("Users")
            .collection("Users")
            .doc(firebase.auth().currentUser?.uid)
            .collection("Cart")
            .doc(book.Title)
            .set({
                Title: book.Title,
                Author: book.Author,
                Genre: book.Genre,
                Image: book.Image
            })
        navigation.replace('Root')
    }
    return (
        <SafeAreaView>
            
        <View>
            <Text>{book.Title}</Text>
            <Image style={styles.image} source={{uri:book.Image}}/>
            <Text>{book.Author}</Text>
            <Button title="Add to Cart" onPress={()=>bookAddToFirestore()}/> 
            <Button title="Back" onPress={()=>navigation.replace('Root')}/> 

            
        </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    image:{
        width:100,
        height:150
    }
})

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(BookInfoScreen);