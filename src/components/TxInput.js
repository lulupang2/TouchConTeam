import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';

const TitleInput = ({value, onChangeText, style}) => {
  return (
    <TextInput
      style={[styles.input, style]}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default TitleInput;

export const ContentInput = ({value, onChangeText, style, multiline}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={[styles.content, style]}
      multiline={multiline}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    // height: 50,
    // width: 260,
    // marginLeft: 15,
    // minHeight: 50,
    // minWidth: 270,
    flex: 1,
    marginLeft: 15,
    borderWidth: 0.8,
    borderColor: '#c4c4c4',
    fontSize: 20,
    borderRadius: 5,
    padding: 8,
    color: '#000000',
  },
  content: {
    textAlignVertical: 'top',
    minHeight: 399,
    // height: 399,
    // width: 330,
    // marginLeft: 24,
    marginHorizontal: 24,
    borderWidth: 0.8,
    borderColor: '#c4c4c4',
    borderRadius: 5,
    padding: 8,
    color: '#000000',
  },
});
