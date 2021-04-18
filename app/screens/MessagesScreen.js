import React from 'react'
import { FlatList } from 'react-native'

import { ListItem, Screen } from '../components'

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
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) =>
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image} />} />
    </Screen>
  )
}

// const styles = StyleSheet.create({
// })
