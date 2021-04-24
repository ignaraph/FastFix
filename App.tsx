import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react'
import { View, Text, Image, StyleSheet, Button, Alert } from 'react-native';
import {
  GoogleSigninButton,
  GoogleSignin,
  statusCodes
} from '@react-native-community/google-signin';
import { MainScreen } from './src/screens/MainScreen'
import { WEB_CLIENT_ID } from './utils/keys';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';

export const App = () => {

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

   async function signIn() {
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        setUserInfo(userInfo);
        setError(null);
        setIsLoggedIn(true);
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

    async function signOut() {
      try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        setIsLoggedIn(false);
      } catch (error) {
        Alert.alert('Something else went wrong... ', error.toString());
      }
    }

    async function getCurrentUserInfo() {
      try {
        const userInfo = await GoogleSignin.signInSilently();
        setUserInfo(userInfo);
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_REQUIRED) {
          // when user hasn't signed in yet
          Alert.alert('Please Sign in');
          setIsLoggedIn(false);
        } else {
          Alert.alert('Something else went wrong... ', error.toString());
          setIsLoggedIn(false);
        }
      }
    }

  return (
    <NavigationContainer>
      <GoogleSigninButton
        style={styles.signInButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => signIn()}
      />
      <View style={styles.status}>
  {isLoggedIn === false ? (
    <Text style={styles.loggedinMessage}>You must sign in!</Text>
  ) : (
    <Button onPress={() => signOut()} title='Sign out' color='#332211' />
  )}
</View>
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