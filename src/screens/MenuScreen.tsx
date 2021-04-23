import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<any, any> {};

export const MenuScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>What service are you looking for?</Text>
      <View style={styles.btnContainer}>

      <TouchableOpacity
      onPress={() => navigation.navigate('ResultsScreen', {
        type: 'Builder'
      })}>
        <Text style={styles.btnText} >Builders</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigation.navigate('ResultsScreen', {
        type: 'Electrician'
      })}>
        <Text style={styles.btnText}>Electricians</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigation.navigate('ResultsScreen', {
        type: 'Gardener'
      })}>
        <Text style={styles.btnText}>Gardeners</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigation.navigate('ResultsScreen', {
        type:'Plumber'
      })}>
        <Text style={styles.btnText}>Plumbers</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigation.navigate('FavoritesScreen')}>
        <Text style={{...styles.btnText, backgroundColor:'#ff4757'}}>Favorites</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainTitle: {
      position: 'absolute',
      top: 30,
      fontSize: 32,
      color: '#FFAA2B',
      textAlign: 'center',
      marginBottom: 300,
      paddingBottom:8,
      borderBottomWidth: 5,
      borderBottomColor: '#ecf0f1',
      fontFamily: 'ZenDots-Regular'
    },
    container: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#333232'
    },

    btnText: {
      fontSize: 35,
      fontFamily: 'ZenDots-Regular',
      textAlign: 'center',
      marginTop: 40,
      borderWidth: 7,
      borderRadius: 50,
      borderColor: '#ecf0f1',
      width: 400,
      padding: 25,
      backgroundColor: '#FFAA2B',
      // height: 0,
    },

    btnContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
    }

});