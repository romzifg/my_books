import "./App.css";
import Card from "./components/card/card";
// import Form from "./components/form/form";
import Button from "./components/button/button";
import Gap from "./components/gap/gap";
import Navbar from "./components/navbar/navbar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetData } from "../src/config/redux/action";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(1);
  const { dataBook, page } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetData(counter));
  }, [counter, dispatch]);

  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
  };

  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
  };

  return (
    <div className="container">
      <Navbar />
      {dataBook.map((data) => {
        return (
          <Card
            key={data.id}
            title={data.title}
            author={data.author}
            isbn={data.isbn}
            publishedOn={data.publishedOn}
            numberOfPages={data.numberOfPages}
            country={data.country}
            imageUrl={data.imageUrl}
          />
        );
      })}
      <div className="pagination">
        <Button title="Previous" onClick={previous} />
        <Gap width={20} />
        <p className="text-page">
          {page.currentPage} / {page.totalPage}
        </p>
        <Gap width={25} />
        <Button title="Next" onClick={next} />
      </div>
    </div>
  );
}

export default App;
