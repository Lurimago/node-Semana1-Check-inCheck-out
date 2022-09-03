const express = require("express");

// Routers
const { registrationsRouter } = require("./routes/registrations.routes");

// Init our Express app
const app = express();

// Enable Express app to receive JSON data
app.use(express.json());

// Define endpoints, this appear in link on Postman in accordance verb (Get, Post, Put, Patch, Delete)
app.use("/", registrationsRouter);

// Catch non-existing endpoints
app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: `${req.method} ${req.url} does not exists in our server`,
  });
});

module.exports = { app };
