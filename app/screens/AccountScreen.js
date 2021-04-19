import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import { Icon, ListItem, ListItemSeparator, Screen } from '../components'
import colors from '../config/colors'

const menuItems = [
  {
    title: 'My Listing',
    icon: {
      name: 'format-list-bullted',
      backgroundColor: colors.primary
    }
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary
    }
  }
]


export default function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title='Salman Ahmed'
          subTitle='salmanahmed1497@gmail.com'
          image={require('../assets/profile.jpg')} />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          renderItem={({ item }) =>
            <ListItem
              title={item.title}
              IconComponent={
                <Icon name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                  size={50} />
              } />}
          ItemSeparatorComponent={ListItemSeparator} />
      </View>
      <ListItem
        title='Log Out'
        IconComponent={
          <Icon name='logout' backgroundColor='#ffe66d' />
        } />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  },
  screen: {
    backgroundColor: colors.light
  }
})
