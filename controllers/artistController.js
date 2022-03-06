const Artist = require("../models/artist");

// Display list of all artist.
exports.artist_list = function (req, res, next) {
  Artist.find({}, "name")
    .sort({ name: 1 })
    .exec(function (err, artist_list) {
      if (err) return next(err);

      res.render("artist_list", {
        title: "Artist List",
        artist_list: artist_list,
      });
    });
};

// Display detail page for a specific artist.
exports.artist_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: artist detail: " + req.params.id);
};

// Display artist create form on GET.
exports.artist_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: artist create GET");
};

// Handle artist create on POST.
exports.artist_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: artist create POST");
};

// Display artist delete form on GET.
exports.artist_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: artist delete GET");
};

// Handle artist delete on POST.
exports.artist_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: artist delete POST");
};

// Display artist update form on GET.
exports.artist_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: artist update GET");
};

// Handle artist update on POST.
exports.artist_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: artist update POST");
};
