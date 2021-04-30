import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import Header from "../common/Header";
import { TEST_SAGA, STORE_DEMO_SAGA, DISPLAY_DEMO_SAGA } from "../../store/actions/actionType";


const EmpList = () => {

    const storedata = useSelector((state) => state.storeSaga);
    console.log("storedata: ", storedata)
    const displaydata = useSelector((state) => state.displaySaga);
    console.log("displaydata: ", displaydata)
    const displaydataapi = useSelector((state) => state.displayApiSaga);
    console.log("displaydataapi: ", displaydataapi)
    
    const dispatch = useDispatch();
    const navigation = useNavigation();


    return (
        <View style={{ flex: 1 }}>
            <Header style={{ color: "red" }} name="Employees List" />
            <TouchableOpacity
                onPress={
                    () =>
                        console.log(displaydata)
                }
            >
                <Text>Show Employees</Text>
            </TouchableOpacity>
            <FlatList
                data={displaydata}
                renderItem={({ item, index }) => (
                    <View>
                        <Text style={{ fontSize: 20 }}>{item}{item.id}..: {item.employee_name}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
            <Text>start {displaydata} end</Text>
        </View>
    );
}

export default EmpList;