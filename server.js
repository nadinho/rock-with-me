// Load environment variables from .env file
require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const concerts = require("./lib/routes/concerts");
const users = require("./lib/routes/users");
const auth = require("./lib/routes/auth");

const port = process.env.PORT || 8090;
const app = express();

// Parse application/json for all request
app.use(express.json());
app.use(cookieParser());

app.use("/api/concerts", concerts);
app.use("/api/auth", auth);
app.use("/api/users", users);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "client/build/index.html"));
  });
}

mongoose.connect(process.env.DB_URL, {
  dbName: process.env.DB_NAME,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on("connected", () => {
  console.log("Database is ready 🎉");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
