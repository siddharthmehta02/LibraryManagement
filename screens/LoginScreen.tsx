import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginComponent from '../components/LoginComponent'

import { RootStackParamList } from '../types';

 export default function LoginScreen({navigation,}: StackScreenProps<RootStackParamList, 'Login'>){

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login :)</Text>
            {/* <Button title="Home" onPress={()=>navigation.replace('Root')}/> */}
            <LoginComponent navigation={navigation}/>

            {/* <Button title="Register" onPress={() => navigation.replace('Register')} /> */}

            {/* <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
                <Text style={styles.linkText}>Go to home screen!</Text>
            </TouchableOpacity> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
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


  