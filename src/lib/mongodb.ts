import { MongoClient, type Collection } from "mongodb";

let clientPromise: Promise<MongoClient> | null = null;

function getClientPromise(): Promise<MongoClient> {
  if (clientPromise) return clientPromise;
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not set");
  const client = new MongoClient(uri);
  clientPromise = client.connect();
  return clientPromise;
}

export async function getCollection(name: string): Promise<Collection> {
  const client = await getClientPromise();
  const db = client.db(process.env.MONGODB_DB || "portfolio");
  return db.collection(name);
}
