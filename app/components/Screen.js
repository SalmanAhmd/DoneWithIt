import React from 'react'
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native'

export default function Screen({ child }) {
  return (
    <SafeAreaView style={styles.screen}>
      {child}
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})
