import format from 'date-fns/format';
import es from 'date-fns/locale/es';
import type { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from './styles';

const currentMonth = format(new Date(), 'MMMM', { locale: es });

interface Props {
  points: number;
}

const PointsCard: FC<Props> = ({ points }) => (
  <View style={styles.container} testID="PointsCardContainer">
    <Text style={StyleSheet.compose(styles.text, styles.points)} testID="PointsCardPoints">
      {points.toLocaleString('es-MX', { minimumFractionDigits: 2 })} pts
    </Text>
    <Text style={StyleSheet.compose(styles.text, styles.month)} testID="PointsCardMonth">
      {currentMonth}
    </Text>
  </View>
);

export default PointsCard;
