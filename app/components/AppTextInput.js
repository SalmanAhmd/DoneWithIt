import React from 'react'
import { Platform, StyleSheet, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'

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
        style={styles.textInput}
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
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    color: colors.dark
  }
})
