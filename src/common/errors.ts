import { GraphQLErrorExtensions } from "graphql";

export enum ErrorName {
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

interface ExtensionOptions extends GraphQLErrorExtensions {
  code: ErrorName;
  severity: ErrorSeverity;
}

export const CustomErrorExtentions: Record<ErrorName, ExtensionOptions> = {
  MISSING_BRAND_ID: {
    code: ErrorName.MISSING_BRAND_ID,
    severity: ErrorSeverity.ERROR,
  },
  NO_AUTH_TOKEN: {
    code: ErrorName.NO_AUTH_TOKEN,
    severity: ErrorSeverity.ERROR,
  },
};
