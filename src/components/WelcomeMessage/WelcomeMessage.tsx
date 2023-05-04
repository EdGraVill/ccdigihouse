import type { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from './styles';

interface Props {
  name: string;
}

const WelcomeMessage: FC<Props> = ({ name }) => (
  <View style={styles.container} testID="WelcomeMessageContainer">
    <Text style={StyleSheet.compose(styles.text, styles.greeting)} testID="WelcomeMessageGreeting">
      Bienvenido de vuelta!
    </Text>
    <Text style={StyleSheet.compose(styles.text, styles.name)} testID="WelcomeMessageName">
      {name}
    </Text>
  </View>
);

export default WelcomeMessage;
