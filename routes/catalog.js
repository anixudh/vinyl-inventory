var express = require("express");
var router = express.Router();

// Require controller modules.
var vinyl_controller = require("../controllers/vinylController");
var artist_controller = require("../controllers/artistController");
var genre_controller = require("../controllers/genreController");

/// vinyl ROUTES ///

// GET catalog home page.
router.get("/", vinyl_controller.index);

// GET request for creating a vinyl. NOTE This must come before routes that display vinyl (uses id).
router.get("/vinyl/create", vinyl_controller.vinyl_create_get);

// POST request for creating vinyl.
router.post("/vinyl/create", vinyl_controller.vinyl_create_post);

// GET request to delete vinyl.
router.get("/vinyl/:id/delete", vinyl_controller.vinyl_delete_get);

// POST request to delete vinyl.
router.post("/vinyl/:id/delete", vinyl_controller.vinyl_delete_post);

// GET request to update vinyl.
router.get("/vinyl/:id/update", vinyl_controller.vinyl_update_get);

// POST request to update vinyl.
router.post("/vinyl/:id/update", vinyl_controller.vinyl_update_post);

// GET request for one vinyl.
router.get("/vinyl/:id", vinyl_controller.vinyl_detail);

// GET request for list of all vinyl items.
router.get("/vinyls", vinyl_controller.vinyl_list);

/// artist ROUTES ///

// GET request for creating artist. NOTE This must come before route for id (i.e. display artist).
router.get("/artist/create", artist_controller.artist_create_get);

// POST request for creating artist.
router.post("/artist/create", artist_controller.artist_create_post);

// GET request to delete artist.
router.get("/artist/:id/delete", artist_controller.artist_delete_get);

// POST request to delete artist.
router.post("/artist/:id/delete", artist_controller.artist_delete_post);

// GET request to update artist.
router.get("/artist/:id/update", artist_controller.artist_update_get);

// POST request to update artist.
router.post("/artist/:id/update", artist_controller.artist_update_post);

// GET request for one artist.
router.get("/artist/:id", artist_controller.artist_detail);

// GET request for list of all artists.
router.get("/artists", artist_controller.artist_list);

/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get("/genre/create", genre_controller.genre_create_get);

//POST request for creating Genre.
router.post("/genre/create", genre_controller.genre_create_post);

// GET request to delete Genre.
router.get("/genre/:id/delete", genre_controller.genre_delete_get);

// POST request to delete Genre.
router.post("/genre/:id/delete", genre_controller.genre_delete_post);

// GET request to update Genre.
router.get("/genre/:id/update", genre_controller.genre_update_get);

// POST request to update Genre.
router.post("/genre/:id/update", genre_controller.genre_update_post);

// GET request for one Genre.
router.get("/genre/:id", genre_controller.genre_detail);

// GET request for list of all Genre.
router.get("/genres", genre_controller.genre_list);

module.exports = router;
