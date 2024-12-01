import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Product = {
  id: number;
  vendorСode: string;
  inStock: number;
  title: string;
  description:string;
  imgUrl: string;
  stars: number;
  sizes: string[];
  price: number;
  oldPrice: number;
  gender: string;
  color: string;
  compound: string;
  country: string;
};

export type BasketItem = {
  uuid: string;
  product: Product;
};

export type BasketState = {
  products: BasketItem[];
};

const initialBasketState: BasketState = {
  products: [],
};

const generateUniqueId = () => {
  return `${new Date().getTime()}+${Math.random()}-${Math.random()}`;
};

export const basketSlice = createSlice({
  name: "basket",
  initialState: initialBasketState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const newProduct: BasketItem = {
        uuid: generateUniqueId(),
        product: action.payload,
      };
      state.products.push(newProduct);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((item) => item.uuid !== action.payload);
    },
    removeBasket: (state) => {
      state.products = [];
    },
  },
});

export const { addProduct, removeProduct, removeBasket } = basketSlice.actions;
export default basketSlice.reducer;
export const basketSelector = (state: { basket: BasketState }) => state.basket;