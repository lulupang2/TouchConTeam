import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import HeaderTitle from '../../../component/HeaderTitle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function MarketingInfoTerms() {
  const [termsDate, setTermsDate] = React.useState();
  const navigation = useNavigation();
  const onNavigation = () => {
    navigation.navigate('TermsManage');
  };
  return (
    <>
      <HeaderTitle title="마케팅 정보 알림" onPress={onNavigation} />
      <View style={styles.flex}>
        <SelectDropdown
          data={['2021.11.30']}
          onSelect={selectedItem => {
            setTermsDate(selectedItem);
          }}
          buttonStyle={{
            backgroundColor: '#FFF',
            borderWidth: 1,
            borderColor: '#F2F2F7',
            borderRadius: 6,
            flex: 1,
          }}
          buttonTextStyle={{fontSize: 15}}
          defaultValueByIndex={0}
          buttonTextAfterSelection={selectedItem => {
            return selectedItem;
          }}
          rowTextForSelection={item => {
            return item;
          }}
          renderDropdownIcon={isOpened => {
            return (
              <FontAwesome
                name={isOpened ? 'caret-up' : 'caret-down'}
                color={'#666'}
                size={18}
              />
            );
          }}
        />
      </View>
      <View style={{flex: 15, paddingHorizontal: 20, backgroundColor: '#FFF'}}>
        <ScrollView style={styles.termsDetail}>
          <Text style={styles.termsText}>
            {
              '언제 어디서나 스캔하자 터치콘 팀입니다.\n\n카오리온이 터치콘이 실시하는 광고스캔 랜덤 보상의 첫 광고주로 선정되었습니다. 카오리온은 1990년 설립된 천연화장품의 원조 업체로서 유럽을 비롯한 동구권에서 높은 품질을 인정 받고 있습니다.\n \n터치콘은 카오리온의 핵심 상품에 스마트 큐알을 동봉하여 랜덤보상을 실시하게 됩니다.\n감사합니다.\n\n터치콘 드림\n\n언제 어디서나 스캔하자 터치콘 팀입니다.\n\n카오리온이 터치콘이 실시하는 광고스캔 랜덤 보상의 첫 광고주로 선정되었습니다. 카오리온은 1990년 설립된 천연화장품의 원조 업체로서 유럽을 비롯한 동구권에서 높은 품질을 인정 받고 있습니다.\n \n 터치콘은 카오리온의 핵심 상품에 스마트 큐알을 동봉하여 \n랜덤보상을 실시하게 됩니다.\n감사합니다.\n\n터치콘 드림'
            }
          </Text>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  termsDetail: {
    backgroundColor: '#FFF',
    paddingBottom: 20,
    flex: 1,
  },
  termsTitleText: {
    color: '#666',
    fontSize: 16,
  },

  termsText: {
    color: '#666',
  },
});
