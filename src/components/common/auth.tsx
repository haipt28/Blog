import { useAuth } from 'hooks';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export interface AuthAminProps {
  children: any;
}

export function Auth({ children }: AuthAminProps) {
  const router = useRouter();
  const { profile, firstLoading } = useAuth();

  const convertProfileType: any = profile;
  const userID = convertProfileType?.data?.ID;
  useEffect(() => {
    if (!firstLoading && !userID) {
      router.push('/');
    }
  }, [router, profile, firstLoading, userID]);

  if (!userID) return <></>;

  return <div>{children}</div>;
}
