import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';
import { authApi } from '../api-client';

const HOURSE_TO_MILISECOND = 60 * 60 * 1000;

export function useAuth(options?: Partial<PublicConfiguration>) {
  const {
    data: profile,
    error,
    mutate
  } = useSWR('/profile', {
    dedupingInterval: HOURSE_TO_MILISECOND,
    revalidateOnFocus: false,
    ...options
  });

  async function login(loginData: { Email: string; password: string }) {
    await authApi.login(loginData);
    await mutate();
  }
  async function logout() {
    await authApi.logout();
    mutate({}, false);
  }
  const firstLoading = profile === undefined && error === undefined;

  return {
    profile,
    error,
    firstLoading,
    login,
    logout
  };
}
