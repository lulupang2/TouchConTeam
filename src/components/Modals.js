import React, {useState} from 'react';
import {View, Modal, StyleSheet} from 'react-native';

export const ModalPoup = ({visible, children}) => {
  return (
    <Modal transparent visible={visible}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContanier}>{children}</View>
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
});
