import { useCallback, useEffect, useMemo, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

import Button from '../Button';
import styles from './styles';
import { Filter } from './types';

interface Props {
  filter: Filter;
  setFilter(filter: Filter): void;
}

const FilterButtons: React.FC<Props> = ({ filter, setFilter }) => {
  const { current: incomeButtonSize } = useRef(new Animated.Value(1));
  const { current: expenseButtonSize } = useRef(new Animated.Value(1));

  useEffect(() => {
    incomeButtonSize.stopAnimation();
    expenseButtonSize.stopAnimation();

    if (filter === Filter.All) {
      Animated.parallel([
        Animated.spring(incomeButtonSize, { toValue: 1, useNativeDriver: false }),
        Animated.spring(expenseButtonSize, { toValue: 1, useNativeDriver: false }),
      ]).start();
    } else if (filter === Filter.Expenses) {
      Animated.parallel([
        Animated.spring(incomeButtonSize, { toValue: 0, useNativeDriver: false }),
        Animated.spring(expenseButtonSize, { toValue: 1, useNativeDriver: false }),
      ]).start();
    } else if (filter === Filter.Incomes) {
      Animated.parallel([
        Animated.spring(incomeButtonSize, { toValue: 1, useNativeDriver: false }),
        Animated.spring(expenseButtonSize, { toValue: 0, useNativeDriver: false }),
      ]).start();
    }
  }, [filter]);

  const onPress = useCallback(
    (filterToSet: Filter) => () => {
      setFilter(filterToSet);
    },
    [setFilter],
  );

  const incomeButtonText = useMemo(() => {
    if (filter === Filter.All) {
      return 'Ganados';
    }

    if (filter === Filter.Incomes) {
      return 'Todos';
    }

    return '';
  }, [filter]);

  const expenseButtonText = useMemo(() => {
    if (filter === Filter.All) {
      return 'Canjeados';
    }

    if (filter === Filter.Expenses) {
      return 'Todos';
    }

    return '';
  }, [filter]);

  return (
    <View style={StyleSheet.compose(styles.container, { gap: filter === Filter.All ? 15 : 0 })}>
      <Button
        onPress={onPress(filter === Filter.All ? Filter.Incomes : Filter.All)}
        style={{ flexGrow: incomeButtonSize, opacity: incomeButtonSize }}
        text={incomeButtonText}
      />
      <Button
        onPress={onPress(filter === Filter.All ? Filter.Expenses : Filter.All)}
        style={{ flexGrow: expenseButtonSize, opacity: expenseButtonSize }}
        text={expenseButtonText}
      />
    </View>
  );
};

export default FilterButtons;
