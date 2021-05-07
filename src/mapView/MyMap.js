import MapView, { Callout, Marker, Polygon , PROVIDER_GOOGLE} from 'react-native-maps';
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Modal, Pressable, FlatList } from "react-native";
import Header from "../components/common/Header";

// import Geolocation from 'react-native-geolocation-service';
import Geolocation from "@react-native-community/geolocation";
import { Platform, PermissionsAndroid } from 'react-native';


const MyMap = () => {

  const [mylatitude, setmylatitude] = useState(0)
  {
    Geolocation.getCurrentPosition(data => setmylatitude(data.coords.latitude));
    Geolocation.getCurrentPosition(data => console.log("Latitude",data.coords.latitude));
  }

    const [mylongitude, setmylongitude] = useState(0)
  {
    Geolocation.getCurrentPosition(data => setmylongitude(data.coords.longitude));
    Geolocation.getCurrentPosition(data => console.log("Longitude",data.coords.longitude));
  }
  

  const [modalVisible, setModalVisible] = useState(false);

  const mycordinates = [
    {
      id: 1,
      name: "Hotel Inn",
      latitude: 28.416352,
      longitude: 77.306202,
      icon: 'https://icons.iconarchive.com/icons/icons-land/vista-map-markers/128/Map-Marker-Ball-Chartreuse-icon.png'
    },
    {
      id: 2,
      name: "Restaurant",
      latitude: 28.415937,
      longitude: 77.318195,
      icon: 'https://icons.iconarchive.com/icons/webalys/kameleon.pics/128/Food-Dome-icon.png'
    },
    {
      id: 3,
      name: "Bank",
      latitude: 28.39720,
      longitude: 77.32183,
      icon: 'https://icons.iconarchive.com/icons/graphicloads/100-flat-2/128/bank-icon.png'
    },
    {
      id: 4,
      name: "King Market",
      latitude: 28.4065,
      longitude: 77.3130,
      icon: "'https://icons.iconarchive.com/icons/graphicloads/100-flat/128/cart-icon.png',"
    },
    {
      id: 5,
      name: "Market",
      latitude: 28.409596,
      longitude: 77.303422,
      icon: 'https://icons.iconarchive.com/icons/graphicloads/100-flat/128/cart-icon.png'
    }
  ]


  return (
    <>
      <Header name="MyMap" />
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
            coordinate={{
              latitude: mylatitude,
              longitude: mylongitude,
            }}
            title="My Location"
            description="Hi there! I live here"
            // pinColor="orange"
            icon={{
              uri: 'https://i.ibb.co/xq32h6x/car.png',
            }}
          >

            {/* CUSTOM Callout */}
            <Callout tooltip onPress={() => setModalVisible(true)} >
              <View>
                <View style={styles.calloutMainView}>
                  <Text style={styles.name}>Rahul Patel</Text>
                  <Text>Hi there! I live here</Text>
                  <Text>Latitude: {mylatitude}</Text>
                  <Text>Longitude: {mylongitude}</Text>
                  {/* <Image
                    style={styles.calloutImage}
                    source={{uri:'https://i.ibb.co/m4MrcPW/house.png'}}
                  /> */}
                </View>
              </View>
            </Callout>

          </Marker>


          {
            mycordinates.map((marker) => (
              <Polygon coordinates={mycordinates} strokeColor="#3DBE29" fillColor="rgba(194, 222, 240, 0.3)" />
            ))

          }
          {
            mycordinates.map((marker,index) => (
              <Marker
              draggable
              key={marker.id}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude
                }}
                title={marker.name}
                pinColor="#02B290"
              // icon={}
              >
              </Marker>

            ))
          }

        </MapView>

        <View style={styles.centeredView}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hi! there I live here</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Close</Text>
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
    width: 200
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
    backgroundColor: "white",
    borderRadius: 20,
    padding: 55,
    alignItems: "center",
    borderWidth: 2
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
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
  }
});

export default MyMap;




// import React, { useState } from 'react';
// import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Modal, Pressable } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Geolocation from '@react-native-community/geolocation';
// import MapView, { PROVIDER_GOOGLE, Marker, region, Callout } from 'react-native-maps';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// import { Item } from 'native-base';

// const MyMap = () => {

