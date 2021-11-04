import React from 'react';
import {View, Text} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ],
  dayNamesShort: ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = 'fr';

const CalendarTc = () => {
  return (
    <View style={{}}>
      <Calendar
        theme={{
          'stylesheet.calendar.header': {
            dayTextAtIndex0: {
              color: '#FD7F36',
              fontSize: 20,
            },
            dayTextAtIndex1: {
              color: '#FD7F36',
              fontSize: 20,
            },
            dayTextAtIndex2: {
              color: '#FD7F36',
              fontSize: 20,
            },
            dayTextAtIndex3: {
              color: '#FD7F36',
              fontSize: 20,
            },
            dayTextAtIndex4: {
              color: '#FD7F36',
              fontSize: 20,
            },
            dayTextAtIndex5: {
              color: '#FD7F36',
              fontSize: 20,
            },
            dayTextAtIndex6: {
              color: '#FD7F36',
              fontSize: 20,
            },
          },
        }}
      />
    </View>
  );
};

export default CalendarTc;
