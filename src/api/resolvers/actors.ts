const actors = [
  {
    name: "Jaime",
  },
  {
    name: "Josue",
  },
];

const resolvers = {
  Query: {
    actors: () => actors,
  },
};
export { resolvers };
