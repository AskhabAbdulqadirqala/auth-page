import { FC } from 'react';
import { Modal } from 'antd';

import { AuthButton } from '@shared/ui/AuthButton';

import { useAuthStore } from '../../store/useAuthStore';
import { useVerifyCodeMutation } from '../../lib/hooks/useVerifyCodeMutation';

export const ContinueButton: FC = () => {
  const setIsLoading = useAuthStore((s) => s.setIsLoading);
  const email = useAuthStore((s) => s.email);
  const reset = useAuthStore((s) => s.reset);
  const verifyCode = useAuthStore((s) => s.verifyCode);
  const setVerifyCode = useAuthStore((s) => s.setVerifyCode);
  const setVerifyCodeFailed = useAuthStore((s) => s.setVerifyCodeFailed);

  const verifyCodeMutation = useVerifyCodeMutation();

  const handleClick = () => {
    setIsLoading(true);
    verifyCodeMutation.mutate(
      { email, verifyCode },
      {
        onSettled: () => {
          setIsLoading(false);
        },
        onSuccess: () => {
          setVerifyCode('');
          setVerifyCodeFailed(false);
          Modal.success({
            content: 'Singin successful',
            onOk: () => {
              reset();
              window.location.reload();
            },
          });
        },
        onError: () => {
          setVerifyCodeFailed(true);
          setVerifyCode('');
        },
      },
    );
  };

  return <AuthButton onClick={handleClick}>Continue</AuthButton>;
};
