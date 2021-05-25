import React, { useEffect, useState } from 'react';
import { View,Text, Image, FlatList, PermissionsAndroid, Platform, StyleSheet, Button } from 'react-native';
import Header from '../../common/Header';
import CameraRoll from '@react-native-community/cameraroll';

const CameraRolling = () => {
  //storing our photos
  const [data, setData] = useState('');

  const getPhotos = () => {
    CameraRoll.getPhotos({
      first: 1,
      assetType: 'Photos',
      groupName: 'Screenshots',

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

  const deletePics = () => {
    CameraRoll.deletePhotos(['file:///storage/emulated/0/DCIM/Screenshots/Screenshot_2021-05-25-17-30-42-348_com.miui.gallery.jpg'])
  }

  useEffect(() => {
    askPermission();
  }, []);

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
            <Text>{console.log(item.node.image.uri)}</Text>
          </View>
        )}
      />
      <Button title="Save"  onPress={()=>deletePics()} />
      <Button title="Delete"  onPress={()=>deletePics()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd"
  }
})

export default CameraRolling;
