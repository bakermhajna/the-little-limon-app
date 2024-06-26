import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Dimensions, SectionList,Image } from "react-native";
import { HStack, Box, Input,MaterialIcons, Center,StatusBar,IconButton,Icon } from 'native-base';
import { AntDesign } from '@expo/vector-icons';


function AppBar({navigation,itemdata}) {
    return <>
        <StatusBar bg="#F4CE14" barStyle="light-content" />
        <Box safeAreaTop bg="#F4CE14" />
        <HStack bg="#F4CE14" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" >
          <HStack alignItems="center">
            <Pressable onPress={()=>{
                navigation.navigate("menu")
                }}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </Pressable>
          </HStack>
          <HStack alignItems="center">
            <Text color="white" fontSize="20" fontWeight="bold">
              {itemdata.name}
            </Text>
          </HStack>
          <HStack>
            <AntDesign name="hearto" size={24} color="black" />
          </HStack>
        </HStack>
      </>;
  }
export default function ItemClick({navigation,route}) {
    console.log(route.params)
    return <>
        <AppBar navigation={navigation} itemdata={route.params}/>
      </>;
  }