import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import Text from '../Text'
import Icon from '../Icon'

export default function CategoryPickerItem({ item, onPress }) {
  return (<TouchableOpacity onPress={onPress} style={styles.container}>
    <Icon
      backgroundColor={item.backgroundColor}
      name={item.icon} size={80} />
    <Text style={styles.text}>{item.label}</Text>
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
