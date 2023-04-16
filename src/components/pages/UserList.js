import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const USERS_QUERY = gql`
  query Users($search: SearchFilter!, $roleID: ID!) {
    users(search: $search, roleID: $roleID) {
      nodes {
        id
        name
        email
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

function UsersList() {
  const [searchText, setSearchText] = useState('');
  const { loading, error, data } = useQuery(USERS_QUERY, {
    variables: { search: searchText, roleID: 'superadmin' },
    onError: (error) => console.error(error),
    context: {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    },
  });

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <h1>Users</h1>
      <label>
        Search:
        <input type="text" value={searchText} onChange={handleSearchTextChange} />
      </label>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading users: {error.message}</p>}
      {data && (
        <ul>
          {data.users.nodes.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UsersList;



