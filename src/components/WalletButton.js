import React, {Component} from 'react';
import {Text} from 'react-native';
import Touchable from './Touchable';

class WalletButton extends Component {
  render() {
    return (
      <Touchable
        onPress={this.props.onPress}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 70,
          height: 70,
          borderWidth: 1.5,
          borderColor: '#FFC930',
          borderRadius: 35,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            color: '#FFF',
            fontSize: 16,
            fontWeight: '600',
            lineHeight: 18,
          }}
        >
          {this.props.text}
        </Text>
      </Touchable>
    );
  }
}

export default WalletButton;
