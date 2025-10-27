import { create } from 'zustand';

import { AuthState } from './useAuthStore.types';

export const useAuthStore = create<AuthState>((set) => ({
  email: '',
  password: '',
  isLoading: false,
  isFirstStepCompleted: false,
  verificationCode: '',
  isVerifyCodeFailed: false,
  shouldValidate: false,
  canGetNewCode: false,
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setVerificationCode: (verificationCode) => set({ verificationCode }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setIsFirstStepCompleted: (isFirstStepCompleted) =>
    set({ isFirstStepCompleted }),
  setVerifyCodeFailed: (isVerifyCodeFailed) => set({ isVerifyCodeFailed }),
  setShouldValidate: (shouldValidate) => set({ shouldValidate }),
  setCanGetNewCode: (canGetNewCode) => set({ canGetNewCode }),
  reset: () =>
    set({
      email: '',
      password: '',
      isLoading: false,
      isFirstStepCompleted: false,
    }),
}));
