const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const PORT = 8000;

const user = {
  name: "John Doe",
  age: 26,
  location: "Hyd",
};

app.get("/api/users", (req, res) => {
  res.json(user);
});

app.listen(PORT);
