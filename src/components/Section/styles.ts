import { StyleSheet } from 'react-native';

import theme from '../../theme';

export default StyleSheet.create({
  base: {
    color: theme.colors.sectionTitle,
    fontFamily: theme.typography.fontFamily,
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 19.12,
    paddingBottom: 20,
  },
  bigTitle: {
    textTransform: 'uppercase',
  },
  smallTitle: {
    textTransform: 'none',
  },
});
