import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

import { useNavigation } from '@react-navigation/native';



const Header = ({ name, leftIcon = false, rightIcon = false }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {leftIcon ?
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.icon}>Edit</Text>
                </TouchableOpacity>
                :
                null
            }
            <Text style={styles.head1}>{name}</Text>
            {rightIcon ?
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.icon}>Delete</Text>
                </TouchableOpacity>
                :
                null}
    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        justifyContent: "space-evenly",
        backgroundColor: "#0EB2BF"
    },
    icon: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold"
    },
    head1: {
        fontSize: 30,
        color: "#fff",
        fontWeight: "bold"
    }
})

export default Header;