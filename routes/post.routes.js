const router = require("express").Router();
const passport = require("passport");

const { ObjectId } = require("mongoose").Types;

const User = require("../models/User.model");
const Post = require("../models/Post.model");
const Comment = require("../models/Comment.model");

// CRUD

// Crud - CREATE
router.post(
  "/post",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const userId = req.user._id;

      const post = { ...req.body, userID: userId };

      const resultPost = await Post.create(post);

      const result = await User.findOneAndUpdate(
        { _id: userId },
        { $push: { posts: resultPost._id } },
        { new: true }
      );

      // const result = { response: "test" };
      if (resultPost) {
        return res.status(200).json(resultPost);
      }

      return res.status(404).json({ msg: "Document not found" });
    } catch (err) {
      return res.status(500).json({ error: `${err}` });
    }
  }
);

router.post(
  "/postlike/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const postID = req.params.id;

      const userID = req.user._id;
      console.log(postID);
      const postInfo = await Post.findOne({
        _id: ObjectId(postID),
        likes: ObjectId(userID),
      });
      console.log(postInfo);

      postInfo === null
        ? await Post.findOneAndUpdate(
            { _id: ObjectId(postID) },
            { $push: { likes: ObjectId(userID) } },
            { new: true }
          )
        : await Post.findOneAndUpdate(
            { _id: ObjectId(postID) },
            { $pull: { likes: ObjectId(userID) } },
            { new: true }
          );

      // const result = { response: "test" };
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

      const result = await Post.findOne({ _id: ObjectId(id) }).populate(
        "comments"
      );

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

      const userProfile = await User.findOne({ _id: ObjectId(id) }).populate(
        "posts"
      );

      const userPosts = userProfile.posts;

      if (userPosts) {
        return res.status(200).json({ posts: userPosts });
      }

      return res.status(404).json({ msg: "Document not found" });
    } catch (err) {
      return res.status(500).json({ error: `${err}` });
    }
  }
);

// cRud 3 - Read Friends Posts
router.get(
  "/friendsposts/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const profileID = req.params.id;

      const userFriends = await User.findOne({
        _id: ObjectId(profileID),
      }).populate("friends");

      const friendsPosts = userFriends.friends.map((el) => el.posts).flat();

      const postsArray = await Post.find({ _id: friendsPosts }).populate(
        "userID"
      );

      const response = { posts: postsArray };

      if (response) {
        return res.status(200).json(response);
      }

      return res.status(404).json({ msg: "Document not found" });
    } catch (err) {
      return res.status(500).json({ error: `${err}` });
    }
  }
);
// router.get(
//   "/friendsposts",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     try {

//       const id = req.user._id;

//       const userFriends = await User.findOne({ _id: ObjectId(id) }).populate(
//         "friends"
//       );

//       const friendsPosts = userFriends.friends.map((el) => el.posts).flat();

//       const postsArray = await Post.find({ _id: friendsPosts }).populate(
//         "userID"
//       );

//       const response = { posts: postsArray };

//       if (response) {
//         return res.status(200).json(response);
//       }

//       return res.status(404).json({ msg: "Document not found" });
//     } catch (err) {
//       return res.status(500).json({ error: `${err}` });
//     }
//   }
// );

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
