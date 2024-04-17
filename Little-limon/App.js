import React from "react";
import { NativeBaseProvider } from "native-base";
import { ImageBackground,View } from "react-native";
import OnBoarding from "./screens/onbording/onbording";
import backgroundImage from "./assets/images/Heroimage.png"
import Login from "./screens/login/login";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Karla-Regular": require("./assets/fonts/Karla-Regular.ttf"),
    "SMarkaziText-Regular": require("./assets/fonts/MarkaziText-Regular.ttf"),
});
  return (
    <NativeBaseProvider>
        <View style={{flex:1}}>
        <ImageBackground
          source={backgroundImage}
          style={{ flex: 1, }}
        >
          {/* <OnBoarding /> */}
          <Login/>
        </ImageBackground>
    </View>
      </NativeBaseProvider>
  );
}
