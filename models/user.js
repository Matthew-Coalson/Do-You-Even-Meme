const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;
const SALT_ROUNDS = 6;

const memeSchema = new Schema(
  {
    url: {
      type: String,
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
userSchema.set("toJSON", {
  transform: function (doc, ret) {
    delete ret.password;
    return ret;
  },
});
userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = function (tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model("User", userSchema);
