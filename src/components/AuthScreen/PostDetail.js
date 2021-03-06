import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import { types } from "../../store/actions/actionType";
import { Icon } from "native-base";

const PostDetail = ({ route }) => {

    const postDetail = useSelector((state) => state.displayDetail)
    const dispatch = useDispatch();

    //editmode states
    const [editmode, setEditmode] = useState(false);

    //states onchange
    const [newId, setNewId] = useState('');
    const [newTitle, setNewTitle] = useState('');

    const { id } = route.params;

    useEffect(() => {
        dispatch({
            type: types.DETAIL_API,
            payload: id
        })
    }, [])

    return (
        <View style={styles.container}>
            <Header name="Post Detail" showIcons={false}
                leftIcon={
                    <TouchableOpacity onPress={() => { setEditmode(!editmode) }}>
                        {!editmode ? <Icon name="edit" type="FontAwesome5" style={styles.iconStyle} /> : null}
                    </TouchableOpacity>
                }
                rightIcon={
                    <TouchableOpacity onPress={() => {
                        dispatch({
                            type: types.DELETE_SAGA,
                            payload: id
                        })
                            
                            alert("Post Deleted Successfully")
                            
                    }}>
                        <Icon name="delete" type="AntDesign" style={styles.iconStyle} />


                    </TouchableOpacity>
                } />

            <Text style={styles.id}>Id. {postDetail?.id}</Text>
            <Text style={styles.id}>Title. {postDetail?.title}</Text>
            {/* <View>
                <TextInput style={styles.inp} editable={editmode} onChangeText={(newId) => setNewId(newId)} value={newId} />
                <TextInput style={styles.inp} editable={editmode} onChangeText={(newTitle) => setNewTitle(newTitle)} value={newTitle} />
            </View> */}





            {editmode ?
                <View>
                    <TextInput style={styles.inp} onChangeText={(text) => setNewId(text)} placeholder="Your New Id" />
                    <TextInput style={styles.inp} onChangeText={(text) => setNewTitle(text)} placeholder="Your New Title" />

                    <View style={styles.btnContainer} >
                        <TouchableOpacity style={styles.savebtn} onPress={() => {
                            dispatch({
                                type: types.UPDATE_SAGA,
                                payload: {
                                    item: postDetail,
                                    newTitle: newTitle,
                                    newId: newId
                                }
                            })

                            alert("Post Updated Successfully")
                            setEditmode(!editmode);
                        }}>
                            <Text style={styles.btnText}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelbtn} onPress={() => {
                            setEditmode(!editmode);
                        }}>
                            <Text style={styles.btnText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>

                </View> : null}



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    id: {
        fontSize: 30,
        backgroundColor: "#bfbfbf",
        margin: 10,
        borderRadius: 10,
        padding:10

    },
    inp: {
        backgroundColor: "#bfbfbf",
        margin: 10,
        fontSize: 28,
        borderRadius: 10,
        padding:10
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    btnText: {
        color: "#fff",
        fontSize: 18,
        fontWeight:"bold"
    },
    iconStyle: {
        color: "#fff"
    },
    savebtn: {
        backgroundColor: '#22CB5C',
        padding: 15,
        borderRadius: 25,
        borderWidth: 2,
    },
    cancelbtn: {
        backgroundColor: '#E21717',
        padding: 15,
        borderRadius: 25,
        borderWidth: 2
    }




})

export default PostDetail;
