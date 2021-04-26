import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react'
import { View, Text, Image, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';
import {
  GoogleSigninButton,
  GoogleSignin,
  statusCodes
} from '@react-native-community/google-signin';
import { WEB_CLIENT_ID } from './utils/keys';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';

// interface Props extends StackScreenProps<any, any> {};


export const App = (/*{navigation}: Props*/) => {

  // const navigation =  useNavigation()

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

  // const goToMainScreen = () => {
  //   // console.log('here');
  //   navigation.navigate('MainScreen')
  // }


    async function signOut() {
      try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        setIsLoggedIn(false);
      } catch (error) {
        Alert.alert('Something else went wrong... ', error.toString());
      }
    }

    // async function getCurrentUserInfo() {
    //   try {
    //     const userInfo = await GoogleSignin.signInSilently();
    //     setUserInfo(userInfo);
    //   } catch (error) {
    //     if (error.code === statusCodes.SIGN_IN_REQUIRED) {
    //       // when user hasn't signed in yet
    //       Alert.alert('Please Sign in');
    //       setIsLoggedIn(false);
    //     } else {
    //       Alert.alert('Something else went wrong... ', error.toString());
    //       setIsLoggedIn(false);
    //     }
    //   }
    // }

  return (
    <NavigationContainer>
      {/* <TouchableOpacity onPress={signOut}>
        <Text style={{fontSize: 30, width: '50%', backgroundColor:'red'}}>Logout</Text>
      </TouchableOpacity> */}
      <StackNavigator/>
    </NavigationContainer>

  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  signInButton: {
    width: 200,
    height: 50
  },
  status: {
    marginVertical: 20
  },

  loggedinMessage: {
    fontSize: 20,
    color: 'tomato'
  }
})