const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
      // Sintaxe de mensagem de erro customizada pra quando a regra do Schema não for satisfeita
      required: [true, "Name is required."],
    },
    passwordHash: {
      type: String,
      trim: true,
      required: [true, "Password is required."],
    },
    image: {
      type: String,
      trim: true,
    },
    about: {
      type: String,
      trim: true,
      default: "My description",
    },
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
    // last: { type: Date, default: Date.now },
    // friendrequests: [{ type: Schema.Types.ObjectId, ref: "User" }],
    // pets: [String],
  },
  { timestamps: true }
);

module.exports = model("User", UserSchema);
