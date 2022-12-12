import React from 'react';

import type { LayoutProps } from './Layout.props';
import { Navigation } from './navigation/Navigation';

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="container">{children}</div>
      <Navigation />
    </>
  );
};
