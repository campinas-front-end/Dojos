import React from 'react';
import { StackNavigator } from 'react-navigation';

import { Gallery } from './components/Gallery';
import { Details } from './components/Details';

export default SimpleApp = StackNavigator({
  Gallery: { screen: Gallery },
  Details: { screen: Details },
});
