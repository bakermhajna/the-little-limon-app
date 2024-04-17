import { Center, Box, } from "native-base"
import { Text, StyleSheet ,TextInput } from "react-native"
import MyButton from "../onbording/components/mybutton";


const InputField = (props) => {

    return (
        <Box p={"5%"} w={"80%"}>
            <Text style={styles.inputText} >{props.text}</Text>
            <TextInput   style={styles.input} borderWidth={2}   />
        </Box>
    )
}

export default function Login({ props }) {


    return (<>
        <Box >
            <Center mt={"10%"} >

                <Text style={styles.TextL}>
                    Little Limon
                </Text>
                <Text style={styles.Text}>
                    chicago
                </Text>
            </Center>
        </Box>
        <Center  h={"70%"}>
            <Text style={styles.inputText}>Sign In</Text>
            <Box style={styles.box} borderRadius={50} borderColor={"#495E57"}  h={"80%"} w={"80%"}  borderWidth={5}>
                <InputField text={"Email"} />
                <InputField text={"Password"} />
            </Box>
        </Center>
        <Center>
            <MyButton text={"Log In"}/>
        </Center>


    </>)
}

const styles = StyleSheet.create({

    Text: {
        fontFamily: "Karla-Regular",
        fontSize: 30,
        margin: 5,
        color: "#edefee"

    },
    TextL: {
        fontFamily: "SMarkaziText-Regular",
        fontSize: 50,
        margin: 5,
        color: "#495e57"
    },
    inputText: {
        color: "#EDEFEE",
        fontSize:30
    },
    input:{
        borderColor:"#495E57",
        padding:"2%",
        color:"#EDEFEE"
    },
    box:{
        backgroundColor: "#333333" ,
    }
})