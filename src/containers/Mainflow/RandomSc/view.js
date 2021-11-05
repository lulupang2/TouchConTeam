import React, {Component} from 'react';
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
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import RowView from '../../../components/RowView';
import {Platform, PermissionsAndroid} from 'react-native';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

class view extends Component {
  componentDidMount() {
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
  }

  // render({navigation}) {
  //   const onSuccess = e => {
  //     Linking.openURL(e.data).catch(err =>
  //       console.error('An error occured', err),
  //     );
  //   };
  render() {
    const onSuccess = e => {
      Linking.openURL(e.data).catch(err =>
        console.error('An error occured', err),
      );
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
          }}
        >
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
                      }}
                    ></View>
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
                  ></View>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: width * 0.25,
                      }}
                    ></View>
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
                  ></View>
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
  }
}

export default view;
