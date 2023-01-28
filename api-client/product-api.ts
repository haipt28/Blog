import axiosClient from './axios-client';

export const productApi = {
  getAllProduct() {
    return axiosClient.get('/product');
  },

  postProduct(data: {
    ProductName: string;
    ProductPrice: number;
    ProductDescription: string;
    ProductShortDescription: string;
    ProductStock: number;
    ProductUnlimited: boolean;
    ProductCategoriesID: string;
  }) {
    return axiosClient.post('/product', data);
  },
  putProduct(data: {
    ID: string;
    ProductName: string;
    ProductPrice: number;
    ProductDescription: string;
    ProductShortDescription: string;
    ProductStock: number;
    ProductUnlimited: boolean;
    ProductCategoriesID: string;
  }) {
    return axiosClient.put('/product', data);
  },
  deleteProduct(categoryId: string) {
    return axiosClient.put(`/product/${categoryId}`);
  }
};
