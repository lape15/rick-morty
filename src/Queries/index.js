import gql from 'graphql-tag';
const ALL_CHARACTERS = gql`
  {
    characters(page: 1) {
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
