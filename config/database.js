const mongoose = require("mongoose");

mongoose.connect(
  process.env.DATABASE_URL || "mongodb:/localhost/do-you-even-meme",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

const db = mongoose.connection;

db.on("connected", () => {
  console.log(`Mongoose connect to ${db.host}:${db.port}`);
});
