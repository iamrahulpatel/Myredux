import React, { Component, useEffect } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native'

const arr = []
for (var i = 0; i < 45; i++) {
  arr.push(i)
}

class AnimatedSequence extends Component {

  // const = animatedValue = []


  constructor() {
    super()
    this.animatedValue = []
    arr.forEach((value) => {
      this.animatedValue[value] = new Animated.Value(0)
    })
  }

  componentDidMount() {
    this.animate()
  }

  // useEffect(()=>{
  //   animate()
  // })


  // const animate = () => {
  //   const animations = arr.map((item) => {
  //     return Animated.timing(
  //       this.animatedValue[item],
  //       {
  //         toValue: 1,
  //         duration: 1,
  //         useNativeDriver:true
  //       }
  //     )
  //   })
  //   Animated.sequence(animations).start()
  // }

  animate() {
    const animations = arr.map((item) => {
      return Animated.timing(
        this.animatedValue[item],
        {
          toValue: 1,
          duration: 100,
          useNativeDriver: true
        }
      )
    })
    Animated.sequence(animations).start()
  }

  //   const animations = arr.map((a, i) => {
  //     return <Animated.View key={i} 
  //     style={{opacity: this.animatedValue[a], 
  //     height: 20, width: 20, backgroundColor: 'red', 
  //     marginLeft: 3, marginTop: 3}} />
  //   })
  //   return (
  //     <View style={styles.container}>
  //       {animations}
  //     </View>
  //   )

  render() {
    const animations = arr.map((a, i) => {
      return <Animated.View key={i}
        style={{
          opacity: this.animatedValue[a],
          height: 79, width: 79, backgroundColor: 'dodgerblue',
          marginLeft: 3, marginTop: 3, borderRadius: 20,
          borderRightWidth:2, borderColor:"red"
        }} />
    })
    return (
      <View style={styles.container}>
        {animations}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

export default AnimatedSequence
