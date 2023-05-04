import type { FC } from 'react';
import { FlatList, RefreshControl, TouchableOpacity } from 'react-native';

import type { Product } from '../../controllers';
import ListItem from './ListItem';
import styles from './styles';

interface Props {
  isFetching: boolean;
  onProductPress?(product: Product): void;
  products: Product[];
  refreshProducts(): void;
}

const ProductList: FC<Props> = ({ isFetching, onProductPress, products, refreshProducts }) => (
  <FlatList
    contentContainerStyle={styles.listContainer}
    data={products}
    keyExtractor={({ id }) => id}
    refreshControl={<RefreshControl onRefresh={refreshProducts} refreshing={isFetching} />}
    renderItem={(props) => (
      <TouchableOpacity onPress={() => onProductPress?.(props.item)}>
        <ListItem {...props} />
      </TouchableOpacity>
    )}
  />
);

export default ProductList;
