const initialStateHome = {
  dataBook: [],
  dataCountry: [],
};

const homeReducer = (state = initialStateHome, action) => {
  if (action.type === "GET_DATA_BOOK") {
    return {
      ...state,
      dataBook: action.payload,
    };
  }

  if (action.type === "COUNT_DATA_BOOK") {
    return {
      ...state,
      countData: action.payload,
    };
  }

  if (action.type === "GET_DATA_COUNTRY") {
    return {
      ...state,
      dataCountry: action.payload,
    };
  }
  return state;
};

export default homeReducer;
