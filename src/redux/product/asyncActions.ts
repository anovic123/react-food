import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Product, SearchProductParams } from "./types";
import pickBy from "lodash/pickBy";
import identity from 'lodash/identity';

export const fetchProduct = createAsyncThunk<Product[], SearchProductParams>(
  'product/fetchProductStatus', 
    async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get<Product[]>(
      `https://63503e1d78563c1d82bd57ae.mockapi.io/data`, {
      params: pickBy(
        {
          page: currentPage,
          limit: 10,
          category,
          sortBy,
          order,
          search,
        },
        identity,
      )
    });
     return data;
  }
)