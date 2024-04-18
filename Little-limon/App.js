import React from "react";
import OnBoarding from "./screens/onbording/onbording";
import Login from "./screens/login/login";
import Signup from "./screens/signup/Signup";
import Menu from "./screens/menu/menu";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer ,DefaultTheme} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground, View } from "react-native";
import backgroundImage from "./assets/images/Heroimage.png"
import { useFonts } from "expo-font";



const Stack = createNativeStackNavigator()

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

function App1() {
  const [fontsLoaded] = useFonts({
    "Karla-Regular": require("./assets/fonts/Karla-Regular.ttf"),
    "SMarkaziText-Regular": require("./assets/fonts/MarkaziText-Regular.ttf"),
  });
  return (
    <NativeBaseProvider>
      <NavigationContainer theme={navTheme}>
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={backgroundImage}
            style={{ flex: 1 }}
          >
            <Stack.Navigator screenOptions={{ cardStyle: {backgroundColor: 'transparent'}, headerShown: false }} initialRouteName="onboarding">
              <Stack.Screen name="onboarding" component={OnBoarding} />
              <Stack.Screen name="login" component={Login} />
              <Stack.Screen name="signup" component={Signup} />
              <Stack.Screen name="menu" component={Menu} />
            </Stack.Navigator>
          </ImageBackground>
        </View>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}



 function App() {
  const [fontsLoaded] = useFonts({
    "Karla-Regular": require("./assets/fonts/Karla-Regular.ttf"),
    "SMarkaziText-Regular": require("./assets/fonts/MarkaziText-Regular.ttf"),
  });
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={backgroundImage}
            style={{ flex: 1 }}
          >
            <OnBoarding/>
          </ImageBackground>
        </View>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App1