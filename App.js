import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker'
// import * as Permission from 'expo-permissions'

import { Button, Screen } from './app/components'
import { Image } from 'react-native';

export default function App() {

  const [imageUri, setImageUri] = useState()
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (!granted)
      alert("You need to enable permission")
  }

  useEffect(() => {
    requestPermission();
  }, [])

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync()
      if (!result.cancelled) {
        setImageUri(result.uri)
      }

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Screen>
      <Button title='Select Image' onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </Screen>
  );
}
