import React, { useState } from "react";
import "./styles.css";
const movieDb = {
  Action: [
    { name: "Tenet", rating: "5/5" },
    { name: "Avengers: Endgame", rating: "5/5" },
    { name: "Spider-Man: Far from Home", rating: "4.5/5" }
  ],

  Horror: [
    { name: "The Haunting of Hill House", rating: "5/5" },
    {
      name: "The Haunting of Bly Manor",
      rating: "4.5/5"
    },
    {
      name: "Nun",
      rating: "4/5"
    }
  ],
  ScienceFiction: [
    {
      name: "Avengers: Endgame",
      rating: "5/5"
    },
    {
      name: "Ready Player One",
      rating: "4/5"
    },
    {
      name: "Passengers",
      rating: "4/5"
    }
  ]
};
var lstDb = Object.keys(movieDb);
export default function App() {
  var [movies, setMovies] = useState("Action");
  function showMovies(genre) {
    setMovies(genre);
  }
  return (
    <div className="App">
      <header>
        <h1>
          Moviflix <span>🎬</span>
        </h1>
        <br />
        <h3>Explore Movies and TV shows</h3>
      </header>
      <main>
        <div className="genre">
          {lstDb.map((item) => {
            return <span onClick={() => showMovies(item)}>{item}</span>;
          })}
        </div>
        {movieDb[movies].map((item) => (
          <div className="movieList" key={item.name}>
            <div style={{ fontSize: "larger" }}>{item.name}</div>
            <div>Rating: {item.rating}</div>
          </div>
        ))}
      </main>
    </div>
  );
}
