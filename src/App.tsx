import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Alert, BackHandler, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import RootStack from './navigation/RootStack';

export default function App() {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('알림', '어플리케이션을 종료하시겠습니까?', [
        {
          text: '취소',
          onPress: () => null,
        },
        {text: '종료', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea}>
        <RootStack />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: 'transparent'},
});
