const initialState = {
  form: {
    title: "",
    author: "",
    isbn: "",
    publishedOn: "",
    numberOfPage: "",
    countryPublisher: "",
  },
};

const createBookReducer = (state = initialState, action) => {
  if (action.type === "SET_FORM_BOOK") {
    return {
      ...state,
      form: {
        ...state.form,
        [action.formType]: action.formValue,
      },
    };
  }
  return state;
};

export default createBookReducer;
