import BookRepository from "./repository";

export default class ActorService {
  private readonly bookRepository: BookRepository;

  constructor() {
    this.bookRepository = new BookRepository();
  }

  async findAll() {
    return this.bookRepository.findAll();
  }

  async findById(id: string) {
    return this.bookRepository.findById(id);
  }
}
