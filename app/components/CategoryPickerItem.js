import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import AppText from './AppText'
import Icon from './Icon'

export default function CategoryPickerItem({ item, onPress }) {
  return (<TouchableOpacity onPress={onPress} style={styles.container}>
    <Icon
      backgroundColor={item.backgroundColor}
      name={item.icon} size={80} />
    <AppText style={styles.text}>{item.label}</AppText>
  </TouchableOpacity>)
}

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 30,
    paddingVertical: 15,
    flex: 1,
    alignItems: 'center',
    width: '33%'
    // justifyContent:'center'
  },
  text: {
    marginTop: 5,
    textAlign: 'center'
  }
})
