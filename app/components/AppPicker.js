import React, { useState } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, Modal, Button } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'
// import defaultStyles from '../config/styles'
import { AppText, Screen } from '.'

export default function AppPicker({
  icon, placeholder
}) {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && <MaterialCommunityIcons
            name={icon}
            size={22}
            color={colors.medium}
            style={styles.icon} />}
          <AppText style={styles.text} >{placeholder}</AppText>
          {icon && <MaterialCommunityIcons
            name={'chevron-down'}
            size={22}
            color={colors.medium}
          />}
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='slide' >
        <Screen>
          <Button title='Close' onPress={() => setModalVisible(false)} />
        </Screen>
      </Modal>
    </>
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
  text: {
    flex: 1
  }
})