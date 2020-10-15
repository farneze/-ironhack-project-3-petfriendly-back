const { Schema, model } = require("mongoose");

const CommentSchema = new Schema(
  {
    userID: { type: Schema.Types.ObjectId, ref: "User" },
    comment: {
      type: String,
      required: [true, "Comment is required."],
      trim: true,
    },
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

module.exports = model("Comment", CommentSchema);
