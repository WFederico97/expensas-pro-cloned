import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { React } from "react";
import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/navbar/navbar";
import GreetingHeroe from "./components/heroe-greeting/heroe-greeting";
import Footer from "./components/footer/footer";
import Preguntas from "./components/qa/qa";
import Home from "./components/home/home";



function App() {

  return (
    <div className="App ">
      <header className="header container-fluid">
        <NavBar />
        <GreetingHeroe />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preguntas" element={<Preguntas />} />
      </Routes>
      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default App;
