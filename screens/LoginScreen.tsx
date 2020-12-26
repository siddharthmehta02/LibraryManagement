import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {StyleSheet,Image} from 'react-native'
import {  Text, View } from '../components/Themed';
import LoginComponent from '../components/LoginComponent'

import { RootStackParamList } from '../types';

 export default function LoginScreen({navigation,}: StackScreenProps<RootStackParamList, 'Login'>){

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login :)</Text>
            <LoginComponent navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        marginBottom:15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});


  