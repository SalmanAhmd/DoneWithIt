import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors'

export default function ImageInput({ imageUri }) {
  return (
    <View style={styles.container}>
      {imageUri ?
        <Image source={{ uri: imageUri }} style={styles.image} />
        :
        <MaterialCommunityIcons color={colors.medium} name='camera' size={40} />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    overflow: 'hidden'
  },
  image: {
    height: '100%',
    width: '100%'
  }
})
