import React, { createContext, useReducer, useState } from "react"
// import { favoriteReducer } from './favoriteReducer';
import { Contractor } from '../interfaces/contractor';


// Interface that represents context
export interface FavoritesContextProps {
  myFavorites: Contractor[]
  addToFavorites: Function;
}

const myFavorites: Contractor[] = [];

const favoriteConstructors: FavoritesContextProps = {
  myFavorites: myFavorites,
  addToFavorites: (contractor: Contractor) => {
    myFavorites.push(contractor)
  }
}

//Create Context
export const FavoritesContext = createContext<FavoritesContextProps>(favoriteConstructors)


//Provider of the State
export const FavoriteProviders = ({children}: any) => {

  const addToFavorites = (contractor:any) => {
    myFavorites.push(contractor)
    console.log(myFavorites);
  }

  return (
    //Sending the information to all child components
    <FavoritesContext.Provider value={{
      myFavorites,
      addToFavorites
    }}>
      {children}
    </FavoritesContext.Provider>
  )
}