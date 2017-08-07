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
  ScrollView,
  Image
} from 'react-native';

import coverFallbackImg from './coverFallback.gif';

const bigArray = Array(300).fill().map((_, i) => i * i);
const dummyData = [];
// text, redBoxes, coverFallbackImg
const whatToRender = 'coverFallbackImg';

export default class TextExample extends Component {
  state = {
    showText: false,
    hideElements: false,
    hideViaOpacity: false
  }
  allocateMemory(){
    generateRandomNumberData(10000000)
  }

  render() {
    const description = whatToRender;
    const hideStyles = this.state.hideElements ? { display: 'none' } : null;
    const opacityHideStyles = this.state.hideViaOpacity ? { opacity: 0 } : null;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {`A lot of ${description}`}
        </Text>

        <Button onPress={() => this.setState({showText: !this.state.showText})} title={`Toggle ${description}`} color="#841584" />
        <Button onPress={() => this.setState({hideElements: !this.state.hideElements})} title={'Hide Elements via display none'} color="#841584"/>
        <Button onPress={() => this.setState({hideViaOpacity: !this.state.hideViaOpacity})} title={'Hide Elements via opacity'} color="#841584"/>
        <Button onPress={() => { this.allocateMemory() }} title={'Allocate JS Memory'} color="#841584"/>

        <ScrollView style={{flex: 1}}>
        {this.state.showText && bigArray.map(number => {
          switch(whatToRender){
            case 'text': {
              return (
                <Text style={[styles.instructions, hideStyles, opacityHideStyles]} key={number} >
                  {`Text ${number}`} 
                </Text>
              )
            }
            case 'redBoxes': {
              return (<View style={[styles.dummyBox, hideStyles, opacityHideStyles]} key={number} />)
            }
            case 'coverFallbackImg': {
              return (<Image 
                style={[styles.imageStyles, hideStyles, opacityHideStyles]} 
                source={coverFallbackImg} 
                key={number}
              />)
            }
              
          }
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
  imageStyles : {
    width: 200, height: 200 
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


function generateRandomStringData(size){
    var chars = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var len = chars.length;
    var string = ''

    while (size--) {
        string = string + chars[Math.random()*len | 0];
    }
    return string;
}

function generateRandomNumberData(size){
    const array = [];

    while (size--) {
        array.push(Math.random())
    }

    return array;
}