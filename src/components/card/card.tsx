import classNames from 'classnames';
import { ReactNode } from 'react';

export type CardProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  header?: ReactNode;
  cardContentClassName?: string;
};

export function Card({
  children,
  className,
  cardContentClassName,
  header,
  ...props
}: CardProps) {
  const cardClassNames = classNames(
    'rounded-primary bg-white overflow-hidden',
    className
  );
  console.log(className);

  return (
    <div className={cardClassNames} {...props}>
      {header && <div className='border-b border-main-bg'>{header}</div>}
      <div className={classNames(cardContentClassName)}>{children}</div>
    </div>
  );
}
