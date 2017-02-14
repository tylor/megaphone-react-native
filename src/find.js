import React, { Component } from 'react';
import {
  ListView,
  Image,
  Text,
  Button,
  View,
  StyleSheet,
  Navigator,
} from 'react-native';

import Vendors from './vendors';

export default class Find extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Image style={styles.image} source={require('./map.png')} />
        <Vendors/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    // marginRight: 10,
    backgroundColor: 'red',
    // marginTop: 70,
    // width: 200,
    height: 200,
  },
});