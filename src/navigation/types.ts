type RootTabsParamList = {
  Home: ProductStackParamList;
  Cart: undefined;
  Settings: undefined;
  Add: undefined;
};
type ProductStackParamList = {
  ProductList: undefined;
  ProductDetail: { id: number };
};

export type { RootTabsParamList, ProductStackParamList };
