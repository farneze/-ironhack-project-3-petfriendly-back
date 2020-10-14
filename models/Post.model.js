const { Schema, model } = require("mongoose");

const PostSchema = new Schema(
  {
    image: {
      type: String,
      required: [true, "Picture is required."],
    },
    petName: {
      type: String,
      required: [true, "Pet name is required."],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required."],
      trim: true,
    },
    adoption: String,
    tag: [String],
    likes: [String],
    comments: [String],
  },
  { timestamps: true }
);

module.exports = model("Post", PostSchema);
