const router = require("express").Router();
const passport = require("passport");
const mongoose = require("mongoose");

const usersList = require("../configs/scripts/people/json/users.json");
const postsList = require("../configs/scripts/people/json/posts.json");

const User = require("../models/User.model");

// Receber os dados do formulario de cadastro de usuario

router.post("/addposts", async (req, res) => {
  console.log("--------------");
  try {
    // console.log(req.params);
    // console.log("--------------");
    // console.log(req.body);
    // console.log("--------------");
    console.log("Adding Posts...");

    const userList = await User.find({}, { _id: 1 });

    const resultTask = await Post.create(req.body);

    // Atualiza a lista de tarefas do projeto pra adicionar a tarefa criada
    const resultProj = await User.findOneAndUpdate(
      { _id: req.params.userid },
      { $push: { posts: resultTask._id } },
      { new: true }
    );

    if (resultTask) {
      console.log("Done!");
      console.log("--------------");
      return res.status(200).json("OK");
    }

    console.log("Not done!");
    console.log("--------------");
    return res.status(404).json({ msg: "this is a test" });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

router.post("/addusers", async (req, res) => {
  console.log("--------------");
  try {
    console.log("Adding Users...");

    const resultTask = Promise.all(
      [...new Array(10)].map(
        async (el, i) =>
          await User.create(usersList.slice(i * 100, (i + 1) * 100))
      )
    );
    // const resultTask = await User.create(usersList));

    if (resultTask) {
      console.log("Done!");
      console.log("--------------");
      return res.status(200).json("OK");
    }

    console.log("Not done!");
    console.log("--------------");
    return res.status(404).json({ msg: "this is a test" });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

module.exports = router;
