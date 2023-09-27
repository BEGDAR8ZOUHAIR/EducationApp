import { Image, Text, View, StyleSheet } from 'react-native'
import React from 'react'

export default function Login(){
    return (
        <View>
            <Image source={require('./../Assets/Images/login.png')} />
            <View style={styles.container}>
                <Text style={styles.welcomeText}>Welcome to CodeBox</Text>
                <Text style={{
                    textAlign: 'center',
                    marginTop: 80, fontSize: 20
                }}>Login/Signup</Text>
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
    }
})
