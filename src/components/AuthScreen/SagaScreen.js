import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import { TEST_SAGA , STORE_DEMO_SAGA} from "../../store/actions/actionType";


const SagaScreen = () => {

    const dummySagaData = useSelector((state) => state.sagaData);
    const dispatch = useDispatch();
    const renderItemFunc = ({ item, index }) => (
        <Text>{item.name}. {item.myemail}</Text>
    )

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>

            {/* <Text>Saga Screen</Text>
            <TouchableOpacity onPress={()=> console.log("dummySagadata :",dummySagaData)} >
                <Text>Check</Text>
            </TouchableOpacity>
            
            <FlatList
                data={dummySagaData}
                renderItem={renderItemFunc}
            /> */}
            <TouchableOpacity onPress={() => {
                dispatch({
                    type: STORE_DEMO_SAGA,
                    payload: "SagaScreen Payload"
                })
            }}>
                <Text style={{borderWidth:1, margin:100, padding:10, paddingLeft:50}}>CheckOnConsole</Text>
            </TouchableOpacity>
            <Text>{dummySagaData}</Text>
        </View>
    );
}

export default SagaScreen;