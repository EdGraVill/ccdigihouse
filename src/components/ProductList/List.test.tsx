import { fireEvent, render, screen } from '@testing-library/react-native';

import type { Product } from '../../controllers';
import ProductList from './List';

const mockProducts: Product[] = [
  {
    createdAt: new Date(),
    id: '1',
    image: 'https://picsum.photos/200/300',
    isRedemption: false,
    points: 100,
    product: 'Product 1',
  },
  {
    createdAt: new Date(),
    id: '2',
    image: 'https://picsum.photos/200/300',
    isRedemption: true,
    points: 200,
    product: 'Product 2',
  },
  {
    createdAt: new Date(),
    id: '3',
    image: 'https://picsum.photos/200/300',
    isRedemption: false,
    points: 300,
    product: 'Product 3',
  },
];

describe('List', () => {
  it('Should render as many items as passed', async () => {
    const refreshProducts = jest.fn();

    render(<ProductList isFetching={false} products={mockProducts} refreshProducts={refreshProducts} />);

    const items = await screen.findAllByTestId('ItemContainer');

    expect(items).toHaveLength(mockProducts.length);
  });

  it('Should call refreshProducts when refreshing', async () => {
    const refreshProducts = jest.fn();

    render(<ProductList isFetching={false} products={mockProducts} refreshProducts={refreshProducts} />);

    const list = await screen.findByTestId('List');
    expect(list).toBeDefined();

    list.props.refreshControl.props.onRefresh();

    expect(refreshProducts).toHaveBeenCalled();
  });

  it('Should return the pressed element', async () => {
    const refreshProducts = jest.fn();
    const onProductPress = jest.fn();

    render(
      <ProductList
        isFetching={false}
        onProductPress={onProductPress}
        products={mockProducts}
        refreshProducts={refreshProducts}
      />,
    );

    const [firstItem] = await screen.findAllByTestId('ItemTouchable');

    fireEvent.press(firstItem);
    expect(onProductPress).toHaveBeenCalledWith(mockProducts[0]);
  });
});
