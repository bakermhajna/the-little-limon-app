
import { Text,StyleSheet,Dimensions } from "react-native"
import { Button } from '@rneui/themed';
const width = Dimensions.get("screen").width
export default function MyButton(props) {
    return (
        <>
            <Button  buttonStyle={{
                backgroundColor: '#4d5e58',
                borderRadius: 5,
                width:(width*70)/100,
                marginVertical:"3%"
              }} 
              borderRadius={50}
               style={styles.Button} 
               {...props} >
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
        width:(width*80)/100,
        backgroundColor:"#4d5e58"
    },
    text:{
        color:"#edefee",
        fontSize:20,
    }
})