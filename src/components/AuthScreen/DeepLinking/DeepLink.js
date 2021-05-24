import React from 'react';
import {View, Text, Button} from 'react-native';
import Header from '../../common/Header';
import {useNavigation} from '@react-navigation/native'

const DeepLink = ({route}) => {
    const navigation = useNavigation();


    const {id} = route.params;

    return(
        <View>
            <Header name="Deep Linking" />
            <Text style={{fontSize:100}}>{id}</Text>
            <Button title="Camera Roll" onPress={()=> navigation.navigate('CameraRolling')} />
        </View>
    )
}

export default DeepLink;