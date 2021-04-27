import React,{ useState} from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Textarea from 'react-native-textarea';
import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<any, any> {};

interface MenuParams {
  name: string;
}


export const RequestFormScreen = ({route, navigation}:Props) => {

  const params = route.params as MenuParams;

  const takePhoto = () => {
    launchCamera({
      mediaType: 'photo',
      cameraType: 'back',
      quality: 0.5

    }, (res) => setMedia(res.uri))
  }

  const filmVideo = () => {
    launchCamera({
      mediaType: 'video',
      cameraType: 'back',
      quality: 0.5
    }, (res) => setMedia(res.uri))
  }

  const cancelUpload = () => {
    setMedia('')
  }

  const [media,setMedia]:any = useState('')

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainTitle}>Request a Quote to:  </Text>
      <Text style={styles.mainTitle}>{params.name}</Text>
      <View>
      <Textarea
      placeholder={"Describe your problem here"}
      containerStyle={styles.textareaContainer}
      style={styles.textarea}
      />
      </View>
      {(media.length)
        ?
        <View style={styles.feedbackContainer}>
      <Text style={styles.imageFeedback}>
        Upload Succesful!
      </Text>
      <Image style={styles.imgFeedback} source={require('../assets/images/greenTick.png')}/>
      <TouchableOpacity
        onPress={cancelUpload}>
        <Text style={styles.cancelText}>Cancel Upload</Text>
      </TouchableOpacity>
      </View>
        :
        <View style={styles.btnContainer}>
        <Text style={styles.formTitle}>Upload an image or video of the issue</Text>
        <TouchableOpacity
        onPress={takePhoto}
        style={styles.cameraBtn}
        >
        <Image style={{width:90, height:90, alignSelf:'center'}}  source={require('../assets/images/testCamera2.png')}/>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={filmVideo}
        >
        <Image style={styles.videoCameraBtn} source={require('../assets/images/finalVideoCamera.png')}/>
        </TouchableOpacity>
      </View>
      }

      <View >
        <TouchableOpacity
        style={styles.submitContainer}
        onPress={() => navigation.navigate('RequestSubmittedScreen')}>
          <Text style={{...styles.submitBtn}}>Submit Request</Text>
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
      fontSize: 35,
      textAlign: 'center',
      marginBottom: 20,
      paddingBottom: 20,
      paddingHorizontal: 20,
      fontFamily: 'ZenDots-Regular',
      borderBottomWidth: 5,
      borderColor: '#ecf0f1'
    },

    formTitle: {
      color: '#FFAA2B',
      fontSize: 35,
      textAlign: 'center',
      marginVertical: 20,
      fontFamily: 'ZenDots-Regular',

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
      flexWrap: 'wrap',
    },

    cameraBtn: {
      width: 100,
      height: 100,
      borderWidth: 5,
      borderRadius: 50,
      marginHorizontal: 10,
      borderColor: '#ecf0f1',
      backgroundColor: 'orange',
      padding: 20,
      justifyContent:'center'
    },

    videoCameraBtn: {
      width: 100,
      height: 100,
      borderWidth: 5,
      borderRadius: 50,
      marginHorizontal: 10,
      borderColor: '#ecf0f1',
      backgroundColor: 'orange'
    },

    submitContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 20,
    },

    submitBtn: {
      fontSize: 30,
      backgroundColor: '#FFAA2B',
      padding: 20,
      borderColor: '#ecf0f1',
      borderWidth: 4,
      textAlign: 'center',
      fontFamily: 'ZenDots-Regular'

    },

    feedbackContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },

    imageFeedback: {
      marginTop: 10,
      marginBottom: 15,
      fontSize: 40,
      color: '#FFAA2B',
      fontFamily: 'ZenDots-Regular'

    },

    imgFeedback: {
      marginTop: 20,
      width: 120,
      height:120,
    },

    cancelText: {
      marginTop: 30,
      fontSize: 30,
      backgroundColor: '#F65A76',
      padding: 20,
      borderColor: '#ecf0f1',
      borderWidth: 4,
      textAlign: 'center',
      fontFamily: 'ZenDots-Regular',
      paddingHorizontal: 35,
    }


});
