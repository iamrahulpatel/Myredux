import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, PermissionsAndroid, Platform, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import Header from '../../common/Header';
import CameraRoll from '@react-native-community/cameraroll';


const CameraRolling = () => {
  //storing our photos
  const [data, setData] = useState('');

  //deleting uri
  const [myuri, setMyuri] = useState([]);

  //selcting images
  const [selImg, setSelimg] = useState('');


  const [isLoading, setisLoading] = useState(false)
  const [incImg, setIncimg] = useState(0);

  const getPhotos = () => {
    CameraRoll.getPhotos({
      first: 30 + incImg,
      assetType: 'Photos',
      // groupName: 'Screenshots',

    })
      .then((res) => {
        setData(res.edges);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {

    getPhotos();
    
    return () => {

    }
  }, [incImg]) 

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
    // alert("Photo Deleted Successfully");
    console.log(myuri)
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
        // alert("Saved Succesfully")
      })
        .catch((error) => {
          console.log(error);
        });
    })

  };

  const selectImg = () => {
    CameraRoll.getPhotos({
      first: 1,
      assetType: 'Photos',
      include: ['imageSize', 'filename']
    }).then(rep => {
      rep.edges.forEach(node => {
        node.isSelected = false
      });
      setSelimg(rep.edges)
      // setCameraRollPageInfo(rep.page_info)
      console.log(selImg)

    });
  }

  

  const footerLoad = () => {
    return (
      isLoading ?
        <View>
          <ActivityIndicator size="large" color="#0EB2BF" />
        </View> : null
    )
  }

  const loadMoreImg = () => {
    setIncimg(incImg + 10)
    setisLoading(true)
    console.log(incImg)
  }


  return (
    <View style={styles.container}>
      <Header name="Camera Roll" showIcons={false} />
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        numColumns={4}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={selectImg}>
            <Image
            resizeMode={'cover'}
              style={styles.camImg}
              source={{ uri: item.node.image.uri }}
            />
            {setMyuri(item.node.image.uri)}
            {/* {console.log(item.node.image.uri)} */}
          </TouchableOpacity>
        )}
        // horizontal={true}
        ListFooterComponent={footerLoad}
        onEndReached={loadMoreImg}
        onEndReachedThreshold={0}
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
  camImg: {
    width: 80,
    height: 100,
    borderRadius: 10,
    margin: 5,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    backgroundColor: "#0EB2BF",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    borderColor: "#affaff",
    borderWidth: 2,
  },
  btnText: {
    color: "#fff",
    fontSize: 24
  }
})

export default CameraRolling;
