import "./Movielist.css";
import React, { useEffect, useState } from "react";
import Cards from "../Card/Card";
import { useParams } from "react-router-dom";
import { API } from "../../global";

function Movielist() {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    // fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
    // fetch(`${API}`)
    //   .then((res) => res.json())
    //   .then((data) => setMovieList(data.results));
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "Popular").toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Cards movie={movie} />
        ))}
      </div>
    </div>
  );
}
export default Movielist;
