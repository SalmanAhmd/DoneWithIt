import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

import { Text, ListItem } from '../components'
import colors from '../config/colors'

export default function ListingDetail() {
  return (
    <View>
      <Image style={styles.image}
        source={require('../assets/jacket.jpg')} />
      <View style={styles.detailContainer}>
        <Text style={styles.title}>Red jacket for sale</Text>
        <Text style={styles.price}>$100</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/profile.jpg')}
            title='Salman Ahmd'
            subTitle='5 Listings' />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  detailContainer: {
    padding: 20
  },
  image: {
    width: '100%',
    height: 300
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer: {
    marginVertical: 40
  }
})
