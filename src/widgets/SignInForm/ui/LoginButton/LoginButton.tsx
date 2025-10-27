import { FC } from 'react';

import { FormButton } from '@shared/ui/FormButton';

import { useLogIn } from '../../lib/hooks/useLogIn';

import { LoginButtonProps } from './LoginButton.props';

export const LoginButton: FC<LoginButtonProps> = (props) => {
  const { isFormValid } = props;

  const { logIn, isActive, canGetNewCode } = useLogIn();

  const handleClick = () => {
    logIn(isFormValid);
  };

  return (
    <FormButton isActive={isActive} onClick={handleClick}>
      {!canGetNewCode ? 'Log In' : 'Get new'}
    </FormButton>
  );
};
