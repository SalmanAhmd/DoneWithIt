import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import { StyleSheet } from 'react-native'
import * as Location from 'expo-location';

import {
  SubmitButton, FormField, Screen, Form,
  FormPicker, CategoryPickerItem, FormImagePicker
} from '../components'

const validationSchema = yup.object().shape({
  title: yup.string().required().min(1).label('Title'),
  price: yup.string().required().min(1).max(100000).label('Price'),
  description: yup.string().label('Description'),
  category: yup.object().required().nullable().label('Category'),
  images: yup.array().min(1, 'Please select at least one image.')
})

const categories = [
  { label: 'Furniture', value: 1, backgroundColor: 'red', icon: 'apps' },
  { label: 'Mobile', value: 2, backgroundColor: 'green', icon: 'email' },
  { label: 'Camera', value: 3, backgroundColor: 'blue', icon: 'lock' }
]


export default function ListEditScreen() {

  const [location, setLocation] = useState({})

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;

      console.log(granted);

      const lastCords = await Location.getLastKnownPositionAsync()
      console.log(lastCords)
      if (lastCords && lastCords.coords && lastCords.coords.latitude && lastCords.coords.longitude) {
        setLocation({
          latitude: lastCords.coords.latitude,
          longitude: lastCords.coords.longitude
        })
      }
      else {
        const { coords: { longitude, latitude } } = await Location.getCurrentPositionAsync()
        console.log(currentCords)
        setLocation({ latitude: longitude, longitude: latitude })
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  return (
    <Screen style={styles.container}>
      <Form initialValues={{
        title: '',
        price: '',
        description: '',
        category: null,
        images: []
      }}
        onSubmit={values => console.log(values, location)}
        validationSchema={validationSchema} >

        <FormImagePicker name='images' />

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
