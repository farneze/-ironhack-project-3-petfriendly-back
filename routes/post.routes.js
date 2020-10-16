const router = require("express").Router();
const passport = require("passport");

const { ObjectId } = require("mongoose").Types;

const User = require("../models/User.model");
const Post = require("../models/Post.model");
const Comment = require("../models/Comment.model");

// REST

// REpresentational State Transfer

// Uma API é considerada RESTful quando ela adere às regras do REST

// GET => Buscar dados (cRud) READ
// JSON API especifica que a resposta para requisições GET sem parametro de rota devem retornar uma lista de todas as entidades e o Status HTTP 200 OK
// router.get("/task", async (req, res) => {
//   try {
//     const result = await Task.find().populate("tasks");

//     return res.status(200).json(result);
//   } catch (err) {
//     return res.status(500).json({ error: err });
//   }
// });

// JSON API especifica que a resposta para requisições GET com parametro de rota devem retornar a entidade buscada ou nada e o Status HTTP 200 OK

// CRUD

// Crud - CREATE
router.post(
  "/post",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      // const id = req.params._id;
      // console.log(req.params);

      const userId = req.user._id;
      // console.log(req.user);

      const post = req.body;
      // console.log(req.body);

      const resultPost = await Post.create(post);
      const result = await User.findOneAndUpdate(
        { _id: userId },
        { $push: { posts: resultPost._id } },
        { new: true }
      );

      // const result = { response: "etest" };
      if (resultPost) {
        return res.status(200).json(resultPost);
      }

      return res.status(404).json({ msg: "Document not found" });
    } catch (err) {
      return res.status(500).json({ error: `${err}` });
    }
  }
);

// cRud 1 - Read One, brings comments
router.get(
  "/post/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { id } = req.params;
      // const id = req.user._id;
      // console.log(id);

      const result = await Post.findOne({ _id: ObjectId(id) }).populate(
        "comments"
      );

      // const result = { response: id };
      if (result) {
        return res.status(200).json(result);
      }

      return res.status(404).json({ msg: "Document not found" });
    } catch (err) {
      return res.status(500).json({ error: `${err}` });
    }
  }
);

// cRud 2 - Read Many
router.get(
  "/post",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const id = req.user._id;
      console.log(id);

      const result = await User.findOne({ _id: ObjectId(id) }).populate(
        "posts"
      );
      // const result = { user: req.user };
      if (result) {
        return res.status(200).json(result);
      }

      return res.status(404).json({ msg: "Document not found" });
    } catch (err) {
      return res.status(500).json({ error: `${err}` });
    }
  }
);

// cRud 3 - Read Friends Posts
router.get(
  "/post",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const id = req.user._id;

      const result = await User.findOne({ _id: ObjectId(id) })
        .populate("friends")
        .populate("posts");

      // const result = { user: req.user };
      if (result) {
        return res.status(200).json(result);
      }

      return res.status(404).json({ msg: "Document not found" });
    } catch (err) {
      return res.status(500).json({ error: `${err}` });
    }
  }
);

// cruD - Delete One
router.delete(
  "/post/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const postId = req.params.id;
      const userId = req.user._id;

      // Gets entire post and its comments
      const allPostComments = await Post.findOne({
        _id: ObjectId(postId),
      }).populate("comments");

      // Deletes...
      const commResult = await allPostComments.comments.map(async (el) => {
        // ...a comment from commentDB...
        const commentRemoval = await Comment.deleteOne({
          _id: ObjectId(el._id),
        });
        // ... and the from the comments list of the user who created it
        const userCommentRemoval = await User.findOneAndUpdate(
          { _id: ObjectId(el.userID) },
          { $pull: { comments: { $in: [ObjectId(el._id)] } } }
        );
        return "Removed comments from post!";
      });

      // Deletes post
      const result = await Post.deleteOne({ _id: ObjectId(postId) });

      // Remove post from user profile
      const updatedProject = await User.findOneAndUpdate(
        { _id: userId },
        { $pull: { posts: { $in: [ObjectId(postId)] } } }
      );

      // const result = { response: "test" };
      if (result) {
        return res.status(200).json(allPostComments);
      }

      return res.status(404).json({ msg: "Document not found" });
    } catch (err) {
      return res.status(500).json({ error: `${err}` });
    }
  }
);
// APIs RESTful precisam ser Stateless (Não guarda nenhum state no servidor)

module.exports = router;
