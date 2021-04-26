import { useNavigation } from '@react-navigation/core';
import React, { useContext } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FavoritesContext } from '../context/FavoritesContext';



export const FavoritesScreen = () => {

  const navigation = useNavigation()

  const {myFavorites} = useContext(FavoritesContext)
  console.log(myFavorites);
  return (
    <View style={styles.container}>
      <View>
        {
        myFavorites.map(fav =>
          <TouchableOpacity
          style={styles.contractorBtn}
          onPress={() => navigation.navigate('RequestFormScreen', {
            name: fav.name
          })}
          >
            <Image style={styles.favLogo} source={require('../assets/images/blackStarIcon.png')}></Image>
            <View style={styles.companyDetails}>
            <Text style={styles.companyName}>{fav.name}</Text>
            <Text style={styles.rating}>{fav.rating}/5</Text>
            </View>
          </TouchableOpacity>)
      }
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333232'
  },
  contractorBtn: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#FFAA2B',
    borderWidth: 5,
    borderColor: '#ecf0f1',
    borderRadius: 50,
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 20,
  },

  companyDetails: {
    justifyContent: 'space-between',
    flexShrink: 1

  },

  btnLogo: {
    alignSelf:'center',
    height: 140,
    width:140
  },

  favLogo: {
    width: 60,
    height:60
  },


  companyName: {
    // flex: 1,
    flexWrap: 'wrap',
    fontSize: 25,
    fontFamily: 'ZenDots-Regular',
    width: '100%',
    textAlign: 'center',
  },

  rating: {
    fontFamily: 'ZenDots-Regular',
    fontSize: 22,
    textAlign: 'right',
    width: '100%'
  },

  favBtn: {
    fontSize: 80,
  }

});