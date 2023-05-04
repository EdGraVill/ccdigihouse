import { StyleSheet } from 'react-native';

import theme from '../../theme';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 20,
    height: 143,
    justifyContent: 'center',
    maxWidth: 286,
    position: 'relative',
    shadowColor: '#000000',
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    width: '100%',
  },
  month: {
    fontSize: 16,
    fontWeight: '800',
    left: 19,
    lineHeight: 21.86,
    position: 'absolute',
    textTransform: 'capitalize',
    top: 17,
  },
  points: {
    fontSize: 32,
    fontWeight: '800',
    lineHeight: 43.71,
  },
  text: {
    color: theme.colors.white,
    fontFamily: theme.typography.fontFamily,
  },
});
