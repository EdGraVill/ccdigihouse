import format from 'date-fns/format';
import es from 'date-fns/locale/es';
import type { ListRenderItem } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native';

import type { Product } from '../../controllers';
import styles from './styles';

const ListProduct: ListRenderItem<Product> = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDescription}>
        <Text numberOfLines={1} style={StyleSheet.compose(styles.itemText, styles.itemName)}>
          {item.product}
        </Text>
        <Text numberOfLines={1} style={StyleSheet.compose(styles.itemText, styles.itemCreationDate)}>
          {format(item.createdAt, 'PPP', { locale: es })}
        </Text>
      </View>
      <Text style={styles.itemPoints}>
        {item.isRedemption ? <Text style={styles.itemExpense}>-</Text> : <Text style={styles.itemIncome}>+</Text>}
        {item.points.toLocaleString('es-MX')}
      </Text>
      <Text style={styles.itemArrow}>{'>'}</Text>
    </View>
  );
};

export default ListProduct;
