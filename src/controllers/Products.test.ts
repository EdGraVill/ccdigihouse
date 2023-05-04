import type { RawProduct } from './Products';
import ProductController from './Products';
import httpClient from './httpClient';

jest.mock('./httpClient');

describe('Products', () => {
  beforeEach(() => {
    const productController = new ProductController();

    productController.clean();
  });

  it('Should call API call', async () => {
    const getFn = jest.fn(() => Promise.resolve({ data: [] }));
    (httpClient.get as jest.MockedFunction<typeof httpClient.get>).mockImplementation(getFn);

    const productController = new ProductController();

    await productController.fetchProducts();

    expect(getFn).toHaveBeenCalled();
  });

  it('Should return products', async () => {
    const data: RawProduct[] = [
      {
        createdAt: new Date().toISOString(),
        id: '1',
        image: '',
        is_redemption: false,
        points: 1,
        product: 'Product 1',
      },
    ];
    const getFn = jest.fn(() => Promise.resolve({ data }));
    (httpClient.get as jest.MockedFunction<typeof httpClient.get>).mockImplementation(getFn);

    const productController = new ProductController();

    const received = await productController.fetchProducts();

    expect(getFn).toHaveBeenCalled();
    expect(received).toEqual(ProductController.parseProducts(data));
  });

  it('Should return an empty list if API call fails', async () => {
    const getFn = jest.fn(() => Promise.reject());
    (httpClient.get as jest.MockedFunction<typeof httpClient.get>).mockImplementation(getFn);

    const productController = new ProductController();

    const received = await productController.fetchProducts();

    expect(getFn).toHaveBeenCalled();
    expect(received).toEqual([]);
  });

  it('Should return cached products if last fetch was less than given seconds', async () => {
    const data: RawProduct[] = [
      {
        createdAt: new Date().toISOString(),
        id: '1',
        image: '',
        is_redemption: false,
        points: 1,
        product: 'Product 1',
      },
    ];
    const getFn = jest.fn(() => Promise.resolve({ data }));
    (httpClient.get as jest.MockedFunction<typeof httpClient.get>).mockImplementation(getFn);

    const productController = new ProductController();

    await productController.fetchProducts();
    await productController.fetchProducts();

    expect(getFn).toHaveBeenCalledTimes(1);
  });

  it('Should send new products via onProductsChange and stop it when the listener is removed', async () => {
    const data: RawProduct[] = [
      {
        createdAt: new Date().toISOString(),
        id: '1',
        image: '',
        is_redemption: false,
        points: 1,
        product: 'Product 1',
      },
    ];
    const getFn = jest.fn(() => Promise.resolve({ data }));
    (httpClient.get as jest.MockedFunction<typeof httpClient.get>).mockImplementation(getFn);

    const productController = new ProductController();

    const callback = jest.fn();
    const removeListener = productController.onProductsChange(callback);

    await productController.fetchProducts();

    expect(callback).toHaveBeenCalledWith(ProductController.parseProducts(data));

    removeListener();
    productController.clean();
    await productController.fetchProducts();

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('Should return a element by id', async () => {
    const data: RawProduct[] = [
      {
        createdAt: new Date().toISOString(),
        id: '1',
        image: '',
        is_redemption: false,
        points: 1,
        product: 'Product 1',
      },
    ];
    const getFn = jest.fn(() => Promise.resolve({ data }));
    (httpClient.get as jest.MockedFunction<typeof httpClient.get>).mockImplementation(getFn);

    const productController = new ProductController();

    await productController.fetchProducts();

    expect(productController.getProductById('1')).toEqual(ProductController.parseProducts(data)[0]);
  });

  it('Should call AbortController signal when aborting', async () => {
    const abortFn = jest.fn();
    const abortController = {
      abort: abortFn,
      signal: 'signal',
    };

    const getFn = jest.fn(() => Promise.resolve({ data: [] }));
    (httpClient.get as jest.MockedFunction<typeof httpClient.get>).mockImplementation(getFn);

    const productController = new ProductController();
    await productController.fetchProducts();

    // @ts-ignore
    productController.abortController = abortController;

    productController.abort();

    expect(abortFn).toHaveBeenCalled();
  });

  it('Should only add items with new id', async () => {
    const call1: RawProduct[] = [
      {
        createdAt: new Date().toISOString(),
        id: '1',
        image: '',
        is_redemption: false,
        points: 1,
        product: 'Product 1',
      },
    ];
    const call2: RawProduct[] = [
      {
        createdAt: new Date().toISOString(),
        id: '1',
        image: '',
        is_redemption: false,
        points: 1,
        product: 'Product 1',
      },
      {
        createdAt: new Date().toISOString(),
        id: '2',
        image: '',
        is_redemption: false,
        points: 2,
        product: 'Product 2',
      },
    ];
    const call1Fn = jest.fn(() => Promise.resolve({ data: call1 }));
    const call2Fn = jest.fn(() => Promise.resolve({ data: call2 }));
    (httpClient.get as jest.MockedFunction<typeof httpClient.get>).mockImplementation(call1Fn);

    const productController = new ProductController(0);

    const call1Products = await productController.fetchProducts();

    expect(call1Products).toEqual(ProductController.parseProducts(call1));

    (httpClient.get as jest.MockedFunction<typeof httpClient.get>).mockImplementation(call2Fn);

    const call2Products = await productController.fetchProducts();

    expect(call2Products).toEqual(ProductController.parseProducts(call2));
  });
});
