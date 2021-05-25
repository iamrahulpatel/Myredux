import MapView, { Callout, Heatmap, Marker, Polygon, Circle, Polyline, Overlay, Geojson, } from 'react-native-maps';
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Modal, Pressable, TextInput, Button} from "react-native";
import Header from "../components/common/Header";
import CustomMarker from "./CustomMarker";

import Geolocation from "@react-native-community/geolocation";


const MyMap = () => {

  const [mylatitude, setmylatitude] = useState(0)
  {
    Geolocation.getCurrentPosition(data => setmylatitude(data.coords.latitude));
  }

  const [mylongitude, setmylongitude] = useState(0)
  {
    Geolocation.getCurrentPosition(data => setmylongitude(data.coords.longitude));
  }


  const [modalVisible, setModalVisible] = useState(false);
  const [lat, setLat] = useState(mylatitude);
  const [long, setLong] = useState(mylongitude);

  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const mycordinates = [
    {
      id: 1,
      title: "Hotel Inn",
      latitude: 28.416352,
      longitude: 77.306202,
      description: "Get well furnished rooms",
      pincolor: "blue",
      markerImage: 'https://cdn0.iconfinder.com/data/icons/hotel-icons-rounded/110/Hotel-2-512.png'
    },
    {
      id: 2,
      title: "Restaurant",
      latitude: 28.415937,
      longitude: 77.318195,
      description: "Come and Eat",
      pincolor: "orange",
      markerImage: 'https://icons.iconarchive.com/icons/webalys/kameleon.pics/128/Food-Dome-icon.png'
    },
    {
      id: 3,
      title: "Bank",
      latitude: 28.39720,
      longitude: 77.32183,
      description: "Robbers not allowed",
      pincolor: "red",
      markerImage: 'https://icons.iconarchive.com/icons/graphicloads/100-flat-2/128/bank-icon.png'
    },
    {
      id: 4,
      title: "Gymnasium",
      latitude: 28.4065,
      longitude: 77.3130,
      description: "Chiseld Body",
      pincolor: "green",
      markerImage: 'http://getdrawings.com/free-icon/gym-icon-54.png'
    },
    {
      id: 5,
      title: "Market",
      latitude: 28.409596,
      longitude: 77.303422,
      description: "Potato to Tomato",
      pincolor: "gold",
      markerImage: 'https://icons.iconarchive.com/icons/graphicloads/100-flat/128/cart-icon.png'
    }
  ]

  return (
    <>
      <Header name="MyMap" showIcons={false} />
      {/* <TextInput style={styles.inp} >Lat:    {mylatitude}</TextInput>
      <TextInput style={styles.inp} >Long: {mylongitude}</TextInput> */}
      <View style={styles.container}>
        <MapView

          style={styles.map}
          region={{
            latitude: mylatitude,
            longitude: mylongitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          mapType="standard"
        // userInterfaceStyle='dark'
        >

          {/* CUSTOM Marker */}
          <Marker
            draggable
            onDragEnd={(e) => {console.log('dragEnd', e.nativeEvent.coordinate)}}
            coordinate={{
              latitude: mylatitude,
              longitude: mylongitude,
            }}
            title="My Location"
            description="Hi there! I live here"
            // pinColor="orange"
            icon={{
              uri: 'https://i.ibb.co/mFdhSTW/circle-cropped.png',
            }}
          >

            {/* <Button title="Open Overlay" onPress={toggleOverlay} />

            {mycordinates.map(marker => (
              <Overlay bounds={marker} image={{uri:'https://i.ibb.co/mFdhSTW/circle-cropped.png'}} isVisible={visible} onBackdropPress={toggleOverlay} >
                <Text>{marker.latitude}</Text>
              </Overlay>
            ))} */}


            {/* CUSTOM Callout */}
            <Callout onPress={() => setModalVisible(true)} >
              <View>
                <View style={styles.calloutMainView}>
                  <Text style={styles.name}>Rahul Patel</Text>
                  <Text>Hi there! I live here</Text>
                  {/* <Image style={styles.calloutImage}
                    source={require('../assets/images/startup.jpg')}
                  /> */}
                </View>
              </View>
            </Callout>

          </Marker>


          {
            mycordinates.map(() => (
              <Polygon coordinates={mycordinates} strokeColor="#0EB2BF" strokeWidth={10} fillColor="rgba(194, 222, 240, 0.3)" />
            ))
          }
          {/* {
            mycordinates.map((marker) => (
              <Heatmap points={mycordinates} strokeColor="#3DBE29" fillColor="rgba(194, 222, 240, 0.3)" />
            ))
          } */}

          {/* {
            mycordinates.map((marker) => (
              <Circle center={{latitude:marker.latitude, longitude:marker.longitude}} radius={500} fillColor="#35BDD0"  />
            ))
          } */}
          {/* {
            mycordinates.map((marker) => (
              <Polyline coordinates={mycordinates} strokeWidth={2}/>
            ))
          } */}
          {/* {
            mycordinates.map((marker) => (
              <Overlay image={{uri:'https://i.ibb.co/ynqmZ4Y/placeholder-1.png'}} bounds={marker} tappable={true} />
            ))
          } */}

          {
            mycordinates.map((marker, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude
                }}
                title={marker.title}
                description={marker.description}
              // pinColor={marker.pincolor}
              // icon={{uri:'https://i.ibb.co/ynqmZ4Y/placeholder-1.png'}}
              >
                <CustomMarker mycordinates={marker} />
              </Marker>

            ))
          }

        </MapView>

        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}

          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hi! there I live here</Text>
                <Text>Latitude: {mylatitude}</Text>
                <Text>Longitude: {mylongitude}</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>  Close  </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>

      </View>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
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
    borderRadius: 6,
    borderColor: "#ccc",
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
    fontWeight: "bold",
    color: "#ff4321",
    textDecorationLine: "underline"
  },
  calloutImage: {
    width: 80,
    height: 60,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 70,
    borderWidth: 2,
    borderColor: "#1bc4aa"
  },
  btnColor: {
    color: "#fff",
    fontSize: 16,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#85ced4",
    borderRadius: 20,
    padding: 55,
    alignItems: "center",
    borderWidth: 2
  },
  button: {
    borderRadius: 20,
    padding: 10,
    marginTop: 10
  },
  buttonClose: {
    backgroundColor: "#D82E2F",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20
  },
  inp: {
    backgroundColor: "#12B0E8",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 20
  }
});

export default MyMap;
