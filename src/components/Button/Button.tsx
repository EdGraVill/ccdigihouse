import type { FC } from 'react';
import type { ViewStyle } from 'react-native';
import { Animated, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

interface Props {
  onPress?(): void;
  style?: Animated.WithAnimatedObject<ViewStyle>;
  text: string;
}

const Button: FC<Props> = ({ onPress, style, text }) => (
  <Animated.View style={[styles.touchable, style]} testID="ButtonContainer">
    <TouchableOpacity onPress={onPress} style={styles.touchable} testID="ButtonTouchable">
      <View style={styles.container} testID="ButtonView">
        <Text style={styles.text} testID="ButtonText">
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  </Animated.View>
);

export default Button;
