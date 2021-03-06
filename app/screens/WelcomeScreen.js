import React from 'react'
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native'
import { Button } from '../components'

export default function WelcomeScreen() {

  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={{
        width: 480,
        height: 1040,
        uri: 'https://picsum.photos/1081/1920'
      }} >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={{
          width: 150,
          height: 150,
          uri: 'https://1000logos.net/wp-content/uploads/2018/05/Gmail-logo.png'
        }} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Login' />
        <Button title='Register' color='secondary' />
      </View>
    </ImageBackground >
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  logoContainer: {
    position: 'absolute',
    top: 100,
    alignItems: 'center'
  },
  buttonContainer: {
    padding: 20,
    width: '100%'
  },
  tagline: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingVertical: 20,
    color: '#fefefe',
  },
  logo: {
    // position: 'absolute',
    // top: 100
  }
})
