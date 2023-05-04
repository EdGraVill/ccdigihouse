import type { Product } from '../../controllers';

export default function getPoints(products: Product[]): number {
  return products.reduce((acc, product) => {
    if (product.isRedemption) {
      return acc - product.points;
    }

    return acc + product.points;
  }, 0);
}
