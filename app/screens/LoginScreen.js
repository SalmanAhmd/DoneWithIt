import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { Formik } from 'formik'

import { AppButton, AppTextInput, Screen } from '../components'

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={{
        width: 80,
        height: 80,
        uri: 'https://1000logos.net/wp-content/uploads/2018/05/Gmail-logo.png'
      }} />

      <Formik initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)} >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              autoCapitilize='none'
              icon='email'
              autoCorrect={false}
              onChange={handleChange('email')}
              keyboardType='email-address'
              placeholder='Email'
              textContentType='emailAddress' />
            <AppTextInput
              autoCapitilize='none'
              autoCorrect={false}
              onChange={handleChange('password')}
              icon='lock'
              placeholder='Password'
              secureTextEntry
              textContentType='password' />
            <AppButton title='Login'
              onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  }
})
