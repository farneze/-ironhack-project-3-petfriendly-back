const router = require("express").Router();
const passport = require("passport");

const { ObjectId } = require("mongoose").Types;

const User = require("../models/User.model");
const Post = require("../models/Post.model");

router.get("/test", async (req, res) => {
  try {
    // const { id } = req.params;
    console.log(req.params);
    console.log("------------");

    // const resultTask = await Post.create(req.body);
    console.log(req.body);

    // const result = await Task.findOne({ _id: id }).populate("tasks");

    // if (result) {
    //   return res.status(200).json(result);
    // }

    // return res.status(404).json({ msg: "Document not found" });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

module.exports = router;
