'use client';  // Add this line at the top

import { ApolloProvider } from '@apollo/client';
import client from '../app/lib/apolloClient';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <ApolloProvider client={client}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ApolloProvider>
  );
}
