import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCallback, useEffect, useRef, useState } from 'react';

import { type Product, ProductsController } from '../../controllers';
import type { RootStackParamList } from '../Router';
import Home from './Home';

export default function Container({ navigation }: NativeStackScreenProps<RootStackParamList, 'Home'>) {
  const {
    current: { abort, fetchProducts },
  } = useRef(new ProductsController());
  const [products, setProducts] = useState<Product[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const refreshProducts = useCallback(() => {
    setIsFetching(true);
    fetchProducts()
      .then(setProducts)
      .finally(() => setIsFetching(false));
  }, []);

  useEffect(() => {
    refreshProducts();

    return () => {
      abort();
    };
  }, []);

  const goToProduct = useCallback(
    (productId: Product['id']) => {
      navigation.navigate('Overview', { productId });
    },
    [navigation],
  );

  return (
    <Home goToProduct={goToProduct} isFetching={isFetching} products={products} refreshProducts={refreshProducts} />
  );
}
