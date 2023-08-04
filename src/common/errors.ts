import {
  GraphQLError,
  GraphQLErrorExtensions,
  GraphQLErrorOptions,
} from "graphql";

export enum ErrorCodes {
  MISSING_BRAND_ID = "MISSING_BRAND_ID",
  NO_AUTH_TOKEN = "NO_AUTH_TOKEN",
}

enum ErrorSeverity {
  CRITICAL = "CRITICAL",
  ERROR = "ERROR",
  WARNING = "WARNING",
  INFO = "INFO",
  DEBUG = "DEBUG",
}

type GraphqlQLErrorType = {
  message: string;
  options: GraphQLErrorOptions;
};

export const CustomErrors: Record<ErrorCodes, GraphqlQLErrorType> = {
  MISSING_BRAND_ID: {
    message: ErrorCodes.MISSING_BRAND_ID,
    options: {
      extensions: {
        code: ErrorCodes.MISSING_BRAND_ID,
        severity: ErrorSeverity.ERROR,
      },
    },
  },
  NO_AUTH_TOKEN: {
    message: ErrorCodes.NO_AUTH_TOKEN,
    options: {
      extensions: {
        code: ErrorCodes.NO_AUTH_TOKEN,
        severity: ErrorSeverity.ERROR,
      },
    },
  },
};

export const createGraphQLError = (
  errorName: ErrorCodes,
  options?: GraphQLErrorExtensions,
): GraphQLError => {
  const message = ErrorCodes[errorName];
  const extensions = {
    code: errorName,
    severity: ErrorSeverity.ERROR,
  };
  return new GraphQLError(message, {
    extensions: {
      ...extensions,
      ...options,
    },
  });
};
