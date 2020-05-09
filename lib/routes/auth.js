const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const { validateRegistration, validateLogin } = require("../validation");
const verifyToken = require("./verifyToken");

router.post("/register", async (request, response) => {
  try {
    const { name, email, password } = request.body;
    const { error } = validateRegistration(request.body);

    if (error) return response.status(403).send(error.message);

    const emailExists = Boolean(await User.findOne({ email: email }));
    if (emailExists)
      return response
        .status(400)
        .send("Diese E-Mail-Adresse existiert bereits");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const createdUser = await user.save();
    response.send({ userId: createdUser._id });
  } catch (error) {
    console.error(error);
    response.status(400).send(error.message);
  }
});

router.post("/login", async (request, response) => {
  const { email, password } = request.body;
  const cookieOptions = {
    sameSite: true,
    httpOnly: true,
  };

  try {
    const { error } = validateLogin(request.body);

    if (error) return response.status(403).send(error.message);
    const user = await User.findOne({ email: email });
    if (!user) return response.status(400).send("E-Mail oder Passwort falsch");

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return response.status(400).send("Falsches Passwort");

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    response.cookie("access_token", token, cookieOptions).status(200).send({
      userId: user._id,
      email: user.email,
    });
  } catch (error) {
    console.error(error);
    response.status(400).send(error.message);
  }
});

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
