import React, {useState} from 'react'
import { TouchableOpacity} from 'react-native'
import { StyleSheet, Text, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const ContractorComponent = ({params,contractor}: any) => {
  const navigation =  useNavigation()

  const addToFavorites = (contractor:any):void => {
    console.log(contractor);
    params.setFavorites([...params.favorites, contractor])
    console.log(params.favorites);
  }

  return (
      <View>
        <TouchableOpacity onPress={() => addToFavorites(contractor)}>
          <Text style={{fontSize: 30}}>+</Text>
        </TouchableOpacity>
      <TouchableOpacity
          style={styles.contractorBtn}
          onPress={() => navigation.navigate('RequestFormScreen', {
            name: contractor.name
          })}
          >
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
            <Text style={styles.companyName} >{contractor.name}</Text>
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