import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import ReactNativeModal from 'react-native-modal';
import HeaderTitle from '../HeaderTitle';
interface IProps {
  children?: JSX.Element;
  hideModal: () => void;
  visible: boolean;
  title?: string;
  borderColor?: string;
  icon?: boolean;
}
export default function ModalContainer({
  children,
  hideModal,
  visible,
  title,
  borderColor,
  icon,
}: IProps) {
  const containerStyle = {
    backgroundColor: '#FFF',
    flex: 1,
    borderRadius: 13,
    width: '100%',
    alignSelf: 'center',
  };

  return (
    <ReactNativeModal
      isVisible={visible}
      onDismiss={hideModal}
      style={containerStyle}>
      {/* {title && (
        <>
          <View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                padding: 20,
                borderBottomWidth: 1,
                borderColor: '#E5E5EA',
              }}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 16,
                  fontFamily: 'GmarketSansTTFBold',
                }}>
                {title}
              </Text>
            </View>
            <Icon
              name="close"
              color={'#000'}
              style={{
                fontSize: 30,
                position: 'absolute',
                right: 15,
                top: 15,
              }}
              onPress={hideModal}
            />
          </View>
        </>
      )} */}
      <HeaderTitle
        title={title}
        onPress={hideModal}
        icon={icon}
        borderColor={borderColor}
        prevButton={false}
      />
      {children}
    </ReactNativeModal>
  );
}
