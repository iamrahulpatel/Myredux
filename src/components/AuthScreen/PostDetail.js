import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import { types } from "../../store/actions/actionType";

const PostDetail = ({ route }) => {

    const postDetail = useSelector((state) => state.displayDetail)
    const dispatch = useDispatch();

    //editmode states
    const [editmode, setEditmode] = useState(false);

    //states onchange
    const [newId, setNewId] = useState(postDetail?.id.toString());
    const [newTitle, setNewTitle] = useState(postDetail?.title);

    const { id } = route.params;

    useEffect(() => {
        dispatch({
            type: types.DETAIL_API,
            payload: id
        })
    }, [newId, newTitle])

    return (
        <View style={styles.container}>
            <Header name="Post Detail" leftIcon={true} rightIcon={true} />

            <Text style={styles.id}>{postDetail?.id}.{postDetail?.title}</Text>
            <View>
                <TextInput style={styles.inp} editable={editmode} onChangeText={(newId) => setNewId(newId)} value={newId} />
                <TextInput style={styles.inp} editable={editmode} onChangeText={(newTitle) => setNewTitle(newTitle)} value={newTitle} />
            </View>

            {
                editmode ?
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btn} >
                            <Text style={styles.btnText} >  Save  </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} >
                            <Text style={styles.btnText} >Cancel</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    null

            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    id: {
        fontSize: 30
    },
    inp: {
        backgroundColor: "#bfbfbf",
        margin: 10,
        fontSize: 30,
        borderRadius: 10
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    btn: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 50,
        borderWidth: 2
    },
    btnText: {
        color: "#fff",
        fontSize: 18
    }


})

export default PostDetail;

// AIzaSyCA4sYlMe6yATc9DVbfZS5WuwkkYpYpbzs my
// AIzaSyCT-UvG80YvcbNJHVVEZXMVTULw8fq8688 online
// AIzaSyDCPXPLUkK3UVrLr9msaS6-EsZ6UHbVgEq so