
import { Center, Box, Image } from "native-base"
import { Text, StyleSheet } from "react-native"
import { useFonts } from "expo-font";
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


function OnBoarding() {
    const [fontsLoaded] = useFonts({
        "Karla-Regular": require("./../../assets/fonts/Karla-Regular.ttf"),
        "SMarkaziText-Regular": require("./../../assets/fonts/MarkaziText-Regular.ttf"),
    });

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
                <MyButton text={"LogIn"} />
                <MyButton text={"SignIn"} />
            </Center>
        </>
    )
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
})

export default OnBoarding
export { Welcome }