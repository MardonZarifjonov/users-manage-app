import classNames from 'classnames';
import { ReactNode } from 'react';

export type CardProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  header?: ReactNode;
};

export function Card({ children, className, header, ...props }: CardProps) {
  const cardClassNames = classNames('rounded-primary bg-white', className);

  return (
    <div className={cardClassNames} {...props}>
      {header && <div className='border-b border-main-bg'>{header}</div>}
      {children}
    </div>
  );
}
