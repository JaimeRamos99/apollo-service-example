import { Resolvers } from "../../__generated__/resolvers-types";
import BookService from "../../domain/book/service";

const bookService = new BookService();

const resolvers: Resolvers = {
  Query: {
    bookById: (_, { bookId }, context) => {
      return bookService.findById(bookId);
    },
    books: (_, __, context) => {
      return bookService.findAll();
    },
  },
};
export { resolvers };
