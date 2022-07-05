import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import HeaderTitle from '../../component/HeaderTitle';
import SwitchBox from '../../component/UI/SwitchBox';
import themeStyle from '../../style/theme.style';
import {heightPercentage} from '../../util/ResponsiveSize';
const initializeState = [
  {
    id: 0,
    name: '지문 및 홍채 인증',
    link: false,
  },
];
export default function BioAuthManage() {
  const [data, setData] = useState(initializeState);
  const onToggleHandler = index => {
    let tmpObj = Object.assign({}, data);
    tmpObj[index].link = !tmpObj[index].link;
    setData(tmpObj);
  };
  return (
    <>
      <HeaderTitle title="지문 및 홍채 인증" prevButton={true} noClose />
      <View style={styles.contanier}>
        {initializeState.map(item => (
          <SwitchBox
            key={item.id}
            data={initializeState}
            check={item.link}
            onToggle={() => onToggleHandler(item.id)}>
            <View style={styles.itemTextBox}>
              <View style={styles.itemMainTextBox}>
                <Text style={styles.itemMainText}>{item.name}</Text>
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
  itemBox: {
    flexDirection: 'row',
    height: heightPercentage(72),
    marginVertical: 10,
  },
  itemImgBox: {
    borderWidth: 1,
    height: heightPercentage(72),
    width: heightPercentage(72),
    borderRadius: 199,
    marginRight: 15,
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
});
