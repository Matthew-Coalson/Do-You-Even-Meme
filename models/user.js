const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memeSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    memes: [memeSchema],
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
