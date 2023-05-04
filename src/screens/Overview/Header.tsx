import type { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useRef } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { ProductsController } from '../../controllers';
import type { RootStackParamList } from '../Router';
import styles from './styles';

const Header = ({ route }: NativeStackHeaderProps) => {
  const productId = (route.params as RootStackParamList['Overview'])?.productId ?? '';

  const {
    current: { getProductById },
  } = useRef(new ProductsController());

  const product = getProductById(productId);

  if (!product) return null;

  return (
    <View style={styles.header}>
      <SafeAreaView>
        <Text style={styles.title}>{product.product}</Text>
      </SafeAreaView>
    </View>
  );
};

export default Header;
