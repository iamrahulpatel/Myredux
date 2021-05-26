import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, PermissionsAndroid, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../../common/Header';
import CameraRoll from '@react-native-community/cameraroll';

const CameraRolling = () => {
  //storing our photos
  const [data, setData] = useState('');

  //deleting uri
  const [myuri, setMyuri] = useState('');

  const getPhotos = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos',
      groupName: 'Download',

    })
      .then((res) => {
        setData(res.edges);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const askPermission = async () => {
    if (Platform.OS === 'android') {
      const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Permission Required',
          message: 'Permission required for aceessing the Gallery!',
        },
      );
      if (result !== 'granted') {
        console.log('Access to pictures was denied');
        return;
      } else {
        getPhotos();
      }
    } else {
      getPhotos();
    }
  };

  useEffect(() => {
    askPermission();
  }, []);

  const deletePics = () => {
    CameraRoll.deletePhotos([myuri]);
    alert("Photo Deleted Successfully");
  }

  const askDeletePermission = async () => {
    if (Platform.OS === 'android') {
      const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Permission Required',
          message: 'Permission required for aceessing the Gallery!',
        },
      );
    }
  };

  useEffect(() => {
    askDeletePermission()
  }, [])


  const savePics = () => {
    const Photos = [...data];
    Photos.map((item) => {
      CameraRoll.save(item.node.image.uri, { type: 'photo' }).then(() => {
      alert("Saved Succesfully")
      })
        .catch((error) => {
          console.log(error);
        });
    })

  };


  return (
    <View style={styles.container}>
      <Header name="Camera Roll" showIcons={false} />
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        numColumns={4}
        renderItem={({ item }) => (
          <View>
            <Image
              style={{
                width: 80,
                height: 100,
                borderRadius: 10,
                margin: 5,
              }}
              source={{ uri: item.node.image.uri }}

            />
            {setMyuri(item.node.image.uri)}
          </View>
        )}
      />
      <View style={styles.btnContainer} >
        <TouchableOpacity onPress={() => savePics()} style={styles.btn} >
          <Text style={styles.btnText} >Save</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deletePics()} style={styles.btn} >
          <Text style={styles.btnText} >Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd"
  },
  btnContainer:{
    flexDirection:"row",
  },
  btn: {
    backgroundColor: "#ff4321",
    padding: 10,
    marginLeft:90,
    margin:10,
    borderRadius:20
  },
  btnText:{
    color:"#fff",
    fontSize:24
  }
})

export default CameraRolling;
