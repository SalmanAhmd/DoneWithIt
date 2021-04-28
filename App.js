import React, { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker'
// import * as Permission from 'expo-permissions'

import { Screen } from './app/components'

export default function App() {

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (!granted)
      alert("You need to enable permission")
  }

  useEffect(() => {
    requestPermission();
  }, [])

  return (
    <Screen>

    </Screen>
  );
}
