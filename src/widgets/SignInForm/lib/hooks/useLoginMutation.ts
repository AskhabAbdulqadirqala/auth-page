import { useMutation } from '@tanstack/react-query';
import { Modal } from 'antd';

const mockLogin = async (credentials: { email: string; password: string }) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (credentials.email === 'error@example.com') {
    throw new Error('Invalid credentials');
  }

  if (credentials.email === 'server@error.com') {
    throw new Error('Server error');
  }

  return {
    user: {
      id: 1,
      email: credentials.email,
      name: 'Lorem Ipsum',
    },
    token: 'mock-jwt-token',
  };
};

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: mockLogin,
    onSuccess: (data) => {
      console.log('Login successful:', data);
    },
    onError: (error) => {
      Modal.error({
        title: 'Login Error',
        content: error.message || 'An error occurred. Please try again later.',
      });
      console.error('Login failed:', error);
    },
  });
};
