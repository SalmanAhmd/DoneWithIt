import React from 'react';

import {
  // WelcomeScreen,
  // ViewImageScreen,
  // ListingDetail,
  // MessagesScreen,
  AccountScreen
} from './app/screens';

import { Screen, Icon, ListItem } from './app/components'

export default function App() {

  return (
    <>
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <Card
        title='Red Jacket'
        subTitle='$200'
        image={require('./app/assets/jacket.jpg')} /> */}
      {/* <ListingDetail /> */}
      {/* <MessagesScreen /> */}
      <AccountScreen />
      {/* <Screen>
        <ListItem
          title='My Title'
          subTitle='My subtitle'
          ImageComponent={<Icon
            name='email'
            size={50}
            backgroundColor='red'
            iconColor='white' />} />
      </Screen> */}
    </>
  );
}
