import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeScreen from '../screen/home/HomeScreen';
import MyPageScreen from '../screen/mypage/MyPageScreen';
import QRCamera from '../screen/QRScan/QRCamera';
import QRScanScreen from '../screen/QRScan/QRScanScreen';
import ShopScreen from '../screen/shop/ShopScreen';
import WalletScreen from '../screen/wallet/WalletScreen';
import {heightPercentage, widthPercentage} from '../util/ResponsiveSize';

export default function Home() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />
      <Tab.Navigator
        initialRouteName="HomeScreen"
        activeColor="#000"
        backBehavior="order"
        shifting={true}
        labeled={false}
        barStyle={styles.barStyle}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused, color}) => (
              <View style={styles.TabIcon}>
                {focused ? (
                  <Image
                    style={styles.TabIcons}
                    source={require('../../assets/icons/homeIconOn.png')}
                  />
                ) : (
                  <Image
                    style={styles.TabIcons}
                    source={require('../../assets/icons/homeIconOff.png')}
                  />
                )}
                <Text style={tabIconLableStyles(color).TabIconLabel}>Home</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={WalletScreen}
          options={{
            tabBarIcon: ({focused, color}) => (
              <View style={styles.TabIcon}>
                {focused ? (
                  <Image
                    style={styles.TabIcons}
                    source={require('../../assets/icons/walletIconOn.png')}
                  />
                ) : (
                  <Image
                    style={styles.TabIcons}
                    source={require('../../assets/icons/walletIconOff.png')}
                  />
                )}
                <Text style={tabIconLableStyles(color).TabIconLabel}>
                  Wallet
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="QRScan"
          component={QRCamera}
          options={{
            tabBarLabel: 'Scan',
            tabBarIcon: ({color}) => (
              <Pressable style={styles.TabIcon}>
                <Image
                  style={styles.TabIcons}
                  source={require('../../assets/icons/scanIcon.png')}
                />
                <Text style={tabIconLableStyles(color).TabIconLabel}>Scan</Text>
              </Pressable>
            ),
          }}
        />
        <Tab.Screen
          name="Shop"
          component={ShopScreen}
          options={{
            tabBarLabel: 'Shop',
            tabBarIcon: ({focused, color}) => (
              <View style={styles.TabIcon}>
                {focused ? (
                  <Image
                    style={styles.TabIcons}
                    source={require('../../assets/icons/shopIconOn.png')}
                  />
                ) : (
                  <Image
                    style={styles.TabIcons}
                    source={require('../../assets/icons/shopIconOff.png')}
                  />
                )}
                <Text style={tabIconLableStyles(color).TabIconLabel}>Shop</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="MyPage"
          component={MyPageScreen}
          options={{
            tabBarLabel: 'MyPage',
            tabBarIcon: ({focused, color}) => (
              <View style={styles.TabIcon}>
                {focused ? (
                  <Image
                    style={styles.TabIcons}
                    source={require('../../assets/icons/moreIconOn.png')}
                  />
                ) : (
                  <Image
                    style={styles.TabIcons}
                    source={require('../../assets/icons/moreIconOff.png')}
                  />
                )}
                <Text style={tabIconLableStyles(color).TabIconLabel}>More</Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: '#FFF',
    borderColor: '#E5E5EA',
    borderWidth: 1,
    paddingBottom: 24,
    paddingTop: 5,
    justifyContent: 'center',
    height: heightPercentage(85),
  },
  TabIcon: {
    width: widthPercentage(35),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TabIcons: {
    height: 36,
    resizeMode: 'contain',
  },
});
const tabIconLableStyles = (color: string) =>
  StyleSheet.create({
    // eslint-disable-next-line react-native/no-unused-styles
    TabIconLabel: {
      color: color,
      fontSize: 9,
    },
  });
