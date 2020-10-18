const router = require("express").Router();
const passport = require("passport");

const { ObjectId } = require("mongoose").Types;

const User = require("../models/User.model");

// REST

// REpresentational State Transfer

// Uma API é considerada RESTful quando ela adere às regras do REST

// GET => Buscar dados (cRud) READ
// JSON API especifica que a resposta para requisições GET com parametro de rota devem retornar a entidade buscada ou nada e o Status HTTP 200 OK

// CRUD

// Crud - CREATE
// cRud - Read
// crUd - Update
// cruD - Delete

// const id = req.params._id;
// console.log(req.params);

// const userId = req.user._id;
// console.log(req.user);

// const post = req.body;
// console.log(req.body);

// crUd - Update
router.patch(
  "/user",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const userId = req.user._id;
      // console.log(req.user);
      const post = req.body;
      // console.log(req.body);

      const userProfile = await User.findOneAndUpdate(
        { _id: req.user._id },
        req.body,
        {
          new: true,
        }
      );

      if (userProfile) {
        return res.status(200).json(userProfile);
      }

      return res.status(404).json({ msg: "Document not found" });
    } catch (err) {
      console.error({ error: `${err}` });
    }
  }
);

// cruD - Delete
router.delete(
  "/user",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const id = req.params._id;
      // console.log(req.params);
      const userId = req.user._id;
      // console.log(req.user);
      const post = req.body;
      // console.log(req.body);

      const userProfile = await User.findOne({ _id: ObjectId(id) }).populate(
        "posts"
      );

      const postsIDArray = userProfile.posts.map((el) => el._id);
      const commentsIDArray = userProfile.comments;

      const resultComments = await Comments.remove({ _id: commentsIDArray });
      const resultPosts = await Posts.deleteOne({ _id: postsIDArray });
      const resultUser = await User.deleteOne({ _id: userId._id });

      const postCommentRemoval = await Post.findOneAndUpdate(
        { _id: ObjectId(postId) },
        { $pull: { comments: { $in: [ObjectId(commentId)] } } }
      );

      if (userProfile) {
        return res.status(200).json(userProfile);
      }

      return res.status(404).json({ msg: "Document not found" });
    } catch (err) {
      console.error({ error: `${err}` });
    }
  }
);

module.exports = router;
