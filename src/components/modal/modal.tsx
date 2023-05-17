import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

export type ModalProps = PropsWithChildren<{
  open?: boolean;
  className?: string;
}>;

const modalContainer = document.getElementById('modal');

export function Modal({ open, children, className }: ModalProps) {
  const modalClassNames = classNames(
    [
      'fixed',
      'inset-0',
      'flex',
      'items-center',
      'justify-center',
      'overflow-hidden',
      'z-[999]',
      'backdrop-blur',
      'backdrop-brightness-75',
    ],
    className
  );
  if (!open || !modalContainer) return null;

  return createPortal(
    <div className={modalClassNames}>{children}</div>,
    modalContainer
  );
}
