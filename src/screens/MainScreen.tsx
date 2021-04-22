import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

interface Props extends StackScreenProps<any, any> {};


export const MainScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>FastFix</Text>
      {/* <Image style={styles.image} source={require('../assets/logotest.png')}/> */}
      <TextInput style={styles.inputs} placeholder="Username"/>
      <TextInput secureTextEntry={true} style={styles.inputs} placeholder="Password"/>
      <TouchableOpacity
      onPress={() => navigation.navigate('MenuScreen')} >
        <Text style={styles.loginBtn}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 400,
  },

  inputs: {
    marginTop: 10,
    borderWidth: 4,
    width: 300,
    borderRadius: 50,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#FFAA2B',
    borderColor: '#ecf0f1'
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333232'
  },

  mainTitle: {
    position: 'absolute',
    top: 30,
    fontSize: 50,
    fontFamily: 'Monospace',
    color: '#FFAA2B',
    fontWeight: 'bold'
  },

  loginBtn: {
    borderRadius: 50,
    width: 250,
    borderWidth: 4,
    fontSize: 25,
    padding: 10,
    marginVertical: 50,
    textAlign: 'center',
    backgroundColor: '#FFAA2B',
    borderColor: '#ecf0f1',
  }

});
