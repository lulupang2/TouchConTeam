import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DataTable} from 'react-native-paper';
import themeStyle from '../../style/theme.style';
import {setComma} from '../../util/comma';

export default function StackingInterest() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleBox}>
          <Text style={styles.titleText}>이자 지급계산표</Text>
        </View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>분기</DataTable.Title>
            <DataTable.Title>모집 기간</DataTable.Title>
            <DataTable.Title>지급 이자</DataTable.Title>
            <DataTable.Title>지급 이자</DataTable.Title>
            <DataTable.Title>지급일</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row>
            <DataTable.Cell>1</DataTable.Cell>
            <DataTable.Cell>01.01 -01.15</DataTable.Cell>
            <DataTable.Cell>{setComma('560000')}</DataTable.Cell>
            <DataTable.Cell>{setComma('8000000')}</DataTable.Cell>
            <DataTable.Cell>04.10</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Header>
            <DataTable.Title>Total</DataTable.Title>
            <DataTable.Title>{setComma('2475000')}</DataTable.Title>
            <DataTable.Title>{setComma('35357140')}</DataTable.Title>
          </DataTable.Header>
        </DataTable>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 30,
  },
  titleBox: {
    width: '100%',
    alignItems: 'flex-start',
  },
  titleText: {
    color: '#FF90A5',
    fontFamily: themeStyle.FONT_BOLD,
    fontSize: 13,
  },
});
