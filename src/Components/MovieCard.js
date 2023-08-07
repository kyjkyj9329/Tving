import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Modal from 'react-modal';

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
  const {genreList} = useSelector((state) => state.movie)
  // console.log("item", item)
  // console.log("genreList", item)
  const onClickCard = () => {
    navigate(`/movies/${item.id}`, { state: { item: item, genreList: genreList } })
  }

  return (
    <div 
      className='card' 
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