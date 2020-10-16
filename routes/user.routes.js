const router = require("express").Router();
const passport = require("passport");

const { ObjectId } = require("mongoose").Types;

const User = require("../models/User.model");

// CRUD

// Crud - CREATE
// cRud - Read
// crUd - Update
// cruD - Delete

// cRud - Read
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.json({
      message: "You made it to the secure route",
      user: req.user,
      token: req.query.secret_token,
    });
  }
);

router.get(
  "/userinfo",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const userID = req.user._id;
      console.log(userID);

      const userProfile = await User.findOne({ _id: ObjectId(userID) });

      console.log(await userProfile);

      // await postsArray;

      if (userProfile) {
        return res.status(200).json(userProfile);
      }

      return res.status(404).json({ msg: "Document not found" });
    } catch (err) {
      return res.status(500).json({ error: `${err}` });
    }
  }
);

module.exports = router;
