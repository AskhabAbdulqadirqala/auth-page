import { useMutation } from '@tanstack/react-query';
import { Modal } from 'antd';

import { useAuthStore } from '../../../store';
import { SignInFormInputs } from '../../../SignInForm.types';

// Имитация API-запроса.
const mockLogIn = async (credentials: SignInFormInputs) => {
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

export const useLogIn = () => {
  const email = useAuthStore((s) => s.email);
  const password = useAuthStore((s) => s.password);
  const setLoading = useAuthStore((s) => s.setIsLoading);
  const canGetNewCode = useAuthStore((s) => s.canGetNewCode);
  const setCanGetNewCode = useAuthStore((s) => s.setCanGetNewCode);
  const setIsFirstStepCompleted = useAuthStore(
    (s) => s.setIsFirstStepCompleted,
  );
  const setShouldValidate = useAuthStore((s) => s.setShouldValidate);
  const setVerificationCode = useAuthStore((s) => s.setVerificationCode);
  const setVerifyCodeFailed = useAuthStore((s) => s.setVerifyCodeFailed);

  const mutation = useMutation({
    mutationFn: mockLogIn,
    onMutate: () => {
      setLoading(true);
    },
    onSettled: () => {
      setLoading(false);
    },
    onSuccess: () => {
      setIsFirstStepCompleted(true);
      setCanGetNewCode(false);
      setTimeout(() => {
        setCanGetNewCode(true);
      }, 15000);
    },
    onError: (error: any) => {
      Modal.error({
        title: 'Log in Error',
        content: error.message || 'An error occurred. Please try again later.',
      });
      console.error('Log in failed:', error);
    },
  });

  const logIn = (isFormValid: boolean) => {
    setShouldValidate(true);

    if (!isFormValid) {
      return;
    }

    setVerificationCode('');
    setVerifyCodeFailed(false);

    mutation.mutate({ email, password });
  };

  const isActive = email.trim() !== '' && password.trim() !== '';

  return {
    logIn,
    isActive,
    canGetNewCode,
    isPending: mutation.isPending,
  };
};
