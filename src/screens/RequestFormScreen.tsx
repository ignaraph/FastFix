import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Textarea from 'react-native-textarea';
import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<any, any> {};

const takePhoto = () => {
  launchCamera({
    mediaType: 'photo',
    cameraType: 'back',
    quality: 0.5

  }, (res) => console.log(res))
}

const filmVideo = () => {
  launchCamera({
    mediaType: 'video',
    cameraType: 'back',
    quality: 0.5
  }, (res) => console.log(res))
}

export const RequestFormScreen = ({navigation}:Props) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainTitle}>Request a Quote!</Text>
      <Text style={styles.formTitle}>Describe your problem below</Text>
      <View>
      <Textarea
       containerStyle={styles.textareaContainer}
       style={styles.textarea}
      />
      </View>
      <Text style={styles.formTitle}>Upload an image or video of the issue</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity
        onPress={takePhoto}
        >
        <Image style={styles.cameraBtn} source={require('../assets/images/cameraIcon.jpg')}/>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={filmVideo}
        >
        <Image style={styles.cameraBtn} source={require('../assets/images/videoCameraIcon2.jpg')}/>
        </TouchableOpacity>
      </View>
      <View style={styles.submitContainer}>
        <TouchableOpacity
        onPress={() => navigation.navigate('RequestSubmittedScreen')}>
          <Text style={styles.submitBtn}>Submit Request</Text>
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

    mainTitle: {
      color: '#FFAA2B',
      fontSize: 40,
      textAlign: 'center',
      marginTop: 10,
      fontWeight: 'bold',
    },

    formTitle: {
      color: '#FFAA2B',
      fontSize: 35,
      textAlign: 'center',
      marginVertical: 20,
    },

    textareaContainer: {
      height: 250,
      padding: 5,
      backgroundColor: '#FFAA2B',
    },
    textarea: {
      textAlignVertical: 'top',  // hack android
      height: 170,
      fontSize: 30,
      color: '#333',
    },

    btnContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },

    cameraBtn: {
      width: 100,
      height: 100,
      borderWidth: 20,
      borderRadius: 50,
      marginHorizontal: 10,
    },

    submitContainer: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginVertical: 160,
    },

    submitBtn: {
      fontSize: 30,
      borderRadius: 30,
      backgroundColor: '#FFAA2B',
      padding: 10,
      borderColor: '#ecf0f1',
      borderWidth: 4,
      textAlign: 'center'
    }






});
