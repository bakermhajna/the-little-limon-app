import React from "react";
import { NativeBaseProvider } from "native-base";
import { ImageBackground } from "react-native";
import OnBoarding from "./screens/onbording/onbording";
import backgroundImage from "./assets/images/Heroimage.png"
import Login from "./screens/login/login";

export default function App() {
  return (
    <>
      <NativeBaseProvider>
        <ImageBackground
          source={backgroundImage}
          style={{ flex: 1, }}
        >
          {/* <OnBoarding /> */}
          <Login/>
        </ImageBackground>
      </NativeBaseProvider>
    </>
  );
}
