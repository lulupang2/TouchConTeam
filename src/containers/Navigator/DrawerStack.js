import RightDrawer from '../Drawer/RightDrawer';
import Main from '../Mainflow/Main/view';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const DrawerNavigator = createDrawerNavigator();

export const DrawerStack = () => {
  return (
    <DrawerNavigator.Navigator
      initialRouteName="Main"
      drawerContent={props => <RightDrawer />}
    >
      <DrawerNavigator.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
    </DrawerNavigator.Navigator>
  );
};
