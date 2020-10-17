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

      const userProfile = await User.findOne({ _id: ObjectId(userID) });

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
