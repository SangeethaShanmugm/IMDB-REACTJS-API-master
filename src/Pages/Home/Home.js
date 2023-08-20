import React, { useEffect, useState } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import Movielist from "../../components/Movielist/Movielist";
import { API } from "../../global";
import Books from "../../components/Books/Books";

function Home() {
  const [popularMovies, setPopularmovies] = useState([]);
  useEffect(() => {
    // fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
    // fetch(`${API}`)
    //   .then((res) => res.json())
    //   .then((data) => setPopularmovies(data.results));
  }, []);

  //   console.log(popularMovies)
  return (
    <>
      <div className="poster">
        <h1>BookList</h1>
        <Books />
        {/* <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={5}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt={""}
                />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="posterImage__runtime">
                  {movie ? movie.release_date : ""}
                  <span className="posterImage__rating">
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star" />{" "}
                  </span>
                </div>
                <div className="posterImage__description">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel> */}
        {/* <Movielist /> */}
      </div>
    </>
  );
}
export default Home;
