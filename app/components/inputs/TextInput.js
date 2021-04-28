import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../../config/colors'
import defaultStyles from '../../config/styles'

export default function AppTextInput({
  icon, width = '100%', ...otherProps
}) {
  return (
    <View style={[styles.container, { width: width }]}>
      {icon && <MaterialCommunityIcons
        name={icon}
        size={22}
        color={colors.medium}
        style={styles.icon} />}
      <TextInput
        placeholderTextColor={colors.medium}
        {...otherProps}
        style={defaultStyles.text}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10
  },
  icon: {
    marginRight: 10
  }
})