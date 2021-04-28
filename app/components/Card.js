import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import colors from '../config/colors'
import Text from './Text'

export default function Card({
  title = 'title',
  subTitle = '$100',
  image = require('../assets/no-image.jpg') }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.subTitle} numberOfLines={2}>{subTitle}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden'
  },
  detailsContainer: {
    padding: 20
  },
  image: {
    width: '100%',
    height: 300
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold'
  },
  title: {
    marginBottom: 7
  }
})
