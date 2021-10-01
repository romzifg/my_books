import "./App.css";
import Card from "./components/card/card";
import Form from "./components/form/form";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Card />
      <Card />
      <Card />
      {/* <Form /> */}
    </div>
  );
}

export default App;
