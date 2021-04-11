import React from 'react'
import { Text, StyleSheet, Platform } from 'react-native'

export default function AppText({ children }) {
  return (
    <Text style={styles.text}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    color: '#fefefe',
    fontSize: 20
  }
})
