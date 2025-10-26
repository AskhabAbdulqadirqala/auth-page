import { useState, useEffect } from 'react';
import { z } from 'zod';

const formSchema = z.object({
  email: z.email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export type ValidationErrors = {
  email?: string[];
  password?: string[];
};

interface UseFormValidateParams {
  email: string;
  password: string;
  shouldValidate: boolean;
}

export const useFormValidate = (params: UseFormValidateParams) => {
  const { email, password, shouldValidate } = params;

  const [isValid, setIsValid] = useState<boolean>(false);
  const [errors, setErrors] = useState<ValidationErrors>({});

  useEffect(() => {
    try {
      formSchema.parse({ email, password });
      setIsValid(true);
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        setIsValid(false);

        const formattedErrors: ValidationErrors = {};
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            const fieldName = issue.path[0] as keyof ValidationErrors;

            if (!formattedErrors[fieldName]) {
              formattedErrors[fieldName] = [];
            }

            formattedErrors[fieldName]!.push(issue.message);
          }
        });

        if (shouldValidate) {
          setErrors(formattedErrors);
        }
      }
    }
  }, [shouldValidate, email, password]);

  return {
    isFormValid: isValid,
    validationErrors: errors,
  };
};
