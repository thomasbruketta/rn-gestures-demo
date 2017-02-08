// @flow
// imports {{{

import Event_ from 'constelation-event_'
import React from 'react'
import Style_ from 'constelation-style_'
import Text from 'constelation-text'
import View from 'constelation-view'

// }}}

type Props = {
  label: string,
  marginTop?: number,
  onPress: Function
}
export default class Button extends React.Component<void, Props, void> {
  render() {
    return (
      <Event_
        hitSlop={10}
        onPress={this.props.onPress}
        pressEffect='opacity'
      >
        <Style_
          borderColor='black'
          borderWidth={1}
          borderRadius={1}
        >
          <View
            center
            paddingVertical={5}
            paddingHorizontal={10}
            marginTop={this.props.marginTop}
          >
            <Text color='black'>
              {this.props.label}
            </Text>
          </View>
        </Style_>
      </Event_>
    )
  }
}