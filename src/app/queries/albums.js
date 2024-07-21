import { gql } from '@apollo/client';

export const GET_ALBUMS = gql`
  query GetAlbums($options: PageQueryOptions) {
    albums(options: $options) {
      data {
        id
        title
        user {
          id
          name
        }
      }
      meta {
        totalCount
      }
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers {
    users {
      data {
        id
        name
      }
    }
  }
`;
