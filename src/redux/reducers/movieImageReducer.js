let initialState = {
  movieImages: {},
};

function movieReducer(state = initialState, action) {
  let {type, payload} = action;
  switch(type) {
    case 'GET_MOVIES_REQUEST':
      return {...state, loading: true }
    case 'GET_MOVIES_SUCCESS' :
      return { 
        ...state, 
        movieImages: payload.movieImages,
      };
    case  'GET_MOVIE_FAILURE' : 
      return {...state, loading: false}
    default:
      return {...state}
  }
}

export default movieReducer