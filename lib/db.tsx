import { MongoClient, Db, MongoClientOptions } from 'mongodb';

let cachedClient: MongoClient;
let cachedDb: Db;

export async function connectToDatabase() {
  const uri = process.env.MONGODB_URI || 'default_value';

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as MongoClientOptions);

  const db = client.db();

  cachedClient = client;
  cachedDb = db;

  return client;
}

export function getDb() {
  if (!cachedDb) {
    throw new Error('Database not initialized');
  }

  return cachedDb;
}
