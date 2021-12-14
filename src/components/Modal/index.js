import React from 'react';
import {
  Alert,
  Modal,
  View,
  StyleSheet,
  Pressable,
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
          backgroundColor: '#fff',
          padding: 20,
          margin: 20,
        }}>
        <Pressable onPress={() => setModalVisible(false)}>
          <Text style={{fontSize: 30, textAlign: 'right'}}>X</Text>
        </Pressable>
        <Text style={{marginBottom: 40}}>{content}</Text>
      </ScrollView>
    </Modal>
  );
};
export default Modals;
