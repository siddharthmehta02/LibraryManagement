import React, { Component, Fragment } from "react";
import { View, Text } from 'react-native'

import * as GoogleSignIn from 'expo-google-sign-in';
import * as Google from 'expo-google-app-auth';
import firebase from '../src/firebase/config'

export default class LoginController extends Component {

    logInGoogle = async () => {

        try {
            const result = await Google.logInAsync({

                androidClientId: 761963379866 - d6qovc6mc1tn6menjef5cbqu742v1cls.apps.googleusercontent.com,
                scopes: ["profile", "email"],
                behavior: 'web'
            });

            if (result.type === "success") {
                const { idToken, accessToken } = result;
                const credential = GoogleProvider.credential(idToken, accessToken);
                firebase
                    .auth()
                    .signInWithCredential(credential)
                    .then(function (result) {
                        if (result.additionalUserInfo.isNewUser) {
                            Firebase.database().ref('UserToQuestion/' + Firebase.auth().currentUser.uid).set({

                                notifier: {
                                    Email: Firebase.auth().currentUser.email

                                }
                            })
                        }
                    })
                    .catch(error => {
                        Alert.alert(error)
                        console.log("firebase cred err:", error);
                    });
            } else {
                return { cancelled: true };
            }
        } catch (err) {
            console.log("err:", err);
        }

        // signIn() {
        //     const { type, accessToken, user } = await Google.logInAsync({
        //         androidClientId: `761963379866-d6qovc6mc1tn6menjef5cbqu742v1cls.apps.googleusercontent.com`,
        //         // androidStandaloneAppClientId: `<YOUR_ANDROID_CLIENT_ID>`,
        //     });
        //     if (type === 'success') {
        //         /* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
        //         console.log(user);
        //     }
        // }

        render() {
            return (
                <View>{(this.logInGoogle)}</View>
            );

        }

    }