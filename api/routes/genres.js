const { Genre, validate } = require("../models/productsGenre");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const genres = await Genre.find().sort("name");
  res.send(genres);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let genre = new Genre({ title: req.body.title, imgUrl: req.body.imgUrl });
  genre = await genre.save();

  res.send(genre);
});

module.exports = router;
