const Vinyl = require("../models/vinyl");
const Genre = require("../models/genre");
const Artist = require("../models/artist");

const async = require("async");

exports.index = function (req, res) {
  async.parallel(
    {
      vinyl_count: function (callback) {
        Vinyl.countDocuments({}, callback);
      },
      vinyl_available_count: function (callback) {
        Vinyl.countDocuments({ stock: { $gt: 0 } }, callback);
      },
      artist_count: function (callback) {
        Artist.countDocuments({}, callback);
      },
      genre_count: function (callback) {
        Genre.countDocuments({}, callback);
      },
    },
    function (err, results) {
      res.render("index", { title: "Home Page", error: err, data: results });
    }
  );
};

// Display list of all vinyl.
exports.vinyl_list = function (req, res, next) {
  Vinyl.find({}, "name artist genre")
    .sort({ title: 1 })
    .populate("artist genre")
    .exec(function (err, vinyl_list) {
      if (err) return next(err);

      res.render("vinyl_list", { title: "Vinyl List", vinyl_list: vinyl_list });
    });
};

// Display detail page for a specific vinyl.
exports.vinyl_detail = function (req, res, next) {
  Vinyl.findById(req.params.id)
    .populate("artist")
    .populate("genre")
    .exec(function (err, results) {
      if (err) return next(err);

      if (results == null) {
        const err = new Error("Vinyl not found");
        err.status = 404;
        return next(err);
      }

      res.render("vinyl_detail", {
        title: "Vinyl Detail",
        vinyl: results,
      });
    });
};

// Display vinyl create form on GET.
exports.vinyl_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: vinyl create GET");
};

// Handle vinyl create on POST.
exports.vinyl_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: vinyl create POST");
};

// Display vinyl delete form on GET.
exports.vinyl_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: vinyl delete GET");
};

// Handle vinyl delete on POST.
exports.vinyl_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: vinyl delete POST");
};

// Display vinyl update form on GET.
exports.vinyl_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: vinyl update GET");
};

// Handle vinyl update on POST.
exports.vinyl_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: vinyl update POST");
};
