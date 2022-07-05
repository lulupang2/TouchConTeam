import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import {
  Camera,
  useCameraDevices,
  useFrameProcessor,
} from 'react-native-vision-camera';
import {
  DBRConfig,
  decode,
  TextResult,
} from 'vision-camera-dynamsoft-barcode-reader';
import HeaderTitle from '../../component/HeaderTitle';
import TextBox from '../../component/TextBox';
import themeStyle from '../../style/theme.style';
import {heightPercentage} from '../../util/ResponsiveSize';
import * as REA from 'react-native-reanimated';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default function QRCamera() {
  const navigation = useNavigation();
  const onNavigate = () => {
    //@ts-ignore
    navigation.navigate('HomeScreen');
  };
  const [barcodeResults, setBarcodeResults] = React.useState(
    [] as TextResult[],
  );
  useEffect(() => {
    return () => {
      console.log('screen clean-up');
    };
  });
  const devices = useCameraDevices();
  const device = devices.back;
  const frameProcessor = useFrameProcessor(frame => {
    'worklet';
    const config: DBRConfig = {};
    config.template =
      '{"ImageParameter":{"BarcodeFormatIds":["BF_QR_CODE"],"Description":"","Name":"Settings"},"Version":"3.0"}'; //scan qrcode only

    const results: TextResult[] = decode(frame, config);
    REA.runOnJS(setBarcodeResults)(results);
  }, []);
  // if (device == null) {
  //   return (
  //     <View>
  //       <Text>Loading</Text>
  //     </View>
  //   );
  // }
  return (
    device != null && (
      <>
        <View style={styles.flex}>
          <HeaderTitle
            title="QR스캔"
            titleColor="#FFF"
            borderColor="transparent"
            prevButton={false}
            onPress={onNavigate}
            containerStyle={{
              position: 'relative',
              backgroundColor: 'transparent',
            }}
          />
          <View style={styles.tabBox}>
            <Pressable style={styles.tabActiveTab}>
              <Text style={styles.tabActiveText}>외부 스캔</Text>
            </Pressable>
            <Pressable style={styles.tabNonActiveTab}>
              <Text style={styles.tabText}>내부 스캔</Text>
            </Pressable>
          </View>
          <View
            style={{
              position: 'absolute',
              width,
              height,
              zIndex: 2,
              opacity: 0.4,
              backgroundColor: '#000',
            }}
          />
          <View style={styles.cameraBox}>
            <View style={{backgroundColor: '#FFF', flex: 1, opacity: 0.0675}} />
          </View>
          <View
            style={{
              height: heightPercentage(130),
              width: '100%',
              paddingHorizontal: 20,
              backgroundColor: '#000',
              borderRadius: 15,
              marginTop: heightPercentage(45),
              paddingTop: 15,
              paddingBottom: 20,
            }}>
            <TextBox
              mainBold={`QR스캔 안내 ${barcodeResults[0]?.barcodeText}`}
              mainColor="#FFF"
              subText={[
                '외부스캔은 외부 QR스캔에 사용됩니다.',
                '내부스캔은 모바일 내부에 있는 QR스캔입니다.',
                '한번 사용한 QR코드는 반복 스캔 불가하니 유의해주세요.',
              ]}
              boderless
            />
          </View>
        </View>
        <Camera
          style={{
            width,
            height,
            position: 'absolute',
          }}
          device={device}
          isActive={true}
          frameProcessor={frameProcessor}
          frameProcessorFps={1}
        />
      </>
    )
  );
}
const styles = StyleSheet.create({
  flex: {
    flex: 1,
    zIndex: 1,
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  tabBox: {
    zIndex: 3,
    backgroundColor: '#000',
    margin: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 30,
    opacity: 0.7,
    borderWidth: 5,
  },
  tabActiveTab: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    opacity: 1,
    zIndex: 30,
    paddingHorizontal: 32,
    paddingVertical: 13,
  },
  tabActiveText: {
    color: '#000',
    fontFamily: themeStyle.FONT_REGULAR,
    textAlign: 'center',
    fontSize: 17,
  },
  tabNonActiveTab: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    opacity: 1,
    zIndex: 30,
    paddingHorizontal: 32,
    paddingVertical: 13,
  },
  tabText: {
    color: '#CCC',
    fontFamily: themeStyle.FONT_REGULAR,
    textAlign: 'center',
    fontSize: 17,
  },

  cameraBox: {
    width: 300,
    height: 300,
    zIndex: 100,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#FFF',
  },
});
