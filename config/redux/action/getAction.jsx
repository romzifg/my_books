import axios from "axios";
import env from "react-dotenv";

export const GetData = (page) => {
  return (dispatch) => {
    axios
      .get(`${env.BOOKS_API}?page=${page}&perPage=2`)
      .then((result) => {
        const responseApi = result.data;
        dispatch({ type: "GET_DATA_BOOK", payload: responseApi.data });
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
      .get(env.COUNTRY_API)
      .then((result) => {
        const country = result.data;
        dispatch({ type: "UPDATE_DATA_COUNTRY", payload: country.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
