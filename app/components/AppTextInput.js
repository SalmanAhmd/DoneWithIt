import React from 'react'
import { Platform, StyleSheet, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'
import defaultStyles from '../config/styles'

export default function AppTextInput({
  icon, ...otherProps
}) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons
        name={icon}
        size={22}
        color={colors.medium}
        style={styles.icon} />}
      <TextInput
        {...otherProps}
        style={defaultStyles.textI}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10
  },
  icon: {
    marginRight: 10
  }
})