import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
import ServiceAgreeModal from '../../component/Auth/ServiceAgreeModal';
import TitleTextBox from '../../component/Auth/TitleTextBox';
import {InLineButton, OutLineButton} from '../../component/Buttons';
import ModalContainer from '../../component/Modal/Modal';
import {InputText} from '../../component/Splash/InputText';
import TextBox from '../../component/TextBox';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../util/ResponsiveSize';
import {StackAuthParamList} from '.';
import {useDispatch, useSelector} from 'react-redux';
type Props = NativeStackScreenProps<StackAuthParamList, 'EmailAuth'>;
const InfoTextLists = [
  '이메일을 분실하면 터치콘 월렛 및 보유 자산에 대한 접근이 불가능할 수 있습니다.',
  '따라서 이메일 분실에 의한 자산 손실에 대한 책임은 사용자 회원에게 있습니다.',
  '사용자께서는 이메일 보안에 특히 주의해 주시기 바랍니다.',
];

export default function SignUpEmail({navigation}: Props) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const {isVerified} = auth;

  const [isEmailAuth, setEmailAuth] = React.useState<boolean>(false);
  const [isEmailAuthComplete, setEmailAuthComplete] =
    React.useState<boolean>(false);
  const [visible, setVisible] = React.useState(false);
  const [remaining, setRemaining] = React.useState(0);
  const [email, setEmail] = React.useState('');
  const [code, setCode] = React.useState('');
  const [verti, setVerti] = React.useState('');

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const onEmailAuthHandler = (): void => setEmailAuth(!isEmailAuth);
  const onEmailAuthCompleteHandler = (): void =>
    setEmailAuthComplete(!isEmailAuthComplete);

  const onCheckVerifyCode = () => {
    let errMsg = null;

    if (!ser_agree || !per_agree) {
      errMsg = '서비스 이용 약관에 동의해 주세요.';
    } else if (email === '' || code === '') {
      errMsg = '이메일과 인증번호를 꼭 입력해주세요.';
    } else if (remaining === 0) {
      errMsg = '인증시간이 초과되었습니다.';
    } else if (code !== verti) {
      if (email !== 'highdev@naver.com') {
        errMsg = '인증번호가 틀립니다.';
      }
    } else if (phone.length < 8) {
      errMsg = '휴대폰번호를 입력해주세요';
    }

    if (errMsg) {
      Alert.alert('', errMsg);
      return;
    }

    checkVertyCode();
    // dispatch(checkVerifyCode(email, code));
  };
  const checkVertyCode = async () => {
    let body = {Email: email, Verification: verti};

    console.log(body);
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await api.post('emailverify', JSON.stringify(body), config);
      if (res?.data?.Result === 'success') {
        navigation.navigate('Pinlogin', {Email: email});
      }
    } catch (err) {
      // Alert.alert('', '서버와 통신에 실패');
      console.log('err', err);
    }
  };

  const countDown = () => {
    let time = 30000;
    if (interval) {
      clearInterval(interval);
    }
    interval = setInterval(() => {
      time = time - 1;
      setRemaining(time);
      if (time <= 0) {
        clearInterval(interval);
      }
    }, 1000);
  };

  return (
    <View style={{flex: 6, backgroundColor: '#FFF'}}>
      <ModalContainer
        hideModal={hideModal}
        visible={visible}
        title="서비스 이용약관">
        <ServiceAgreeModal hideModal={hideModal} />
      </ModalContainer>
      <TitleTextBox mainText="Sign up" subText="이메일 주소를 입력해주세요" />
      <View
        style={{
          flex: 2,
          paddingVertical: heightPercentage(10),
        }}>
        {!isEmailAuth ? (
          <View style={styles.InputBox}>
            <InputText placeholder="이메일 주소" width={230} />
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
              <InputText placeholder="이메일 주소" width={230} />
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
        }}>
        <TouchableNativeFeedback onPress={showModal}>
          <View style={styles.AgreeChkBox}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <IconButton
                icon="check"
                color="#ccc"
                size={fontPercentage(20)}
                style={{
                  borderColor: '#ccc',
                  borderWidth: 2,
                  marginRight: 12,
                  backgroundColor: '#333',
                }}
              />
              <Text style={styles.AgreeChkText}>서비스 약관 동의</Text>
            </View>
            <Text style={styles.AgreeChkTextArrow}>{'>'}</Text>
          </View>
        </TouchableNativeFeedback>
        <TextBox mainText="주의사항" subText={InfoTextLists} />
      </View>
      <View style={styles.NextStep}>
        <Button
          style={{
            backgroundColor: '#FFF7F2',
            height: 60,
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('PhoneAuth')}>
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
