import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeaderTitle from '../../component/HeaderTitle';
import SwitchBox from '../../component/UI/SwitchBox';
import themeStyle from '../../style/theme.style';
const initializeState = [
  {
    id: 0,
    name: '마케팅 정보 알림',
    link: false,
  },
];
export default function MarketManage() {
  const [data, setData] = useState(initializeState);
  const onToggleHandler = index => {
    let tmpObj = Object.assign({}, data);
    tmpObj[index].link = !tmpObj[index].link;
    setData(tmpObj);
  };
  return (
    <>
      <HeaderTitle title="마케팅 정보 알림" prevButton={true} noClose />
      <View style={styles.contanier}>
        {initializeState.map(item => (
          <SwitchBox
            key={item.id}
            check={item.link}
            onToggle={() => onToggleHandler(item.id)}>
            <View style={styles.itemTextBox}>
              <View style={styles.itemMainTextBox}>
                <Text style={styles.itemMainText}>{item.name}</Text>
              </View>
              <View style={styles.itemSubTextBox}>
                <Text style={styles.itemSubText}>
                  {item.link ? '동의함' : '거부'}
                </Text>
              </View>
            </View>
          </SwitchBox>
        ))}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  itemTextBox: {
    flex: 4,
    height: 72,
    justifyContent: 'center',
  },
  itemMainTextBox: {},
  itemMainText: {
    color: '#000',
    fontFamily: themeStyle.FONT_REGULAR,
    fontSize: 17,
  },

  itemSubTextBox: {},
  itemSubText: {
    color: '#FA5C00',
    fontFamily: themeStyle.FONT_REGULAR,
    fontSize: 13,
  },
});
