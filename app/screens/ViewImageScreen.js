import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name='close' color='white' size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name='trash-can-outline' color='white' size={35} />
      </View>
      <Image source={require('../assets/jacket.jpg')}
        style={styles.image}
        resizeMode="contain" />
    </View>

  )
}

const styles = StyleSheet.create({
  closeIcon: {
    // width: 50,
    // height: 50,
    // backgroundColor: colors.primary,
    position: 'absolute',
    top: 40,
    left: 30
  },
  deleteIcon: {
    // width: 50,
    // height: 50,
    // backgroundColor: colors.secondary,
    position: 'absolute',
    top: 40,
    right: 30
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%'
  }
})
