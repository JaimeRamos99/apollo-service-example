import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { mocks, createGraphQLError, ErrorCodes } from "./common";
import resolvers from "./api/resolvers";

const typeDefs = loadSchemaSync("./src/api/schemas/*.graphql", {
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
      const { brand_id, role } = req.headers;
      const user = { brand_id, role };
      if (!brand_id) {
        throw createGraphQLError(ErrorCodes.MISSING_BRAND_ID);
      }
      return { user };
    },
    listen: { port: 4000 },
  });
  console.log(`🚀 Server ready at: ${url}`);
})();
