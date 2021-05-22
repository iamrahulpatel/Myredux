import React, { useEffect, useState } from 'react';
import {View,Image,FlatList,PermissionsAndroid,Platform,} from 'react-native';
import Header from '../common/Header';
import CameraRoll from '@react-native-community/cameraroll';

const CameraRolling = () => {
  const [data, setData] = useState('');

  const getPhotos = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos',
      // groupName:'Reface',
      // fromTime: 1584356434595,
      

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
          title: 'Permission Chahiye',
          message: 'mere ko Permission de de bhai!',
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

  return (
    <View>
      <Header name="Camera Roll" />
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        numColumns={5}
        renderItem={({ item }) => (
          <Image
            style={{
              width: '20%',
              height: 100,
            }}
            source={{ uri: item.node.image.uri }}
          />
        )}
      />
    </View>
  );
};

export default CameraRolling;