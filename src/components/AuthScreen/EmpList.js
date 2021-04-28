import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import { TEST_SAGA, STORE_DEMO_SAGA } from "../../store/actions/actionType";


const EmpList = () => {

    const dummySagaData = useSelector((state) => state.storeData);
    console.log("dummySagaData " , dummySagaData)
    const dispatch = useDispatch();
    const renderItemFunc = ({ item, index }) => (
        <View>
            <Text>Name : {item.employee_name}</Text>
            <Text>Age : {item.employee_age}</Text>
        </View>
    )

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 30 }}>Employee List Screen</Text>
            <TouchableOpacity
            onPress={
                ()=>{
                    dispatch({
                        type:STORE_DEMO_SAGA,
                        payload:"dummySagaData"
                    })
                }
            }
            >
                <Text>Show Employees</Text>
            </TouchableOpacity>
            <FlatList
                data={dummySagaData}
                renderItem={renderItemFunc}
            />
            <Text>start {dummySagaData} end</Text>
        </View>
    );
}

export default EmpList;