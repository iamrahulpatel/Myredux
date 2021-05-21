import React from 'react';
import {View, Text, Button} from 'react-native';
import Header from '../common/Header';


const DeepLink = ({route}) => {

    const {id} = route.params;

    return(
        <View>
            <Header name="Deep Linking" />
            <Text style={{fontSize:100}}>{id}</Text>

        </View>
    )
}

export default DeepLink;