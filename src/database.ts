import { MongoClient } from "mongodb";
import { ServerApiVersion } from "mongodb";
const uri =
  "mongodb+srv://JhonG:1522094@cluster0.crfdlcj.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function connect() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    console.log(">>>> Database Connected")
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export default connect;
