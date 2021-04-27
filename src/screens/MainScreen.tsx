import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View, Alert } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

import {
  GoogleSigninButton,
  GoogleSignin,
  statusCodes
} from '@react-native-community/google-signin';
import { WEB_CLIENT_ID } from '../../utils/keys';

interface Props extends StackScreenProps<any, any> {};


export const MainScreen = ({navigation}: Props) => {

  const [userInfo, setUserInfo] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    configureGoogleSign();
  }, []);

  function configureGoogleSign() {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
      offlineAccess: false
    });
  }

    const goToMenu = () => {
    navigation.navigate('MenuScreen')
  }

   async function signIn() {
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo2 = await GoogleSignin.signIn();
        setUserInfo(userInfo);
        setError(null);
        await setIsLoggedIn(true);
        goToMenu()
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // when user cancels sign in process,
          Alert.alert('Process Cancelled');
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // when in progress already
          Alert.alert('Process in progress');
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // when play services not available
          Alert.alert('Play services are not available');
        } else {
          // some other error
          Alert.alert('Something else went wrong... ', error.toString());
          setError(error);
        }
      }
    }

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>FastFix</Text>
      <Image style={styles.image} source={require('../assets/images/logotest.png')}/>
      <TextInput
      style={styles.inputs}
      placeholder="Username"
      keyboardType="email-address"/>
      <TextInput secureTextEntry={true} style={styles.inputs} placeholder="Password"/>
      <TouchableOpacity
      onPress={() => navigation.navigate('MenuScreen')} >
        <Text style={styles.loginBtn}>Login</Text>
      </TouchableOpacity>
      <Text style={{fontSize:15, color:'#FFAA2B', marginTop:-40, marginBottom:20}}>Don't have an account? Register here</Text>
      <Text style={styles.orText}>
        Or
      </Text>
      <GoogleSigninButton
        style={styles.signInButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => signIn()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 400,
    marginTop: 20,
  },

  inputs: {
    marginTop: 10,
    borderWidth: 4,
    width: 400,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#FFAA2B',
    borderColor: '#ecf0f1',
    fontWeight: 'bold'
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333232'
  },

  mainTitle: {
    position: 'absolute',
    top: 15,
    fontSize: 80,
    fontFamily: "FasterOne-Regular",
    color: '#FFAA2B',
  },

  loginBtn: {
    width: 250,
    borderWidth: 4,
    fontSize: 25,
    padding: 10,
    marginVertical: 50,
    textAlign: 'center',
    backgroundColor: '#FFAA2B',
    borderColor: '#ecf0f1',
    fontWeight: 'bold'
  },

  signInButton: {
    width: 400,
    height: 60,
    marginTop: 40,
  },

  orText: {
    fontSize: 30,
    fontFamily: "FasterOne-Regular",
    color: '#FFAA2B'
  }

});
