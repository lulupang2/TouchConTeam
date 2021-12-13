import React, {useEffect} from 'react';
import {Dimensions, ScrollView} from 'react-native';
import HeaderBottomLine from '../../../components/HeaderBottomLine';
import {NormalLabel} from '../../../components/Label';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const view = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderBottomLine />
      <NormalLabel
        style={{paddingVertical: 30, paddingHorizontal: 23}}
        text={`터치콘은 블록체인 기반의 미래형 디지털 자산 리워드 플랫폼입니다. 현실 세계의 보상 서비스에는 주로 포인트, 기프티콘, 리워드 앱 등이 있습니다만, 대부분 유효기간이 설정되어 있거나 사용처 및 용도에 규제가 많아서 제대로 사용하지 못하는 치명적인 단점을 갖고 있습니다. 또한 신규 디지털 자산의 에어드랍 역시 획일적인 무분별한 배포로 인해 그 본래의 이점을 제대로 살리지 못하고 있습니다.
\n2021년 글로벌 경제는 비트코인을 비롯한 디지털 자산을 법적 자산으로 점차 인정해 가고 있으며,일부 국가는 법정 화폐로 사용되고 있는 등, 피할 수 없는 시대적 요청으로 받아들이고 있습니다. 터치콘은 미래에 다가올 디지털 자산의 시대를 위해 리워드 재원을 디지털 자산으로 대체하여 지급하는 놀라운 시도를 혁신을 진행하고 있습니다. 이제 터치콘 플랫폼으로 인해 글로벌 소비자는 고유의 재산인 보상의 권리를 완전히 자유롭게 사용할 수 있습니다.
\n터치콘 플랫폼은 대다수 기업에게는 광고비 부담을 최대한 절감하고, 소비자에게는 보다 높은 디지털 자산을 선물하는 미래형 광고 마케팅을 지향합니다. 특히 블록체인 신규 프로젝트에서 발행하는 디지털 자산의 에어드랍 확장성을 지원하는 2단계 서비스 개발이 완성되면 터치콘 플랫폼은 디지털 자산 생태계 활성화에 막대한 공헌을 할 것입니다.
\n터치콘 플랫폼은 사용자가 리워드콘 광고 스캔이라는 게임을 통해 디지털 자산과의 재미와 흥미를 공유하고, 더 나아가 디지널 자산의 투자 및 증식이라는 두 마리 토끼를 얻게 되기를 소망하고 있습니다. 터치콘에서 여러분의 멋진 잭팟 보상을 기원드립니다. 감사합니다.`}
      />
    </ScrollView>
    // <View>
    //   <Image
    //     source={require('../../../assets/images/tc_story_title.png')}
    //     style={{
    //       resizeMode: 'contain',
    //       width: width * 1,
    //       position: 'absolute',
    //       top: height * 0.007,
    //     }}
    //   />
    //   {/* 터치콘 이야기 뒤로기가 버튼 start */}
    //   <TouchableNativeFeedback onPress={() => navigation.goBack()}>
    //     <Image
    //       source={require('../../../assets/images/btn_back.png')}
    //       style={{
    //         resizeMode: 'contain',
    //         width: width * 0.1,
    //         position: 'absolute',
    //         right: width * 0.85,
    //       }}
    //     />
    //   </TouchableNativeFeedback>
    //   {/* 터치콘 이야기 뒤로가기 버튼 end */}
    //
    //   <Image
    //     source={require('../../../assets/images/tc_story_explain.png')}
    //     style={{
    //       resizeMode: 'contain',
    //       width: width * 0.7,
    //       position: 'absolute',
    //       right: width * 0.15,
    //       top: height * -0.4,
    //     }}
    //   />
    // </View>
  );
};

export default view;
