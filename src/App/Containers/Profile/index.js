import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loading from '../../Components/Loading';
import Link from '../../Components/Link';
import ErrorMessage from '../../Components/Error';

const GET_FIRST_IMAGE = gql`
{
    images(limit: 5) {
        edges {
            id
            user {
            username
            }
            diagnosis
            imageUrl
        }
        pageInfo {
            endCursor
            hasNextPage
        }
    }    
}
`;

const Profile = () => (
    <Query query={GET_FIRST_IMAGE}>
        {({ data, loading, error }) => {
          if (error) {
            return <ErrorMessage error={error} />;
          }
          const { images } = data;
          if (loading || !images) {
            return <Loading />;
          }
          return (
            <div>{images.edges[2].diagnosis}</div>
          );
        }}
    </Query>
);

export default Profile;
