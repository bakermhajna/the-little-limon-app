import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Dimensions, SectionList,Image } from "react-native";
import { HStack, Box, Input, Center, } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { createTable, getMenuItems, saveMenuItems, filterByQueryAndCategories } from "./../../database/database";
import { getSectionListData,newsections } from "./../../utils/utils";
import { menuitemjson } from "./components/menuitemjson";

const API_URL = 'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json';

const screenDimentions = Dimensions.get("screen")

const fetchData = async () => {
    const menu = await fetch(API_URL)
    const jsonMenu = await menu.json()
    return jsonMenu;
}

const Item = ({ item }) => {
    return (<Center style={menuStyles.innerContainer}>
        <Text style={menuStyles.itemText}>{item.name}</Text>
        <Text style={menuStyles.itemText}>{item.price}</Text>
        <Image  source={{uri: item.pic}} style={{width: 50, height: 50}} />
    </Center>)
};

const Searchbar = ({ sectionfilter, sectiondatafunction, searchinput, setSearchInput }) => {
    return (
        <>
            <HStack marginTop={"7%"} justifyContent={"space-between"} paddingRight={"1%"}>
                <Center marginLeft={"2%"}>
                    <FontAwesome name="search" size={24} color="black" />
                </Center>
                <Input
                    value={searchinput}
                    onChange={(e) => {
                        const searchText = e.nativeEvent.text;
                        setSearchInput(searchText);
                        filterByQueryAndCategories(sectionfilter, searchText).then(result => {
                            const data = newsections(result);
                            sectiondatafunction(data);
                        });
                    }}
                    placeholder="Search"
                    borderRadius={50}
                    width={"90%"}
                    borderColor={"#495E57"}
                />
            </HStack>
        </>
    )
}

const Mycenter = ({ item, backgroundColor }) => {
    return (
        <>
            <Center
                borderColor={"#495E57"}
                borderWidth={1}
                width={screenDimentions.width / 3}
                height={16}
                backgroundColor={backgroundColor ? backgroundColor : null}
                marginTop={"10%"}
            >
                <Text>{item}</Text>
            </Center>
        </>
    )
}

export default function Menu() {
    const sections = ['Appetizers', 'Salads', 'Beverages'];
    const [searchinput, setSearchInput] = useState("")
    const [sectionDatavar, setSectionData] = useState([])
    const [sectionFilter, setSectionFilter] = useState({
        "Appetizers": true,
        "Salads": true,
        "Beverages": true
    })

    const renderSectionHeader = ({ section: { title } }) => (
        <Center borderColor={"#495E57"} borderWidth={7} height={10}>
            <Text >{title} </Text>
        </Center>
    );

    const renderItem = ({ item }) => <Item item={item} />

    const sep = () => <View style={menuStyles.sep} />

    useEffect(() => {
        const run = async () => {
            try {
                await createTable()
                let menuItems = await getMenuItems()
                if (menuItems.length === 0) {
                    //const menu = fetchData()
                    const menu =menuitemjson.menu
                    saveMenuItems(menu)
                    menuItems = await getMenuItems()
                }
                const sectiondata = newsections(menuItems)
                setSectionData(sectiondata)
            } catch (error) {
                console.log(error)
            }
        }
        run()
    }, []);
    return (
        <View style={{ flex: 1, backgroundColor: "#EDEFEE" }}>
            <Searchbar searchinput={searchinput} setSearchInput={setSearchInput} sectionfilter={sectionFilter} sectiondatafunction={setSectionData} />
            <Box>
                <HStack>
                    {sections.map((item) => {
                        return (
                            <Pressable onPress={() => {
                                const newtsectionfilter = { ...sectionFilter, [item]: !(sectionFilter[item]) }
                                setSectionFilter(newtsectionfilter)
                                filterByQueryAndCategories(newtsectionfilter, searchinput).then(result => {
                                    const data = newsections(result)
                                    console.log(result)
                                    setSectionData(data)
                                })
                            }}
                                key={item}
                            >
                                {sectionFilter[item]
                                    ?
                                    <Mycenter item={item} />
                                    
                                    :
                                    <Mycenter backgroundColor={"#F4CE14"} item={item} />
                                }
                            </Pressable>
                        )
                    })}
                </HStack>
            </Box>
            <SectionList
                keyExtractor={(item, index) => item.name + index}
                sections={sectionDatavar}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                ItemSeparatorComponent={sep}>
            </SectionList>
        </View>
    )
}

const menuStyles = StyleSheet.create({
    container: {
        flex: 0.95,
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemText: {
        color: '#495E57',
        fontSize: 15,
    },
    sep: {
        borderBottomWidth: 1,
        borderColor: '#495E57',
    },
});