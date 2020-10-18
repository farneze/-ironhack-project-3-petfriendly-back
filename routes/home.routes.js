const router = require("express").Router();
const passport = require("passport");

const { ObjectId } = require("mongoose").Types;

const User = require("../models/User.model");

router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const userID = req.user._id;

      const userProfile = await User.findOne({
        _id: ObjectId(userID),
      }); //.populate("friends");

      if (userProfile) {
        return res.status(200).json(userProfile);
      }

      return res.status(404).json({ msg: "Document not found" });
    } catch (err) {
      return res.status(500).json({ error: `${err}` });
    }
  }
);

router.get(
  "/userfriends",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const userID = req.user._id;

      const userProfile = await User.findOne({
        _id: ObjectId(userID),
      }).populate("friends");

      const userFriends = userProfile.friends;

      const body = userFriends
        .map((el) => [{ _id: el._id, name: el.name, image: el.image }])
        .flat();

      if (body) {
        return res.status(200).json({ friends: body });
      }

      return res.status(404).json({ msg: "Document not found" });
    } catch (err) {
      return res.status(500).json({ error: `${err}` });
    }
  }
);

router.get(
  "/search",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    // const id = req.params._id;
    console.log(req.params);
    console.log("---------");
    // const userId = req.user._id;
    console.log(req.user);
    console.log("---------");
    // const post = req.body;
    console.log(req.body);

    try {
      // const userID = req.user._id;

      // const userProfile = await User.find({
      //   name: ObjectId(userID),
      // }).populate("friends");

      // const userFriends = userProfile.friends;

      // const body = userFriends
      //   .map((el) => [{ _id: el._id, name: el.name, image: el.image }])
      //   .flat();

      if (req.body) {
        return res.status(200).json({ friends: body });
      }

      return res.status(404).json({ msg: "Document not found" });
    } catch (err) {
      return res.status(500).json({ error: `${err}` });
    }
  }
);

module.exports = router;
