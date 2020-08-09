const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("Welcome to the main root page");
  res.send("You are at the root page!");
});

app.listen(PORT, () => {
  console.log(`Connected to https://localhost:${PORT}`);
});
