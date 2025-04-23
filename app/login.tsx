import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';

export default function LoginScreen() {
    const [ inputValueName, setInputValueName] = useState('');
    const [ inputValuePassword, setInputValuePassword] = useState('');

    return (
        <View style = {styles.container} >
            <Text style = {styles.title} > Sign In</Text>
            <View style = {styles.testContainer}>
            <Text style = {styles.infoText} > Please Enter Your username and password in the fields below
             </Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.nameText}>Username</Text>
                <TextInput style={styles.nameValue} 
                placeholder = 'Enter your username'
                value = {inputValueName}
                onChangeText={setInputValueName}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.nameText}>Password</Text>
                <TextInput style={styles.passwordValue}
                placeholder='Enter your password'
                value = {inputValuePassword}
                onChangeText={setInputValuePassword}
                />
            </View>
        </View>
    )
    
}

 const styles = StyleSheet.create({
       container : {
        flex :1,
        alignItems : 'center',
        backgroundColor :  'white',
    },
    title: {
        fontSize : 24,
        marginTop: 30,
        marginBottom:30,
        color:'#1a1a1a',
        textAlign:'center',
    },
    infoText : {
        fontSize :18,
        color : '#1a1a1a',
        marginBottom : 20,
        textAlign : 'center',
        lineHeight : 25,
    },
    testContainer :{
        width: '90%',
    },
    inputContainer: {
        width: '80%',
        marginBottom: 20,
    },
    nameValue: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    passwordValue:{
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    nameText :{
        fontSize:18,
        color: 'black',
        marginBottom: 5,
    } 


})
