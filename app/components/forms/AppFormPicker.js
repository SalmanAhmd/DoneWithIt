import React from 'react'
import { useFormikContext } from 'formik'

import ErrorMessage from './ErrorMessage'
import AppPicker from '../AppPicker';

export default function AppFormPicker({ items, name, placeholder,...rest }) {

  const { setFieldValue, values,
    errors, touched } = useFormikContext();

  return (
    <>
      <AppPicker items={items}
        onSelectItem={(item => setFieldValue(name, item))}
        placeholder={placeholder}
        selectedItem={values[name]}
        {...rest} />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}
