import { QueryClientProvider } from '@tanstack/react-query';

import { AuthPage } from '@pages/AuthPage';

import { queryClient } from '@shared/lib/queryClient';

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthPage />
    </QueryClientProvider>
  );
};
