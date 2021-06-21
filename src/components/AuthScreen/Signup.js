import React, { useState } from "react";
import { View, Text, Dimensions, TextInput, StyleSheet, TouchableOpacity, Image, ImageBackground } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import { showMyData } from "../../store/actions/action";
import Header from "../common/Header";
import { wp, hp ,wpx, hpx ,nf  } from "../common/constants";

//dimesnions
const ww = Dimensions.get('window').width;
const wh = Dimensions.get('window').height;
// const sw = Dimensions.get('screen').width;
// const sh = Dimensions.get('screen').height;

const Signup = () => {

    //headerImage
    // const headerImage = { uri: 'https://image.freepik.com/free-vector/startup-life-concept-illustration_114360-1068.jpg' }
    // const backImage = { uri: 'https://i.postimg.cc/28TFZgfJ/angryimg.png' }

    const fetchData = useSelector((state) => state.userData);
    // console.log(fetchData);

    //seting states
    const [name, setName] = useState('Rahul');
    const [email, setEmail] = useState('rahul@mail.com');
    const [phone, setPhone] = useState('9876543210');
    const [pass, setPass] = useState('abc@123');
    const [conpass, setConpass] = useState('abc@123');

    const navigation = useNavigation();

    //save to redux function
    const saveToRedux = () => {
        let myobj = {
            myname: name,
            myemail: email,
            myphone: phone,
            mypass: pass,
            myconpass: conpass
        }
        dispatch(showMyData(myobj));
        alert("Data saved successfully . . . . ");
        navigation.navigate('Profile');

    }
    const dispatch = useDispatch();
    // const mydata = useSelector((state) => state.userData);


    return (
        <View style={{ flex: 1 }}>
            <Header name="Signup" showIcons={false} />
            {/* <Text style={styles.heading}>Signup</Text> */}
            {/* <Image source={headerImage} style={styles.headerImage} /> */}
            {/* <ImageBackground style={styles.formContainer} source={backImage}> */}
            <TextInput value={name} onChangeText={name => setName(name)} style={styles.inp} placeholder="Enter your name" />
            <TextInput value={email} onChangeText={email => setEmail(email)} style={styles.inp} placeholder="Enter your email" />
            <TextInput value={phone} onChangeText={phone => setPhone(phone)} style={styles.inp} placeholder="Enter your phone" />
            <TextInput value={pass} onChangeText={pass => setPass(pass)} style={styles.inp} placeholder="Enter your password" />
            <TextInput value={conpass} onChangeText={conpass => setConpass(conpass)} style={styles.inp} placeholder="Confirm your password" />

            <TouchableOpacity style={styles.btn} onPress={() => saveToRedux()} >
                <Text style={styles.btnText}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('MyMap')} >
                <Text style={styles.btnText}>Map</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('CameraRolling')} >
                <Text style={styles.btnText}>CameraRoll</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('MyAnimation')} >
                <Text style={styles.btnText}>Animation</Text>
            </TouchableOpacity>

            {/* </ImageBackground> */}
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
    headerImage: {
        flex: .3,
    },

    formContainer: {
        flex: .7,
        backgroundColor: "#f74f54",
        borderTopLeftRadius: wpx(10),
        borderTopRightRadius: wpx(10)
    },
    inp: {
        borderBottomWidth: wpx(2),
        borderColor: '#fff',
        borderLeftWidth: wpx(2),
        borderRadius: wpx(10),
        margin: wpx(8),
        color: '#111',
        fontWeight: "bold",
        fontSize: nf(18),
        padding: wpx(8)
    },
    btn: {
        backgroundColor: '#fff',
        padding: wpx(5),
        marginLeft: wp(30),
        marginRight: wp(30),
        alignItems: 'center',
        borderRadius: wpx(30),
        borderWidth: wpx(2),
        marginTop:wpx(2)
    },
    btnText: {
        color: "#0EB2BF",
        fontSize: nf(25),
        fontWeight: 'bold'

    }
});

export default Signup;