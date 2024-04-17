import { Center, Box, } from "native-base"
import { Text, StyleSheet, ScrollView, Dimensions } from "react-native"
import { Input ,Divider } from "@rneui/themed";
import MyButton from "../onbording/components/mybutton";


const width = Dimensions.get("screen").width
const hight = Dimensions.get("screen").height
const InputField = (props) => {

    return (
        <Box p={"5%"} w={(width * 80) / 100} >
            <Text style={styles.inputText} >{props.text}</Text>
            <Input style={styles.input} borderWidth={2} />
        </Box>
    )
}

export default function Signup({ props }) {


    return (<>
        <ScrollView >
            <Box >
                <Center mt={"10%"} >

                    <Text style={styles.TextL}>
                        Little Limon
                    </Text>
                </Center>
            </Box>
            <Center>
                <Text style={styles.signin} >Sign up</Text>
                <Center style={styles.box} marginY={"4%"} borderRadius={50} borderColor={"#495E57"} borderWidth={5}>
                    <InputField text={"User name"} />
                    <InputField text={"Email"} />
                    <InputField text={"Password"} />
                    <Text style={styles.or}>OR</Text>
                    <Center>
                        <MyButton isLoading={false} text={"Facebook"} />
                        <MyButton text={"Google"}/>
                    </Center>
                </Center>
            </Center>
            <Center marginY={"4%"}>
                <MyButton text={"Sign up"} />
            </Center>
        </ScrollView>


    </>)
}

const styles = StyleSheet.create({

    Text: {
        fontSize: 30,
        margin: 5,
        color: "#edefee",
        fontFamily: "Karla-Regular"

    },
    TextL: {
        fontSize: 70,
        margin: 5,
        color: "#495e57",
        fontFamily: "SMarkaziText-Regular"
    },
    signin: {
        color: "#EDEFEE",
        fontSize: 30,
        marginVertical: "4%",
        fontFamily: "Karla-Regular"
    },
    inputText: {
        color: "#EDEFEE",
        fontSize: 20,
        marginVertical: "4%",
        fontFamily: "Karla-Regular"
    },
    input: {
        borderColor: "#495E57",
        padding: "2%",
        color: "#EDEFEE",
        fontFamily: "Karla-Regular"
    },
    or:{
        color:"#EDEFEE",
        fontSize:20,
        fontFamily:"Karla-Regular"
    },
    box: {
        backgroundColor: "#333333",
    }
})