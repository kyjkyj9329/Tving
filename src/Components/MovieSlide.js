import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';
import { useNavigate } from 'react-router-dom';
import api from '../redux/api';
import axios from 'axios';

const responsive = {
  // superLargeDesktop: {
  //   // the naming can be any, depends on you.
  //   breakpoint: { max: 4000, min: 3000 },
  //   items: 5
  // },
  desktop: {
    breakpoint: { max: 3000, min: 1440 },
    items: 7
  },
  laptop: {
    breakpoint: { max: 1440, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};

const MovieSlide = ({ movies, onClickCard }) => {
  // const API_KEY = process.env.REACT_APP_API_KEY;
  // const getMovieImage = async(movieId) => {
  //   // const url = api.get(`movie/${movieId}/images?api_key=${API_KEY}`);
  //   const url = `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${API_KEY}`;
  //   const movieImages = await axios.get(url);
  //   console.log('MovieSlide-movieImages', movieImages)
  // }
  console.log("MovieSlide-movies", movies);
  // console.log("MovieSlide-movieImages", movieImages);
  return (
    <div>
      <Carousel responsive={responsive}>
        {movies.results.map((item) => (
          <MovieCard key={item.id} item={item} onClickCard={onClickCard} />
        ))}
      </Carousel>
    </div>
  )
}

export default MovieSlide