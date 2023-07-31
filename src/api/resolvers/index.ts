import merge from "lodash/merge";
import { resolvers as Book } from "./books";
import { resolvers as Actor } from "./actors";

const resolvers = merge(Book, Actor);
export default resolvers;
