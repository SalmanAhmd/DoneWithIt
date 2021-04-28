import React, { useState } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../../config/colors'
import Text from '../Text'
import PickerItem from './PickerItem'
import Screen from '../Screen'

export default function AppPicker({
  icon, placeholder, items, selectedItem,
  onSelectItem, width = '100%', numberOfColumns = 1,
  PickertItemComponent = PickerItem
}) {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width: width }]}>
          {icon && <MaterialCommunityIcons
            name={icon}
            size={22}
            color={colors.medium}
            style={styles.icon} />}
          <Text style={selectedItem ? styles.text : styles.placeholder} >{selectedItem ? selectedItem.label : placeholder}</Text>
          <MaterialCommunityIcons
            name={'chevron-down'}
            size={22}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='slide' >
        <Screen>
          <Button title='Close' onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) =>
              <PickertItemComponent
                item={item}
                onPress={() => {
                  setModalVisible(false)
                  onSelectItem(item)
                }} />} />
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
    // width: '100%',
    padding: 15,
    marginVertical: 10
  },
  icon: {
    marginRight: 10
  },
  text: {
    flex: 1
  },
  placeholder: {
    color: colors.medium,
    flex: 1
  }
})
