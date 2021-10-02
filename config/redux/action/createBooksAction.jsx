import axios from "axios";
import env from "react-dotenv";

export const setForm = (formType, formValue) => {
  return { type: "SET_FORM_BOOK", formType, formValue };
};

export const postToAPI = (form) => {
  const data = new FormData();
  data.append("title", form.title);
  data.append("author", form.author);
  data.append("isbn", form.isbn);
  data.append("publishedOn", form.publishedOn);
  data.append("numberOfPage", form.numberOfPage);
  data.append("countryPublisher", form.countryPublisher);

  axios
    .post(env.BOOKS_API, data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log("Post Success", res);
    })
    .catch((err) => {
      console.log(err);
    });
};
