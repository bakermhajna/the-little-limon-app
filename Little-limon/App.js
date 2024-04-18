import React from "react";
import OnBoarding from "./screens/onbording/onbording";
import Login from "./screens/login/login";
import Signup from "./screens/signup/Signup";
import Menu from "./screens/menu/menu";
import { NativeBaseProvider } from "native-base";
import { ImageBackground,View } from "react-native";
import backgroundImage from "./assets/images/Heroimage.png"
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Karla-Regular": require("./assets/fonts/Karla-Regular.ttf"),
    "SMarkaziText-Regular": require("./assets/fonts/MarkaziText-Regular.ttf"),
});
  return (
    <NativeBaseProvider>
        <View style={{ flex:1}}>
        
          {/* <OnBoarding /> */}
          {/* <Login/> */}
          {/* <Signup/> */}
          <Menu/>
    </View>
      </NativeBaseProvider>
  );
}
