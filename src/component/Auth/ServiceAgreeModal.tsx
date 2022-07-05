import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, useTheme} from 'react-native-paper';
import TextBox from '../TextBox';
import Icon from 'react-native-vector-icons/Ionicons';
import {InLineButton} from '../Buttons';
interface IProps {
  hideModal: () => void;
}
export default function ServiceAgreeModal({hideModal}: IProps) {
  const {fonts, colors} = useTheme();
  return (
    <View style={{flex: 1, padding: 20}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <Icon name="checkbox-outline" color={'#000'} size={30} />
        <Text style={styles.AllAgreeChkText}> 모두 동의하기</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name="checkbox-outline" color={'#000'} size={15} />
        <Text style={styles.SingAgreeChkText}>[필수] 서비스 이용약관 동의</Text>
      </View>
      <TextBox size={12} bigText={AgreeInfoList[0]} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon name="checkbox-outline" color={'#000'} size={15} />
        <Text style={styles.SingAgreeChkText}>
          [선택] 마케팅 정보 알림 동의
        </Text>
      </View>
      <TextBox size={12} bigText={AgreeInfoList[0]} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name="checkbox-outline" color={'#000'} size={15} />
        <Text style={styles.SingAgreeChkText}>
          [선택] 마케팅 정보 알림 동의
        </Text>
      </View>
      <TextBox size={12} bigText={AgreeInfoList[0]} />
      <View style={{height: 60, marginVertical: 20, alignItems: 'center'}}>
        <InLineButton
          name="확인했습니다."
          bgColor="#FA5C00"
          textColor="#FFF"
          height={60}
          onPress={hideModal}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  AllAgreeChkText: {
    fontSize: 15,
    color: '#333',
    fontFamily: 'GmarketSansTTFMedium',
  },
  SingAgreeChkText: {
    padding: 8,
    fontSize: 13,
    color: '#000',
    fontFamily: 'GmarketSansTTFMedium',
  },
});
const AgreeInfoList = [
  `1. TOUCHCON 서비스 약관
제정일자 : 2021년 11월 30일

제1장 총칙
제1조(목적)
이 약관은 주식회사 토이인터랙티브(이하 “회사”라 합니다)가 리워드콘을 통해 제공하는 터치콘 플랫폼 서비스에 부수하는는 네트워크, 웹사이트, 기타 서비스(이하 “서비스” 라 합니다)의 이용에 대한 회사와 서비스 사용자의 권리ㆍ의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.

제2조(용어의 정의)
① 이 약관에서 사용하는 용어의 정의는 다음과 같습니다. 1. “회사”라 함은 모바일 기기를 통하여 서비스를 제공하는 사업자를 의미합니다. 2. “회원”이란 이 약관에 따라 이용계약을 체결하고, 회사가 제공하는 서비스를 이용하는 자를 의미합니다. 3. “가입신청자”란 회원이 되고자 하는 자를 말합니다. 4. “모바일 기기”란 콘텐츠를 다운로드 받거나 설치하여 사용할 수 있는 기기로서, 휴대폰, 스마트폰, 휴대정보단말기(PDA), 태블릿 등을 의미합니다. 5. “계정정보”란 회원이 아이디로 기재한 이메일 주소, 이름, 생년월일, 성별, 비밀번호, 휴대전화번호, 국가정보 등 회원이 회사에 제공한 정보와 서비스 이용정보(이메일 정보, 지갑 정보 등), 이용요금 결제 정보 등을 통칭합니다. 6. “운영정책”이란 약관을 적용하기 위하여 필요한 사항과 약관으로 서비스 운영정책을 의미합니다, 7. “게시물”이란 회사가 제공하는 서비스를 통해 노출이 되는 회원이 생성한 모든 저작물의 총칭을 의미합니다. 8. “오픈마켓”이란 모바일 기기에서 터치콘 콘텐츠를 설치하고 결제할 수 있도록 구축된 전자상거래 환경을 의미합니다. 9. “애플리케이션”이란 회사가 제공하는 서비스를 이용하기 위하여 모바일 기기를 통해 다운로드 받거나 설치하여 사용하는 프로그램 일체를 의미합니다. 10. “리워드콘 서비스”라 함은 회사가 제공하는 서비스의 하나로서 회원이 모바일 기기에서 실행하는 리워드콘 광고 스캔 및 이에 부수하는 서비스를 의미합니다. 11. 2차적 저작물: 가. 회원이 회사가 제공하는 서비스를 통해 타 회원의 게시물을 수정, 복제, 편집 등 사용하여 생성한 저작물 나. 기타 어느 당사자가 저작권법 제5조(2차적저작물)에 해당하는 방법으로 작성한 창작물 12. “TOC”란 회원이 서비스 이용과정에서 특정 기능을 이용하기 위해 사용되는 디지털 자산을 의미합니다. 13. “TOP”란 애플리케이션 내 결제를 통해 구매할 수 있으며 후원, 선물, 포스팅과 같은 서비스 이용 시 사용할 수 있는 포인트를 의미합니다. 14. “구독 이용권”이라 함은 서비스 내에서 회원들이 일정 금액을 지불함으로써 이용할 수 있는 특정 기능성 상품을 의미합니다. 구독 이용권은 정기적으로 자동결제될 수 있으며, 세부내용은 각각의 서비스 또는 상품 구매 및 결제 페이지 등에 상세히 설명되어 있습니다. ② 이 약관에서 사용하는 용어의 정의는 본 조 제1항에서 정하는 것을 제외하고는 관계 법령 및 서비스별 정책에서 정하는 바에 의하며, 이에 정하지 아니한 것은 일반적인 상관례에 따릅니다.

제3조 (회사정보 등의 제공)
회사는 다음 각 호의 사항을 회원이 알아보기 쉽도록 서비스 내에 표시합니다. 다만, 개인정보처리방침과 약관은 회원이 연결화면을 통하여 볼 수 있도록 할 수 있습니다. 1. 상호 및 대표자의 성명 2. 영업소 소재지 주소(회원의 불만을 처리할 수 있는 곳의 주소를 포함한다) 3. 전화번호, 전자우편주소 4. 사업자 등록번호 5. 개인정보처리방침 6. 서비스 이용약관

제4조 (약관의 효력 및 변경)
① 회사는 이 약관의 내용을 회원이 알 수 있도록 서비스 내 또는 그 연결화면에 게시합니다. 이 경우 이 약관의 내용 중 서비스 중단, 철회, 환급, 계약 해제/해지, 회사의 면책사항 등과 같은 중요한 내용은 굵은 글씨, 색채, 부호 등으로 명확하게 표시하거나 별도의 연결화면 등을 통하여 회원이 알아보기 쉽게 처리합니다. ② 회사가 약관을 개정할 경우에는 적용일자 및 개정내용, 개정사유 등을 명시하여 최소한 그 적용일 7일 이전부터 서비스 내 또는 그 연결화면에 게시하여 회원에게 공지합니다. 다만, 변경된 내용이 회원에게 불리하거나 중대한 사항의 변경인 경우에는 그 적용일 30일 이전까지 본문과 같은 방법으로 공지하고 제34조(회원에 대한 통지) 제1항의 방법으로 회원에게 통지합니다. 이 경우 개정 전 내용과 개정 후 내용을 명확하게 비교하여 회원이 알기 쉽도록 표시합니다. ③ 회사가 약관을 개정할 경우 개정약관 공지 후 개정약관의 적용에 대한 회원의 동의 여부를 확인합니다. 회사는 제2항의 공지 또는 통지를 할 경우 회원이 개정약관에 대해 동의 또는 거부의 의사표시를 하지 않으면 동의한 것으로 볼 수 있다는 내용도 함께 공지 또는 통지를 하며, 회원이 이 약관 시행일까지 거부의 의사표시를 하지 않는다면 개정약관에 동의한 것으로 볼 수 있습니다. 회원이 개정약관에 대해 동의하지 않는 경우 회사 또는 회원은 서비스 이용계약을 해지할 수 있습니다. ④ 회사는 회원이 회사와 이 약관의 내용에 관하여 질의 및 응답을 할 수 있도록 조치를 취합니다. ⑤ 회사는 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「정보통신망이용촉진 및 정보보호 등에 관한법률」, 「콘텐츠산업진흥법」, 「콘텐츠이용자보호지침」 등 관련 법령에 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다. ⑥ 유료서비스를 이용하는 회원이 본 약관의 개정에 동의하지 아니하여 이용계약을 해지하는 경우에는 본 약관의 환불정책을 따릅니다.`,
];
