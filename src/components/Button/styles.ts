import { StyleSheet } from 'react-native';

import theme from '../../theme';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
  },
  text: {
    color: theme.colors.white,
    fontFamily: theme.typography.fontFamily,
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 21.86,
  },
  touchable: {
    flex: 1,
  },
});
