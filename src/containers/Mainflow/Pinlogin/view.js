import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
  Button,
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

export default function Pinlogin() {
  const [pwd, onChangePwd] = React.useState('');
  const [test, setTest] = useState('0000000');
  const [pwdbool, setPwdbool] = useState(0);

  const handleKeyPress = e => {
    console.log('rrr', pwdbool);
    if (pwd === test) {
      console.log('login success');
    } else {
      setPwdbool(pwdbool + 1);
      console.log('login fail');
      console.log('pwd = ', pwd);
      console.log('pwdbool= ', pwdbool);
      onChangePwd('');
    }
  };
  return (
    <View style={styles.pinglogin_container}>
      <View style={{marginTop: height * 0.1}}>
        <Image
          source={require('../../../assets/images/pintext.png')}
          style={{
            width: width * 0.4,
            height: height * 0.03,
            resizeMode: 'contain',
          }}
        />
      </View>
      <View style={styles.password_con}>
        {pwd.length >= 1 ? <Orange /> : <Gray />}
        {pwd.length >= 2 ? <Orange /> : <Gray />}
        {pwd.length >= 3 ? <Orange /> : <Gray />}
        {pwd.length >= 4 ? <Orange /> : <Gray />}
        {pwd.length >= 5 ? <Orange /> : <Gray />}
        {pwd.length >= 6 ? <Orange /> : <Gray />}
        {pwd.length >= 7 ? <Orange /> : <Gray />}
        <TextInput
          style={{position: 'absolute', width: width * 0.6, color: 'white'}}
          // onKeyPress={handleKeyPress}
          value={pwd}
          onSubmitEditing={handleKeyPress}
          onChangeText={onChangePwd}
          maxLength={7}
          secureTextEntry={true}
          keyboardType={'number-pad'}
          caretHidden={true}
          // onKeyPress 비밀번호 확인 작업
        />
      </View>

      <View>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/images/pinnumber.png')}
            style={{
              width: width * 0.2,
              height: height * 0.03,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pinglogin_container: {
    width: width,
    height: height,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  password_con: {
    flexDirection: 'row',
    marginTop: height * 0.04,
    marginBottom: height * 0.09,
    width: width * 0.5,
    height: height * 0.03,
    justifyContent: 'space-between',
    color: 'white',
  },
});
