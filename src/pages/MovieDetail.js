import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Badge, Button } from 'react-bootstrap';
import Home from './Home';

const MovieDetail = () => {
  const { state, genreList } = useLocation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(true);
  useEffect(() => {
    if (isModalOpen === false) {
      navigate('/');
    }
  })
  return (
    <div>
      {isModalOpen && (
        <>
          <Home />
          <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
            <div className="modal-wrapper">
              <div className="contentContainer">
                <div className="details">
                  <button>X</button>
                  <div
                    className='modal-img'
                    style={{
                    backgroundImage:
                    "URL(" +
                    `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${state.item.poster_path}` +
                    " )",
                    }}
                  >
                  </div>
                  <div>
                    {state.item.genre_ids.map((id) => (
                    <Badge key={id} bg='danger'>{state.genreList.find((item) => item.id === id).name}</Badge>
                    ))}
                  </div>
                  <h1 className='title'>
                    {state.item.title}
                  </h1>
                  <div>
                    <div className='release_date' style={{ color: 'lime'}}>Released Date: {state.item.release_date}</div>
                    <div className='vote_average'>Rating: {state.item.vote_average}⭐</div>
                    <div className='overview'>{state.item.overview}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        )}
    </div>
  )
}

export default MovieDetail
