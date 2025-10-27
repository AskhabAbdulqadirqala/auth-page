import { SignInFormInputs } from '../../../SignInForm.types';

export type ValidationErrors = {
  /**
   * Массив сообщений об ошибках email.
   */
  email?: string[];
  /**
   * Массив сообщений об ошибках пароля.
   */
  password?: string[];
};

export interface UseFormValidateParams extends SignInFormInputs {
  /**
   * Флаг, указывающий, необходимо ли проводить валидацию.
   */
  shouldValidate: boolean;
}
