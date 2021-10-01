import "./App.css";
import Card from "./components/card/card";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
