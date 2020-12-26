import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import {  Image, StyleSheet, SafeAreaView, Dimensions} from 'react-native'
import { RootStackParamList } from '../types';
import { firebase } from '../src/firebase/config';
import { connect } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View } from "../components/Themed";



function BookInfoScreen({ navigation, route }: StackScreenProps<RootStackParamList, 'BookInfo'>) {
    // const {image, bookName, author} = navigation.getParam()
    // console.log(this.props)
    const book = route.params.item
    console.log(route.params.item)
    const bookAddToFirestore = () => {
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

        <SafeAreaView >
            <View style={styles.container}>

            <View style={styles.upper}>

                <Image style={styles.image} source={{ uri: book.Image }} />
                <View style={styles.info}>

                    <Text style={styles.title}>{book.Title}</Text>
                    <Text style={styles.author}>~{book.Author}</Text>
                    <Text style={styles.available}>Available</Text>


                </View>
            </View>
            <View style={styles.middle}>
                {/* <Button style={styles.backBtn} title="Back" onPress={() => navigation.replace('Root')} /> */}
                <TouchableOpacity onPress={() => navigation.replace('Root')}>
                    <AntDesign name="back" size={24} color="#009688" />
                </TouchableOpacity>

                <View style={styles.spaceView}></View>
                {/* <Button style={styles.cartBtn} title="Add to Cart" onPress={() => bookAddToFirestore()} /> */}
                <TouchableOpacity onPress={() => bookAddToFirestore()}>
                    <FontAwesome5 name="cart-plus" size={24} color="#009688" />
                </TouchableOpacity>



            </View>
            <View style={styles.lower}>
                <Text style={styles.descriptionTitle}>Description</Text>
                <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, et commodi tenetur ipsum nobis est quidem voluptate eaque laboriosam sequi quaerat ratione ducimus, sapiente porro explicabo atque exercitationem enim deserunt?</Text>
            </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        // height:"100%"
        height:Dimensions.get('window').height+100
    },

    image: {
        width: 100,
        height: 150
    },
    title: {
        // color: "#ffffff",
        fontSize: 30,


    },
    info: {
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingLeft: 10,
        width:'100%'
    },
    author: {
        color: 'gray',
        paddingTop: 3

    },
    available: {
        color: "green",
        fontSize: 25,
        position: 'absolute',
        bottom: 0,
        paddingLeft: 10
    },

    upper: {
        marginTop: 40,
        flexDirection: 'row',
        padding: 10,

    },
    middle: {
        // paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

        // textAlign: 'center'
    },
    spaceView: {
        width: '20%'
    },
    cartBtn: {

    },
    description: {
        // color: "#ffffff",
        paddingHorizontal: 10
    },
    descriptionTitle: {
        // color: "#ffffff",
        paddingHorizontal: 10,
        fontSize: 20,
        marginVertical: 10
    }
})

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(BookInfoScreen);