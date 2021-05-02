import React, { useState } from 'react';

import { ImageInputList, Screen } from './app/components'

export default function App() {

  const [imageUris, setImageUris] = useState([])

  const onAddImage = uri => {
    setImageUris(prev => [...prev, uri])
  }

  const onRemoveImage = uri => {
    setImageUris(prev => prev.filter(imageUri => imageUri !== uri))
  }

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onRemoveImage={onRemoveImage}
        onAddImage={onAddImage} />
    </Screen>
  );
}
