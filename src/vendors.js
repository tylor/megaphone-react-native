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
import Vendor from './vendor';

export default class Vendors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    };
    fetch('https://app.megaphonemagazine.com/vendors.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseJson)
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style={{flex: 1, paddingTop: 5}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Vendor data={rowData}></Vendor>}
        />
      </View>
    );
  }
}