import React, { useState, useEffect } from 'react'
import { Contractor, ContractorInitialState } from '../interfaces/contractor';
import { StackScreenProps } from '@react-navigation/stack';
import { ScrollView} from 'react-native-gesture-handler';
import { ContractorComponent } from '../components/Contractor.component';

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
    <ScrollView style={{backgroundColor: '#333232'}}>
      {contractor.map(
        contractor =>
          <ContractorComponent params={params} contractor={contractor}/>
         )}
    </ScrollView>
  )
}
