import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import PlaceDetails from './PlaceDetails';

 class Details extends React.Component {
  static navigationOptions = {
    title: 'Detalhes',
  };
  render() {
    const { data } = this.props.navigation.state.params;
    return (
      <View>
        <PlaceDetails data={data}></PlaceDetails>
      </View>
    );
  }
}

export { Details };
