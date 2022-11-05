import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProduct } from './asyncActions';
import { Product, ProductSliceState, Status } from './types';

const initialState: ProductSliceState = {
  items: [],
  status: Status.LOADING,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    })
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    })
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    })
  }
})

export const { setItems } = productSlice.actions;

export default productSlice.reducer;