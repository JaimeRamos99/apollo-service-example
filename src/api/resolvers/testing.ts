const books = [
  {
    title: 'The Awakening',
  },
  {
    title: 'City of Glass',
  },
];

export const resolvers = {
  Query: {
    books: () => books,
  },
};