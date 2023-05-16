import classNames from 'classnames';

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export function Input({ className, ...props }: InputProps) {
  const inputClassNames = classNames(
    [
      'rounded-element',
      'border',
      'border-input',
      'text-tertiary',
      'px-4',
      'py-2',
      'w-full',
      'h-full',
      'font-bold',
      'text-lg',
      'text-secondary',
      // 'transition',
    ],
    className
  );

  return <input className={inputClassNames} {...props} />;
}
