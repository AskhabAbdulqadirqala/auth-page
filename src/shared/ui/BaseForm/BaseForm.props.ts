export interface BaseFormProps {
  /**
   * Заголовок.
   */
  title: string;
  /**
   * Подзаголовок.
   */
  subtitle: string;
  /**
   * Показывать кнопку назад.
   */
  withBackBtn: boolean;
  /**
   * Обработчик клика на кнопку назад.
   */
  onBackButtonClick: () => void;
  /**
   * Дочерние элементы.
   */
  children: React.ReactNode;
}
