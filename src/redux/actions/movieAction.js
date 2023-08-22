import api from "../api"

const API_KEY = process.env.REACT_APP_API_KEY;

function getMovies() {
  return async (dispatch) => {
    try { //정상적으로 데이터가 들어온다는 전제하에서 아래 코드를 실행하라
      dispatch({
        type: 'GET_MOVIES_REQUEST'})
      const popularMovieApi = api.get(`movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
      const topRatedApi = api.get(`movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
      const upComingApi = api.get(`movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
      const genreApi = api.get(`genre/movie/list?api_key=${API_KEY}&language=en-US`);
      // const movie_id = 640146;
      // const movieImageApi = api.get(`movie/${movie_id}/images?api_key=${API_KEY}`);
      
      let [popularMovies, topRatedMovies, upComingMovies, genreList] = await Promise.all([popularMovieApi, topRatedApi, upComingApi, genreApi]);
        // console.log('movieAction-genreList', genreList)
        // console.log('movieAction-movieImages', movieImages)
        console.log('movieAction-popularMovieApi', popularMovies)

      dispatch({
        type: 'GET_MOVIES_SUCCESS',
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upComingMovies: upComingMovies.data,
          genreList: genreList.data.genres,
          // movieImages: movieImages.data,
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