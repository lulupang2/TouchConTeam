import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useLayoutEffect, useRef} from 'react';
import {Animated} from 'react-native';

type HeaderTitleProps = {
  title?: string | React.ReactNode;
  triggerPoint: number;
};
export default function useChangeHeader({
  title,
  triggerPoint,
}: HeaderTitleProps) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  useLayoutEffect(() => {
    if (title) {
      navigation.setOptions({
        title,
      });
    }
  }, [navigation, title]);

  useEffect(() => {
    navigation.setOptions({
      headerStyleInterpolator: () => {
        const opacity = scrollY.interpolate({
          inputRange: [triggerPoint, triggerPoint + 20],
          outputRange: [0, 1],
        });

        return {
          titleStyle: {opacity},
        };
      },
    });
  }, [navigation, scrollY]);
  return {scrollY};
}
