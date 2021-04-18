import React from 'react'
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native'

export default function Screen({ children }) {
  return (
    <SafeAreaView style={styles.screen}>
      {children}
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})
