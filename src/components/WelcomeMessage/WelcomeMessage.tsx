import type { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from './styles';

interface Props {
  name: string;
}

const WelcomeMessage: FC<Props> = ({ name }) => (
  <View style={styles.container}>
    <Text style={StyleSheet.compose(styles.text, styles.greeting)}>Bienvenido de vuelta!</Text>
    <Text style={StyleSheet.compose(styles.text, styles.name)}>{name}</Text>
  </View>
);

export default WelcomeMessage;
