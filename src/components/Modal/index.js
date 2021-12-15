import React from 'react';
import {
  Alert,
  Modal,
  View,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  Text,
} from 'react-native';

const Modals = ({modalVisible, setModalVisible, content}) => {
  return (
    <Modal
      animationType="slide"
      // transparent={true}
      visible={modalVisible}
      // onRequestClose={() => {
      //   Alert.alert('Modal has been closed.');
      //   setModalVisible(!modalVisible);
      // }}
    >
      <ScrollView
        contentContainerStyle={{
          // display: 'flex',
          // flexGrow: 1,
          // flex: 1,
          backgroundColor: '#f1ecec',
          padding: 20,
          margin: 20,
        }}>
        <Pressable
          onPress={() => setModalVisible(false)}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'flex-end',
          }}>
          <Image source={require('../../assets/X.png')} />
          {/*<Text style={{fontSize: 30, textAlign: 'right', color: '#777'}}>*/}
          {/*  X*/}
          {/*</Text>*/}
        </Pressable>
        <Text style={{marginBottom: 40, color: '#777'}}>{content}</Text>
      </ScrollView>
    </Modal>
  );
};
export default Modals;
