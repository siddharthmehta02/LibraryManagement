import * as React from "react";
import { Button, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import { Text, View } from "../components/Themed";
import { useState } from "react";
import BookBar from "../components/BookBar";

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView     >
                <View style={styles.container}>
                    <BookBar genre={"Sci-Fi"} />
                    <BookBar genre={"Sci-Fi"} />
                    <BookBar genre={"Sci-Fi"} />
                    <BookBar genre={"Sci-Fi"} />
                    <BookBar genre={"Sci-Fi"} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

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
    input: {
        color: "white",
        borderWidth: 1,
        borderColor: "white",
        borderStyle: "solid",
    },
});
