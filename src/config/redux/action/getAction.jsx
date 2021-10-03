import axios from "axios";

export const GetData = (page) => {
  return (dispatch) => {
    axios
      .get(
        `https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/books?page=${page}&perPage=5`
      )
      .then((result) => {
        const responseApi = result.data;
        console.log(responseApi);
        dispatch({ type: "GET_DATA_BOOK", payload: responseApi });
        dispatch({
          type: "UPDATE_PAGE",
          payload: {
            currentPage: responseApi.current_page,
            totalPage: Math.ceil(responseApi.total_data / responseApi.per_page),
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const GetCountry = () => {
  return (dispatch) => {
    axios
      .get("https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/countries")
      .then((result) => {
        const country = result.data;
        dispatch({ type: "UPDATE_DATA_COUNTRY", payload: country });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
