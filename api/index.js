const mongoose = require("mongoose");
const express = require("express");
const app = express();
const genres = require("./routes/genres");

mongoose
  .connect("mongodb://localhost/eshope")
  .then(() => console.log("Connected to mongodb..."))
  .catch(err => console.log("Could not connect to MongoDB..."));

app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/genres", genres);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
