import api from "../api"

const API_KEY = process.env.REACT_APP_API_KEY;
// const movie_id = 640146;

function getMovies() {
  return async (dispatch) => {
    try { //정상적으로 데이터가 들어온다는 전제하에서 아래 코드를 실행하라
      dispatch({
        type: 'GET_MOVIES_REQUEST'})
      const movieImageApi = api.get(`movie/${movie_id}/images?api_key=${API_KEY}`);
      
      let [movieImages] = await Promise.all([movieImageApi]);
        // console.log('movieAction-genreList', genreList)
        // console.log('movieAction-movieImages', movieImages)

      dispatch({
        type: 'GET_MOVIES_SUCCESS',
        payload: {
          movieImages: movieImages.data,
        }
      })
    } catch (error) {
      dispatch({type: 'GET_MOVIE_FAILURE'})
    }

  }
}

export const movieAction = {
  getMovies,
}