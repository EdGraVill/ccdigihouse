import httpClient from './httpClient';

export interface RawProduct {
  createdAt: string;
  id: string;
  image: string;
  is_redemption: boolean;
  points: number;
  product: string;
}

export interface Product {
  createdAt: Date;
  id: string;
  image: string;
  isRedemption: boolean;
  points: number;
  product: string;
}

interface ProductChangeListener {
  (products: Product[]): void;
}

export default class ProductController {
  static storeKey = Symbol('ProductControllerStoreKey');

  static parseProducts = (products: RawProduct[]): Product[] => {
    return products.map((product) => ({
      ...product,
      createdAt: new Date(product.createdAt),
      isRedemption: product.is_redemption,
    }));
  };

  private lastFetch?: Date;
  private productIds = new Set<Product['id']>();
  private abortController = new AbortController();
  private productChangeListeners: ProductChangeListener[] = [];

  constructor(private readonly cacheTime = 1000 * 60 * 15 /* 15 minutes */) {}

  private mergeProducts = (products: Product[]): void => {
    const productsClone = [...this.products];
    let hasChanged = false;

    products.forEach((product) => {
      if (!this.productIds.has(product.id)) {
        hasChanged = true;
        this.productIds.add(product.id);
        productsClone.push(product);
      }
    });

    if (hasChanged) {
      this.products = productsClone;
    }
  };

  public set products(products: Product[]) {
    Reflect.set(globalThis, ProductController.storeKey, products);
    this.productChangeListeners.forEach((callback) => callback(products));
  }

  public get products(): Product[] {
    const storedProducts = Reflect.get(globalThis, ProductController.storeKey) as Product[] | undefined;

    if (!storedProducts) {
      return [];
    }

    return storedProducts;
  }

  public fetchProducts = async (): Promise<Product[]> => {
    if (this.lastFetch && this.lastFetch.getTime() + this.cacheTime > Date.now()) {
      return this.products;
    }

    this.abortController = new AbortController();
    try {
      const response = await httpClient.get<RawProduct[]>('products', { signal: this.abortController.signal });
      this.lastFetch = new Date();

      const parsedProducts = ProductController.parseProducts(response.data);
      this.mergeProducts(parsedProducts);

      return this.products;
    } catch (error) {
      return this.products;
    }
  };

  public onProductsChange = (callback: ProductChangeListener): (() => void) => {
    this.productChangeListeners.push(callback);

    return () => {
      const index = this.productChangeListeners.indexOf(callback);

      this.productChangeListeners.splice(index, 1);
    };
  };

  public clean = () => {
    this.products = [];
    this.productIds = new Set<Product['id']>();
    this.lastFetch = undefined;
    Reflect.deleteProperty(globalThis, ProductController.storeKey);
  };

  public abort = async (): Promise<void> => {
    return this.abortController.abort();
  };

  public getProductById = (productId: Product['id']): Product | undefined =>
    this.products.find(({ id }) => productId === id);
}
