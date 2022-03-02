const Vinyl = require("../models/vinyl");

exports.index = function (req, res) {
  res.send("NOT IMPLEMENTED: Site Home Page");
};

// Display list of all vinyl.
exports.vinyl_list = function (req, res) {
  res.send("NOT IMPLEMENTED: vinyl list");
};

// Display detail page for a specific vinyl.
exports.vinyl_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: vinyl detail: " + req.params.id);
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
