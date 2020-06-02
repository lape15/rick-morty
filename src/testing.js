import React from 'react';

import './index.css';
import gql from 'graphql-tag';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { Route, useRouteMatch } from 'react-router-dom';
import SuperAdmin from './SuperAdmin';
import Admin from './Admin';
import ConsulantIndex from './Consultants/Dashboard/index';
import PageLoading from '../Components/PageLoading/PageLoading';

const GET_PROFILE = gql`
  {
    ad {
      id
      first_name
      last_name
      email
      roles {
        name
      }
    }
  }
`;

const Main = () => {
  const { loading, error, data } = useQuery(GET_PROFILE);
  let pageLoading = false;

  const match = useRouteMatch();
  if (loading) {
    pageLoading = true;
  }
  let ui;
  const client = useApolloClient();

  if (data && data.ad) {
    client.writeData({
      data: {
        user: data.ad.first_name,
        role: data.ad.roles[0].name.includes('tier_')
          ? 'consultant'
          : data.ad.roles[0].name,
      },
    });
    ui =
      data.ad.roles[0].name === 'super admin' ? (
        <Route path="/" component={SuperAdmin} />
      ) : data.ad.roles[0].name === 'admin' ? (
        <Route path="/" component={Admin} />
      ) : data.ad.roles[0].name === 'tier_1' ||
        data.ad.roles[0].name === 'tier_2' ||
        data.ad.roles[0].name === 'tier_3' ? (
        <Route path="/" component={ConsulantIndex} />
      ) : (
        <p>Other user</p>
      );
  } else if (!loading && !data.ad) {
    // console.log('Nothing to see here')
    localStorage.removeItem('token');
    window.location.reload(true);
  }
  return (
    <>
      <div className="pages" id="dashboard">
        {ui}
      </div>

      {/* {data === undefined ? (
        <p>Data is null</p>
      ) : data.ad.roles.name === 'super admin' ? (
        <Route path="/super-admin" component={Dashboard} />
      ) : null} */}
      {pageLoading ? <PageLoading ripple={true} /> : null}
    </>
  );
};

export default Main;
