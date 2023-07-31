export const typeDefs = `#graphql
  type Actor {
    name: String
  }
  type Query {
    actors: [Actor]
  }
`;
