import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { mocks, CustomErrorExtentions } from './common'
import resolvers from "./api/resolvers";
import { GraphQLError } from "graphql";


const typeDefs = loadSchemaSync('./src/api/schemas/*.graphql', {
  loaders: [new GraphQLFileLoader()],
});

const server = new ApolloServer({
  schema: addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    mocks,
    preserveResolvers: true,
  }),
});

(async () => {
  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => {
      const brand_id = req.headers.brand_id;
      const user = { brand_id };
      if (!brand_id) {
        throw new GraphQLError("No brand_id", {
          extensions: CustomErrorExtentions.MISSING_BRAND_ID,
        });
      }
      return { user };
    },
    listen: { port: 4000 },
  });
  console.log(`🚀 Server ready at: ${url}`);
})();
