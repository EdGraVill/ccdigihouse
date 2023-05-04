import type { FC } from 'react';
import { useCallback } from 'react';
import { SafeAreaView, View } from 'react-native';

import { FilterButtons, PointsCard, ProductList, Section, WelcomeMessage } from '../../components';
import type { Product } from '../../controllers';
import getPoints from './getPoints';
import styles from './styles';
import useFilter from './useFilter';

interface Props {
  goToProduct(productId: string): void;
  isFetching: boolean;
  products: Product[];
  refreshProducts(): void;
}

const Home: FC<Props> = ({ goToProduct, isFetching, products, refreshProducts }) => {
  const { filter, filteredProducts, setFilter } = useFilter(products);
  const onProductPress = useCallback((product: Product) => {
    goToProduct(product.id);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <WelcomeMessage name="Eduardo Grajales" />
        <Section title="Tus Puntos">
          <View style={styles.pointsCardContainer}>
            <PointsCard points={getPoints(products)} />
          </View>
        </Section>
        <View style={styles.productsContainer}>
          <Section title="Tus Movimientos">
            <ProductList
              isFetching={isFetching}
              onProductPress={onProductPress}
              products={filteredProducts}
              refreshProducts={refreshProducts}
            />
          </Section>
        </View>
        <FilterButtons filter={filter} setFilter={setFilter} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
