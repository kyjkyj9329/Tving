let initialState = {
  contact: [],
  keyword: '',
};

const searchReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch(type) {
    case "ADD_CONTACT":
        state.contact.push({
          name: payload.name,
          phoneNumber: payload.phoneNumber,
        });
        break;
    case "SEARCH_BY_USERNAME":
      state.keyword = payload.keyword;
      break;
  }
  return {...state};
};

export default searchReducer;