//   const Images = [
//     { uri: "https://i.imgur.com/sNam9iJ.jpg" },
//     { uri: "https://i.imgur.com/N7rlQYt.jpg" },
//     { uri: "https://i.imgur.com/UDrH0wm.jpg" },
//     { uri: "https://i.imgur.com/Ka8kNST.jpg" },
//   ];


//   const navigation = useNavigation();

//   const [getlongitude, setlongitude] = useState(0)
//   {
//     Geolocation.getCurrentPosition(info => setlongitude(info.coords.longitude));
//     Geolocation.getCurrentPosition(info => console.log(info.coords.longitude));
//   }
//   const [getlatitude, setlatitude] = useState(0)
//   {
//     Geolocation.getCurrentPosition(info => setlatitude(info.coords.latitude));
//     Geolocation.getCurrentPosition(info => console.log(info.coords.latitude));
//   }





//   const [modalVisible, setModalVisible] = useState(false);

//   const modal = () => {
//     setModalVisible(true);
//   }

//   const locations =
//     [{
//       id: 1,
//       title: 'gym',
//       latitude: 28.908991740605533,
//       longitude: 78.45803508757965,
//       markerImage: "https://i.ibb.co/2PwKJWc/UA-Studios-2.png",
//       weight: 13
//       //28.908991740605533, 78.45803508757965
//     },
//     {
//       id: 2,
//       title: 'swimming pool',
//       latitude: 28.89276126588853,
//       longitude: 78.44825038931155,
//       markerImage: "https://i.ibb.co/2PwKJWc/UA-Studios-2.png",
//       weight: 19
//       //28.89276126588853, 78.44825038931155
//     },
//     {
//       id: 3,
//       title: 'park',
//       latitude: 28.865990620739908,
//       longitude: 78.46174352542597,
//       markerImage: "https://i.ibb.co/2PwKJWc/UA-Studios-2.png",
//       weight: 18
//       //28.865990620739908, 78.46174352542597
//     },
//     {
//       id: 4,
//       title: 'cinema',
//       latitude: 28.857571650836903,
//       longitude: 78.4641467846497,
//       markerImage: "https://i.ibb.co/2PwKJWc/UA-Studios-2.png",
//       weight: 12
//       //28.857571650836903, 78.4641467846497
//     },
//     {
//       id: 5,
//       title: 'museum',
//       latitude: 28.856368885193813,
//       longitude: 78.46552007563471,
//       markerImage: "https://i.ibb.co/2PwKJWc/UA-Studios-2.png",
//       weight: 2
//       //28.856368885193813, 78.46552007563471
//     },
//     {
//       id: 6,
//       title: 'theatre',
//       latitude: 28.83832573117889,
//       longitude: 78.4689533030972,
//       markerImage: "https://i.ibb.co/2PwKJWc/UA-Studios-2.png",
//       weight: 15
//       //28.83832573117889, 78.4689533030972
//     },
//     {
//       id: 7,
//       title: 'school',
//       latitude: 28.838292106870785,
//       longitude: 78.46360553465573,
//       markerImage: "https://i.ibb.co/2PwKJWc/UA-Studios-2.png",
//       weight: 5
//       //28.838292106870785, 78.46360553465573
//     },
//     {
//       id: 8,
//       title: 'university',
//       latitude: 28.83595283026274,
//       longitude: 78.46670079914135,
//       markerImage: "https://i.ibb.co/2PwKJWc/UA-Studios-2.png",
//       weight: 50
//       //28.83595283026274, 78.46670079914135

//     },
//     {
//       id: 9,
//       title: 'arts college',
//       latitude: 28.837406789921552,
//       longitude: 78.4548649681602,
//       markerImage: "https://i.ibb.co/2PwKJWc/UA-Studios-2.png",
//       weight: 54
//       //28.837406789921552, 78.4548649681602

//     },
//     {
//       id: 10,
//       title: 'club',
//       latitude: 28.83758561558059,
//       longitude: 78.44527034462452,
//       markerImage: "https://i.ibb.co/2PwKJWc/UA-Studios-2.png",
//       weight: 34
//       //28.83758561558059, 78.44527034462452

//     },
//     {
//       id: 11,
//       title: 'restaurant',
//       latitude: 28.840446784329867,
//       longitude: 78.43832955313063
//       ,
//       markerImage: "https://i.ibb.co/2PwKJWc/UA-Studios-2.png",
//       weight: 21
//       //28.840446784329867, 78.43832955313063

