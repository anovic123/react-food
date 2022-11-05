export type Product = {
  id: string;
  imageUrl: string;
  title: string;
  descrp: string | null;
  price: number;
  rating: number;
  category: number;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

export interface ProductSliceState {
  items: Product[];
  status: Status;
}

export type SearchProductParams = {
  search: string,
  currentPage: string,
  category: string,
  sortBy: string,
  order: string,
}