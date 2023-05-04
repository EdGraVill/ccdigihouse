import type { FC } from 'react';
import { useCallback } from 'react';
import type { ListRenderItem } from 'react-native';
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

const ProductList: FC<Props> = ({ isFetching, onProductPress, products, refreshProducts }) => {
  // This will help to avoid creating a new function on every item render
  const renderItem = useCallback<ListRenderItem<Product>>(
    (props) => (
      <TouchableOpacity onPress={() => onProductPress?.(props.item)}>
        <ListItem {...props} />
      </TouchableOpacity>
    ),
    [],
  );

  const keyExtractor = useCallback(({ id }: Product) => id, []);

  return (
    <FlatList
      contentContainerStyle={styles.listContainer}
      data={products}
      initialNumToRender={10}
      keyExtractor={keyExtractor}
      refreshControl={<RefreshControl onRefresh={refreshProducts} refreshing={isFetching} />}
      renderItem={renderItem}
    />
  );
};

export default ProductList;
