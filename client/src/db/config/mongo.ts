import { MongoClient } from "mongodb";

let uri = process.env.MONGODB_CONNECTION_URI;

if (!uri) {
  throw new Error(`Uri is invalid, uri: ${uri}`);
}

export const client = new MongoClient(uri);
