import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import themeStyle from '../../style/theme.style';
import {setComma} from '../../util/comma';
import {heightPercentage} from '../../util/ResponsiveSize';
import ShadowBox from '../UI/shadowBox';
interface IProps {
  data: string;
  selected: (data: any) => void;
  category: string;
}
export default function InputPrice({data, selected, category}: IProps) {
  return (
    <View style={styles.topMargin}>
      <View style={styles.Container}>
        <ShadowBox style={styles.rowBox}>
          <View style={styles.inputBox}>
            <SelectDropdown
              data={['TOP', 'TOC']}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
              renderDropdownIcon={isOpened => {
                return (
                  <FontAwesome
                    name={isOpened ? 'caret-up' : 'caret-down'}
                    color={'#666'}
                    size={18}
                  />
                );
              }}
              onSelect={selectedItem => {
                selected(selectedItem);
              }}
              defaultValueByIndex={0}
              buttonTextAfterSelection={selectedItem => {
                return selectedItem;
              }}
              rowTextForSelection={item => {
                return item;
              }}
            />
          </View>
          <View style={styles.priceBox}>
            <Text style={styles.coinInput}>{setComma(data)}</Text>
            <Text style={styles.KRWPrice}>
              {'\u{20A9}'}
              {setComma(data)}
            </Text>
          </View>
        </ShadowBox>
      </View>
      <View style={styles.itemCenter}>
        <MaterialCommunityIcons name="equal" color={'#B2B2B2'} size={32} />
      </View>
      <View style={styles.Container}>
        <ShadowBox style={styles.rowBox}>
          <View style={styles.inputBox}>
            <Text style={styles.dropdown2BtnTxtStyle}>
              {category === 'TOP' ? 'TOC' : 'TOP'}
            </Text>
            <FontAwesome name={'caret-down'} color={'#C7C7CC'} size={18} />
          </View>
          <View style={styles.priceBox}>
            <Text style={styles.coinInput}>{setComma(data)}</Text>
            <Text style={styles.KRWPrice}>
              {'\u{20A9}'}
              {setComma(data)}
            </Text>
          </View>
        </ShadowBox>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  topMargin: {marginTop: heightPercentage(30)},
  Container: {flexDirection: 'row', paddingHorizontal: 20},
  dropdown1BtnStyle: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    flex: 1,
  },
  itemCenter: {
    alignItems: 'center',
  },
  rowBox: {flexDirection: 'row', flex: 1, alignItems: 'center'},
  dropdown1BtnTxtStyle: {
    color: '#666',
    textAlign: 'auto',
    fontFamily: themeStyle.FONT_REGULAR,
    fontSize: 15,
  },
  dropdown2BtnTxtStyle: {
    color: '#C7C7CC',
    textAlign: 'left',
    fontFamily: themeStyle.FONT_REGULAR,
    fontSize: 15,
    marginRight: 7,
  },

  dropdown1DropdownStyle: {backgroundColor: '#FFF'},
  dropdown1RowStyle: {backgroundColor: '#FFF'},
  dropdown1RowTxtStyle: {
    color: '#666',
    textAlign: 'left',
    fontFamily: themeStyle.FONT_REGULAR,
  },
  inputBox: {
    flex: 1,
    justifyContent: 'center',
    height: 80,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinInput: {
    fontFamily: themeStyle.FONT_REGULAR,
    textAlign: 'right',
    fontSize: 22,
    color: '#000',
    backgroundColor: '#FFF',
    width: '100%',
  },
  KRWPrice: {
    fontFamily: themeStyle.FONT_REGULAR,
    fontSize: 10,
    color: '#999',
  },
  priceBox: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 2,
    marginRight: 20,
  },
});
