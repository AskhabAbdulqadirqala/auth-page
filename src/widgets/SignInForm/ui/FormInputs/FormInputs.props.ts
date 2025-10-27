import { ValidationErrors } from '../../lib/hooks/useFormValidate';

export interface FormInputsProps {
  /**
   * Ошибки валидации.
   */
  validationErrors: ValidationErrors;
}
