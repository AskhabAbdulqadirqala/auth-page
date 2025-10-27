import { FC, FormEventHandler } from 'react';
import { Button } from 'antd';

import { cx } from '@shared/lib/cx';

import { FormButtonProps } from './FormButton.props';

export const FormButton: FC<FormButtonProps> = (props) => {
  const { isActive = true, onClick, children } = props;

  const handleClick: FormEventHandler = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <Button
      type='primary'
      htmlType='submit'
      disabled={!isActive}
      className={cx(
        '!h-[40px] !text-[16px]',
        !isActive ? 'bg-gray-400 text-white' : '',
      )}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};
