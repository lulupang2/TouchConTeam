import React from 'react';
import QRCode from 'react-native-qrcode-generator';

const QrGenerator1 = () => {
  const state = {
    text: 'http://facebook.github.io/react-native/',
  };

  console.log('qrCheck2');
  return (
    <QRCode value={state.text} size={200} bgColor="black" fgColor="white" />
  );
};

export default QrGenerator1;
