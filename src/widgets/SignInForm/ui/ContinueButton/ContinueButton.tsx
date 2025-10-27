import { FC } from 'react';
import { FormButton } from '@shared/ui/FormButton';
import { useVerifyCode } from '../../lib/hooks/useVerifyCode';

export const ContinueButton: FC = () => {
  const { verifyCode } = useVerifyCode();

  return <FormButton onClick={verifyCode}>Continue</FormButton>;
};
