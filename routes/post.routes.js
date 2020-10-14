const router = require("express").Router();
const passport = require("passport");

const { ObjectId } = require("mongoose").Types;

const User = require("../models/User.model");
const Post = require("../models/Post.model");

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
  "/post/:userid",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      // O próprio json
      console.log(req.body);

      const resultTask = await Post.create(req.body);

      // Atualiza a lista de tarefas do projeto pra adicionar a tarefa criada
      const resultProj = await User.findOneAndUpdate(
        { _id: req.params.userid },
        { $push: { posts: resultTask._id } },
        { new: true }
      );

      console.log(resultProj);
      return res.status(201).json({ created: { resultTask, resultProj } });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
);

// cRud
router.get(
  "/post/:userid/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { id } = req.params;

      const result = await Task.findOne({ _id: id }).populate("tasks");

      if (result) {
        return res.status(200).json(result);
      }

      return res.status(404).json({ msg: "Document not found" });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
);

// cruD

// APIs RESTful precisam ser Stateless (Não guarda nenhum state no servidor)

module.exports = router;
