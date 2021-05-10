import React from "react";
import { View, Text,StyleSheet, Image, Dimensions } from "react-native";


const CustomMarker = ({mycordinates}) => {
    return(
        <View style={styles.roundMarker} >
            <Image style={styles.roundImage} source={{uri:mycordinates.markerImage}} />
        </View>

        
    )
}

const styles = StyleSheet.create({
    roundMarker:{
        height:50,
        width:50,
        backgroundColor:"#fff",
        borderRadius:25,
        
    },
    roundImage:{
        height:50,
        width:50,
        borderRadius:25,
    },
})

export default CustomMarker;