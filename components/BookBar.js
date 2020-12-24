import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { firebase } from "../src/firebase/config";

export default function BookBar({ genre }) {

    const [books, setBooks] = useState([])
    var list = []
    const [counter, setCounter] = useState()
    const bookDb = firebase.firestore().collection("Library").doc("Books").collection("Books")
    // const userDb = firebase.firestore().collection("Library").doc("Users").collection("Users")
    useEffect(() => {
        handleBookInput()
    }, [])
    async function handleBookInput() {
        await bookDb.where('Genre', '==', genre).get().then((docs) => {
            const allBooks = docs
            setAllBooks(allBooks);
        })
    };
    const setAllBooks = (allBooks) => {
        console.log("Enter")
        allBooks.forEach((doc) => {
            console.log("set")
            setBooks(books => [...books, doc.data()])
            console.log(books)
        })

    }


    return (
        <View style={styles.wrapper} >
            <View>
                <Text style={styles.header}>Popular in {genre}</Text>
            </View>
            <View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={books}
                    renderItem={({ item }) => {
                        return (

                            <View style={styles.content}>
                                <TouchableOpacity>
                                    <Image style={styles.image} source={{ uri: item.Image }} />
                                    <Text style={styles.title}>{item.Title}</Text>
                                </TouchableOpacity>

                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 150
    },
    content: {
        marginRight: 10,
        marginBottom: 10,
        marginTop: 5
    },
    header: {
        color: "#ffffff",
        fontSize: 22,
        // marginTop:
    },
    title: {
        color: "#ffffff",
        textAlign: "center",
        opacity: 0.8
    },
    wrapper: {
        paddingLeft: 10,
        // paddingRight:10
    }
})
