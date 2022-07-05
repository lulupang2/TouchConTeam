import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import HeaderTitle from '../../component/HeaderTitle';
import SwitchBox from '../../component/UI/SwitchBox';
import themeStyle from '../../style/theme.style';
import {heightPercentage} from '../../util/ResponsiveSize';
const initializeState = [
  {
    id: 0,
    name: '상호명',
    subname: '서브',
    link: false,
  },
  {
    id: 1,
    name: '상호명',
    subname: '서브',
    link: false,
  },
];
export default function LinkManage() {
  const [data, setData] = useState(initializeState);
  const onToggleHandler = index => {
    let tmpObj = Object.assign({}, data);
    tmpObj[index].link = !tmpObj[index].link;
    setData(tmpObj);
  };
  return (
    <>
      <HeaderTitle title="터치콘 연결 관리" prevButton={true} noClose />
      <View style={styles.contanier}>
        {initializeState.map(item => (
          <SwitchBox
            key={item.id}
            data={initializeState}
            check={item.link}
            onToggle={() => onToggleHandler(item.id)}>
            <View style={styles.itemImgBox}>
              <Image style={styles.fullImg} source={{}} />
            </View>
            <View style={styles.itemTextBox}>
              <View style={styles.itemMainTextBox}>
                <Text style={styles.itemMainText}>{item.name}</Text>
              </View>
              <View style={styles.itemSubTextBox}>
                <Text style={styles.itemSubText}>{item.subname}</Text>
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

  itemSubTextBox: {},
  itemSubText: {
    color: '#666',
    fontFamily: themeStyle.FONT_REGULAR,
    fontSize: 13,
  },
  fullImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
