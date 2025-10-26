import { Spin } from 'antd';

export const Loader = () => {
  return (
    <div className='absolute inset-0 flex items-center justify-center bg-gray-200 opacity-75 z-10'>
      <Spin size='large' />
    </div>
  );
};
