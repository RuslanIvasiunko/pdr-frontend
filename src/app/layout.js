// import React, { isValidElement } from 'react';

import { Layout } from '@/shared/components/Layout';

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
