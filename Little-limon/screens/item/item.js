import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Dimensions, SectionList, Image } from "react-native";
import { HStack, Stack,Button,Menu, AspectRatio,HamburgerIcon, Heading, Box, Input, MaterialIcons, Center, StatusBar, IconButton, Icon } from 'native-base';
import { AntDesign } from '@expo/vector-icons';


function AppBar({ navigation, itemdata }) {
  return <>
    <StatusBar bg="#F4CE14" barStyle="light-content" />
    <Box safeAreaTop bg="#F4CE14" />
    <HStack bg="#F4CE14" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" >
      <HStack alignItems="center">
        <Pressable onPress={() => {
          navigation.navigate("menu")
        }}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
      </HStack>

      <HStack>
        <AntDesign name="hearto" size={24} color="black" />
      </HStack>
    </HStack>
  </>;
}

const Example = ({ item }) => {
  return <Box alignItems="center">
    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image source={{
            uri: item.pic
          }} alt="image" />
        </AspectRatio>

      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            {item.name}
          </Heading>
          <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
            Price : ${item.price}
          </Text>
        </Stack>
        <Text fontWeight="400">
          Bengaluru (also called Bangalore) is the center of India's high-tech
          industry. The city is also known for its parks and nightlife.
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Box alignItems="center">
              <Button onPress={() => console.log("")}>Add To Cart</Button>
            </Box>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  </Box>;
};


export default function ItemClick({ navigation, route }) {
  console.log(route.params)
  return <>
    <AppBar navigation={navigation} itemdata={route.params} />
    <Example item={route.params} />
  </>;
}