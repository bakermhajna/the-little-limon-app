import React, { useState } from 'react'
import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
const logo = require("../../assets/images/img.png")
const facebook = require("../../assets/images/facebooklogo.png")
const google = require("../../assets/images/googlelogo.png")



export default function SignUpForm() {
    const { email, setEmail } = useState("");
    const { username, setUsername } = useState("");
    const { password, setPassword } = useState("");
    return (
        <SafeAreaView style={styles.container}>

            <Image source={logo} style={styles.image} resizeMode='contain' />
            <Text style={styles.title}>Sign Up</Text>
            <View style={styles.inputView}>
                <TextInput style={styles.input} placeholder='USERNAME' value={username} onChangeText={setUsername} autoCorrect={false}
                    autoCapitalize='none' />
                <TextInput style={styles.input} placeholder='EMAIL' value={email} onChangeText={setEmail} autoCorrect={false}
                    autoCapitalize='none' />
                <TextInput style={styles.input} placeholder='PASSWORD' secureTextEntry value={password} onChangeText={setPassword} autoCorrect={false}
                    autoCapitalize='none' />
                <TextInput style={styles.input} placeholder='PASSWORD AGAIN ' secureTextEntry value={password} onChangeText={setPassword} autoCorrect={false}
                    autoCapitalize='none' />
            </View>


            <View style={styles.buttonView}>
                <Pressable  style={styles.button} onPress={() => Alert.alert("Login Successfuly!", "see you in my instagram if you have questions : must_ait6")}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </Pressable>
                <Text style={styles.optionsText}>OR SIGN UP WITH</Text>
            </View>

            <View style={styles.mediaIcons}>
                <Pressable onPress={() => Alert.alert("Login Successfuly!", "see you in my instagram if you have questions : must_ait6")}>

                    <Image source={facebook} style={styles.icons} />
                </Pressable>
                <Pressable onPress={() => Alert.alert("Login Successfuly!", "see you in my instagram if you have questions : must_ait6")}>

                    <Image source={google} style={styles.icons} />
                </Pressable>
            </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: 70,
    },
    image: {
        height: 160,
        width: 170
    },
    title: {
        fontSize: 30,
        fontFamily: "SMarkaziText-Regular",
        textTransform: "uppercase",
        textAlign: "center",
        paddingVertical: 40,
        color: "#495e57"
    },
    inputView: {
        gap: 15,
        width: "100%",
        paddingHorizontal: 40,
        marginBottom: 5
    },
    input: {
        height: 50,
        paddingHorizontal: 20,
        borderColor: "#495e57",
        borderWidth: 1,
        borderRadius: 7
    },
    rememberView: {
        width: "100%",
        paddingHorizontal: 50,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 8
    },
    switch: {
        flexDirection: "row",
        gap: 1,
        justifyContent: "center",
        alignItems: "center"

    },
    rememberText: {
        fontSize: 15,
        fontFamily: "SMarkaziText-Regular"
    },
    forgetText: {
        fontSize: 14,
        color: "#495e57",
        fontFamily: "SMarkaziText-Regular"
    },
    button: {
        backgroundColor: "#495e57",
        height: 45,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontFamily: "SMarkaziText-Regular",
    },
    buttonView: {
        width: "100%",
        paddingHorizontal: 50
    },
    optionsText: {
        textAlign: "center",
        paddingVertical: 10,
        color: "gray",
        fontSize: 13,
        marginBottom: 6
    },
    mediaIcons: {
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 23
    },
    icons: {
        width: 80,
        height: 80,
    },
    footerText: {
        textAlign: "center",
        color: "gray",
    },
    signup: {
        color: "#495e57",
        fontSize: 13
    }
})