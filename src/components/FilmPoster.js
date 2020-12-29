import React, { Component } from "react"

class FilmPoster extends Component {
  render() {
    const prefix = "https://image.tmdb.org/t/p/w780"
    return <img src={prefix + this.props.poster} alt="" />
  }
}

export default FilmPoster
