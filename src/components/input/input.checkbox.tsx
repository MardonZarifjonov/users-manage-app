import classNames from 'classnames';
import CheckedIcon from 'assets/images/checked-icon.svg';
import { InputProps } from './input';

export type InputCheckboxProps = InputProps & {
  label?: string;
};

export function InputCheckbox({
  className,
  label,
  ...props
}: InputCheckboxProps) {
  const inputCheckboxClassNames = classNames(
    [
      'w-4',
      'h-4',
      'border',
      'border-element-border',
      'rounded-[5px]',
      'flex',
      'items-center',
      'gap-3',
      'cursor-pointer',
      'relative',
    ],
    className
  );

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={inputCheckboxClassNames}>
      <input type='checkbox' className='visually-hidden' {...props} />
      <img
        src={CheckedIcon}
        alt={`${label} checked`}
        className='hidden absolute left-[3px]'
      />
      <p className='ml-5 whitespace-nowrap'>{label}</p>
    </label>
  );
}
