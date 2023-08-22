import React, { useEffect, useReducer } from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Modal from 'react-modal';
import api from '../redux/api';
import axios from 'axios';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const initialState = {
  movieImages: {},
}

function movieImageReducer(state = initialState, action) {
  let {type, payload} = action;
  switch(type) {
    case 'GET_MOVIE_IMAGES_REQUEST':
      return {...state}
    case 'GET_MOVIE_IMAGES_SUCCESS' :
      return { 
        ...state, 
        movieImages: payload.movieImages,
      };
    case  'GET_MOVIE_IMAGES_FAILURE' : 
      return {...state}
    default:
      return {...state}
  }
}

const MovieCard = ({ item }) => {
  const navigate = useNavigate();

  const {genreList} = useSelector((state) => state.movie)
  // console.log("item", item)
  // console.log("genreList", item)
  // console.log("movieImages", item)
  const onClickCard = () => {
    navigate(`/movies/${item.id}`, { state: { item: item, genreList: genreList } })
  }

  const [state, dispatch] = useReducer(movieImageReducer, initialState);
  console.log('state', state)
  const API_KEY = process.env.REACT_APP_API_KEY;
  const getMovieImage = () => {
    return async (dispatch) => {
      try {
        dispatch({
          type: 'GET_MOVIE_IMAGES_REQUEST'
        })
        const movieImagesApi = `https://api.themoviedb.org/3/movie/${item.id}/images?api_key=${API_KEY}`;

        let movieImages = await Promise.all(
          movieImagesApi
        );
        console.log('hi')
        console.log('MovieSlide-movieImages', movieImages)
        dispatch({
          type: 'GET_MOVIE_IMAGES_SUCCESS',
          payload: {
            movieImages: movieImages.data,
          }
        })
      } catch (error) {
        dispatch({type: 'GET_MOVIE_IMAGES_FAILURE'})
      }
    }
  }
  getMovieImage()

  // console.log('MovieSlide-movieImages', movieImages)
  // console.log('getMovieImage', getMovieImage());

  return (
    <div 
      className='card'
      // style={{
      //   backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${movieImages.posters[0].file_path}` + ")" ,
      //   }}
      style={{
        backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` + ")" ,
      }}
      onClick={onClickCard}
      >
      <div className='overlay'>
        <h1>{item.title}</h1>
        <div>
          <div className='badge'>
            {item.genre_ids.map((id) => (
              <Badge key={id} bg='danger'>{genreList.find((item) => item.id === id).name}</Badge>
            ))}
          </div>
        </div>
        <div>
          <span>{item.vote_average}</span>
          <span>{item.adult ?  '청불' : 'Under 18'} </span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard