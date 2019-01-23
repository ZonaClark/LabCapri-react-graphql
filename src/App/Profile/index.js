import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loading from '../Loading';
import Link from '../Elements/Link';

const GET_FIRST_IMAGE = gql`
{
    images(limit: 2) {
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
        {({ data, loading }) => {
          const { images } = data;
          if (loading || !images) {
            return <Loading />;
          }

          return (
              <div>
                  {images.edges[0].diagnosis}
              </div>
          );
        }}
    </Query>
);

export default Profile;
