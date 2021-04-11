import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import colors from '../config/colors'

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>

      </View>
      <View style={styles.deleteIcon}>

      </View>
      <Image source={{
        uri: 'https://images.unsplash.com/photo-1594224457860-23bdb45f8e3d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
      }}
        style={styles.image}
        resizeMode="contain" />
    </View>

  )
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 40,
    left: 30
  },
  deleteIcon:{
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
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
