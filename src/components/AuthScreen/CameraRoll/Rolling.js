import React,{useState, useEffect} from 'react';
import {PermissionsAndroid, Platform, View, Text, FlatList} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';


const Rolling = () => {
    //storing our pics
    const [pic, setPic] = useState();

    const getPics = () => {
        CameraRoll.getAlbums()
        .then((res) => {setPic(res.edges)})
        .catch((err) => {console.log(err)})
    };

    const askingPermission = async () => {
        if(Platform.OS === 'android'){
            const result = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title="Permission to Access Gallery",
                    message: "Please Give permission to access gallery",
                },   
            );

            if(result !== 'granted'){
                console.log("Accessing the gallery was denied")
                return;
            }else{
                getPics();
            }
        }else{
            //iOS permission 
            getPics();
        }
    };

    useEffect(()=>{
        askingPermission();
    }),[]

    return(
        <View>
            <FlatList
            data={data}
            numColumns={5}
            renderItem={({item})=>(
                <Image
                style={{height:100,width:30 , borderRadius:20, margin:10}}
                source={{uri:item.node.image.uri}}
                />
            )}
            />
        </View>
    )


}