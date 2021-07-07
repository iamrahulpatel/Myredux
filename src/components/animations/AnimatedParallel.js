import React, { useEffect } from 'react'
import { Animated, Easing, StyleSheet, Text, View, TouchableHighlight } from 'react-native'

const AnimatedParallel = () => {

    animatedValue1 = new Animated.Value(0)
    animatedValue2 = new Animated.Value(0)
    animatedValue3 = new Animated.Value(0)

    const animate = () => {
        const createAnimation = function (value, duration, easing, delay = 0) {
            return Animated.timing(
                value,
                {
                    toValue: 1,
                    duration,
                    easing,
                    delay,
                    useNativeDriver: false
                }
            )
        }
        Animated.parallel([
            createAnimation(animatedValue1, 2000, Easing.ease),
            createAnimation(animatedValue2, 1000, Easing.ease, 1000),
            createAnimation(animatedValue3, 1000, Easing.ease, 2000),
        ]).start()
    }


    useEffect(() => {
        animate()
    })

    const scaleText = animatedValue1.interpolate({
        inputRange: [0, 1],
        outputRange: [0.5, 2]
    })
    const spinText = animatedValue2.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '720deg']
    })
    const introButton = animatedValue3.interpolate({
        inputRange: [0, 1],
        outputRange: [-100, 400]
    })

    return (
        <View style={[styles.container]}>
            <Animated.View
                style={{ transform: [{ scale: scaleText }] }}>
                <Text>Welcome</Text>
            </Animated.View>
            <Animated.View
                style={{ marginTop: 20, transform: [{ rotate: spinText }] }}>
                <Text
                    style={{ fontSize: 20 }}>
                    to the App!
                </Text>
            </Animated.View>
            <Animated.View
                style={{ top: introButton, position: 'absolute' }}>
                <TouchableHighlight
                    onPress={animate.bind()}
                    style={styles.button}>
                    <Text
                        style={{ color: 'white', fontSize: 20 }}>
                        Click Here To Start
                    </Text>
                </TouchableHighlight>
            </Animated.View>
        </View>
    )
}

export default AnimatedParallel

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: "dodgerblue",
        marginTop: 50,
        padding: 20
    }
})
