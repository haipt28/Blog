import axiosClient from './axios-client';

export const authApi = {
  login(payload: { Email: string; password: string }) {
    return axiosClient.post('/login', payload);
  },

  register(payload: any) {
    return axiosClient.post('/register', payload);
  },

  logout() {
    return axiosClient.post('/logout');
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
