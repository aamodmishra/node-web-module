const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017"; // MongoDB connection URL
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    // Create or use database
    const db = client.db("mydb");
    console.log("📂 Database created: mydb");

    // Optional: create a collection
    await db.createCollection("customers");
    console.log("📁 Collection created: customers");
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
  }
}

run();
