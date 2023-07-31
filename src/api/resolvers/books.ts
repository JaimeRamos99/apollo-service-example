const books = [
  {
    title: "The Awakening",
  },
  {
    title: "City of Glass",
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};
export { resolvers };
