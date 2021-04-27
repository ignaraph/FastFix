import React, { createContext, useReducer, useState } from "react"
import { Text, View } from "react-native";
// import { favoriteReducer } from './favoriteReducer';
import { Contractor } from '../interfaces/contractor';


// Interface that represents context
export interface FavoritesContextProps {
  myFavorites: Contractor[];
  addToFavorites: Function;
  removeFromFavorites: Function;
  added: boolean;
}

// const myFavorites: Contractor[] = [];
const added = false;

const favoriteConstructors: FavoritesContextProps = {
  myFavorites: [] as Contractor[],
  // addToFavorites: (contractor: Contractor, added:boolean) => {
  //   myFavorites.push(contractor)
  // },
  // removeFromFavorites: (contractor:Contractor, added:boolean) => {
  //   myFavorites.filter(item => item !== contractor)
  // },
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  added: added,
}

//Create Context
export const FavoritesContext = createContext<FavoritesContextProps>(favoriteConstructors)


//Provider of the State
export const FavoriteProviders = ({children}: any) => {
  const [myFavorites, setMyFavorites] = useState<Contractor[]>([])

  const addToFavorites = (contractor:Contractor, added:boolean) => {
    // myFavorites.push(contractor)
    setMyFavorites(oldFavorites => [...oldFavorites, contractor])
    added = !added
    return (
      <View>
        <Text>Added to Favorites</Text>
      </View>
    )
  }

  const removeFromFavorites = (contractor:Contractor, added:boolean) => {
    // console.log(`This is myFavs : ${myFavorites}`);
    // console.log(`This is contractor : ${contractor}`);
    setMyFavorites(oldFavorites => {
    return oldFavorites.filter(especialist => {
        return especialist.name !== contractor.name
      })
    })
    added = !added
  }

  return (
    //Sending the information to all child components
    <FavoritesContext.Provider value={{
      myFavorites,
      addToFavorites,
      removeFromFavorites,
      added
    }}>
      {children}
    </FavoritesContext.Provider>
  )
}