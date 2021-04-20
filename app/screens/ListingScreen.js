import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

import { Card, Screen } from '../components'
import colors from '../config/colors';

const listings = [
  {
    id: 1,
    title: 'Black Jacket',
    price: 100,
    image: require('../assets/jacket.jpg')
  },
  {
    id: 2,
    title: 'Black Jacket',
    price: 150,
    image: require('../assets/sofa.jpg')
  }
];


export default function ListingScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) =>
          <Card
            title={item.title}
            subTitle={'₹' + item.price}
            image={item.image} />} />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  }
})
