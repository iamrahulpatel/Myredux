import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { STORE_DEMO_SAGA, DISPLAY_DEMO_SAGA } from "../../store/actions/actionType";

const EmpDetail = ({ route }) => {

    const empDetail = useSelector((state) => state.displayApiSaga)
    const dispatch = useDispatch();
    const { id } = route.params;

    useEffect(() => {
        dispatch({
            type: DISPLAY_DEMO_SAGA,
            payload: id
        })
    }, [])

    return(
        <View>
            <Text>{id}</Text>
            <Text>
                Welcome {empDetail?.employee_name}
                Age {empDetail?.employee_age}
            </Text>
        </View>
    )


}

export default EmpDetail;