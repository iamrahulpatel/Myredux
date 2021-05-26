import React, { useState } from "react";
import { View, Text, Dimensions, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import { TEST_SAGA , STORE_DEMO_SAGA} from "../../store/actions/actionType";
import { firstSaga } from "../../store/sagas/mainSaga";
import Header from "../common/Header";
const ww = Dimensions.get('window').width;
const wh = Dimensions.get('window').height;

const Profile = () => {

    const dispatch = useDispatch();
    const fetchData = useSelector((state) => state.userData);
    console.log("Profile Data",fetchData);

    //editing data states
    const [editmode, setEditmode] = useState(false);
    const [ename, setEname] = useState(fetchData?.myname);
    const [eemail, setEemail] = useState(fetchData?.myemail);
    const [ephone, setEphone] = useState(fetchData?.myphone);
    const [epass, setEpass] = useState(fetchData?.mypass);
    const [econpass, setEconpass] = useState(fetchData?.myconpass);
    
    const navigation = useNavigation();


    return (
        <View style={{ flex: 1 }}>
            <Header name="Profile" showIcons={false} />
            {/* <Text style={styles.heading}>Profile</Text> */}
            <View style={styles.formContainer}>
                {/* <TextInput value={fetchData.myname} onChangeText={(name) => setEname(name)} editable={editmode} style={styles.inp} />
                <TextInput value={fetchData.myemail} onChangeText={(email) => setEemail(email)} editable={editmode} style={styles.inp} />
                <TextInput value={fetchData.myphone} onChangeText={(phone) => setEphone(phone)} editable={editmode} style={styles.inp} />
                <TextInput value={fetchData.mypass} onChangeText={(pass) => setEpass(pass)} editable={editmode} style={styles.inp} />
                <TextInput value={fetchData.myconpass} onChangeText={(conpass) => setEconpass(conpass)} editable={editmode} style={styles.inp} /> */}

                <Text style={styles.inp}>Welcome {fetchData?.myname}</Text>
                <Text style={styles.inp}>{fetchData?.myemail}</Text>
                <Text style={styles.inp}>{fetchData?.myphone}</Text>
                
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('EditProfile')}>
                    <Text style={styles.btnText}>Edit Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => {
                    // dispatch({
                    //     type:TEST_SAGA,
                    //     payload:"This is payload my sagas"
                    // })
                    navigation.goBack()
                }}>
                    <Text style={styles.btnText}>Go Back</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    heading: {
        fontSize: 50,
        color: '#23C4ED',
        textDecorationLine: "underline",
        letterSpacing: 10,
        marginLeft: 100
    },

    formContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex:.7
    },
    inp: {
        borderBottomWidth: 2,
        borderColor: '#fff',
        borderLeftWidth: 2,
        borderRadius: 10,
        margin: 10,
        fontSize: 20,
        color: '#111',
        fontWeight: "bold",
        fontSize: ww / 20,
        padding: 10
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    btn: {
        backgroundColor: '#0EB2BF',
        padding: 15,
        borderRadius: 50,
        borderWidth: 2
    },
    btnText: {
        color: "#fff",
        fontSize: 18
    }
});
export default Profile;