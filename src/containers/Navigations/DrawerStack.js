import RightDrawer from '../../components/RightDrawer';
import Main from '../Mainflow/Main/view';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createDrawerNavigator();

export const DrawerStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      drawerPosition="right"
      screenOptions={{
        drawerPosition: 'right',
        // drawerHideStatusBarOnOpen: true,
        drawerStyle: {
          width: '73%',
          drawerInactiveBackgroundColor: 'rgba(0,0,0,0.45)',
        },
      }}
      //
      // defaultStatus="close"
      // screenOptions={{
      //   drawerPosition: 'right',
      //   // drawerType: 'front',
      // }}
      drawerContent={props => <RightDrawer />}
    >
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
