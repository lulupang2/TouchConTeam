import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const TitleInput = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
  );
};

export default TitleInput;

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 260,
    marginLeft: 15,
    borderWidth: 1,
    padding: 10,
  },
  content: {
    height: 399,
    width: 330,
    marginLeft: 24,
    borderWidth: 1,
  },
});

export const ContentInput = () => {
  return <TextInput style={styles.content} />;
};
