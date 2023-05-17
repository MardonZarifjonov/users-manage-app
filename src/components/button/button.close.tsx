import classNames from 'classnames';
import CloseIcon from 'assets/images/close-icon.svg';
import { ButtonProps } from './button';

export type ButtonCloseProps = Omit<ButtonProps, 'children'>;

export function ButtonClose({ className, ...props }: ButtonCloseProps) {
  const buttonCloseClassNames = classNames(
    [
      'w-[40px]',
      'h-[40px]',
      'bg-main-bg',
      'rounded-primary',
      'grid',
      'place-items-center',
      'hover:opacity-80',
      'active:opacity-60',
    ],
    className
  );

  return (
    <button className={buttonCloseClassNames} {...props}>
      <img src={CloseIcon} alt='modal close' />
    </button>
  );
}
