import { StyleSheet } from 'react-native';

import theme from '../../theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 20,
    fontWeight: '800',
    lineHeight: 27.32,
  },
  name: {
    fontSize: 16,
    lineHeight: 21.86,
  },
  text: {
    color: theme.colors.text,
    fontFamily: theme.typography.fontFamily,
  },
});