//     }]

//   return (
//     <View style={styles.mainview} >


//       <Text style={styles.container1} >dummymap</Text>
//       <TextInput style={styles.container}
//         placeholder="latitude" > {getlatitude}</TextInput>

//       <TextInput style={styles.container}
//         placeholder="longitude" > {getlongitude}</TextInput>

//       <View style={{ flexDirection: 'row' }}>
//         <TouchableOpacity style={styles.centerView} onPress={() => navigation.goBack()} >
//           <Text style={styles.container} >goBack</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.centerView} onPress={() => navigation.navigate('dummymap')} >
//           <Text style={styles.container} >dummymap</Text>
//         </TouchableOpacity>
//       </View>



//       <View style={styles.container2}>
//         <MapView
//           provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//           style={styles.map}
//           initialRegion={{
//             latitude: getlatitude,
//             longitude: getlongitude,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,

//           }}
//           mapType='hybrid'
//           showsUserLocation={true}
//           showsMyLocationButton={false}
//           followsUserLocation={true}
//           getCurrentPosition={true}
//         >

//           {
//             locations.map((marker, index) => (
//               <Marker
//                 draggable
//                 key={marker.id}
//                 pinColor="gold"
//                 coordinate={{

//                   latitude: marker.latitude,
//                   longitude: marker.longitude,
//                   //markerImage: marker.markerImage
//                 }}
//               // image={require('/home/purusharma/reduxapp/src/Components/otherfiles/rating-1.png')}
//               >
//                 {/* <CustomMarker item = {marker}/> */}


//                 <Callout onPress={() => { modal() }} tooltip={false} >


//                   <Text style={styles.markerview}>{marker.title}</Text>
//                   <Text style={styles.name}> {marker.name}</Text>

//                 </Callout>


//               </Marker>
//             ))
//           }

//         </MapView>

//         <View style={styles.centeredView}>

//           {
//             locations.map((marker, index) => (

//               <Modal
//                 animationType='fade'
//                 transparent={true}
//                 visible={modalVisible}
//               >


//                 <View style={styles.centeredView}>
//                   <View style={styles.modalView}>
//                     <Text style={styles.modalText}>hello! </Text>
//                     <Text style={styles.modalText}>this is {marker.title}</Text>

//                     <Pressable
//                       style={[styles.button, styles.buttonClose]}
//                       onPress={() => setModalVisible(!modalVisible)}
//                     >
//                       <Text style={styles.textStyle}>BACK</Text>
//                     </Pressable>
//                   </View>
//                 </View>
//               </Modal>
//             ))
//           }

//         </View>

//       </View>




//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//     height: 60,
//     color: "#4E4AAD",
//     fontSize: 16,
//     backgroundColor: "#0EB2BF",
//     padding: 10,
//     borderRadius: 10,
//     margin: 5,
//     fontWeight: "bold"
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",

//   },

//   mapmarker: {
//     flexDirection: 'column',
//     //borderRadius: 2,
//     borderWidth: 3,
//     borderColor: 'black',
//     padding: 15,
//     height: 150,
//     width: 150,

//     //backgroundColor:'blue',

//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center",
//     fontSize: 20

//   },
//   markerview:
//   {
//     height: 25,
//     fontSize: 16,
//     fontWeight: "bold"


//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2
//   },
//   buttonClose: {
//     backgroundColor: "#2196F3",
//   },
//   mainview: {
//     flex: 1
//   },
//   container1: {
//     height: 60,
//     color: "#4E4AAD",
//     fontSize: 16,
//     //backgroundColor: "#0EB2BF",
//     padding: 10,
//     borderRadius: 10,
//     margin: 5,
//     fontWeight: "bold",
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 120,
//     marginLeft: 120

//   },
//   centerView: {
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center",
//     fontSize: 22
//   },
//   container2: {
//     ...StyleSheet.absoluteFillObject,
//     height: 400,
//     width: 400,
//     marginTop: 300,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     borderColor: 'black',
//     borderWidth: 4,
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
//   image: {
//     height: 50,
//     width: 50,
//     alignItems: 'baseline',
//     borderColor: 'blue',
//     borderWidth: 4,

//     //position:'absolute'
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },

// });
// export default MyMap;