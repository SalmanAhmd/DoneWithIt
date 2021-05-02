import React from 'react'
import { useFormikContext } from 'formik'

import ImageInputList from '../ImageInputList'
import ErrorMessage from './ErrorMessage'

export default function FormImagePicker({ name }) {

  const { setFieldValue, values,
    errors, touched } = useFormikContext();

  const imageUris = values[name]

  const onAddImage = uri => {
    setFieldValue(name, [...imageUris, uri])
  }

  const onRemoveImage = uri => {
    setFieldValue(name, imageUris.filter(imageUri => imageUri !== uri))
  }

  return (
    <>
      <ImageInputList imageUris={imageUris}
        onAddImage={onAddImage}
        onRemoveImage={onRemoveImage} />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

