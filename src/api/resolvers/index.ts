import { composeResolvers } from "@graphql-tools/resolvers-composition";
import merge from "lodash/merge";
import { resolvers as Book } from "./books";
import { resolvers as Actor } from "./actors";
import { ErrorCodes, createGraphQLError } from "../../common";

const resolvers = merge(Book, Actor);

const isAuthenticated = () => (next) => (root, args, context, info) => {
  if (!context.user.brand_id) {
    throw createGraphQLError(ErrorCodes.MISSING_BRAND_ID);
  }

  return next(root, args, context, info);
};

const hasRole = (role: string) => (next) => (root, args, context, info) => {
  if (context.user.role !== role) {
    throw createGraphQLError(ErrorCodes.NO_AUTH_TOKEN);
  }

  return next(root, args, context, info);
};

const resolversComposition = {
  "Query.books": [isAuthenticated(), hasRole("EDITOR")],
};

const composedResolvers = composeResolvers(resolvers, resolversComposition);

export default composedResolvers;
