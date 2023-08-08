import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Badge, Button } from 'react-bootstrap';
import Home from './Home';

const MovieDetail = () => {
  const { state, genreList } = useLocation();
  const navigate = useNavigate();
  // const [isModalOpen, setIsModalOpen] = useState(true);
  // useEffect(() => {
  //   if (isModalOpen === false) {
  //     navigate('/');
  //   }
  // })
  return (
    <div className='MovieDetail'>
      <div className="content">
        <h1 className='title'>
          {state.item.title}
        </h1>
        <div className='genre'>
          {state.item.genre_ids.map((id) => (
          <Badge key={id} bg='danger'>{state.genreList.find((item) => item.id === id).name}</Badge>
          ))}
        </div>
        
        <div>
          <div className='release_date' style={{ color: 'lime'}}>Released Date: {state.item.release_date}</div>
          <div className='vote_average'>Rating: {state.item.vote_average}⭐</div>
          <div className='overview'>{state.item.overview}</div>
        </div>
      </div>
      <img
        className='detailImg'
        src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${state.item.poster_path}`}
      />
    </div>
  )
}

export default MovieDetail
