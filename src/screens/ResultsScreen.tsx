import React, { useState, useEffect, useContext } from 'react'
import { Contractor, ContractorInitialState } from '../interfaces/contractor';
import { StackScreenProps } from '@react-navigation/stack';
import { ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import { ContractorComponent } from '../components/Contractor.component';
import { Image, StyleSheet} from 'react-native';
import { FavoritesContext } from '../context/FavoritesContext';

interface ResultsParams {
  type: string;
}

interface Props extends StackScreenProps<any, any>{};

export const ResultsScreen = ({route}:any) => {

  let {myFavorites} = useContext(FavoritesContext)


  const params = route.params as ResultsParams

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
        style={styles.sortBtn}>
      <Image style={{width:80, height:80}} source={require('../assets/images/sortIcon.png')}/>
      </TouchableOpacity>
      {(sortContractor === false)
        ?
          contractor.sort((a,b)=> a.rating - b.rating).map(
            contractor =>
            <ContractorComponent key={contractor.id} params={params} contractor={contractor} added={myFavorites.find(({id}) => id === contractor.id)}/>
          )
        :
        contractor.sort((a,b) => b.rating - a.rating).map(
          contractor =>
            <ContractorComponent key={contractor.id}  params={params} contractor={contractor}
            added={myFavorites.find(({id}) => id === contractor.id)}/>
        )
        }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  sortBtn: {
    borderWidth:4,
    backgroundColor:'#FFAA2B',
    width:90,
    right: -380,
    borderRadius:30,
    marginVertical:10,
    borderColor: '#ecf0f1'
  }
});