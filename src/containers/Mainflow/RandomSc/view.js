import React, {Component, useEffect, useState} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Linking,
  Alert,
} from 'react-native';
import RNQRGenerator from 'rn-qr-generator';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import RowView from '../../../components/RowView';
import {Platform, PermissionsAndroid} from 'react-native';
import Touchable from '../../../components/Touchable';
import AntDesign from 'react-native-vector-icons/AntDesign';
import api from '../../../api';
import {resetAuth} from '../../../redux/authSlice';
import {useSelector} from 'react-redux';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

// class view extends Component {
const view = ({navigation}) => {
  const [QRurl, setQRurl] = useState('');
  const auth = useSelector(state => state.auth);
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
      headerRight: () => (
        <Touchable onPress={() => navigation.navigate('Main')}>
          <AntDesign
            name="close"
            size={26}
            color={'#000'}
            style={{
              padding: 4,
              alignSelf: 'center',
              color: '#fff',
              paddingRight: 16,
            }}
          />
        </Touchable>
      ),
    });

    if (Platform.OS === 'android') {
      console.log(' 111 ');
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ]).then(result => {
        console.log(result);
        /*
              if (
                result['android.permission.CAMERA'] === 'granted' &&
                result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted' &&
                result['android.permission.RECORD_AUDIO'] === 'granted'
              ) {
                this.setState({permissionsGranted: true, showPermsAlert: false});
              } else {
                this.setState({permissionsGranted: false, showPermsAlert: true});
              }
              */
      });
    }
  }, []);

  // render({navigation}) {
  //   const onSuccess = e => {
  //     Linking.openURL(e.data).catch(err =>
  //       console.error('An error occured', err),
  //     );
  //   };
  const onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };
  const internalScan = () => {
    let URL;
    let options = {
      title: 'Select Image',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, res => {
      console.log(res.assets[0].uri);
      URL = res.assets[0].uri;
      ImagePick(res.assets[0].uri);
    });
    // ImagePick();
  };

  const ImagePick = url => {
    RNQRGenerator.generate({
      value: 'https://github.com/gevgasparyan/rn-qr-generator',
      height: 100,
      width: 100,
    });
    // .then(response => {
    //   const {uri, width, height, base64} = response;
    //   console.log('위', response);
    // })
    // .catch(error => console.log('Cannot create QR code', error));

    // Detect QR code in image
    RNQRGenerator.detect({
      uri: url,
    })
      .then(response => {
        const {values} = response; // Array of detected QR code values. Empty if nothing found.
        console.log(values[0]);
        setQRurl(values[0]);
        fetchQRCode(values[0]);
      })
      .catch(error => {
        Alert.alert('이미지에서 QR 코드를 감지에 실패하였습니다.');
        console.log('Cannot detect QR code in image', error);
      });
  };
  const fetchQRCode = async Qr => {
    let body = {sessionToken: auth.sessionToken, Qr: Qr};
    console.log(body);
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await api.post('internalscan', JSON.stringify(body), config);
      if (res.data.Result !== 'success') {
        Alert.alert('내부스캔 실패했습니다');
        return;
      }
      Alert.alert('내부스캔 성공하였습니다');
      console.log(res);
      navigation.goBack();

      // console.log(res);
      // navigation.navigate('Wallet');
      // console.log('test', res.data.Result);
    } catch (err) {
      Alert.alert('', '서버와 통신에 실패');
      console.log('err', err);
    }
  };

  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'center',
          justifyContent: 'space-between',
          position: 'absolute',
          top: height * 0.1,
        }}>
        <Image
          source={require('../../../assets/images/random_sc.png')}
          style={{
            resizeMode: 'contain',
            width: 210,
            height: 196,
            position: 'absolute',
            top: 100,
            left: 80,
            zIndex: 1,
          }}
        />
        {/* -------- 1회 스캔한 큐알코드는~~~ start ------- */}
        <QRCodeScanner
          onRead={onSuccess}
          flashMode={RNCamera.Constants.FlashMode.torch}
          bottomContent={
            <>
              <RowView>
                <TouchableOpacity>
                  <Image
                    source={require('../../../assets/images/btn_random_sc_out.png')}
                    style={{
                      resizeMode: 'contain',
                      width: width * 0.2,
                    }}
                  />
                  <View
                    style={{
                      width: width * 0.25,
                    }}></View>
                </TouchableOpacity>
                <Image
                  source={require('../../../assets/images/random_bar.png')}
                  style={{
                    resizeMode: 'contain',
                    width: width * 0.008,
                    marginTop: height * 0.1,
                  }}
                />
                <View
                  style={{
                    width: width * 0.05,
                  }}
                />
                <TouchableOpacity onPress={() => internalScan()}>
                  <View
                    style={{
                      width: width * 0.25,
                    }}
                  />
                  <Image
                    source={require('../../../assets/images/btn_random_sc_in.png')}
                    style={{
                      resizeMode: 'contain',
                      width: width * 0.2,
                    }}
                  />
                </TouchableOpacity>
                <Image
                  source={require('../../../assets/images/random_bar.png')}
                  style={{
                    resizeMode: 'contain',
                    width: width * 0.008,
                    marginTop: height * 0.1,
                  }}
                />
                <View
                  style={{
                    width: width * 0.05,
                  }}
                />
                {/* <TouchableOpacity
                    onPress={() => navigation.navigate('ScanHistory')}>
                    <Image
                      source={require('../../../assets/images/btn_random_sc_hi.png')}
                      style={{
                        resizeMode: 'contain',
                        width: width * 0.2,
                      }}
                    />
                  </TouchableOpacity> */}
                <TouchableOpacity>
                  <Image
                    source={require('../../../assets/images/btn_random_sc_hi.png')}
                    style={{
                      resizeMode: 'contain',
                      width: width * 0.2,
                    }}
                  />
                </TouchableOpacity>
              </RowView>
            </>
          }
        />
      </View>
      {/* -------- 1회 스캔한 큐알코드는~~~ end ------- */}

      {/* ------------- 외부, 내부, History 버튼 시작--------- */}
    </View>
  );
};

export default view;
