import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ColumnView from '../ColumnView';
import {StyleSheet} from 'react-native';

const AdView = ({item, index}) => {
  if (item.empty) {
    return (
      <ColumnView style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.empty1}></View>
        <Text>{item.title}</Text>
      </ColumnView>
    );
  } else {
    return (
      <ColumnView style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={item.path}>
          <View style={styles.adScreen}></View>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 15,
            color: '#000',
          }}
        >
          {item.title}
          {console.log(item)}
        </Text>
      </ColumnView>
    );
  }
};
export default AdView;

const styles = StyleSheet.create({
  // back: {
  //   backgroundColor: '#80D5AC',
  //   minHeight: 100,
  // },
  arr: {
    marginHorizontal: 33,
    marginVertical: 40,
    justifyContent: 'space-between',
  },
  tx1: {fontSize: 20, color: '#ffffff'},
  adScreen: {
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    borderRadius: 8,
    borderWidth: 1,
  },
  empty1: {
    margin: 15,
    borderRadius: 8,
    backgroundColor: '#f7f7f7',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {height: 480},
  flatListContainer: {paddingBottom: 50},
});
