import { Book } from "../../__generated__/resolvers-types";

const books: Book[] = [
  {
    id: "1",
    title: "The Awakening",
  },
  {
    id: "2",
    title: "City of Glass",
  },
];

export default class BookRepository {
  findById(id: string): Promise<Book | null> {
    return Promise.resolve(books.find((book) => book.id === id));
  }

  findAll(): Promise<Book[]> {
    return Promise.resolve(books);
  }
}
