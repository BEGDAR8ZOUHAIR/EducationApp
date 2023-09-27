import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Colors from '../Shared/Colors'
import { Ionicons } from '@expo/vector-icons'
import * as WebBrowser from 'expo-web-browser'

export default function Login()
{
    WebBrowser.maybeCompleteAuthSession();
    const [accessToken, setAccessToken] = useState();
    const [userInfo, setUserInfo] = useState();
    // const { userData, setUserData } = useContext(AuthContext)

    return (
        <View>
            <Image source={require('./../Assets/Images/login.png')} />
            <View style={styles.container}>
                <Text style={styles.welcomeText}>Welcome to CodeBox</Text>
                <Text style={styles.signup}>Login/Signup</Text>
                <TouchableOpacity style={styles.button}
                    onPress={() => promptAsync()}>
                    <Ionicons name="logo-google" size={24}
                        color="white" style={{ marginRight: 10 }}
                    />
                    <Text style={{ color: Colors.white }}>Sign In with Google</Text>
                </TouchableOpacity>
            </View>
          
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        marginTop: -25,
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },
    welcomeText: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold' 
    },
    signup: {
        textAlign: 'center',
        marginTop: 80,
        fontSize: 20
    },
    button: {
        backgroundColor: Colors.primary,
        padding: 10,
        margin: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },


})
