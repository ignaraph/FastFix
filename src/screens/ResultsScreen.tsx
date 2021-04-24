import React, { useState, useEffect } from 'react'
import { Contractor, ContractorInitialState } from '../interfaces/contractor';
import { StackScreenProps } from '@react-navigation/stack';
import { ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import { ContractorComponent } from '../components/Contractor.component';
import { Image, View } from 'react-native';

interface MenuParams {
  type: string;
}

interface Props extends StackScreenProps<any, any>{};

export const ResultsScreen = ({route, navigation}: Props) => {

  const params = route.params as MenuParams

  const [contractor, setContractor] =  useState<Contractor[]>([ContractorInitialState])
  const [sortContractor, setSortContractor] = useState(false)

  useEffect(() => {
    fetchData();
  }, [])

  // 192.168.1.24
  // 192.168.1.194 This is Codeworks
  const fetchData = async () => {
    try {
      const response = await fetch(`http://192.168.1.24:3002/${params.type}`)
      const result = await response.json();
      setContractor(result)
    } catch (error) {
      console.error(error)
    }
  }

  const sortByRating = (): void => {
    console.log(sortContractor);
  if(!sortContractor){
    setSortContractor(true)
  } else {
    setSortContractor(false)
  }
}

  return (
    <ScrollView style={{backgroundColor: '#333232'}}>
      <TouchableOpacity
        onPress={sortByRating}
        style={{justifyContent: 'flex-end', flexDirection:'row', marginRight: 10}}>
      <Image style={{width:60, height:60}} source={require('../assets/images/sortIcon.jpg')}/>
      </TouchableOpacity>
      {(sortContractor === false)
        ?
          contractor.sort((a,b)=> a.rating - b.rating).map(
            contractor =>
            <ContractorComponent params={params} contractor={contractor}/>
          )
        :
        contractor.sort((a,b) => b.rating - a.rating).map(
          contractor =>
            <ContractorComponent params={params} contractor={contractor}/>
        )
        }
    </ScrollView>
  )
}
