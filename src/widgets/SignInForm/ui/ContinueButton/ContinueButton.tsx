import { FC } from 'react';
import { AuthButton } from '@shared/ui/AuthButton';
import { useVerifyCode } from '../../lib/hooks/useVerifyCode';

export const ContinueButton: FC = () => {
  const { verifyCode } = useVerifyCode();

  return <AuthButton onClick={verifyCode}>Continue</AuthButton>;
};
