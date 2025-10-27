import { FC } from 'react';
import { Input, Form } from 'antd';
import styled from '@emotion/styled';

import { useAuthStore } from '../../store/useAuthStore';

const FormItem = styled(Form.Item)`
  margin-bottom: 0;

  input {
    line-height: 2.5 !important;
    width: 52px;
  }
`;

export const VerifyCodeInput: FC = () => {
  const isLoading = useAuthStore((s) => s.isLoading);
  const verificationCode = useAuthStore((s) => s.verificationCode);
  const isVerifyCodeFailed = useAuthStore((s) => s.isVerifyCodeFailed);
  const setVerificationCode = useAuthStore((s) => s.setVerificationCode);
  const setVerifyCodeFailed = useAuthStore((s) => s.setVerifyCodeFailed);

  const handleChange = (val: string) => {
    setVerificationCode(val);

    if (val.length !== 6) {
      setVerifyCodeFailed(true);
    }
  };

  return (
    <FormItem>
      <Input.OTP
        length={6}
        disabled={isLoading}
        value={verificationCode}
        onChange={handleChange}
        size='large'
        id='auth-code'
        style={{ columnGap: 12 }}
        status={isVerifyCodeFailed ? 'error' : ''}
        formatter={(str) => str.toUpperCase()}
      />
    </FormItem>
  );
};
