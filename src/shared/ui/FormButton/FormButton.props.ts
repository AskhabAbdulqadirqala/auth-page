export interface FormButtonProps {
  /**
   * Флаг активности кнопки.
   * @default true
   */
  isActive?: boolean;
  /**
   * Обработчик клика.
   */
  onClick: () => void;
  /**
   * Дочерние элементы.
   */
  children: React.ReactNode;
}
