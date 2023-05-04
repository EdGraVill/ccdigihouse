import { StyleSheet } from 'react-native';

import theme from '../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  content: {
    gap: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    paddingTop: 19,
  },
  details: {
    color: theme.colors.black,
    fontFamily: theme.typography.fontFamily,
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 22,
  },
  header: {
    backgroundColor: '#CFD6FF',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  imageContainer: {
    aspectRatio: 1,
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    shadowColor: theme.colors.black,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    width: '100%',
  },
  points: {
    color: theme.colors.black,
    fontFamily: theme.typography.fontFamily,
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 32,
  },
  title: {
    fontFamily: theme.typography.fontFamily,
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 32.76,
    marginBottom: 24,
    marginTop: 60,
    paddingHorizontal: 20,
  },
});
