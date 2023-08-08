import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import { useState, CSSProperties } from "react";
import { ClipLoader } from "react-spinners";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } = useSelector(
    (state) => state.movie
  );
  console.log("home", popularMovies);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  
  // loading이 true면 loading 스피너를 보여주고 
  // loading이 false면 데이터를 보여줌
  // true: 데이터 도착하기 전
  // false: 데이터 도착 후 

  if (loading) {
    return (
      <div className="loader">
        <ClipLoader color="#fff" loading={loading} size={150} />
      </div>
    ) 
  }
  return (
    <div className="slide">
      {popularMovies.results && <Banner movie={popularMovies.results[0]} />}
      <h1>실시간 인기 프로그램</h1>
      <MovieSlide movies={popularMovies} />
      <h1>티빙 TOP 20 프로그램</h1>
      <MovieSlide movies={topRatedMovies} />
      <h1>최신 방영 영화</h1>
      <MovieSlide movies={upComingMovies} />
    </div>
  );
};

export default Home;