import React from 'react';
import { Card } from './app/components';

import WelcomeScreen from './app/screens/WelcomeScreen';
// import ViewImageScreen from './app/screens/ViewImageScreen';


export default function App() {

  return (
    <>
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      <Card
        title='Red Jacket'
        subTitle='$200'
        image={require('./app/assets/jacket.jpg')} />
    </>
  );
}
