import { useMutation } from '@tanstack/react-query';
import { Modal } from 'antd';
import { useAuthStore } from '../../../store';

// Имитация API-запроса
const mockVerifyCode = async (credentials: {
  email: string;
  verificationCode: string;
}) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (credentials.verificationCode === '000000') {
    throw new Error('Invalid verification code');
  }

  if (credentials.verificationCode === '999999') {
    throw new Error('Verification code expired');
  }

  return {
    user: {
      id: 1,
      email: credentials.email,
      name: 'Lorem Ipsum',
    },
    token: 'mock-jwt-token',
    session: 'mock-session-token',
  };
};

export const useVerifyCode = () => {
  const email = useAuthStore((s) => s.email);
  const verificationCode = useAuthStore((s) => s.verificationCode);
  const reset = useAuthStore((s) => s.reset);
  const setIsLoading = useAuthStore((s) => s.setIsLoading);
  const setVerificationCode = useAuthStore((s) => s.setVerificationCode);
  const setVerifyCodeFailed = useAuthStore((s) => s.setVerifyCodeFailed);

  const mutation = useMutation({
    mutationFn: mockVerifyCode,
    onMutate: () => {
      setIsLoading(true);
    },
    onSettled: () => {
      setIsLoading(false);
    },
    onSuccess: () => {
      setVerificationCode('');
      setVerifyCodeFailed(false);
      Modal.success({
        content: 'Signin successful',
        onOk: () => {
          reset();
          window.location.reload();
        },
      });
    },
    onError: (error: any) => {
      setVerifyCodeFailed(true);
      setVerificationCode('');
      Modal.error({
        content: error.message || 'Verification failed',
      });
    },
  });

  const verify = () => {
    mutation.mutate({ email, verificationCode });
  };

  return {
    verifyCode: verify,
    isPending: mutation.isPending,
    error: mutation.error,
  };
};
