import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
// import gql from 'graphql-tag'

const link = new HttpLink({
  uri: 'https://rickandmortyapi.com/graphql/',
});
const cache = new InMemoryCache();
const authLink = setContext((_, { headers }) => {
  const token = JSON.parse(localStorage.getItem('userProfile'));
  const tokenId = token.id;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${tokenId.slice(1, -1)}` : '',
    },
  };
});
const client = new ApolloClient({
  cache,
  link: authLink.concat(link),
  resolvers: {},
});

// const token = JSON.parse(localStorage.getItem('userProfile'));
// const tokenId = token.id;
// cache.writeData({
//   data: {
//     token: tokenId,
//   },
// });

export default client;
