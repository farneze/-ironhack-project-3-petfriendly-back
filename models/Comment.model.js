const { Schema, model } = require("mongoose");

const CommentSchema = new Schema(
  {
    userID: {
      type: String,
      required: [true, "UserID is required."],
    },
    comment: {
      type: String,
      required: [true, "Comment is required."],
      trim: true,
    },
    Likes: [String],
  },
  { timestamps: true }
);

module.exports = model("Comment", CommentSchema);
