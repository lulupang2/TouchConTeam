import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeaderTitle from '../../component/HeaderTitle';
import themeStyle from '../../style/theme.style';

export default function StackingStatus() {
  const navigation = useNavigation();

  const onClose = () => {
    //@ts-ignore
    navigation.navigate('Wallet');
  };
  return (
    <>
      <HeaderTitle
        title="내 스테이킹 현황"
        onPress={onClose}
        prevButton={false}
      />
      <View style={styles.container}>
        <View style={styles.releaseDate}>
          <Text style={styles.releaseDateText}>해제 일자</Text>
          <Text style={styles.releaseDateText}>2022.04.27</Text>
        </View>
        <View style={styles.statusContainer}>
          <View style={styles.statusBox}>
            <Text style={styles.releaseDateText}>신청 일자</Text>
            <Text style={styles.releaseDateText}>2022.04.01</Text>
          </View>
          <View style={styles.statusBox}>
            <Text style={styles.releaseDateText}>신청 수량</Text>
            <Text style={styles.releaseDateText}>{'12,000'} TOC</Text>
          </View>
          <View style={styles.statusBox}>
            <Text style={styles.releaseDateText}>예치 이자</Text>
            <Text style={styles.pointText}>{'500'} TOC</Text>
          </View>
        </View>
        <View style={styles.divide}>
          <View style={styles.statusBox}>
            <Text style={styles.releaseDateText}>만기시 수량</Text>
            <Text style={styles.pointBoldText}>{'12,500'} TOC</Text>
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    padding: 30,
  },
  statusContainer: {width: '100%', height: 100, marginTop: 30},
  releaseDate: {
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 4,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
    width: '100%',
  },
  releaseDateText: {
    color: '#666',
    fontFamily: themeStyle.FONT_REGULAR,
  },
  pointText: {
    color: themeStyle.Primary,
    fontFamily: themeStyle.FONT_REGULAR,
  },
  pointBoldText: {
    color: themeStyle.Primary,
    fontFamily: themeStyle.FONT_BOLD,
  },
  statusBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
  },
  divide: {
    flexDirection: 'row',
    borderStyle: 'dashed',
    borderTopWidth: 1,
    paddingTop: 15,
  },
});
