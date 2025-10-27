export type AuthState = {
  /**
   * Состояние поля email.
   */
  email: string;
  /**
   * Состояние поля password.
   */
  password: string;
  /**
   * Состояние необходимости валидации формы.
   */
  shouldValidate: boolean;
  /**
   * Состояние поля кода подтверждения.
   */
  verificationCode: string;
  /**
   * Состояние загрузки.
   */
  isLoading: boolean;
  /**
   * Состояние показывающее, завершён ли первый шаг авторизации.
   */
  isFirstStepCompleted: boolean;
  /**
   * Состояние ошибки ввода кода подтверждения.
   */
  isVerifyCodeFailed: boolean;
  /**
   * Состояние необходимости получения нового кода подтверждения.
   */
  canGetNewCode: boolean;
  /**
   * Функция установки состояния поля email.
   */
  setEmail: (v: string) => void;
  /**
   * Функция установки состояния поля password.
   */
  setPassword: (v: string) => void;
  /**
   * Функция установки состояния поля кода подтверждения.
   */
  setVerificationCode: (v: string) => void;
  /**
   * Функция установки состояния загрузки.
   */
  setIsLoading: (v: boolean) => void;
  /**
   * Функция установки состояния завершён ли первый шаг авторизации.
   */
  setIsFirstStepCompleted: (v: boolean) => void;
  /**
   * Функция установки состояния ошибки ввода кода подтверждения.
   */
  setVerifyCodeFailed: (v: boolean) => void;
  /**
   * Функция установки состояния необходимости валидации формы.
   */
  setShouldValidate: (v: boolean) => void;
  /**
   * Функция установки состояния необходимости получения нового кода подтверждения.
   */
  setCanGetNewCode: (v: boolean) => void;
  /**
   * Функция сброса состояния.
   */
  reset: () => void;
};
