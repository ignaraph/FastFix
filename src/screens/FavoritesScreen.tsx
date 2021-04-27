import { useNavigation } from '@react-navigation/core';
import React, { useContext } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FavoritesContext } from '../context/FavoritesContext';



export const FavoritesScreen = ({route}:any) => {

  const {removeFromFavorites, added} = useContext(FavoritesContext)
  const navigation = useNavigation()
  const {myFavorites} = useContext(FavoritesContext)

  return (
    <View style={styles.container}>

        {
        myFavorites.map(fav =>
          <TouchableOpacity
          key={fav.id}
          style={styles.contractorBtn}
          onPress={() => navigation.navigate('RequestFormScreen', {
            name: fav.name
          })}
          >
            <TouchableOpacity onPress={()=> removeFromFavorites(fav,added)}>
              <Text style={{fontSize: 80, fontWeight:'bold', top:-50}}>-</Text>
            </TouchableOpacity>
          <Image style={styles.btnLogo} source={require('../assets/images/blackStarIcon.png')}/>
          <View style={styles.companyDetails}>
            <Text style={styles.companyName}>{fav.name}</Text>
            <Text style={styles.rating} >{fav.rating}/5</Text>
          </View>
          </TouchableOpacity>
       )
      }
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
    backgroundColor: '#ff4757',
    borderWidth: 5,
    borderColor: '#ecf0f1',
    marginVertical: 20,
    marginHorizontal: 10,
    padding: 20,
  },

  companyDetails: {
    justifyContent: 'space-between',
    flexShrink: 1
  },

  btnLogo: {
    alignSelf:'center',
    height: 110,
    width:110,
    marginLeft: 10
  },


  companyName: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 27,
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
