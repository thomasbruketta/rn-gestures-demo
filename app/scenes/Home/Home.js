// @flow

import React from 'react'
import { Actions } from 'react-native-router-flux'

import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'

export default class Home extends React.Component {

  handleShowFullScreenModal = () => {
    Actions.fullDetail()
  }

  handleShowFullScreenModalScene = () => {
    Actions.fullModal()
  }

  render() {
    return (
      <View
        flex={1}
        alignHorizontal='center'
        alignVertical='center'
      >
        <Image style={{width: 200, height: 200}} source={require('images/logo.png')} />

        <TouchableOpacity style={[styles.button, {marginTop: 60}]} onPress={this.handleShowFullScreenModal}>
          <Text style={{color: 'black'}}>
            Full screen Detail scene
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, {marginTop: 30}]} onPress={this.handleShowFullScreenModalScene}>
          <Text style={{color: 'black'}}>
            Full screen Modal scene
          </Text>
        </TouchableOpacity>

      </View>
    )
  }
}

var styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 1,
  },
})