// Load environment variables from .env file
require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const concerts = require("./lib/routes/concerts");

const port = process.env.PORT || 8090;
const app = express();

// Parse application/json for all request
app.use(express.json());

app.use("/api/concerts", concerts);

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

// mongoose.connect(process.env.MONGO_URL,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => console.log("Database is ready 🎉");
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
