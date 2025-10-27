import { FC, FormEventHandler } from 'react';

import { AuthButton } from '@shared/ui/AuthButton';

import { useAuthStore } from '../../store/useAuthStore';

import { useLoginMutation } from '../../lib/hooks/useLoginMutation';

import { LoginButtonProps } from './LoginButton.props';

export const LoginButton: FC<LoginButtonProps> = (props) => {
  const { isFormValid } = props;

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

  const loginMutation = useLoginMutation();

  const mutateLogin = () => {
    setLoading(true);
    loginMutation.mutate(
      { email, password },
      {
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
      },
    );
  };

  const handleLoginClick: FormEventHandler = (e) => {
    e.preventDefault();
    setShouldValidate(true);

    if (isFormValid) {
      setVerificationCode('');
      setVerifyCodeFailed(false);
      mutateLogin();
    }
  };

  const isActive = email.trim() !== '' && password.trim() !== '';

  return (
    <AuthButton isActive={isActive} onClick={handleLoginClick}>
      {!canGetNewCode ? 'Log In' : 'Get new'}
    </AuthButton>
  );
};
