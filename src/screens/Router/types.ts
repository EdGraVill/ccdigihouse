import type { Product } from '../../controllers';

export type RootStackParamList = {
  Home: undefined;
  Overview?: {
    productId: Product['id'];
  };
};
