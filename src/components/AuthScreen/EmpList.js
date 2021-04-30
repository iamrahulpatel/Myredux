import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import Header from "../common/Header";
import { TEST_SAGA, STORE_DEMO_SAGA, DISPLAY_DEMO_SAGA } from "../../store/actions/actionType";


const EmpList = () => {


    const displaydata = useSelector((state) => state.displayApiSaga);
    console.log("displaydata: ", displaydata)

    const dispatch = useDispatch();
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <Header name="Posts List" />
            <FlatList
                data={displaydata}
                renderItem={
                    ({ item, index }) => (
                        <TouchableOpacity 
                        onPress={()=>{
                            navigation.navigate('EmpDetail',{
                                id: item.id
                            })
                        }}
                        >
                            <View style={{flexDirection:"row"}} >
                                <Text style={styles.id}>{item.id}.</Text>
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
            // keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    id:{
        fontSize:25,
        color:"#111",
        textDecorationLine:"underline",
        backgroundColor:"pink",
        margin:5
    },
    title:{
        fontSize:25,
        color:"#111",
        textDecorationLine:"underline",
        backgroundColor:"#e6e3e3",
        margin:10,
        textTransform:"capitalize"
    }
})

export default EmpList;