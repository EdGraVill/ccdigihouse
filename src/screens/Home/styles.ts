import { StyleSheet } from 'react-native';

import theme from '../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
    gap: 20,
    padding: 20,
  },
  pointsCardContainer: {
    alignItems: 'center',
  },
  productsContainer: {
    flex: 1,
    marginBottom: 80,
  },
});
