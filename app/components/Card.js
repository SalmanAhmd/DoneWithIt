import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import colors from '../config/colors'
import AppText from './AppText'

export default function Card({
  title = 'title',
  subTitle = '$100',
  image = require('../assets/no-image.jpg') }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
        <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>
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
