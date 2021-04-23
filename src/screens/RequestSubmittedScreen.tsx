import React, {useState, useEffect} from 'react'
import { View, StyleSheet, Image, Animated, Text } from 'react-native';

export const RequestSubmittedScreen = () => {

  const state = {
    opacity: new Animated.Value(0)
  }

  const renderImage = () => {
    Animated.timing(state.opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  }

  return (
    <View style={styles.mainContainer} >
      <Animated.Image source={require('../assets/images/logotest.png')} onLoad={renderImage} style={[{
        opacity: state.opacity,
        marginVertical: 50,
        transform: [
          {
            scale: state.opacity.interpolate({
              inputRange:[0,1],
              outputRange: [0.05,1]
            })
          }
        ]
      }
      ]}/>
      <Text style={styles.submittedText}>
      Request Submitted! The company will contact you shortly
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#333232',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },

    submittedText: {
      color: '#FFAA2B',
      fontSize: 35,
      textAlign: 'center',
      fontFamily: 'ZenDots-Regular',
      padding: 20,
    }

});