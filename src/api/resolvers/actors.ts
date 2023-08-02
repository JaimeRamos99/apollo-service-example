import { Resolvers, Actor } from "../../__generated__/resolvers-types";

const actors: Actor[] = [
  {
    name: "Jaime",
  },
  {
    name: "Josue",
  },
];

const resolvers: Resolvers = {
  Query: {
    actor: (_, { actorId }, context) => {
      return actors[0];
    },
  },
};
export { resolvers };
