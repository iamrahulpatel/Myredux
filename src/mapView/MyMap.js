import MapView, { Callout, Marker } from 'react-native-maps';
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Header from "../components/common/Header";

import Geolocation from '@react-native-community/geolocation';



const MyMap = () => {
  // Geolocation.getCurrentPosition(data => console.warn(data))
// console.log(Geolocation)

const mycordinates = [
  {
    name:"Hotel Inn",
    latitude: 28.4090,
    longitude: 77.3180,
  },
  {
    name:"Kake da Dhaba",
    latitude: 28.4095,
    longitude: 77.3180,
  },
  {
    name:"St John School",
    latitude: 28.4090,
    longitude: 77.3185,
  },
  {
    name:"King Market",
    latitude: 28.4075,
    longitude: 77.3180,
  },
  {
    name:"Crown Plaza",
    latitude: 28.4080,
    longitude: 77.3181,
  }
]

  return (
    <>
      <Header name="MyMap" />
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 28.408911,
            longitude: 77.317811,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          mapType="standard"
          userInterfaceStyle='dark'
        >
          {/* CUSTOM Marker */}
          <Marker
            style={{ height: 150, width: 150, borderRadius: 50 }}
            coordinate={{
              latitude: 28.4089,
              longitude: 77.3178,
            }}
            title="My Location"
            description="Hi there! I live here"
            // pinColor="orange"
            icon={{
              uri: 'https://imagehost7.online-image-editor.com/oie_upload/images/555441h8s7sb/4mMXY4zxXpZz.jpg',
            }}
          >

          {/* CUSTOM Callout */}
            <Callout tooltip={true}>
              <View>
                <View style={styles.calloutMainView}>
                  <Text style={styles.name}>Rahul Patel</Text>
                  <Text>Hi there! I live here</Text>
                  <Image
                  style={styles.calloutImage}
                  source={require('../assets/images/startup.jpg')}
                  />
                </View>
                <View style={styles.arrowBorder} />
                <View style={styles.arrow} />
              </View>
            </Callout>



          </Marker>

          <Marker
          coordinate={{
            latitude: 28.416352,
            longitude: 77.306202}}
            title="Hotel"
            pinColor="green"
          />
          <Marker
          coordinate={{
            latitude: 28.397290,
            longitude: 77.321803}}
            title="Dhaba"
            pinColor="blue"
          />
          <Marker
          coordinate={{
            latitude: 28.415937,
            longitude: 77.318195}}
            title="Resturant"
            pinColor="red"
          />
          <Marker
          coordinate={{
            latitude: 28.409596,
            longitude: 77.303422}}
            title="Market"
            pinColor="orange"
          />

        </MapView>

      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: 420,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  calloutMainView: {
    // flexDirection: "row",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius:6,
    borderColor:"#ccc",
    borderWidth: 1,
    padding: 15,
    width: 150
  },
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 26,
    alignSelf: "center",
    marginTop: -32

  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#007a07",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -8.5
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight:"bold",
    color:"#ff4321",
    textDecorationLine:"underline"
  },
  calloutImage: {
    width: 80,
    height: 60,
  }
});

export default MyMap;