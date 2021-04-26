import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'

import { AppButton, AppFormField, Screen } from '../components'

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

      <Formik initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema} >
        {({ handleChange, handleSubmit, setFieldTouched,
          errors, touched }) => (
          <>
            <AppFormField
              autoCapitilize='none'
              icon='email'
              autoCorrect={false}
              keyboardType='email-address'
              name='email'
              placeholder='Email'
              textContentType='emailAddress' />

            <AppFormField
              autoCapitilize='none'
              autoCorrect={false}
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              icon='lock'
              name='password'
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
