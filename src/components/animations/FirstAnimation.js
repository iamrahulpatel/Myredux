import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet, Text, View, Animated, Image, Easing, TouchableOpacity } from 'react-native'

const FirstAnimation = () => {

    const url = 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png';
    const position = new Animated.ValueXY({ x: 0, y: 0 })
    const spinValue = new Animated.Value(0)
    const springValue = new Animated.Value(0.1)

    //Animated.timing takes two argumntes , the value and config object

    const trans = () => {
        Animated.timing(
            position,
            {
                toValue: { x: 150, y: 300 },
                duration: 5000,
                easing: Easing.bounce,
                useNativeDriver: true,
            }
        ).start()
    }
    const spin = () => {
        Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 5000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        ).start()
    }

    const spring = () => {
        Animated.spring(
            springValue,
            {
                toValue: 1,
                friction: 1,
                useNativeDriver: true
            }
        ).start()
    }

    useEffect(() => {
        trans()
        spin()
        spring()
    })

    const rot = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    })

    return (
        <View style={styles.container}>
            <Text>Translate</Text>
            <Animated.Image
                style={{
                    width: 227,
                    height: 200,
                    transform: [
                        { translateX: position.x },
                        { translateY: position.y },
                    ]
                }}
                source={{ uri: url }}
            />

            <Text>Rotation</Text>
            <Animated.Image
                style={{
                    width: 227,
                    height: 200,
                    transform: [
                        { rotate: rot },
                        { scale: 1.3 }
                    ]

                }}
                source={{ uri: url }}
            />

            <Text>Spring Scale</Text>
            <Animated.Image
                style={{
                    width: 227,
                    height: 200,
                    transform: [{ scale: springValue }]
                }}
                source={{
                    uri: url
                }}
            />
        </View>
    )
}

export default FirstAnimation

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
