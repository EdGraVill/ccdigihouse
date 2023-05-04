import type { FC, PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from './styles';

interface Props {
  isSmallTitle?: boolean;
  title: string;
}

const Section: FC<PropsWithChildren<Props>> = ({ isSmallTitle, title, children }) => (
  <View testID="SectionContainer">
    <Text
      style={StyleSheet.compose(styles.base, isSmallTitle ? styles.smallTitle : styles.bigTitle)}
      testID="SectionTitle"
    >
      {title}
    </Text>
    <View testID="SectionContent">{children}</View>
  </View>
);

export default Section;
