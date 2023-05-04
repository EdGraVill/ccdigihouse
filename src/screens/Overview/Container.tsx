import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCallback, useRef } from 'react';

import { ProductsController } from '../../controllers';
import type { RootStackParamList } from '../Router';
import Overview from './Overview';

export default function Container({ navigation, route }: NativeStackScreenProps<RootStackParamList, 'Overview'>) {
  const productId = route.params?.productId ?? '';

  const {
    current: { getProductById },
  } = useRef(new ProductsController());

  const product = getProductById(productId);

  const onAccept = useCallback(() => {
    return navigation.navigate('Home');
  }, [navigation]);

  if (!product) return onAccept();

  return <Overview onAccept={onAccept} product={product} />;
}
