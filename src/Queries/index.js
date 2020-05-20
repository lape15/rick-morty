import gql from 'graphql-tag';
const ALL_CHARACTERS = gql`
  {
    characters {
      results {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`;
export { ALL_CHARACTERS };
