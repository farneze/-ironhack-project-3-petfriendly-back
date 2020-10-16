const router = require("express").Router();
const passport = require("passport");

const { ObjectId } = require("mongoose").Types;

const User = require("../models/User.model");
const Post = require("../models/Post.model");
const Comment = require("../models/Comment.model");

// Crud - CREATE
router.post(
  "/comment",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      // const id = req.params._id;
      // console.log(req.params);

      const userID = req.user._id;
      // console.log(req.user);

      const comment = req.body.comment;
      const postID = req.body.postID;
      // console.log(req.body);

      const commentObj = {
        userID: userID,
        postID: postID,
        comment: comment,
      };

      // Cria o comentario
      const commentResult = await Comment.create(commentObj);

      const postResult = await Post.findOneAndUpdate(
        { _id: postID },
        { $push: { comments: commentResult._id } },
        { new: true }
      );

      const userResult = await User.findOneAndUpdate(
        { _id: userID },
        { $push: { comments: commentResult._id } },
        { new: true }
      );

      // const commentResult = { response: "etest" };
      if (commentResult) {
        return res.status(200).json(commentResult);
      }

      return res.status(404).json({ msg: "Document not found" });
    } catch (err) {
      return res.status(500).json({ error: `${err}` });
    }
  }
);

// cruD - Delete One
router.delete(
  "/comment/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const commentId = req.params.id;
      const userId = req.user._id;
      console.log(userId);

      // Gets post in which comment is located
      const postOfComment = await Post.findOne({
        comments: ObjectId(commentId),
      });

      const postId = postOfComment._id;

      // Deletes a comment from commentDB...
      const commentRemoval = await Comment.deleteOne({
        _id: ObjectId(commentId),
      });
      // ... from the post it is located...
      const postCommentRemoval = await Post.findOneAndUpdate(
        { _id: ObjectId(postId) },
        { $pull: { comments: { $in: [ObjectId(commentId)] } } }
      );
      // ... and the from the comments list of the user who created it.
      const userCommentRemoval = await User.findOneAndUpdate(
        { _id: ObjectId(userId) },
        { $pull: { comments: { $in: [ObjectId(commentId)] } } }
      );

      const result = commentRemoval;
      // const result = { response: "test" };
      if (result) {
        return res.status(200).json(commentRemoval);
      }

      return res.status(404).json({ msg: "Document not found" });
    } catch (err) {
      return res.status(500).json({ error: `${err}` });
    }
  }
);
// APIs RESTful precisam ser Stateless (Não guarda nenhum state no servidor)

module.exports = router;
