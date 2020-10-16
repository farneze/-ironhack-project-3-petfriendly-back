const router = require("express").Router();
const passport = require("passport");

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
// each post 1% chance of like
// OK each post 1 comment from a friend
// each comment 1% chance of like

router.post("/addlikes/:chance", async (req, res) => {
  try {
    const likesChance = Number(req.params.chance);

    // recupera todos Usuarios, posts e comentarios
    const allUsers = await User.find({}, { _id: 1 });
    const allPosts = await Post.find({}, { _id: 1 });
    const allComments = await Comment.find({}, { _id: 1 });

    const resultTask = await Promise.all(
      allUsers.map(async (user, i) => {
        for (let post of allPosts) {
          await likedOrNot(user, "post", post, likesChance);
        }
        for (let [i, comment] of allComments.entries()) {
          await likedOrNot(user, "comment", comment, likesChance, i);
        }

        return "ok";
      })
    );

    if (resultTask) {
      return res.status(200).json("OK");
    }

    console.log("----- Not done! -----");
    return res.status(404).json({ msg: "Task failed" });
  } catch (err) {
    return res.status(500).json({ error: `${err}` });
  }
});

router.post("/addcomments/:number", async (req, res) => {
  try {
    const commentsNumber = Number(req.params.number);

    const commentsQty = [...new Array(commentsNumber)];

    const allUsers = await User.find({}, { friends: 1, _id: 1 }).populate(
      "friends"
    );

    const resultTask = await Promise.all(
      allUsers.map(async (user, i1) => {
        // Coleta cada amigo como objeto
        const friends = user.friends;
        // lista as arrays de posts de cada amigo
        const friendsPostsIDs = friends.map((friend) => friend.posts);

        // Lista em uma array unica os ID's dos posts
        const friendsPostsIDsArr = friendsPostsIDs.flat();

        // Para cada postID dos amigos, um comentário
        const result = friendsPostsIDsArr.map(async (postID, i3) => {
          // Seleciona um comentario aleatorio do JSON
          const randComment = randomFrom(commentsList);

          // Constroi o objeto do comentario
          const commentObj = {
            userID: user._id,
            postID: postID,
            comment: randComment,
          };

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

    const resultTask = await Promise.all(
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

    const resultTask = await Promise.all(
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
router.post("/addusers/:number", async (req, res) => {
  try {
    const usersQty = Number(req.params.number);

    const resultTask = await Promise.all(
      [...new Array(10)].map(
        async (el, i) =>
          await User.create(
            usersList.slice((i * usersQty) / 10, ((i + 1) * usersQty) / 10)
          )
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

// ================ Get Posts List ================
router.get(
  "/listposts",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      console.log(req.user);
      const userId = req.user._id;
      console.log("UserID => " + userId);
      const result = await User.findOne({ _id: ObjectId(userId) });

      // const result = { user: req.user };
      if (result) {
        return res.status(200).json(result.posts);
      }

      return res.status(404).json({ msg: "Document not found" });
    } catch (err) {
      return res.status(500).json({ error: `${err}` });
    }
  }
);

// ============= FUNCTIONS =============
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

async function likedOrNot(user, itemType, item, chance, i) {
  // Se o random for menor que a chance...
  if (Math.random() < chance) {
    // E o tipo do ID for post
    if (itemType == "post") {
      // Acrescenta o ID do usuário no array like
      const result = await Post.findOneAndUpdate(
        { _id: item._id },
        { $push: { likes: user._id } },
        { new: true }
      );
      return result;
    }

    // E o tipo do ID for comment
    if (itemType == "comment") {
      // Acrescenta o ID do usuário no array like
      const result = await Comment.findOneAndUpdate(
        { _id: item._id },
        { $push: { likes: user._id } },
        { new: true }
      );
      return result;
    }
    return "No item type match";
  } else {
    return "Not this time!";
  }
}

module.exports = router;
