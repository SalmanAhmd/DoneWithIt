import React, { useState } from 'react'
import { FlatList } from 'react-native'

import { ListItem, Screen, ListItemSeparator, ListItemDeleteAction } from '../components'

const initialMessages = [
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

  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = message => {
    // Delete Message
    setMessages(messages.filter(m => m.id !== message.id))
  }
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
            onPress={() => console.log('Message selected', item)}
            renderRightActions={() =>
              <ListItemDeleteAction onPress={() => handleDelete(item)} />} />}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => setMessages(prev => [
          ...prev,
          {
            id: 3,
            title: 'T3',
            description: 'D3',
            image: require('../assets/profile.jpg')
          }
        ])}
      />
    </Screen>
  )
}

// const styles = StyleSheet.create({
// })
