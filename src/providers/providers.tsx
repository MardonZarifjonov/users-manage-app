import { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';

export function Providers({ children }: PropsWithChildren) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
