const router = require("express").Router();
const passport = require("passport");
const mongoose = require("mongoose");

const { ObjectId } = require("mongoose").Types;

const User = require("../models/User.model");
const Post = require("../models/Post.model");
const Comment = require("../models/Comment.model");

const usersList = require("../json/users.json");
const postsList = require("../json/posts.json");
const commentsList = require("../json/comments.json");

// OK 1000 people
// OK each person a few random friends
// OK each person 3 posts
// each post 50% chance of like
// OK each post 1 comment from a friend
// each comment 30% chance of like

function randomFrom(thing) {
  // return [...new Array(times)].map((el) => {
  //   Math.floor(Math.random() * thing.length);
  // });
  const randomID = Math.floor(Math.random() * thing.length);
  return thing[randomID];
}

async function addFriends(friend1, friend2) {
  const addUser1Result = await User.findOneAndUpdate(
    { _id: friend1._id },
    { $push: { friends: friend2._id } },
    { new: true }
  );
  const addUser2Result = await User.findOneAndUpdate(
    { _id: friend2._id },
    { $push: { friends: friend1._id } },
    { new: true }
  );
  return [addUser1Result, addUser2Result];
}

async function likeChance(post, chance) {}

router.post("/addcomments/:number", async (req, res) => {
  try {
    const commentsNumber = Number(req.params.number);

    const commentsQty = [...new Array(commentsNumber)];

    const allUsers = await User.find({}, { friends: 1, _id: 1 }).populate(
      "friends"
    );

    const resultTask = Promise.all(
      allUsers.map(async (user, i1) => {
        // Coleta cada amigo como objeto
        const friends = user.friends;
        // console.log(i1);
        // lista as arrays de posts de cada amigo
        const friendsPostsIDs = friends.map((friend) => friend.posts);

        // Lista em uma array unica os ID's dos posts
        const friendsPostsIDsArr = friendsPostsIDs.flat();

        // Para cada postID dos amigos, um comentário
        const result = friendsPostsIDsArr.map(async (postID, i3) => {
          // Seleciona um comentario aleatorio do JSON
          const randComment = randomFrom(commentsList);

          // Constroi o objeto do comentario
          const commentObj = { userID: user._id, comment: randComment };

          // Cria o comentario aleatório
          const commentResult = await Comment.create(commentObj);

          // Procura o post e adiciona o comentário
          const postResult = await Post.findOneAndUpdate(
            { _id: ObjectId(postID) },
            { $push: { comments: commentResult._id } },
            { new: true }
          );

          // Procura o dono do comentário e adiciona
          const userResult = await User.findOneAndUpdate(
            { _id: user._id },
            { $push: { comments: commentResult._id } },
            { new: true }
          );

          // console.log([postResult, userResult]);

          return [userResult, postResult, commentResult];
        });

        return result;
      })
    );

    if (resultTask) {
      console.log("----- Done! -----");
      return res.status(200).json("OK");
    }

    console.log("----- Not done! -----");
    return res.status(404).json({ msg: "Task failed" });
  } catch (err) {
    return res.status(500).json({ error: `${err}` });
  }
});

// ================ POSTS ================
router.post("/addposts/:number", async (req, res) => {
  try {
    const postsNumber = Number(req.params.number);

    const postsQty = [...new Array(postsNumber)];

    const allUsers = await User.find({}, { _id: 1 });

    const resultTask = Promise.all(
      allUsers.map(async (user) =>
        postsQty.map(async (el) => {
          const randPost = randomFrom(postsList);

          const resultPost = await Post.create(randPost);

          const result = await User.findOneAndUpdate(
            { _id: user._id },
            { $push: { posts: resultPost._id } },
            { new: true }
          );

          return result;
        })
      )
    );

    if (resultTask) {
      console.log("----- Done! -----");
      return res.status(200).json("OK");
    }

    console.log("----- Not done! -----");
    return res.status(404).json({ msg: "Task failed" });
  } catch (err) {
    return res.status(500).json({ error: `${err}` });
  }
});

// ================ FRIENDS ================
router.post("/addfriends/:number", async (req, res) => {
  try {
    const friendsNumber = Number(req.params.number);

    const friendsQty = [...new Array(friendsNumber)];

    const allUsers = await User.find({}, { _id: 1 });

    // [
    //   { _id: 5f8779e839410d548c17f5b2 },
    //        ...
    //   { _id: 5f8779e839410d548c17f5b3 }
    // ]

    const resultTask = Promise.all(
      allUsers.map(async (user) =>
        friendsQty.map(async (el) => {
          const randUser = randomFrom(allUsers);

          const result = addFriends(user, randUser);

          return result;
        })
      )
    );

    if (resultTask) {
      console.log("----- Done! -----");
      return res.status(200).json("OK");
    }

    console.log("----- Not done! -----");
    return res.status(404).json({ msg: "Task failed" });
  } catch (err) {
    return res.status(500).json({ error: `${err}` });
  }
});

// ================ USERS ================
router.post("/addusers", async (req, res) => {
  try {
    console.log("Adding Users...");

    const resultTask = Promise.all(
      [...new Array(10)].map(
        async (el, i) =>
          await User.create(usersList.slice(i * 100, (i + 1) * 100))
      )
    );

    if (resultTask) {
      console.log("----- Done! -----");
      return res.status(200).json("OK");
    }

    console.log("----- Not done! -----");
    return res.status(404).json({ msg: "Task failed" });
  } catch (err) {
    return res.status(500).json({ error: `${err}` });
  }
});

module.exports = router;
