import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { Contractor, ContractorInitialState } from '../interfaces/contractor';
import { StackScreenProps } from '@react-navigation/stack';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

interface MenuParams {
  type: string;
}

interface Props extends StackScreenProps<any, any>{};

export const ResultsScreen = ({route, navigation}: Props) => {

  const params = route.params as MenuParams
  const [contractor, setContractor] =  useState<Contractor[]>([ContractorInitialState])

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
    <ScrollView style={styles.mainContainer}>
      {contractor.map(
        contractor =>
          <TouchableOpacity
          style={styles.contractorBtn}
          onPress={() => navigation.navigate('RequestFormScreen')}
          >
          <Image style={styles.btnLogo}  source={require('../assets/images/hammerIcon.png')}/>
          <Text style={styles.companyName}  >{contractor.name}</Text>
          <Text style={styles.rating} >{contractor.rating}/5</Text>
          </TouchableOpacity>
         )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#333232'
  },

  contractorBtn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 180,
    backgroundColor: '#FFAA2B',
    borderWidth: 5,
    borderColor: '#ecf0f1',
    borderRadius: 50,
    marginVertical: 10,
    marginHorizontal: 10,
  },

  btnLogo: {
    width: 140,
    height: 140,
    position: 'absolute',
    top: 25,
   },

  companyName: {
    position: 'absolute',
    fontSize: 30,
    marginLeft: 125,
    top: 40,
    fontWeight: 'bold',
  },

  rating: {
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 30,
    right: 50,
    bottom: 15
  }

});