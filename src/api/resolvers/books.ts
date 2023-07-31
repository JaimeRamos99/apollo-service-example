import { Resolvers, Book } from "../../__generated__/resolvers-types";

const books: Book[] = [
  {
    title: "The Awakening",
  },
  {
    title: "City of Glass",
  },
];

const resolvers: Resolvers = {
  Query: {
    books: () => books,
  },
};
export { resolvers };
