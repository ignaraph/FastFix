import React, { createContext, useState } from "react"
import { Contractor } from '../interfaces/contractor';


// Interface that represents context
export interface FavoritesContextProps {
  myFavorites: Contractor[];
  addToFavorites: Function;
  removeFromFavorites: Function;
  added: boolean;
}

const added = false;

const favoriteConstructors: FavoritesContextProps = {
  myFavorites: [] as Contractor[],
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
    setMyFavorites(oldFavorites => [...oldFavorites, contractor])
    added = !added
  }

  const removeFromFavorites = (contractor:Contractor, added:boolean) => {
    setMyFavorites(oldFavorites => {
    return oldFavorites.filter(especialist => {
        return especialist.name !== contractor.name
      })
    })
    added = !added
  }

  return (
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