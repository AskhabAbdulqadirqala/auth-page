import { FC } from 'react';
import { Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { useAuthStore } from '../../store/useAuthStore';

import { FormInputsProps } from './FormInputs.props';

export const FormInputs: FC<FormInputsProps> = (props) => {
  const { validationErrors } = props;

  const email = useAuthStore((s) => s.email);
  const password = useAuthStore((s) => s.password);
  const setEmail = useAuthStore((s) => s.setEmail);
  const setPassword = useAuthStore((s) => s.setPassword);

  return (
    <>
      <Input
        className='!text-[16px] !h-[40px]'
        placeholder='Email'
        type='email'
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        prefix={<UserOutlined className='w-[16px] opacity-45' />}
        status={validationErrors.email ? 'error' : ''}
      />
      <Input.Password
        className='!text-[16px] !h-[40px]'
        placeholder='Password'
        id='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        prefix={<LockOutlined className='w-[16px] opacity-45' />}
        visibilityToggle={false}
        status={validationErrors.password ? 'error' : ''}
      />
    </>
  );
};
