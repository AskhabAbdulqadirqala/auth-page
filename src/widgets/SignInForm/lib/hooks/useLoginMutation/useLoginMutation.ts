import { useMutation } from '@tanstack/react-query';
import { Modal } from 'antd';

import { SignInFormInputs } from '../../../SignInForm.types';

const mockLogin = async (credentials: SignInFormInputs) => {
  const { email } = credentials;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (email === 'error@example.com') {
    throw new Error('Invalid credentials');
  }

  if (email === 'server@error.com') {
    throw new Error('Server error');
  }

  return {
    user: {
      id: 1,
      email,
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
