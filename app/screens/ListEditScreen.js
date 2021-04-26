import React from 'react'
import * as yup from 'yup'
import { StyleSheet } from 'react-native'

import { SubmitButton, AppFormField, Screen, AppForm, AppFormPicker } from '../components'

const validationSchema = yup.object().shape({
  title: yup.string().required().min(1).label('Title'),
  price: yup.string().required().min(1).max(100000).label('Price'),
  description: yup.string().label('Description'),
  category: yup.object().required().nullable().label('Category'),
})

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Mobile', value: 2 },
  { label: 'Camera', value: 3 }
]


export default function ListEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm initialValues={{
        title: '',
        price: '',
        description: '',
        category: null
      }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema} >

        <AppFormField maxLength={255} name='title' placeholder='Title' />

        <AppFormField keyboardtype='numeric'
          name='price' placeholder='Price' />

        <AppFormPicker items={categories}
          name='category' placeholder='Category' />

        <AppFormField maxLength={255}
          multiline numberOfLines={3}
          name='description' placeholder='Description' />

        <SubmitButton title='Submit' />
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})
