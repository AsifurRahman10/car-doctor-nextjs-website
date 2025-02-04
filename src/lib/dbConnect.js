import { MongoClient, ServerApiVersion } from 'mongodb';

export const collectionListObj = {
    serviceCollection: "services",
    userCollection: "user"
}

export const dbConnect = (collectionName) => {
    const uri = process.env.DB_URI;
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    return client.db(process.env.DB_NAME).collection(collectionName)
}
