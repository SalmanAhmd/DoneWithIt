import React, { useState } from 'react';

import {
  // WelcomeScreen,
  // ViewImageScreen,
  // ListingDetail,
  // MessagesScreen,
  // AccountScreen
  // ListingScreen
} from './app/screens';

import {
  // AppText,
  AppTextInput,
  Screen,
  AppPicker,
  // Icon,
  // ListItem
} from './app/components'
// import { TextInput, Text, Switch } from 'react-native';

export default function App() {

  // const [firstName, setFirstName] = useState('')
  // const [isNew, setIsNew] = useState(false)

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
      {/* <AccountScreen /> */}
      {/* <ListingScreen /> */}
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

      {/* Input Components */}
      <Screen>
        {/* <Text>{firstName}</Text>
        <TextInput
          maxLength={5}
          keyboardType='numeric'
          placeholder=" First Name"
          onChangeText={text => setFirstName(text)}
          style={{
            borderBottomColor: '#ccc',
            borderBottomWidth: 1
          }}
        /> */}
        {/* <AppTextInput 
        placeholder="User Name"
        icon='email' /> */}
        {/* <Switch
          value={isNew}
          onValueChange={newValue => setIsNew(newValue)} /> */}
        <AppPicker placeholder='Category' icon='apps' />
        <AppTextInput placeholder='Email' icon='email' />
      </Screen>
    </>
  );
}
