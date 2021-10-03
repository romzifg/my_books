import axios from "axios";

export const GetData = () => {
  return (dispatch) => {
    axios
      .get(`https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/books`)
      .then((result) => {
        const responseApi = result.data;
        dispatch({ type: "GET_DATA_BOOK", payload: responseApi });
        dispatch({ type: "COUNT_DATA_BOOK", payload: responseApi.length });
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
        const resCountry = result.data;
        dispatch({ type: "GET_DATA_COUNTRY", payload: resCountry });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
