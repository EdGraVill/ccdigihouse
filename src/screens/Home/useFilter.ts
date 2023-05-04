import { useMemo, useState } from 'react';

import { Filter } from '../../components';
import { type Product } from '../../controllers';

export default function useFilter(products: Product[]) {
  const [filter, setFilter] = useState<Filter>(Filter.All);

  // This will cache the filtered products in memory
  const filteredByExpenses = useMemo(() => products.filter(({ isRedemption }) => isRedemption), [products]);
  const filteredByIncomes = useMemo(() => products.filter(({ isRedemption }) => isRedemption), [products]);

  const filterMap: Record<Filter, Product[]> = {
    [Filter.All]: products,
    [Filter.Expenses]: filteredByExpenses,
    [Filter.Incomes]: filteredByIncomes,
  };

  return { filter, filteredProducts: filterMap[filter], setFilter };
}
