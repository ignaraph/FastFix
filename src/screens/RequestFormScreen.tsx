import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const takePhoto = () => {
  launchCamera({
    mediaType: 'photo',
    cameraType: 'back',
    quality: 0.5

  }, (resp) => console.log(resp))
}

export const RequestFormScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainText}>Request a Quote!</Text>
      <Text style={styles.formText}>Describe your problem below</Text>
      <View style={styles.describeForm}>
      <TextInput style={styles.inputForm} placeholder="write here"/>
      </View>
      <Text style={styles.formText}>Upload an image or video of the issue</Text>
      <View>
        <TouchableOpacity
        onPress={takePhoto}
        >
        <Image source={require('../assets/images/uploadIcon.jpg')}/>
        </TouchableOpacity>
      </View>
      </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#333232'
    },

    mainText: {
      color: '#ecf0f1',
      fontSize: 40,
      textAlign: 'center',
      marginTop: 10,
    },

    formText: {
      color: '#ecf0f1',
      fontSize: 30,
      textAlign: 'center',
      marginTop: 20,
    },

    inputForm: {
      marginVertical: 10,
      backgroundColor: 'white',
      width: 350,
      height: 350,
    },

    describeForm: {
      alignItems: 'center',
    }



});
