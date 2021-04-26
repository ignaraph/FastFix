import React from 'react'
import { Text, View } from 'react-native'

interface MenuParams {
  favorites: [];
}

export const FavoritesScreen = ({route}:any) => {

  const params = route.params as MenuParams
  return (
    <View>
      {
        params.favorites.map(fav => <View>
          <Text>{fav.companyName}</Text>
        </View>)
      }
    </View>
  )
}
