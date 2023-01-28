import axiosClient from '../axios-client';

export const TodoListApi = {
  getAllTodoList() {
    return axiosClient.get('/todo-list');
  },

  createTodoList(payload: any) {
    return axiosClient.post('/todo-list');
  },

  getProfile() {
    return axiosClient.get('/profile');
  },

  forgotPassword(payLoad: any) {
    return axiosClient.post('/user/forgot-pasword', payLoad);
  },

  resetPasswordByKey(payLoad: any) {
    return axiosClient.post('/user/reset-password-by-key', payLoad);
  }
};
