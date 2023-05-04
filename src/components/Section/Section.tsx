import type { FC, PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from './styles';

interface Props {
  isSmallTitle?: boolean;
  title: string;
}

const Section: FC<PropsWithChildren<Props>> = ({ isSmallTitle, title, children }) => (
  <View>
    <Text style={StyleSheet.compose(styles.base, isSmallTitle ? styles.smallTitle : styles.bigTitle)}>{title}</Text>
    <View>{children}</View>
  </View>
);

export default Section;
