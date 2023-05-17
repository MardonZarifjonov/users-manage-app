import classNames from 'classnames';

export type MainPermissionTagProps = React.DetailedHTMLProps<
  React.LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
> & {
  permission: string;
};

export function MainPermissionTag({
  permission,
  className,
  ...props
}: MainPermissionTagProps) {
  const tagClassNames = classNames(
    'border border-element-border rounded-element py-1 px-4 grid place-items-center font-medium text-base whitespace-nowrap',
    className
  );

  return (
    <li key={permission} className={tagClassNames} {...props}>
      {permission}
    </li>
  );
}
