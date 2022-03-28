import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Products from "./Components/Products";
import { Login } from "./Components/Login";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <br />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
