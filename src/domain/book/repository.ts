import { Book } from "../../__generated__/resolvers-types";
import { Repository } from "../../types";

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

export default class BookRepository implements Repository<Book> {
  findById(id: string): Promise<Book | null> {
    return Promise.resolve(books.find((book) => book.id === id));
  }

  findAll(): Promise<Book[]> {
    return Promise.resolve(books);
  }

  create(entity: Partial<Book>): Promise<Book> {
    return null;
  }

  update(id: string, entity: Partial<Book>): Promise<Book | null> {
    return null;
  }

  delete(id: string): Promise<boolean> {
    return null;
  }

  findOneByName(name: string): Promise<Book | null> {
    return null;
  }
}
