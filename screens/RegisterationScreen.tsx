import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

import { firebase } from '../src/firebase/config'

export default function RegisterationScreen() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [fullName, setFullName] = useState()


    const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user?.uid
                const data = {
                    id: uid,
                    email,
                    fullName,
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    // .then(() => {
                    //     navigation.navigate('Home', { user: data })
                    // })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
            });
    }

    return (
        <View>
            <Text style={styles.title}>Email</Text>
            <TextInput />
            <Text style={styles.title}>Password</Text>
            <TextInput />
            <Text style={styles.title}>Confirm Password</Text>
            <TextInput />
            <Text style={styles.title}>Full Name</Text>
            <TextInput />
            {/* <Button title="Login" onPress={() =>} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
    }
});
