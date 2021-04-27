import React, {useContext, useState} from 'react'
import { TouchableOpacity} from 'react-native'
import { StyleSheet, Text, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FavoritesContext } from '../context/FavoritesContext';
import { Contractor } from '../interfaces/contractor';

export const ContractorComponent = ({params, contractor, added}:any) => {

  const navigation =  useNavigation()
  //Making use of the addToFavorites function from context
  let {addToFavorites, removeFromFavorites} = useContext(FavoritesContext)
  console.log(added);
  const addFavorite = (contractor:Contractor,added:boolean) => {
    addToFavorites(contractor,added)
  }

  // const addedInput = addToFavorites(contractor)


  return (
      <View>
      <TouchableOpacity
          style={styles.contractorBtn}
          onPress={() => navigation.navigate('RequestFormScreen', {
            name: contractor.name
          })}
          >
            {
            (!added)
              ?
            <TouchableOpacity onPress={()=> addFavorite(contractor,added)}>
              <Text style={{fontSize: 50, fontWeight:'bold'}}>+</Text>
            </TouchableOpacity>
              :
            <Text style={{opacity:0, fontSize:50}}>+</Text>
          }
          <View >
          {(function(){
            switch (params.type) {
              case 'Builder':
                return <Image style={styles.btnLogo}  source={require('../assets/images/hammerIcon.png')}/>
              case 'Plumber':
                return <Image style={styles.btnLogo}  source={require('../assets/images/wrenchIcon.png')}/>
              case 'Electrician':
                return <Image style={styles.btnLogo} source={require('../assets/images/electrictianIcon.png')}/>
              case 'Gardener':
                return <Image style={styles.btnLogo} source={require('../assets/images/shovelIcon.png')}/>
            }
          })()}
          </View>
          <View style={styles.companyDetails}>
            <Text style={styles.companyName}>{contractor.name}</Text>
            <Text style={styles.rating} >{contractor.rating}/5</Text>
          </View>
          </TouchableOpacity>
        </View>
  )
}

const styles = StyleSheet.create({
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


  companyName: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 30,
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