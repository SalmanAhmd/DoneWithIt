import React from 'react'
import { FlatList, View } from 'react-native'

import { ListItem, Screen, ListItemSeparator } from '../components'

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
  },
  // {
  //   id: 3,
  //   title: 'T2',
  //   description: 'D2',
  //   image: require('../assets/profile.jpg')
  // }
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
            image={item.image}
            onPress={() => console.log('Message selected', item)} />}
        ItemSeparatorComponent={ListItemSeparator} />
    </Screen>
  )
}

// const styles = StyleSheet.create({
// })
