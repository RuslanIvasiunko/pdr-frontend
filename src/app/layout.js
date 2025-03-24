// import React, { isValidElement } from 'react';

import { Layout } from '@/shared/components/Layout';

import './globals.css';
import { Modal } from '@/shared/components/Modal';

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>
        <Layout>{children}</Layout>
        <Modal />
      </body>
    </html>
  );
}
