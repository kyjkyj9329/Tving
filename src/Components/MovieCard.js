import React, { useEffect } from 'react'
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


const MovieCard = ({ item }) => {
  const navigate = useNavigate();
  
  // const key = "b63dfb72034b5ca111956fae9f1a2a66";

  // const fetchMovie = async() => {
  //   const url = "https://api.themoviedb.org/3/trending/all/week?api_key=" + key + "&language=ko-KR"
  //   const response = await axios.get(url);
  //   console.log("test2", response)
  //   // for(let i=0; i<10; i++) {
  //   //   if (response.data.results[i].title == undefined) {
  //   //     console.log("test1", response.data.results[i].name)
  //   //   }
  //   //   else {
  //   //     console.log("test2", response.data.results[i].title)
  //   //   }
  //   // }
  // }
  // fetchMovie()
  // console.log("id", item.id)
  // const API_KEY = process.env.REACT_APP_API_KEY;
  
  // getMovieImage(item.id);
  // console.log('MovieCard-movieImages', movieImages)

  const {genreList} = useSelector((state) => state.movie)
  // console.log("item", item)
  // console.log("genreList", item)
  // console.log("movieImages", item)
  const onClickCard = () => {
    navigate(`/movies/${item.id}`, { state: { item: item, genreList: genreList } })
  }
  const API_KEY = process.env.REACT_APP_API_KEY;
  const getMovieImage = async() => {
    const url = `https://api.themoviedb.org/3/movie/${item.id}/images?api_key=${API_KEY}`;
    const movieImages = await axios.get(url);
    console.log('MovieSlide-movieImages', movieImages)
  }
  getMovieImage()
  return (
    <div 
      className='card'
      // style={{
      //   backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${movieImages.posters[0].file_path}` + ")" ,
      //   }}
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