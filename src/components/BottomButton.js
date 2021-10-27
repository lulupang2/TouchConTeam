import React from 'react';
import {Dimensions} from 'react-native';
import Touchable from './Touchable';
import {NormalBoldLabel} from './Label';

const {height, width} = Dimensions.get('window');

const BottomButton = ({onPress, text}) => {
  return (
    <Touchable
      onPress={onPress}
      style={{
        paddingVertical: 15,
        borderRadius: 53,
        backgroundColor: '#fd7f36',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: width - 48,
        marginBottom: 32,
        // position: 'absolute', width: width-48, bottom: 32,
      }}
    >
      <NormalBoldLabel
        text={text}
        style={{fontSize: 20, lineHeight: 24, color: '#fff'}}
      />
    </Touchable>
  );
};

export default BottomButton;
