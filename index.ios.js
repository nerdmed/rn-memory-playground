/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';

const bigArray = Array(300).fill().map((_, i) => i * i);
const TEXT_OR_VIEWS = false;

export default class TextExample extends Component {
  state = {
    showText: false
  }

  toggleText = () => {
    this.setState({
      showText: !this.state.showText
    })
  }

  render() {
    const description = TEXT_OR_VIEWS ? 'Text' : 'Red Boxes';
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {`A lot of ${description}`}
        </Text>
        <Button
          onPress={this.toggleText}
          title={`Toggle ${description}`}
          color="#841584"
        />
        <ScrollView style={{flex: 1}}>
        {this.state.showText && bigArray.map(number => {
          return TEXT_OR_VIEWS ? (
            <Text style={styles.instructions} key={number} >
              {`Text ${number}`} 
            </Text>
          ) : (
            <View style={styles.dummyBox} key={number} />
          )
        })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 30,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
   dummyBox: {
    marginBottom: 5,
    backgroundColor: 'red',
    height: 10,
    width: 10
  },
});

AppRegistry.registerComponent('TextExample', () => TextExample);
