import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {Calendar, CalendarList, LocaleConfig} from 'react-native-calendars';
import {TEMP_CHECKED_DATE} from '../../../mock/dummy';
import {InLineButton} from '../../component/Buttons';
import {LargeButton} from '../../component/UI/button';
import themeStyle from '../../style/theme.style';

export default function DailyCheck() {
  LocaleConfig.locales['fr'] = {
    monthNames: [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ],
    dayNames: [
      'Dimanche',
      'Lundi',
      'Mardi',
      'Mercredi',
      'Jeudi',
      'Vendredi',
      'Samedi',
    ],
    dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  };
  LocaleConfig.defaultLocale = 'fr';
  const [chkDate, setChkDate] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const dateHandler = (data: any) => {
    let arr: any[] = [];
    data.map((item: any) => arr.push(item.date));
    //@ts-ignore
    setChkDate(arr);
    setLoading(true);
  };
  useEffect(() => {
    dateHandler(TEMP_CHECKED_DATE);
    console.log(chkDate);
    setLoading(false);
  }, []);
  let chkedDate: any = {};

  chkDate.forEach(day => {
    chkedDate[day] = {
      selected: true,
      selectedColor: '#FCAD80',
    };
  });
  return (
    <View
      style={{
        padding: 25,
        backgroundColor: '#EDEDED',
        flex: 1,
        justifyContent: 'space-around',
      }}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 30,
          }}>
          <Text style={styles.titleText}>출석현황:</Text>
          <Text style={{color: themeStyle.Primary, fontSize: 17}}>{` 1`}</Text>
          <Text style={styles.titleText}>일</Text>
        </View>
        {!isLoading && (
          <Calendar
            style={{
              borderRadius: 15,
            }}
            headerStyle={{
              borderBottomWidth: 1,
              borderColor: '#EDEDED',
            }}
            onDayPress={() => Alert.alert('aa')}
            markedDates={chkedDate}
            monthFormat={`M` + `월`}
            theme={{
              'stylesheet.calendar.header': {
                //@ts-ignore
                header: {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderColor: '#EDEDED',
                },
                dayHeader: {
                  color: '#000',
                  fontWeight: '500',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 12,
                  marginTop: 6,
                },
              },
              todayBackgroundColor: themeStyle.Primary,
              todayTextColor: '#FFF',
              textMonthFontFamily: themeStyle.FONT_BOLD,
              textMonthFontSize: 20,
              arrowColor: '#CCC',
              dayTextColor: '#000',
              textDayFontFamily: themeStyle.FONT_REGULAR,
              textDayStyle: {
                textAlign: 'center',
                lineHeight: 26,
              },
              textDayFontSize: 13,
              monthTextColor: '#000',
            }}
          />
        )}
      </View>

      <View style={{height: 60}}>
        <LargeButton color={themeStyle.Primary} title="출석하기" />
        {/* <LargeButton
          fontColor={themeStyle.PrimaryActive}
          color={themeStyle.PrimarySelected}
          title="출석완료"
        /> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  titleText: {
    color: '#000',
    fontFamily: themeStyle.FONT_REGULAR,
    fontSize: 17,
  },
});
