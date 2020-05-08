const router = require("express").Router();
const User = require("../models/userSchema");

const verifyToken = require("./verifyToken");

router.get("/", verifyToken, (request, response) => {
  try {
    response.send(request.user);
  } catch (error) {
    response.status(400).send(error.message);
  }
});

router.get("/:id", async (request, response) => {
  const userId = request.params.id;
  try {
    const user = await User.findById(userId);
    response.send(user);
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = router;
