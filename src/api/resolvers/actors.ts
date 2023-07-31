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
    actors: (_, __, context) => actors,
  },
};
export { resolvers };
