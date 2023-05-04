import { useMemo, useState } from 'react';

import { Filter } from '../../components';
import { type Product } from '../../controllers';

export default function useFilter(products: Product[]) {
  const [filter, setFilter] = useState<Filter>(Filter.All);

  const filteredProducts = useMemo(() => {
    if (filter === Filter.Expenses) {
      return products.filter(({ isRedemption }) => isRedemption);
    }

    if (filter === Filter.Incomes) {
      return products.filter(({ isRedemption }) => !isRedemption);
    }

    return products;
  }, [filter, products]);

  return { filter, filteredProducts, setFilter };
}
