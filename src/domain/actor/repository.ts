import { Actor } from "../../__generated__/resolvers-types";
import { Repository } from "../../types";

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

export default class ActorRepository implements Repository<Actor> {
    findById(id: string): Promise<Actor | null> {
        return Promise.resolve(actors.find((actor) => actor.id === id));
    }

    findAll(): Promise<Actor[]> {
        return Promise.resolve(actors);
    }

    create(entity: Partial<Actor>): Promise<Actor> {
        return null;
    }

    update(id: string, entity: Partial<Actor>): Promise<Actor | null> {
        return null;
    }

    delete(id: string): Promise<boolean> {
        return null;
    }
    
    findOneByName(name: string): Promise<Actor | null> {
        return null;
    }
}