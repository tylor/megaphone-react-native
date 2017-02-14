import React, { Component } from 'react';
import {
  Image,
  Text,
  Button,
  View,
  StyleSheet,
} from 'react-native';

export default class Vendor extends Component {
  render() {
    return (
      <View style={styles.row}>
        <Image style={styles.image} source={{uri: this.props.data.image.thumb.url}}/>
        <View style={styles.info}>
          <Text style={styles.bigblue}>{this.props.data.name}</Text>
          <Text>Badge {this.props.data.badge_id}</Text>
        </View>
        <Button title="Info" style={styles.button} onPress={()=>{}}/>
        <Button title="Pay" style={styles.button} onPress={()=>{}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    margin: 5,
    marginLeft: 10,
    // marginTop: 10,
    // marginBottom: 10,
  },
  image: {
    // marginRight: 10,
    width: 50,
    height: 50,
  },
  info: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center'
  },
  button: {
    color: 'red',
    alignSelf: 'flex-end',
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    // fontSize: 30,
  },
  red: {
    color: 'red',
  },
});