// Load environment variables from .env file
require("dotenv").config();
const express = require("express");
const path = require("path");
const { initDatabase } = require("./lib/database");
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

initDatabase(process.env.DB_URL, process.env.DB_NAME).then(() => {
  console.log("Database is ready 🎉");
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
