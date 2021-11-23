import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';
import HeaderBottomLine from '../../../components/HeaderBottomLine';
import Touchable from '../../../components/Touchable';
import {NormalBoldLabel, NormalLabel} from '../../../components/Label';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const MENU_LIST = [
  {
    id: 1,
    img: require('../../../assets/images/enImg1.png'),
  },
  {
    id: 2,
    img: require('../../../assets/images/enImg1.png'),
  },
  {
    id: 3,
    img: require('../../../assets/images/enImg2.png'),
  },
];

const view = ({navigation}) => {
  return (
    <WhiteSafeAreaView>
      <HeaderBottomLine />
      <View style={{flex: 1, paddingTop: 13}}>
        <FlatList
          numColumns={2}
          contentContainerStyle={{paddingBottom: 50}}
          style={{paddingHorizontal: 16}}
          data={MENU_LIST}
          renderItem={({item, index}) => <Menu menu={item} />}
          keyExtractor={(item, idx) => item.id + idx.toString()}
        />
      </View>
      <Touchable style={styles.addBtn}>
        <NormalBoldLabel
          text={'추가'}
          style={{color: '#fff', fontSize: 20, lineHeight: 24}}
        />
      </Touchable>
    </WhiteSafeAreaView>
  );
};

export default view;

const Menu = ({menu}) => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Touchable onPress={() => navigation.navigate('Main')} style={{}}>
          <AntDesign
            name="close"
            size={26}
            color={'#000'}
            style={{
              padding: 4,
              alignSelf: 'center',
              color: '#c4c4c4',
              paddingRight: 16,
            }}
          />
        </Touchable>
      ),
    });
  }, []);
  return (
    <Touchable style={styles.menu} onPress={() => {}}>
      <Image
        style={{
          height: width / 3,
          width: width / 2 - 32,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        }}
        source={menu.img}
        resizeMode={'center'}
      />
    </Touchable>
  );
};

const styles = StyleSheet.create({
  menu: {
    width: width / 2 - 32,
    height: width / 2 - 32,
    marginHorizontal: 8,
    marginVertical: 5,
    borderWidth: 0.8,
    borderRadius: 5,
    borderColor: 'red',
    backgroundColor: '#fff',
  },
  addBtn: {
    marginHorizontal: 24,
    marginBottom: 32,
    paddingVertical: 15,
    backgroundColor: '#FD7F36',
    borderRadius: 53,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
