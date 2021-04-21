import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Contractor } from '../interfaces/contractor';
import { StackScreenProps } from '@react-navigation/stack';

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
        <View>
          <Text>{item.logo}</Text>
          <Text>{item.name}</Text>
          <Text>{item.rating}</Text>
         </View>)}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {

    }
});