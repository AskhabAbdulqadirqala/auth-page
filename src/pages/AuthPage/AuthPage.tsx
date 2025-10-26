import { QueryClientProvider } from '@tanstack/react-query';

import { SignInForm } from '@widgets/SignInForm';
import { queryClient } from './lib/queryClient';

export const AuthPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='w-screen h-screen flex items-center justify-center'>
        <SignInForm />
      </div>
    </QueryClientProvider>
  );
};

export default AuthPage;
