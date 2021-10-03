import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/card";
import Form from "./components/form/form";
import Button from "./components/button/button";
import Gap from "./components/gap/gap";
import Navbar from "./components/navbar/navbar";
import { useDispatch, useSelector } from "react-redux";
import { GetData } from "../src/config/redux/action";
import Modal from "react-modal";

function App() {
  const { dataBook, countData } = useSelector((state) => state.homeReducer);
  const [visible, setVisible] = useState(3);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 2);
  };

  useEffect(() => {
    dispatch(GetData());
  }, [dispatch]);

  return (
    <div className="container">
      <Navbar />
      <Gap height={25} />
      <div className="header-menu">
        <p className="count-book">
          <strong>Books </strong> ({countData})
        </p>
        <Button title="Add +" onClick={() => setModalIsOpen(true)} />
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{ overlay: { backgroundColor: "grey" } }}
        >
          <Form onClick={() => setModalIsOpen(false)} />
        </Modal>
      </div>
      {dataBook.slice(0, visible).map((data) => {
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
        <Button title="Load More" onClick={showMoreItems} />
      </div>
      <Gap height={25} />
    </div>
  );
}

export default App;
