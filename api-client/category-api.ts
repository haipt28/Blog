import axiosClient from './axios-client';

export const CategoryApi = {
  getAllCategory() {
    return axiosClient.get('/product-categories');
  },
  postCategory(data: { CategoryName: string }) {
    return axiosClient.post('/product-categories', data);
  },
  putCategory(data: { ID: string; CategoryName: string }) {
    return axiosClient.put('/product-categories', data);
  },
  deleteCategory(categoryId: string) {
    return axiosClient.put(`/product-categories/${categoryId}`);
  }
};
