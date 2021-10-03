const initialStateHome = {
  dataBook: [],
  page: {
    currentPage: 1,
    totalPage: 1,
  },
};

const homeReducer = (state = initialStateHome, action) => {
  if (action.type === "GET_DATA_BOOK") {
    return {
      ...state,
      dataBook: action.payload,
    };
  }

  if (action.type === "UPDATE_PAGE") {
    return {
      ...state,
      page: action.payload,
    };
  }

  if (action.type === "UPDATE_DATA_COUNTRY") {
    return {
      ...state,
      country: action.payload,
    };
  }
  return state;
};

export default homeReducer;
