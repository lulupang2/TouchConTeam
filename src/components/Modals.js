import React, {useState} from 'react';
import {View, Modal, StyleSheet, Text} from 'react-native';
import BottomButton from './BottomButton';
import ColumnView from './ColumnView';

export const ModalPoup = ({visible, children, input}) => {
  return (
    <Modal transparent visible={visible}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContanier}>{children}</View>
      </View>
    </Modal>
  );
};

export const ModalPoup2 = ({visible, children, input}) => {
  return (
    <Modal transparent visible={visible}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContanier2}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContanier: {
    marginHorizontal: 17,
    backgroundColor: 'white',
    paddingHorizontal: 7,
    minWidth: 341,
    minHeight: 181,
    borderRadius: 10,
  },

  modalBackground2: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContanier2: {
    marginHorizontal: 17,
    backgroundColor: 'white',
    paddingHorizontal: 7,
    minWidth: 341,
    minHeight: 325,
    borderRadius: 10,
  },
});
