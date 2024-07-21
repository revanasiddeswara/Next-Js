import { gql, useQuery } from '@apollo/client';

const TEST_QUERY = gql`
  query TestQuery {
    _ {
      version
    }
  }
`;

const TestComponent = () => {
  const { loading, error, data } = useQuery(TEST_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <p>API Version: {data._.version}</p>;
};

export default TestComponent;
