import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
export default function QRScanScreen() {
  const navigate = useNavigation();
  useEffect(() => {
    navigate.navigate('QRCamera');
    return () => {
      console.log('QR Clean-up');
    };
  });
  return <React.Fragment />;
}
