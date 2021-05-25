import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import Header from "../common/Header";
import { types } from "../../store/actions/actionType";


const PostList = () => {


    const displaydata = useSelector((state) => state.displayApiSaga);
    console.log("displaydata: ", displaydata)

    const dispatch = useDispatch();
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <Header name="Posts List" showIcons={false} />
            <FlatList
                data={displaydata}
                renderItem={
                    ({ item, index }) => (
                        <TouchableOpacity 
                        onPress={()=>{
                            navigation.navigate('PostDetail',{
                                id: item.id
                            })
                        }}
                        >
                            <View style={{flexDirection:"row", alignItems:"center"}} >
                                <Text style={styles.id}>{item.id}</Text>
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                            <Text style={styles.line}></Text>
                        </TouchableOpacity>
                    )}
            // keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    id:{
        fontSize:20,
        color:"#000",
        backgroundColor:"#0EB2BF",
        margin:5,
        height:40,
        width:40,
        borderRadius:20,
        textAlign:"center",
        paddingTop:5,
    },
    title:{
        fontSize:20,
        color:"#000",
        backgroundColor:"#e6e3e3",
        textTransform:"capitalize",
    },
    line:{
        borderBottomWidth:2,
        borderColor:"#0EB2BF"
    }
})

export default PostList;