import {Button} from "native-base"
import { Text,StyleSheet } from "react-native"

export default function MyButton(props) {
    return (
        <>
            <Button borderRadius={50} style={styles.Button} {...props} >
                <Text style={styles.text} >
                    {props.text}
                </Text>
            </Button>
        </>
    )

}


const styles=StyleSheet.create({

    Button:{
        margin:20,
        width:"80%",
        backgroundColor:"#4d5e58"
    },
    text:{
        color:"#edefee",
        fontSize:20,
    }
})