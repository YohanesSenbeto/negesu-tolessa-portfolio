import { MongoClient } from "mongodb";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dirname, "..", ".env.local");

for (const line of readFileSync(envPath, "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) process.env[m[1]] = m[2].replace(/^"|"$/g, "");
}

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "negesu_portfolio";

const client = new MongoClient(uri);
const db = client.db(dbName);
const col = db.collection("analytics_events");

const total = await col.countDocuments();
console.log(`Total events: ${total}\n`);

console.log(
  "By type:",
  await col
    .aggregate([{ $group: { _id: "$type", n: { $sum: 1 } } }])
    .toArray(),
);

console.log(
  "Top paths:",
  await col
    .aggregate([
      { $group: { _id: "$path", n: { $sum: 1 } } },
      { $sort: { n: -1 } },
      { $limit: 10 },
    ])
    .toArray(),
);

console.log(
  "Top countries:",
  await col
    .aggregate([
      { $group: { _id: "$geo.country", n: { $sum: 1 } } },
      { $sort: { n: -1 } },
      { $limit: 10 },
    ])
    .toArray(),
);

const orgs = await col
  .aggregate([
    { $group: { _id: "$network.org", n: { $sum: 1 } } },
    { $sort: { n: -1 } },
    { $limit: 10 },
  ])
  .toArray();
console.log(
  "Top organizations:",
  orgs.filter((o) => o._id),
);

console.log("\nRecent 5:");
for (const d of await col.find().sort({ createdAt: -1 }).limit(5).toArray()) {
  console.log(JSON.stringify(d, null, 2));
}

const msgs = db.collection("contact_messages");
const msgCount = await msgs.countDocuments();
console.log(`\n--- Contact messages: ${msgCount} ---`);
for (const m of await msgs
  .find()
  .sort({ createdAt: -1 })
  .limit(5)
  .toArray()) {
  console.log(
    `[${m.createdAt?.toISOString?.() ?? ""}] ${m.name} <${m.email}>: ${m.message?.slice(0, 120)}`,
  );
}

await client.close();
