import React from "react"
import "./App.css"
import FilmListing from "./components/FilmListing"
import FilmDetails from "./components/FilmDetails"
import TMDB from "./TMDB"

function App() {
  return (
    <div className="film-library">
      <FilmListing films={TMDB.films} />
      <FilmDetails films={TMDB.films} />
    </div>
  )
}

export default App
