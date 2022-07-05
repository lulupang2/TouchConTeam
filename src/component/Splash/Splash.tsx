import {useIsFocused} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {StackParamList} from '../../navigation/RootStack';
type Props = NativeStackScreenProps<StackParamList, 'Splash'>;

export default function Splash({navigation}: Props) {
  const isFocused = useIsFocused();
  //const loginSuccess = useStore(state => state.loginSuccess);
  useEffect(() => {
    setTimeout(() => {
      //   if (email !== null) {
      //     navigation.navigate('Test');
      //   } else {
      navigation.navigate('Intro');
      //   }
    }, 1000);
    return () => {
      console.log('clean-up');
    };
  }, [isFocused, navigation]);

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={require('../../../assets/images/splash.png')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  img: {
    resizeMode: 'contain',
    height: '100%',
    width: '75%',
  },
});
