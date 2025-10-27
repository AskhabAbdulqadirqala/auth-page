import { useMutation } from '@tanstack/react-query';

const mockVerifyCode = async (credentials: {
  email: string;
  verifyCode: string;
}) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (credentials.verifyCode === '000000') {
    throw new Error('Invalid verification code');
  }

  if (credentials.verifyCode === '999999') {
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

export const useVerifyCodeMutation = () => {
  return useMutation({
    mutationFn: mockVerifyCode,
    onSuccess: (data) => {
      console.log('Verification successful:', data);
    },
    onError: (error) => {
      console.error('Verification failed:', error);
    },
  });
};
