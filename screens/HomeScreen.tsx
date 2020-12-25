import * as React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { View } from "../components/Themed";
import BookBar from "../components/BookBar";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

export default function HomeScreen({ navigation, }: StackScreenProps<RootStackParamList, 'Root'>) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView     >
                <View style={styles.container}>
                    <BookBar genre={"Sci-Fi"} navigation={navigation}/>
                    <BookBar genre={"Sci-Fi"} navigation={navigation}/>
                    <BookBar genre={"Sci-Fi"} navigation={navigation}/>
                    <BookBar genre={"Sci-Fi"} navigation={navigation}/>
                    
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
