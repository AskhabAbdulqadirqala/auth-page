import '@ant-design/v5-patch-for-react-19';

import { BaseForm } from '@shared/ui/BaseForm';
import { Loader } from '@shared/ui/Loader';

import { useAuthStore } from './store/useAuthStore';

import { useFormValidate } from './lib/hooks/useFormValidate';

import { FormInputs } from './ui/FormInputs';
import { LoginButton } from './ui/LoginButton';
import { VerifyCodeInput } from './ui/VerifyCodeInput';
import { ContinueButton } from './ui/ContinueButton';

export const SignInForm = () => {
  const email = useAuthStore((s) => s.email);
  const password = useAuthStore((s) => s.password);
  const verificationCode = useAuthStore((s) => s.verificationCode);
  const isLoading = useAuthStore((s) => s.isLoading);
  const isFirstStepCompleted = useAuthStore((s) => s.isFirstStepCompleted);
  const setIsFirstStepCompleted = useAuthStore(
    (s) => s.setIsFirstStepCompleted,
  );

  const shouldValidate = useAuthStore((s) => s.shouldValidate);
  const canGetNewCode = useAuthStore((s) => s.canGetNewCode);
  const setCanGetNewCode = useAuthStore((s) => s.setCanGetNewCode);

  const { isFormValid, validationErrors } = useFormValidate({
    email,
    password,
    shouldValidate,
  });

  const handleBackBtnClick = () => {
    setIsFirstStepCompleted(false);
    setCanGetNewCode(false);
  };

  const shouldShowLoginBtn =
    !isFirstStepCompleted ||
    (canGetNewCode && !isLoading && isFirstStepCompleted);
  const shouldShowContinueBtn =
    isFirstStepCompleted && !canGetNewCode && verificationCode.length === 6;
  const formTitle = isFirstStepCompleted
    ? 'Two-Factor Authentication'
    : 'Sign in to your account to continue';
  const formSubtitle = isFirstStepCompleted
    ? 'Enter the 6-digit code from the Google Authenticator app'
    : '';

  return (
    <BaseForm
      title={formTitle}
      subtitle={formSubtitle}
      withBackBtn={isFirstStepCompleted}
      onBackButtonClick={handleBackBtnClick}
    >
      {isLoading && <Loader />}

      {!isFirstStepCompleted ? (
        <FormInputs validationErrors={validationErrors} />
      ) : (
        <VerifyCodeInput />
      )}

      {shouldShowLoginBtn && <LoginButton isFormValid={isFormValid} />}

      {shouldShowContinueBtn && <ContinueButton />}
    </BaseForm>
  );
};
