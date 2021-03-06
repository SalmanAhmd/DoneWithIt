import React from 'react'
import { Image, StyleSheet } from 'react-native'
import * as yup from 'yup'

import { SubmitButton, FormField, Screen, Form } from '../components'

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(4).label('Password')
})

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={{
        width: 80,
        height: 80,
        uri: 'https://1000logos.net/wp-content/uploads/2018/05/Gmail-logo.png'
      }} />

      <Form initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>

        <FormField
          autoCapitilize='none'
          autoCorrect={false}
          keyboardType='email-address'
          icon='email'
          name='email'
          placeholder='Email'
          textContentType='emailAddress' />

        <FormField
          autoCapitilize='none'
          autoCorrect={false}
          icon='lock'
          name='password'
          placeholder='Password'
          secureTextEntry
          textContentType='password' />

        <SubmitButton title='Login' />

      </Form>
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
