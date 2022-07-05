import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button, Provider} from 'react-native-paper';
import TouchableNoFeedback from '../../component/TouchableNoFeedback';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../util/ResponsiveSize';
import {StackParamList} from '../../RootStack';
import SignUpEmail from './SignUpEmail';
import SignUpPhone from './SignUpPhone';
import SignUpPin from './SignUpPin';
import SignUpPinConfirm from './SignUpPinConfirm';
import SignUpSuccess from './SignUpSuccess';
type Props = NativeStackScreenProps<StackParamList, 'SignUp'>;
export type StackAuthParamList = {
  EmailAuth: undefined;
  PhoneAuth: undefined;
  PinAuth: undefined;
  PinAuthConfirm: undefined;
  Welcome: undefined;
};
export function SignUp({navigation}: Props) {
  const Stack = createMaterialTopTabNavigator<StackAuthParamList>();
  return (
    <Provider>
      <SafeAreaView style={{flex: 1}}>
        <TouchableNoFeedback style={{flex: 1}}>
          <View style={styles.flex}>
            <Stack.Navigator
              tabBar={() => null}
              initialRouteName="EmailAuth"
              style={{flex: 7}}>
              <Stack.Screen name="EmailAuth" component={SignUpEmail} />
              <Stack.Screen name="PhoneAuth" component={SignUpPhone} />
              <Stack.Screen name="PinAuth" component={SignUpPin} />
              <Stack.Screen
                name="PinAuthConfirm"
                component={SignUpPinConfirm}
              />
              <Stack.Screen name="Welcome" component={SignUpSuccess} />
            </Stack.Navigator>
          </View>
        </TouchableNoFeedback>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  flex: {
    backgroundColor: '#FFF',
    flex: 1,
    padding: widthPercentage(15),
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  InfoBox: {
    marginTop: 15,
    paddingHorizontal: widthPercentage(15),
    borderColor: '#E5E5EA',
    borderWidth: 1,
    borderRadius: 12,
    height: heightPercentage(154),
  },
  InfoMainText: {
    color: '#666',
    fontFamily: 'GmarketSansTTFMedium',
    fontSize: 13,
    paddingVertical: heightPercentage(10),
  },
  InfoSubText: {
    color: '#999',
    fontFamily: 'GmarketSansTTFMedium',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.5,
  },
  InfoSub: {
    flexDirection: 'row',
    flex: 1,
  },
  ListDisc: {
    color: '#999',
    paddingRight: 6,
  },
  NextStep: {
    flex: 1,
    justifyContent: 'center',
  },
  NextStepButton: {
    fontFamily: 'GmarketSansTTFMedium',
    fontSize: fontPercentage(15),
    fontWeight: '400',
    color: '#FA5C00',
  },
});
