import React from 'react'
import { useFormikContext } from 'formik'

import TextInput from '../inputs/TextInput'
import ErrorMessage from './ErrorMessage'

export default function AppFormField({ name, ...rest }) {

  const { setFieldTouched, handleChange,
    errors, touched } = useFormikContext();

  return (
    <>
      <TextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}
