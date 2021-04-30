import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import { STORE_DEMO_SAGA, DETAIL_API, } from "../../store/actions/actionType";

const EmpDetail = ({ route }) => {

    const postDetail = useSelector((state) => state.displayDetail)
    const dispatch = useDispatch();
    const { id } = route.params;

    useEffect(() => {
        dispatch({
            type: DETAIL_API,
            payload: id
        })
    }, [])

    return (
        <View style={styles.container}>
            <Header name="Post Detail" />

            <Text style={styles.id}>{postDetail?.id}.{postDetail?.title}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    id: {
        fontSize: 30
    }


})

export default EmpDetail;