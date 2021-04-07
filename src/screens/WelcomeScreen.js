import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

export default function WelcomeScreen() {
  return (
    <ImageBackground
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
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
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
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65'
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4'
  },
  logo: {
    // position: 'absolute',
    // top: 100
  }
})

