import React from 'react'
import { Text, StyleSheet, Platform } from 'react-native'

export default function AppText({
  children,
  style = {} }) {
  return (
    <Text style={[styles.text, style]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    color: '#000',
    fontSize: 20
  }
})