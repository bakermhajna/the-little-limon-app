
import { Center, Box, Image } from "native-base"
import { Text, StyleSheet } from "react-native"
import MyButton from "./components/mybutton";
import logo from "./../../assets/images/img.png"

const Welcome = () => {
    return (<>
        <Box >
            <Center >
                <Text style={styles.Text}>
                    Welcome To
                </Text>
                <Text style={styles.TextL}>
                    Little Limon
                </Text>
                <Text style={styles.Text}>
                    chicago
                </Text>
            </Center>
        </Box>
    </>)
}


export default function OnBoarding({navigation}) {
    return (

        <>
            <Center>
                <Image
                    mt={"10%"}
                    alt={"logo"}
                    source={logo}
                    size="xl"
                    width={"20%"}
                />
            </Center>
            <Welcome />
            <Center mt={"75%"}>
                <MyButton onPress={()=>{navigation.navigate("login")}} text={"Log In"} />
                <MyButton onPress={()=>{navigation.navigate("signup")}} text={"Sing up"} />
            </Center>
        </>
    )
}




const styles = StyleSheet.create({

    Text: {
        fontFamily: "Karla-Regular",
        fontSize: 30,
        margin: 5,
        color: "#495e57"

    },
    TextL: {
        fontFamily: "SMarkaziText-Regular",
        fontSize: 50,
        margin: 5,
        color: "#495e57"
    },
})
