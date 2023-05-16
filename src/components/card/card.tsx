import classNames from 'classnames';

export type CardProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export function Card({ children, className, ...props }: CardProps) {
  const cardClassNames = classNames('rounded-primary bg-white', className);

  return (
    <div className={cardClassNames} {...props}>
      {children}
    </div>
  );
}
