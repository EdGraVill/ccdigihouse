import { StyleSheet } from 'react-native';

import theme from '../../theme';

export default StyleSheet.create({
  item: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 8,
  },
  itemArrow: {
    fontFamily: theme.typography.fontFamily,
    fontSize: 20,
    fontWeight: '800',
    marginLeft: 15,
  },
  itemCreationDate: {
    fontSize: 12,
    lineHeight: 16.39,
  },
  itemDescription: {
    flex: 1,
  },
  itemExpense: {
    color: theme.colors.productExpense,
  },
  itemImage: {
    borderRadius: 10,
    height: 55,
    marginRight: 11,
    width: 55,
  },
  itemIncome: {
    color: theme.colors.productIncome,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 19.12,
  },
  itemPoints: {
    color: theme.colors.productText,
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 21.86,
  },
  itemText: {
    color: theme.colors.productText,
    fontFamily: theme.typography.fontFamily,
  },
  listContainer: {
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});
