import classNames from 'classnames';

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button({
  children,
  disabled,
  className,
  ...props
}: ButtonProps) {
  const buttonClassNames = classNames(
    [
      'bg-primary',
      'text-white',
      'font-bold',
      'text-lg',
      'rounded-element',
      'px-6',
      'py-2',
      'active:opacity-80',
      // 'focus:opacity-80',
    ],
    className
  );

  return (
    <button className={buttonClassNames} {...props}>
      {children}
    </button>
  );
}
