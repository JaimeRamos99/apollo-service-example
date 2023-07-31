import { typeDefs as Booking } from "./books";
import { typeDefs as Actor } from "./actors";
export const typeDefs = `#graphql
   ${Booking}
   ${Actor}
`;
