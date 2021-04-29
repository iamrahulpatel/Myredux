import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import { showMyData } from "../../store/actions/action";
import { SHOW_DEMO_SAGA, STORE_DEMO_SAGA } from "../../store/actions/actionType";

const ww = Dimensions.get('window').width;
const wh = Dimensions.get('window').height;

const EditProfile = () => {

    const fetchData = useSelector((state) => state.userData);
    console.log("Edited Profile Data",fetchData);

    //editing data states
    const [ename, setEname] = useState(fetchData?.myname);
    const [eemail, setEemail] = useState(fetchData?.myemail);
    const [ephone, setEphone] = useState(fetchData?.myphone);
    const [epass, setEpass] = useState(fetchData?.mypass);
    const [econpass, setEconpass] = useState(fetchData?.myconpass);

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const saveProfile = () => {
        let myobj = {
            myname: ename,
            myemail: eemail,
            myphone: ephone,
            mypass: epass,
            myconpass: econpass
        }
        dispatch(showMyData(myobj));
        alert("Profile Updated Successfully . . . . ");
        console.log("Profile Updated Successfully . . . . ");
    }


    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.heading}>Edit Profile</Text>
            <View style={styles.formContainer}>

                <TextInput value={ename} onChangeText={(name) => setEname(name)} style={styles.inp} placeholder="Enter your name" />
                <TextInput value={eemail} onChangeText={(email) => setEemail(email)} style={styles.inp} placeholder="Enter your email" />
                <TextInput value={ephone} onChangeText={(phone) => setEphone(phone)} style={styles.inp} placeholder="Enter your phone" />
                <TextInput value={epass} onChangeText={(pass) => setEpass(pass)} style={styles.inp} placeholder="Enter your passoword" />
                <TextInput value={econpass} onChangeText={(conpass) => setEconpass(conpass)} style={styles.inp} placeholder="Confirm your password" />

                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btn} onPress={() => saveProfile()}>
                        <Text style={styles.btnText}>Save Profile</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()} >
                        <Text style={styles.btnText}>Go Back</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.btn} onPress={() =>
                    dispatch({
                        type: STORE_DEMO_SAGA,
                        payload: "dummySagaData"
                    })
                    && navigation.navigate('EmpList')
                    } >
                    <Text style={styles.btnText}>Employee List</Text>
                </TouchableOpacity>

            </View>
            <Text>{wh},{ww}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    heading: {
        fontSize: ww / 10,
        color: '#23C4ED',
        textDecorationLine: "underline",
        letterSpacing: 10,
        marginLeft: ww / 10
    },

    formContainer: {
    },
    inp: {
        borderBottomWidth: 2,
        borderBottomColor: '#00AC61',
        margin: ww / (ww * .2),
        fontSize: 20,
        color: '#00AC61',
        fontWeight: "bold",
        fontSize: ww / 20
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    btn: {
        backgroundColor: '#00AC61',
        padding: ww / (ww * .08),
        borderRadius: ww / 10,
        borderWidth: 2
    },
    btnText: {
        color: "#fff",
        fontSize: ww / 20
    }
});
export default EditProfile;