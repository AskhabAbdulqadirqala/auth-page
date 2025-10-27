import { FormEventHandler, ReactNode } from 'react';

export interface AuthButtonProps {
  /**
   * Флаг активности кнопки.
   * @default true
   */
  isActive?: boolean;
  /**
   * Обработчик клика.
   */
  onClick: FormEventHandler;
  /**
   * Дочерние элементы.
   */
  children: ReactNode;
}
