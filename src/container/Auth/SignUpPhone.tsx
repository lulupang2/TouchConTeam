import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {InLineButton, OutLineButton} from '../../component/Buttons';
import {InputText} from '../../component/Splash/InputText';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../util/ResponsiveSize';
import {StackAuthParamList} from '.';
import TitleTextBox from '../../component/Auth/TitleTextBox';
type Props = NativeStackScreenProps<StackAuthParamList, 'PhoneAuth'>;

export default function SignUpEmail({navigation}: Props) {
  const [isEmailAuth, setEmailAuth] = React.useState<boolean>(false);
  const [isEmailAuthComplete, setEmailAuthComplete] =
    React.useState<boolean>(false);

  const onEmailAuthHandler = (): void => setEmailAuth(!isEmailAuth);
  const onEmailAuthCompleteHandler = (): void =>
    setEmailAuthComplete(!isEmailAuthComplete);

  return (
    <View style={{flex: 6, backgroundColor: '#FFF'}}>
      <TitleTextBox mainText="Sign up" subText="휴대폰 번호를 입력해주세요" />
      <View
        style={{
          flex: 2,
          paddingVertical: heightPercentage(10),
        }}>
        {!isEmailAuth ? (
          <View style={styles.InputBox}>
            <InputText placeholder="휴대폰 번호" width={230} />
            <InLineButton
              name="확인"
              bgColor="#FFF7F2"
              textColor="#E15300"
              width={90}
              height={56}
              onPress={onEmailAuthHandler}
            />
          </View>
        ) : (
          <>
            <View style={styles.InputBox}>
              <InputText placeholder="휴대폰 번호" width={230} />
              <InLineButton
                name="재전송"
                bgColor="#FA5C00"
                textColor="#FFF"
                width={90}
                height={56}
                onPress={onEmailAuthHandler}
                icon="reload"
              />
            </View>

            <View style={styles.InputBox}>
              <InputText
                placeholder="인증코드 6자리"
                width={230}
                auth={isEmailAuthComplete}
              />
              <OutLineButton
                name="확인"
                color="#E15300"
                width={90}
                height={56}
                onPress={onEmailAuthCompleteHandler}
              />
            </View>
          </>
        )}
      </View>
      <View
        style={{
          flex: 2,
        }}></View>
      <View style={styles.NextStep}>
        <Button
          style={{backgroundColor: '#FFF7F2', padding: 18}}
          onPress={() => navigation.navigate('PinAuth')}>
          <Text style={styles.NextStepButton}>다음단계</Text>
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  InputBox: {
    flexDirection: 'row',
    paddingBottom: heightPercentage(15),
  },
  AgreeChkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1.5,
    borderColor: '#000',
    borderRadius: 6,
    paddingHorizontal: widthPercentage(16),
    paddingVertical: heightPercentage(10),
    marginBottom: 15,
  },
  AgreeChkText: {
    color: '#666',
    fontFamily: 'GmarketSansTTFMedium',
    fontSize: 15,
  },
  AgreeChkTextArrow: {
    alignSelf: 'center',
    color: '#666',
    fontFamily: 'GmarketSansTTFMedium',
    fontSize: 15,
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
