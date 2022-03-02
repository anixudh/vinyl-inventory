#! /usr/bin/env node

console.log(
  "This script populates some test artists, genre and vinyls to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true"
);

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require("async");
var Artist = require("./models/artist");
var Vinyl = require("./models/vinyl");
var Genre = require("./models/genre");

var mongoose = require("mongoose");
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

var artists = [];
var genres = [];
var vinyls = [];

function artistCreate(name, description, cb) {
  artistdetail = {
    name: name,
    description: description,
  };

  var artist = new Artist(artistdetail);

  artist.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("New Artist: " + artist);
    artists.push(artist);
    cb(null, artist);
  });
}

function genreCreate(name, description, cb) {
  var genre = new Genre({
    name: name,
    description: description,
  });

  genre.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("New Genre: " + genre);
    genres.push(genre);
    cb(null, genre);
  });
}

function vinylCreate(name, artist, genre, description, price, stock, cb) {
  vinyldetail = {
    name: name,
    artist: artist,
    genre: genre,
    description: description,
    price: price,
    stock: stock,
  };
  var vinyl = new Vinyl(vinyldetail);
  vinyl.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("New Vinyl: " + vinyl);
    vinyls.push(vinyl);
    cb(null, vinyl);
  });
}

function createGenreArtists(cb) {
  async.series(
    [
      function (callback) {
        artistCreate("Playboi Carti", " short summary carti", callback);
      },
      function (callback) {
        artistCreate("Frank Ocean", " short summary frank", callback);
      },
      function (callback) {
        artistCreate("Kanye West", " short summary ye", callback);
      },
      function (callback) {
        artistCreate("EDEN", " short summary eden", callback);
      },
      function (callback) {
        artistCreate("Mac Miller", " short summary mac", callback);
      },
      function (callback) {
        genreCreate("Hip Hop", "hip hop summary", callback);
      },
      function (callback) {
        genreCreate("R&B", " R&B summary", callback);
      },
      function (callback) {
        genreCreate("Alt/Indie", "alternative/indie summary", callback);
      },
    ],
    // optional callback
    cb
  );
}

function createVinyls(cb) {
  async.parallel(
    [
      function (callback) {
        vinylCreate(
          "Blonde",
          artists[1],
          [genres[1], genres[2]],
          "blonde description",
          119.99,
          10,
          callback
        );
      },
      function (callback) {
        vinylCreate(
          "Donda",
          artists[2],
          [genres[0]],
          "Donda description",
          299.99,
          52,
          callback
        );
      },
      function (callback) {
        vinylCreate(
          "Swimming",
          artists[4],
          [genres[0], genres[1]],
          "swimming description",
          59.99,
          15,
          callback
        );
      },
      function (callback) {
        vinylCreate(
          "no future",
          artists[3],
          [genres[2]],
          "no future description",
          29.99,
          100,
          callback
        );
      },
      function (callback) {
        vinylCreate(
          "Die Lit",
          artists[0],
          [genres[0]],
          "die lit description",
          59.99,
          12,
          callback
        );
      },
      function (callback) {
        vinylCreate(
          "channel orange",
          artists[1],
          [genres[0], genres[1]],
          "channel orange description",
          99.99,
          21,
          callback
        );
      },
      function (callback) {
        vinylCreate(
          "808s and heartbreaks",
          artists[2],
          [genres[0], genres[1]],
          "swimming description",
          129.99,
          35,
          callback
        );
      },
    ],
    // optional callback
    cb
  );
}

async.series(
  [createGenreArtists, createVinyls],
  // Optional callback
  function (err, results) {
    if (err) {
      console.log("FINAL ERR: " + err);
    } else {
      console.log("Vinyls: " + vinyls);
    }
    // All done, disconnect from database
    mongoose.connection.close();
  }
);
