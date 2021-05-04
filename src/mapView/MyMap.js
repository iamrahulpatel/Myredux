import MapView from 'react-native-maps';
import React from "react";
import { View, Text, StyleSheet ,Image} from "react-native";
import Header from "../components/common/Header";

const MyMap = () => {

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
            </MapView>
            <Image
            style={{height:50, width:50}}
            source={{uri:'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png'}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });

export default MyMap;