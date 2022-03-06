const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const VinylSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: "Artist",
  },
  genre: [
    {
      type: Schema.Types.ObjectId,
      ref: "Genre",
    },
  ],
  description: {
    type: String,
    required: true,
    maxlength: 100,
  },
  price: {
    type: Schema.Types.Decimal128,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
});

VinylSchema.virtual("url").get(function () {
  return "/catalog/vinyl/" + this._id;
});

module.exports = mongoose.model("Vinyl", VinylSchema);
