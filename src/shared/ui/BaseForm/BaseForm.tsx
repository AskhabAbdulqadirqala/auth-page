import { FC, FormEventHandler, ReactNode } from 'react';
import { Form } from 'antd';
import styled from '@emotion/styled';
import { ArrowLeftOutlined } from '@ant-design/icons';

import logo from './assets/logo.svg';

interface BaseFormProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  withBackBtn: boolean;
  onBackButtonClick: () => void;
}

const Container = styled(Form)`
  width: 440px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  background: #ffffff;
  border-radius: 6px;
`;

const FormHeader = styled.div`
  height: 132px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 2px;
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BaseForm: FC<BaseFormProps> = (props) => {
  const { children, title, subtitle, withBackBtn, onBackButtonClick } = props;

  const handleBackBtnClick: FormEventHandler = (e) => {
    e.preventDefault();
    onBackButtonClick();
  };

  return (
    <Container>
      {withBackBtn && (
        <button
          className='absolute w-[40px] h-[32px] flex flex-wrap content-center justify-center'
          onClick={handleBackBtnClick}
        >
          <ArrowLeftOutlined />
        </button>
      )}
      <FormHeader>
        <div className='h-full flex flex-wrap content-center'>
          <img src={logo} alt='Company logo' />
        </div>
        <h1 className='font-semibold leading-[133%]'>{title}</h1>
        {subtitle && <p className=''>{subtitle}</p>}
      </FormHeader>
      <InputsWrapper>{children}</InputsWrapper>
    </Container>
  );
};
