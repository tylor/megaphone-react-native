import React, { Component, PropTypes } from 'react';
import {
  ListView,
  Image,
  Text,
  Button,
  View,
  StyleSheet,
  Navigator,
} from 'react-native';

import Find from './find';
import Vendors from './vendors';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.onFind = this.onFind.bind(this);
    this.onPay = this.onPay.bind(this);
  }

  onFind() {
    this.props.navigator.push({
      component: Find,
      title: 'Find A Vendor',
    });
  }

  onPay() {
    this.props.navigator.push({
      component: Vendors,
      title: 'Pay A Vendor',
    });
  }

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Button title="Find A Vendor" onPress={this.onFind}/>
        <Button title="Pay A Vendor" onPress={this.onPay}/>
      </View>
    );
  }
}
