import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

function Orange() {
  return (
    <Image
      source={require('../../../assets/images/orangecircle.png')}
      style={{
        width: width * 0.03,
        height: height * 0.03,
        resizeMode: 'contain',
      }}
    />
  );
}

function Gray() {
  return (
    <Image
      source={require('../../../assets/images/graycircle.png')}
      style={{
        width: width * 0.03,
        height: height * 0.03,
        resizeMode: 'contain',
      }}
    />
  );
}

export default function Pinchg(props) {
  const [pwd, onChangePwd] = React.useState('');
  const [test, setTest] = useState('0000000');
  const confirm_pwd = e => {
    if (pwd === test) {
      props.navigation.navigate('Pinchg');
      console.log(test);
      console.log(pwd);
    } else {
      console.log(test);
      console.log(pwd);
    }
  };
  const press_enter = e => {
    console.log(e.key);
  };

  return (
    <View style={styles.pinchg_container}>
      <View style={{marginTop: height * 0.1}}>
        <Image
          source={require('../../../assets/images/input_pin.png')}
          style={{
            width: width * 0.4,
            height: height * 0.03,
            resizeMode: 'contain',
          }}
        />
      </View>
      <View style={styles.pinchg_pwd}>
        {pwd.length >= 1 ? <Orange /> : <Gray />}
        {pwd.length >= 2 ? <Orange /> : <Gray />}
        {pwd.length >= 3 ? <Orange /> : <Gray />}
        {pwd.length >= 4 ? <Orange /> : <Gray />}
        {pwd.length >= 5 ? <Orange /> : <Gray />}
        {pwd.length >= 6 ? <Orange /> : <Gray />}
        {pwd.length >= 7 ? <Orange /> : <Gray />}
        <TextInput
          style={{position: 'absolute', width: width * 0.6, color: 'white'}}
          onChangeText={onChangePwd}
          maxLength={7}
          secureTextEntry={true}
          keyboardType={'number-pad'}
          caretHidden={true}
          onKeyPress={press_enter}
          // onKeyPress 비밀번호 확인 작업
        />
      </View>
      <View style={{marginTop: height * 0.54}}>
        <TouchableOpacity onPress={confirm_pwd}>
          <Image
            source={require('../../../assets/images/confirm_button.png')}
            style={{
              width: width * 0.7,
              height: height * 0.1,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pinchg_container: {
    width: width,
    height: height,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  pinchg_pwd: {
    flexDirection: 'row',
    marginTop: height * 0.04,
    marginBottom: height * 0.09,
    width: width * 0.5,
    height: height * 0.03,
    justifyContent: 'space-between',
    color: 'white',
  },
});
