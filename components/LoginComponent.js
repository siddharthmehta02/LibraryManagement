import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import * as Google from 'expo-google-app-auth';
import { firebase } from '../src/firebase/config';
import AsyncStorage from '@react-native-community/async-storage'

import { RootStackParamList } from '../types';


class LoginComponent extends React.Component {




    signInWithGoogleAsync = async () => {
        try {

            const result = await Google.logInAsync({
                androidClientId: '761963379866-lam76rno5v7i2vi2156qgch4u8k223ei.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken, result.accessToken)
                const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
                console.log(result) //117611527123843327965
                console.log(firebaseUserCredential.user.uid) //suYs4nfIRSeCvfkJYg9278pCf263

                firebase
                    .firestore()
                    .collection("Library")
                    .doc("Users")
                    .collection("Users")
                    .doc(firebaseUserCredential.user.uid)
                    .set({
                        Name: result.user.givenName,
                        Email: result.user.email,
                        Photo: result.user.photoUrl
                    })
                console.log(this.user)
                this.props.dispatch({ type: "LOGIN", user: { email: result.user.email, photoUrl: result.user.photoUrl, name: result.user.givenName } })
                // console.log(this.user)



                this.props.navigation.replace('Root')
            } else {
                console.log("Cancelled")
            }
        } catch (e) {
            console.log("Error: ", e)
        }
    }

    render() {


        return (
            <View>
                <Button title="Loginn" onPress={() => this.signInWithGoogleAsync()} />
            </View>
        )
    };
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(LoginComponent);