const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 40,
  },
  description: {
    type: String,
    required: true,
    maxlength: 100,
  },
});

ArtistSchema.virtual("url").get(() => {
  "/catalog/artist/" + this._id;
});

module.exports = mongoose.model("Artist", ArtistSchema);
