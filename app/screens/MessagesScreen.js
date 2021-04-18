import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

import { ListItem } from '../components'

const messages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/profile.jpg')
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/profile.jpg')
  }
]

export default function MessagesScreen() {
  return (
    <FlatList
      data={messages}
      keyExtractor={message => message.id.toString()}
      renderItem={({ item }) =>
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image} />} />
  )
}

const styles = StyleSheet.create({})
