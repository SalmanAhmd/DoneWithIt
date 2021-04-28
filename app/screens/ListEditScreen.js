import React from 'react'
import * as yup from 'yup'
import { StyleSheet } from 'react-native'

import { SubmitButton, FormField, Screen, Form, FormPicker, CategoryPickerItem } from '../components'

const validationSchema = yup.object().shape({
  title: yup.string().required().min(1).label('Title'),
  price: yup.string().required().min(1).max(100000).label('Price'),
  description: yup.string().label('Description'),
  category: yup.object().required().nullable().label('Category'),
})

const categories = [
  { label: 'Furniture', value: 1, backgroundColor: 'red', icon: 'apps' },
  { label: 'Mobile', value: 2, backgroundColor: 'green', icon: 'email' },
  { label: 'Camera', value: 3, backgroundColor: 'blue', icon: 'lock' }
]


export default function ListEditScreen() {
  return (
    <Screen style={styles.container}>
      <Form initialValues={{
        title: '',
        price: '',
        description: '',
        category: null
      }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema} >

        <FormField maxLength={255} name='title' placeholder='Title' />

        <FormField keyboardtype='numeric'
          name='price' placeholder='Price'
          width={180} />

        <FormPicker items={categories}
          name='category' placeholder='Category'
          width={'50%'}
          numberOfColumns={3}
          PickertItemComponent={CategoryPickerItem}
           />

        <FormField maxLength={255}
          multiline numberOfLines={3}
          name='description' placeholder='Description' />

        <SubmitButton title='Submit' />
      </Form>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})
