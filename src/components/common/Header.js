import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';



const Header = ({ name, showIcons=true, leftIcon = null, rightIcon = null }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {showIcons ?
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="edit" type="FontAwesome5" style={styles.icon} />
                </TouchableOpacity>
                :
                leftIcon
            }
            <Text style={styles.head1}>{name}</Text>
            {showIcons ?
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Icon name="delete" type="AntDesign" style={styles.icon} />
                </TouchableOpacity>
                :
                rightIcon}
    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        justifyContent: "space-around",
        backgroundColor: "#0EB2BF"
    },
    icon: {
        fontSize: 28,
        color: "#fff",
        fontWeight: "bold",
    },
    head1: {
        fontSize: 30,
        color: "#fff",
        fontWeight: "bold"
    }
})

export default Header;