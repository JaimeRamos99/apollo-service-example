import { Actor } from "../../__generated__/resolvers-types";

const actors: Actor[] = [
  {
    name: "Jaime",
    id: "1",
  },
  {
    name: "Josue",
    id: "2",
  },
];

export default class ActorRepository {
  findById(id: string): Promise<Actor | null> {
    return Promise.resolve(actors.find((actor) => actor.id === id));
  }

  findAll(): Promise<Actor[]> {
    return Promise.resolve(actors);
  }
}
