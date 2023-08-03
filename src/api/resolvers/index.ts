import { composeResolvers } from "@graphql-tools/resolvers-composition";
import merge from "lodash/merge";
import { resolvers as Book } from "./books";
import { resolvers as Actor } from "./actors";
import { GraphQLError } from "graphql";
import { ErrorName, CustomErrorExtentions } from "../../common";

const resolvers = merge(Book, Actor);

const isAuthenticated = () => (next) => (root, args, context, info) => {
  if (!context.user.brand_id) {
    throw new GraphQLError(ErrorName.MISSING_BRAND_ID, {
      extensions: CustomErrorExtentions.MISSING_BRAND_ID,
    });
  }

  return next(root, args, context, info);
};

const hasRole = (role: string) => (next) => (root, args, context, info) => {
  if (context.user.role !== role) {
    throw new GraphQLError(ErrorName.NO_AUTH_TOKEN, {
      extensions: CustomErrorExtentions.NO_AUTH_TOKEN,
    });
  }

  return next(root, args, context, info);
};

const resolversComposition = {
  "Query.books": [isAuthenticated(), hasRole("EDITOR")],
};

const composedResolvers = composeResolvers(resolvers, resolversComposition);

export default composedResolvers;
