import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient';
import '../globals.css';
import '../albums/style.css'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
