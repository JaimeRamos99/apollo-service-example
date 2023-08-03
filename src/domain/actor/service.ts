import ActorRepository from "./repository";

export default class ActorService {
  private readonly actorRepository: ActorRepository;

  constructor() {
    this.actorRepository = new ActorRepository();
  }

  async findAll() {
    return this.actorRepository.findAll();
  }

  async findById(id: string) {
    return this.actorRepository.findById(id);
  }
}
