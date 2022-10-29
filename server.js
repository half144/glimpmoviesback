const express = require("express");
const app = express();
const db = require("./db/dataMovies");
port = process.env.PORT || 80;

const allMoviesLowerCase = db.allItems.map((movie) => ({
  name: String(movie.name).toLowerCase(),
  id: movie.id,
  type: movie.type,
  poster: movie.poster,
}));

app.use(cors({ origin: "https://glimp-half144.vercel.app" }));

app.listen(port, () => {
  console.log("API ONLINE");
});

app.get("/action", (req, res) => {
  res.json(db.action.slice(0, 80));
});

app.get("/romance", (req, res) => {
  res.json(db.romance.slice(0, 80));
});

app.get("/adventure", (req, res) => {
  res.json(db.adventure.slice(0, 80));
});

app.get("/crime", (req, res) => {
  res.json(db.crime.slice(0, 80));
});

app.get("/comedy", (req, res) => {
  res.json(db.comedy.slice(0, 80));
});

app.get("/drama", (req, res) => {
  res.json(db.drama.slice(0, 80));
});

app.get("/mistery", (req, res) => {
  res.json(db.mistery.slice(0, 80));
});

app.get("/terror", (req, res) => {
  res.json(db.terror.slice(0, 80));
});

app.get("/fantasy", (req, res) => {
  res.json(db.fantasy.slice(0, 80));
});

app.get("/getall", (req, res) => {
  res.json(allMoviesLowerCase);
});

app.get("/series", (req, res) => {
  res.json(db.series);
});
