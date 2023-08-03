import { Resolvers } from "../../__generated__/resolvers-types";
import ActorService from '../../domain/actor/service'

const actorService = new ActorService();

const resolvers: Resolvers = {
  Query: {
    actorById: async (_, { actorId }, context) => {
      return await actorService.findById(actorId);
    },

    actors: async (_, __, context) => {
      return await actorService.findAll();
    }
  },
};

export { resolvers };
