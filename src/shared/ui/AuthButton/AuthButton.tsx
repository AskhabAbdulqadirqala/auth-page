import { FC } from 'react';
import { Button } from 'antd';

import { cx } from '@shared/lib/cx';

import { AuthButtonProps } from './AuthButton.props';

export const AuthButton: FC<AuthButtonProps> = (props) => {
  const { isActive = true, onClick, children } = props;

  return (
    <Button
      type='primary'
      htmlType='submit'
      disabled={!isActive}
      className={cx(
        '!h-[40px] !text-[16px]',
        !isActive ? 'bg-gray-400 text-white' : '',
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
