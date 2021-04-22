import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { Contractor } from '../interfaces/contractor';
import { StackScreenProps } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface MenuParams {
  type: string;
}

interface Props extends StackScreenProps<any, any>{};



export const ResultsScreen = ({route, navigation}: Props) => {

  const params = route.params as MenuParams

  //Have an array of the results here
  const [contractor, setContractor] =  useState([])

  useEffect(() => {
    fetchData();
  }, [])

  // 192.168.1.24
  // 192.168.1.194 This is Codeworks
  const fetchData = async () => {
    try {
      console.log(params.type);
      const response = await fetch(`http://192.168.1.194:3002/${params.type}`)
      const result = await response.json();
      setContractor(result)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <View>
      {contractor.map(
        item =>
        <View style={styles.mainContainer}>
          <TouchableOpacity
          onPress={() => navigation.navigate('RequestFormScreen')}
          style={styles.btnContainer} >
          <Text>
          <Image style={styles.icon} source={require('../assets/images/hammerIcon.png')}/>
          <Text style={styles.container}>{item.name}</Text>
          <Text style={styles.container}>{item.rating}</Text>
          </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity>
          <Text></Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text></Text>
          </TouchableOpacity> */}
         </View>)}
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#333232'
  },

  btnContainer: {
    backgroundColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginVertical: 10,

  },

  container: {
    textAlign: 'center',
    width: 500,
    marginBottom: 50
  },

  icon: {
    width: 200,
    height: 200,
    // paddingBottom: 100,

  }
});