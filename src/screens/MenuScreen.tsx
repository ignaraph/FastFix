import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>What service are you looking for?</Text>
      <View style={styles.btnContainer}>
      <TouchableOpacity>
        <Text style={styles.btnText}>Favorites</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.btnText}>Gardeners</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.btnText} >Builders</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.btnText}>Plumbers</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.btnText}>Electrictians</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainTitle: {
      position: 'absolute',
      top: 30,
      fontSize: 40,
      fontFamily: 'Monospace',
      color: '#FFAA2B',
      textAlign: 'center',
      marginBottom: 300,
      fontWeight: 'bold'
    },
    container: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#333232'
    },

    btnText: {
      fontSize: 45,
      textAlign: 'center',
      marginTop: 40,
      borderWidth: 10,
      borderRadius: 50,
      width: 400,
      paddingTop: 10,
      backgroundColor: '#FFAA2B'
    },

    btnContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
    }

});