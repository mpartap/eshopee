const joi = require("joi");
const mongoose = require("mongoose");

const Genre = mongoose.model(
  "Genre",
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    imgUrl: {
      type: String,
      default: false
    },
    description: {
      type: String,
      required: false,
      minlength: 5,
      maxlength: 100
    }
  })
);

function validateGenre(genre) {
  const schema = {
    title: joi
      .string()
      .min(5)
      .required(),
    imgUrl: joi.string(),
    description: joi
      .string()
      .min(5)
      .max(100)
  };
  return joi.validate(genre, schema);
}

exports.Genre = Genre;
exports.validate = validateGenre;
