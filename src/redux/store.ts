import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import product from './product/slice';
import filter from './filter/slice';
import cart from './cart/slice';

export const store = configureStore({
  reducer: {
    product,
    filter,
    cart
  }
})

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>()